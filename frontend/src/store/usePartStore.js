import { create } from 'zustand';

const usePartStore = create((set) => ({
    addedParts: [],
    addPart: (part) =>
      set((state) => {
        if (!state.addedParts.some((p) => p._id === part._id)) {
          return { addedParts: [...state.addedParts, part] };
        }
        return state; // No update if the part is already in the array
      }),
    removePart: (id) =>
      set((state) => ({
        addedParts: state.addedParts.filter((p) => p._id !== id),
      })),
  }));
  

export default usePartStore;
