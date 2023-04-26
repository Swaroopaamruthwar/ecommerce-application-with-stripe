import styled from "styled-components";
import ProductList from "../components/ProductList";


const Products = () => {
  return (
    <section>
      <div className="container grid grid-filter-column">
        <section className="product-view--sort">
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </section>
  );
};


export default Products;
