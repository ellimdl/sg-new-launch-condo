import React from "react";
export default function SearchForm({filterCondo}) {

  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCondo() {
    // setSearchTerm(searchValue.current.value);
    filterCondo(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite district</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCondo}
          />
        </div>
      </form>
    </section>
  );
}
