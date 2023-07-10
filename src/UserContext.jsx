import { createContext, useState } from "react";

export const UserContext = createContext();
export const MyContextProvider = ({ children }) => {
  const [datax, setData] = useState({
    search: "",
    lowtemp: "",
    hightemp: "",
  }); // Initialize the data state

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <UserContext.Provider value={{ datax, updateData }}>
      {children}
    </UserContext.Provider>
  );
};