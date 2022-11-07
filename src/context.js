import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import results from "./results";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("01");
  const [condos, setCondos] = useState(results);

  const fetchElements = useCallback(() => {
    setLoading(true);
    const data = results.filter(
      (element) => parseInt(element.district) === searchTerm
    );
    console.log(data);
    if (data.length > 1) {
      const newCondos = data;
      setCondos(results);
      console.log(`newCondos: ${newCondos}`);
    } else {
      setCondos(results);
    }
    setLoading(false);
    console.log("condos", condos);
  });
  useEffect(() => {
    fetchElements();
  }, [searchTerm, fetchElements]);
  return (
    <AppContext.Provider value={{ loading, condos, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

// const data = results.filter(
//   (element) => parseInt(element.district) === searchTerm
// );
