import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <h4
        style={{
          textTransform: "none",
          marginTop: "2rem",
        }}
      >
        Sorry, no products matched you search...
      </h4>
    );
  }
  if (!grid_view) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>grid view</GridView>;
};

export default ProductList;
