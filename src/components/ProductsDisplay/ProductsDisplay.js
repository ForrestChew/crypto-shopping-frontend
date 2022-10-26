import { useProductsManager } from "./useProductsManager";
import Card from "../Card/Card";
import Pagination from "./Pagination/Pagination";
import "./ProductsDisplay.css";

const ProductsDisplay = () => {
  const { products, isLoading, pageNumbers, paginate, queryStr } =
    useProductsManager();

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <h2 id="title">Results for: {queryStr || "Products"}</h2>
          <section className="item-grid">
            {products.map((product) => {
              return <Card key={product.id} productInfo={product} />;
            })}
          </section>
          <section>
            <Pagination pageNumbers={pageNumbers} paginate={paginate} />
          </section>
        </>
      )}
    </>
  );
};

export default ProductsDisplay;
