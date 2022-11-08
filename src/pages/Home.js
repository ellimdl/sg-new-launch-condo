import React, {useState, useEffect} from "react";
import CondoList from "../components/CondoList";
import SearchForm from "../components/SearchForm";
import results from "../results";

export default function Home() {

  const [fullDataSet] = useState(results); // load full dataset
  const [filtered, setFiltered] = useState([]); // store filtered dataset

  // on submit to filter
  const filterCondo = (searchTerm) => {
    console.log("full dataset", fullDataSet);
    console.log("filterCondo", searchTerm);

    // if "1" received, add "0" in front of it, else return as it is.
    searchTerm = searchTerm.length === 1 ? "0"+searchTerm : searchTerm;

    const data = fullDataSet.filter(
      (element) => element.district === searchTerm
    );
    console.log('filtered data', data);
    setFiltered(data);
  }

  return (
    <main>
      <SearchForm filterCondo={filterCondo} />
      <CondoList condos={filtered}/>
    </main>
  );
}
