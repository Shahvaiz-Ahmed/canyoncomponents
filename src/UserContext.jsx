import { createContext } from "react";

export const UserContext = createContext();
export const MyContextProvider = ({ children }) => {
  const [datax, setData] = useState({
    search: "",
    lowtemp: "",
    hightemp: "",
    color:"",
    Material:"",
    Compliance: "",
    MaterialSubtype: "",
    Brand: "",
    Hardness: ""
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
export const UserContext = createContext(null)
