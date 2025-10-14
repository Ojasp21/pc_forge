import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const generateToken = (userId, res) => {

    const token = jwt.sign({userId}, process.env.JWT_SECRET, 
        {expiresIn: "7d"});

    res.cookie("pcjwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, 
        httpOnly: true,
        sameSite: "none",
        secure: process.env.NODE_ENV !== "development",
    });
    console.log("cookie generated: ", token)
    return token;
};


export const signup = async (req, res) => {
    // console.log(req.body); //debugging
    const {fullName, email, password} = req.body;
    try {
        if(!fullName || !email || !password) {
            return res.status(400).json({message: "Please fill in all fields."});
        }
        if (password.length < 6) {
            return res.status(400).json({message: "Password must be at least 6 characters."});
        }
        const user = await User.findOne({email});
        if (user) return res.status(400).json({message: "Email already exists."});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });
        if(newUser){
            //generate jwt token here
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,   
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({message: "Invalid user data."});
        }
    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({message: "Something went wrong."});
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({message: "Invalid credentials."});
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid credentials."});
        }

        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        });
        console.log("authUser sent after login :", user)

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({message: "Something went wrong."});
    }
};

// export const logout = (req, res) => {
//     try {
//         res.cookie("pcjwt", "", {maxAge: 0});
//         res.status(200).json({message: "Logged out successfully."})
//     } catch(error) {
//         console.log("Error in logout controller", error.message);
//         res.status(500).json({message:"Internal Server Error"}); 
//     }
// };
export const logout = (req, res) => {
  try {
    res.clearCookie("pcjwt", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/", // important: must match the path used when setting the cookie
    });
    res.status(200).json({ message: "Logged out successfully." });
  } catch (error) {
    console.log("Error in logout controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
};

