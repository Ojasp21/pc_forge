import { createContext, useContext, useState } from 'react';

const PartsContext = createContext();

export const useParts = () => useContext(PartsContext);

export const PartsProvider = ({ children }) => {
  const [addedParts, setAddedParts] = useState([]);

  const addPart = (part) => {
    if (!addedParts.find((p) => p._id === part._id)) {
      setAddedParts((prev) => [...prev, part]);
    }
  };

  const removePart = (partId) => {
    setAddedParts((prev) => prev.filter((p) => p._id !== partId));
  };

  return (
    <PartsContext.Provider value={{ addedParts, addPart, removePart }}>
      {children}
    </PartsContext.Provider>
  );
};
