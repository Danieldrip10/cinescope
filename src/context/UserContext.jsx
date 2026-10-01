import { useContext, createContext } from "react";
import mypic from "../assets/profilepic.jpeg";

const nameProvider = createContext();

export function NameContext({ children }) {
  const UseName = "Daniels";
  const Email = "akaniyene@gmail.com";
  const UserPic = mypic;

  return (
    <nameProvider.Provider value={{ UseName, UserPic, Email }}>
      {children}
    </nameProvider.Provider>
  );
}

export function UseNameContext() {
  const context = useContext(nameProvider);

  if (!context) throw new Error("component must be inside of name context");
  return context;
}
