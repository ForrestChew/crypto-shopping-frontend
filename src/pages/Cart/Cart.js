import { useCart } from "./useCart";
import {
  cartPriceIncludingTax,
  priceToTopDealPrice,
  numToPrice,
} from "../../utils";
import "./Cart.css";
const Cart = () => {
  const { cartItems, totalCartPrice, multiplyByQuantity } = useCart();
  return (
    <>
      <section className="cart-container">
        <table className="cart-container__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              return (
                <tr key={item.id} className="cart-contianer__entry">
                  <td>{item.title}</td>
                  <td>
                    {item.is_top_deal
                      ? priceToTopDealPrice(item.price)
                      : item.price}
                  </td>
                  <td>{item.product_quantity}</td>
                  <td>{item.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section>
        <h3>{numToPrice(totalCartPrice)} Total</h3>
        <h2>
          {cartPriceIncludingTax(totalCartPrice)} <em>(with 8% tax)</em>
        </h2>
        <button className="btn">Place Order</button>
      </section>
    </>
  );
};

export default Cart;
