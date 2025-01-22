import { create } from "zustand"
import axiosInstance from "../axiosInstance";

import toast from "react-hot-toast";

export const useAuthStore = create((set)=>({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try { 
            const res = await axiosInstance.get('/auth/check', {withCredentials: true,});

            set({authUser: res.data});

        } catch(error) {
            set({authUser: null});
            console.log("Error in checkAuth: ",error);
        } finally {
            set({isCheckingAuth: false});
        }
    },

    signup: async (data)  => {
        set({isSigningUp: true});
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({authUser: res.data});
            toast.success("Account created successfully");

        } catch (error) {
            toast.error(error.response.data.message);5
        }
        finally {
            set({isSigningUp: false});
        }
    },

    logout: async () => {
        try {
            axiosInstance.post("/auth/logout");
            set({authUser: null});
            toast.success("Logged out successfully");

        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    login : async (data) => {
        set({isLoggingIn: true});
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({authUser: res.data});
            toast.success("Logged in successfully");

        } catch (error) {
            toast.error(error.response.data.message);
        } finally{
            set({isLoggingIn: false});
        }
    }
}))

