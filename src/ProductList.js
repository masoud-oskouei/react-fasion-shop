import { Component } from "react";
import Product from "./Product.js";
import products from "./stocks.js";
class ProductList extends Component {
  render() {
    // create a deep copy of the products array into "results".
    // The program works on "results" array and shows it on the screen,
    // so the original array remains intact.
    let results = JSON.parse(JSON.stringify(products));

    // --Filtering:
    // if the filterTerm is anything other than "all", the below code
    // will keep only the "product"s that their category is found in the filterTerm
    if (this.props.filterTerm !== "all") {
      results = results.filter((product) => {
        return this.props.filterTerm.includes(product.category);
      });
    }

    // -- Searching:
    // Filter the products that their name includes the searchTerm
    // and/or their description includes the searchTerm
    results = results.filter((product) => {
      return (
        product.name
          .toLowerCase()
          .includes(this.props.searchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(this.props.searchTerm.toLowerCase())
      );
    });

    //--Sorting:
    // If the priceOrder is "asc" or "desc", the below code sorts the results accordingly.
    if (this.props.priceOrder !== "") {
      results.sort((a, b) => {
        let order = this.props.priceOrder === "asc" ? 1 : -1;
        return order * (a.price - b.price); // "order" is +1 for ascending order.
      });
    }

    // This final map() creates the list of "Product" components
    // so the "Products" component is in fact an array of components.
    return results.map((item) => <Product item={item} />);
  }
}
export default ProductList;
