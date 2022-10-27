import { useState, useEffect, useContext } from "react";
import { getCartItems } from "../../api/gets";
import { UserContext } from "../../contexts/UserProvider";

export const useCart = () => {
  const [user] = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await getCartItems(user.userId);
      setCartItems(response);
    })();
  }, []);

  useEffect(() => {
    cartItems.forEach((item) => {
      if (item.is_top_deal) {
        setTotalCartPrice(
          (totalCartPrice) =>
            totalCartPrice +
            multiplyByQuantity(
              (item.price * 0.8).toFixed(2),
              item.product_quantity
            )
        );
      } else {
        setTotalCartPrice(
          (totalCartPrice) =>
            totalCartPrice +
            multiplyByQuantity(item.price.toFixed(2), item.product_quantity)
        );
      }
    });
  }, [setCartItems, cartItems]);

  const multiplyByQuantity = (price, qty) => {
    return price * qty;
  };

  return { cartItems, totalCartPrice };
};
