import React from "react";
import CondoList from "../components/CondoList";
import SearchForm from "../components/SearchForm";
export default function Home() {
  return (
    <main>
      <SearchForm />
      <CondoList />
    </main>
  );
}
