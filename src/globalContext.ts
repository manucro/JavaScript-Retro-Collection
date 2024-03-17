import { createContext, useContext } from "react";
export interface GlobalContextType {
  setModal: (_: [boolean, string]) => void
}
export const GlobalContext = createContext<GlobalContextType>({
  setModal: (_) => void 0
});
export const useGlobalContext = () => useContext(GlobalContext);