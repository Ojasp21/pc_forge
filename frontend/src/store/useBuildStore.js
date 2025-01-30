// import { create } from "zustand";
// import axiosInstance from "../axiosInstance";
// import toast from "react-hot-toast";
// import { useAuthStore } from "./useAuthStore.js"
// const useBuildStore = create((set, get) => ({
//   addedParts: [],

// //   fetchBuild: async () => {
// //     const authUser = useAuthStore.getState().authUser;
// //     if (!authUser) return; // No backend sync for non-auth users

// //     try {
// //       const response = await axiosInstance.get("/build");
// //       set({ addedParts: response.data?.parts || [] }); // Fix: Handle empty response
// //     } catch (error) {
// //       console.error("Error fetching build:", error);
// //     }
// //   },
// fetchBuild: async () => {
//     const authUser = useAuthStore.getState().authUser;
//     if (!authUser) return; // No backend sync for non-auth users

//     try {
//         const response = await axiosInstance.get("/build");

//     } catch (error) {
//         console.error("Error fetching build:", error);
//     }
// },


//   addPart: async (part) => {
//     const { addedParts } = get();
//     const authUser = useAuthStore.getState().authUser;

//     // Check if another part from the same category exists
//     if (addedParts.some((p) => p.category === part.category)) {
//       toast.error(`Only one part per category is allowed.`);
//       return;
//     }

//     if (authUser) {
//       try {
//         await axiosInstance.post("/build/add", { partId: part._id });
//       } catch (error) {
//         console.error("Error adding part:", error);
//         return;
//       }
//     }

//     // Update local state
//     set((state) => ({ addedParts: [...state.addedParts, part] }));
//   },

//   removePart: async (partId) => {
//     const authUser = useAuthStore.getState().authUser;

//     if (authUser) {
//       try {
//         await axiosInstance.post("/build/remove", { partId }); // Fix: Correct API call
//       } catch (error) {
//         console.error("Error removing part:", error);
//         return;
//       }
//     }

//     // Always update local state
//     set((state) => ({
//       addedParts: state.addedParts.filter((part) => part._id !== partId),
//     }));
//   },

//   resetBuild: async () => {
//     const authUser = useAuthStore.getState().authUser;

//     if (authUser) {
//       try {
//         await axiosInstance.delete("/build/reset");
//       } catch (error) {
//         console.error("Error resetting build:", error);
//         return;
//       }
//     }

//     set({ addedParts: [] });
//   },
// }));

// export default useBuildStore;

import { create } from "zustand";
import axiosInstance from "../axiosInstance";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore.js"

const useBuildStore = create((set, get) => ({
  addedParts: [],
  isLoading: false,
  error: null,

  fetchBuild: async () => {
    const authUser = useAuthStore.getState().authUser;
    if (!authUser) return;

    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/build");
      // Set addedParts from the populated parts array
      set({ 
        addedParts: response.data?.parts || [],
        isLoading: false 
      });
    } catch (error) {
      console.error("Error fetching build:", error);
      set({ 
        error: "Failed to fetch build",
        isLoading: false 
      });
      toast.error("Failed to fetch your build");
    }
  },

  addPart: async (part) => {
    const { addedParts } = get();
    const authUser = useAuthStore.getState().authUser;

    // Check if another part from the same category exists
    if (addedParts.some((p) => p.category === part.category)) {
      toast.error(`Only one ${part.category} per build is allowed`);
      return;
    }

    if (authUser) {
      try {
        const response = await axiosInstance.post("/build/add", { partId: part._id });
        // Update state with the populated response from backend
        set({ addedParts: response.data.parts });
        toast.success(`Added ${part.title} to your build`);
      } catch (error) {
        console.error("Error adding part:", error);
        toast.error(error.response?.data?.message || "Failed to add part");
        return;
      }
    } else {
      // For non-authenticated users, just update local state
      set((state) => ({ addedParts: [...state.addedParts, part] }));
      toast.success(`Added ${part.title} to your build`);
    }
  },

  removePart: async (partId) => {
    const authUser = useAuthStore.getState().authUser;
    const { addedParts } = get();
    
    // Find the part title for the toast message
    const removedPart = addedParts.find(part => part._id === partId);

    if (authUser) {
      try {
        const response = await axiosInstance.post("/build/remove", { partId });
        // Update state with the populated response from backend
        set({ addedParts: response.data.parts });
        toast.success(`Removed ${removedPart?.title || 'part'} from your build`);
      } catch (error) {
        console.error("Error removing part:", error);
        toast.error("Failed to remove part");
        return;
      }
    } else {
      // For non-authenticated users, just update local state
      set((state) => ({
        addedParts: state.addedParts.filter((part) => part._id !== partId)
      }));
      toast.success(`Removed ${removedPart?.title || 'part'} from your build`);
    }
  },

  resetBuild: async () => {
    const authUser = useAuthStore.getState().authUser;

    if (authUser) {
      try {
        await axiosInstance.delete("/build/reset");
        set({ addedParts: [] });
        toast.success("Build reset successfully");
      } catch (error) {
        console.error("Error resetting build:", error);
        toast.error("Failed to reset build");
        return;
      }
    } else {
      set({ addedParts: [] });
      toast.success("Build reset successfully");
    }
  },

  // Helper method to check if a category is already in the build
  hasCategoryInBuild: (category) => {
    const { addedParts } = get();
    return addedParts.some((part) => part.category === category);
  }
}));

export default useBuildStore;