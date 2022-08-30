import React, { Component } from "react";
import colors from "./pallet.js";
class Product extends Component {
  colorize() {
    this.colorIndex =
      this.props.item.description.charCodeAt(10) +
      this.props.item.description.charCodeAt(11);
    this.colorIndex = this.colorIndex % 6;
    console.log(this.colorIndex);
  }

  render() {
    this.colorize();
    return (
      <div
        style={{
          backgroundColor: `${colors[this.colorIndex]}`,
        }}
      >
        <h2 style={{ textTransform: "capitalize" }}>{this.props.item.name}</h2>
        <p>
          <sup>
            <i> Category: {this.props.item.category} </i>
          </sup>
        </p>
        <p>{this.props.item.description}</p>
        <p>
          Price: <b>${this.props.item.price}</b>
          <hr />
        </p>
      </div>
    );
  }
}
export default Product;
