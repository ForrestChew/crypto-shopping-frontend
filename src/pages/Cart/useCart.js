import { useState, useEffect, useContext } from "react";
import { getCartItems } from "../../api/gets";
import { deleteCartItem } from "../../api/deletes";
import { getCartTotalPrice } from "../../api/gets";
import { UserContext } from "../../contexts/UserProvider";

export const useCart = () => {
  const [user] = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const removeCartItem = async (productId) => {
    await deleteCartItem(productId);
  };

  useEffect(() => {
    (async () => {
      const getItemsResponse = await getCartItems(user.userId);
      setCartItems(getItemsResponse);
      const getItemsPriceresponse = await getCartTotalPrice();
      setTotalCartPrice(getItemsPriceresponse);
    })();
  }, [cartItems]);

  return { cartItems, totalCartPrice, removeCartItem };
};
