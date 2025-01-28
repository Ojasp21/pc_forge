import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (!formData.password) {
      toast.error("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      signup(formData);
    }
  };

  return (
    <>
    <img className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1] opacity-50" src="/src/images/Loginbg.jpg" alt="" />
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gray-300 shadow-lg rounded-lg px-8 py-6 w-full max-w-md bg-opacity-80">
        <h1 className="text-2xl font-bold mb-4 text-gray-700 flex justify-center mt-3">
          Create Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="text-black font-medium w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
          <div className="form-control">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="form-control mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSigningUp}
          >
            {isSigningUp ? "Creating Account..." : "Create Account"}
          </button>
        </form>
        <div className="mt-4 text-gray-600 mb-3">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUpPage;







// import { useState } from "react";
// import { useAuthStore } from "../store/useAuthStore";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom";

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const { signup, isSigningUp } = useAuthStore();

//   const validateForm = () => {
//     if (!formData.fullName.trim()) {
//       toast.error("Full name is required");
//       return false;
//     }
//     if (!formData.email.trim()) {
//       toast.error("Email is required");
//       return false;
//     }
//     if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       toast.error("Invalid email format");
//       return false;
//     }
//     if (!formData.password) {
//       toast.error("Password is required");
//       return false;
//     }
//     if (formData.password.length < 6) {
//       toast.error("Password must be at least 6 characters");
//       return false;
//     }

//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       signup(formData);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-50">
//       <div className="w-full max-w-md  p-8 rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center mb-6 ">Create Account</h1>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="form-control">
//             <label className="label font-medium">Full Name</label>
//             <input
//               type="text"
//               className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800"
//               placeholder="John Doe"
//               value={formData.fullName}
//               onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//             />
//           </div>

//           <div className="form-control">
//             <label className="label font-medium">Email</label>
//             <input
//               type="email"
//               className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800"
//               placeholder="you@example.com"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             />
//           </div>

//           <div className="form-control">
//             <label className="label font-medium">Password</label>
//             <input
//               type="password"
//               className="input input-bordered w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800"
//               placeholder="••••••••"
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             />
//           </div>

//           <button
//             type="submit"
//             className="btn btn-primary w-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
//             disabled={isSigningUp}
//           >
//             {isSigningUp ? "Creating Account..." : "Create Account"}
//           </button>
//         </form>

//         <div className="text-center mt-4">
//           <p className="text-gray-600">
//             Already have an account? {" "}
//             <Link to='/login'>

//             <a  className="text-blue-500 hover:underline">
//               Sign in
//             </a>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;