import React, { Component } from "react";
import ProductList from "./ProductList.js";

/**
 * The "Products" is a list of Product Components.
 * The Product component lives outside the "App.js" in its own .js file and is imported
 * in App.js.
 * The filtering, sorting, and searching functionalities are processed here in "Products".
 * The "Products" receives three props needed for the above functionalities.
 */

/**
 * The "App" component contains the overall design of app elements.
 * also the listeners live here.
 * Where the listener was one-line, it is written in-line and
 * where the listener was more than one line, a function outside of the component was used.
 */
class App extends Component {
  state = { filter: "all", searchTerm: "", priceOrder: "" };

  searchFunc(e) {
    e.preventDefault();
    let elSearchInput = document.getElementById("searchInput");
    this.setState({ searchTerm: elSearchInput.value });
  }

  render() {
    return (
      <div style={{ margin: "1em" }}>
        <h1>➰ THE VERY GOOD FASION SHOP ➰ </h1>
        <b>Filters: </b>
        <button
          onClick={() => {
            this.setState({ filter: "shirts" });
          }}
        >
          Shirts
        </button>
        <span> </span>
        <button
          onClick={() => {
            this.setState({ filter: "jackets" });
          }}
        >
          Jackets
        </button>{" "}
        <span> </span>
        <button
          onClick={() => {
            this.setState({ filter: "pants skirts" });
          }}
        >
          Pants &amp; Skirts
        </button>{" "}
        <span> </span>
        <button
          onClick={() => {
            this.setState({ filter: "all" });
          }}
        >
          All
        </button>
        <p></p>
        <b>Search: </b>
        {/* 


          * For searching functionality: the text-input field when changed, 
          * changes the state and then
          * again because its "value" attribute is filled with state, 
          * the state gets written inside text-input. 
          * So in a sense the text-input here works "both ways", 
          * i.e. the state mirrors the component then the component mirrors the state.
          * The beauty is that the list gets updated while the user is typing.
         */}
        <input
          type="search"
          onChange={(e) => {
            this.searchFunc(e);
          }}
          value={this.state.searchTerm}
          id="searchInput"
        ></input>
        <span> </span>
        <button
          onClick={() => {
            this.setState({ searchTerm: "" });
          }}
        >
          Reset last search
        </button>
        <p></p>
        <b>Order by price: </b>
        <button
          onClick={() => {
            this.setState({ priceOrder: "asc" });
          }}
        >
          ▲
        </button>
        <button
          onClick={() => {
            this.setState({ priceOrder: "desc" });
          }}
        >
          ▼
        </button>
        <ProductList
          filterTerm={this.state.filter}
          searchTerm={this.state.searchTerm}
          priceOrder={this.state.priceOrder}
        />
      </div>
    );
  }
}

export default App;
