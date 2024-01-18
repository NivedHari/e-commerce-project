import { useState, useContext, useEffect } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";
import axios from "axios";

const CartProvider = (props) => {
  const [items, updatedItems] = useState([]);
  const authCtx = useContext(AuthContext);
  const useremail = authCtx.email;
  const isLoggedIn = authCtx.isLoggedIn;

  const getItems = async () => {
    try {
      const response = await axios.get(
        `https://crudcrud.com/api/63dab6d4b4074cceacb634131635a938/${useremail}`
      );

      updatedItems(response.data);
    } catch (error) {
      console.error("Error retrieving cart items:", error);
    }
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      updatedItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getItems();
    } else {
      updatedItems([]);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  const addItemToCartHandler = async (item) => {
    const updatedItemsArray = [...items];
    let url = `https://crudcrud.com/api/63dab6d4b4074cceacb634131635a938/${useremail}`;
    const existingItemIndex = updatedItemsArray.findIndex(
      (existingItem) => existingItem.title === item.title
    );

    if (existingItemIndex !== -1) {
      updatedItemsArray[existingItemIndex].amount += Number(item.amount);

      try {
        const itemIdToUpdate = updatedItemsArray[existingItemIndex]._id;
        const updatedItem = {
          title: item.title,
          imageUrl: item.imageUrl,
          price: item.price,
          amount: updatedItemsArray[existingItemIndex].amount,
        };

        await axios.put(`${url}/${itemIdToUpdate}`, updatedItem);
        console.log(url);
        console.log(itemIdToUpdate);
      } catch (error) {
        console.error("Error updating item:", error);
      }
    } else {
      try {
        const res = await axios.post(url, item);

        updatedItemsArray.push(res.data);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }

    updatedItems(updatedItemsArray);
  };
  const removeItemFromCartHandler = async (id) => {
    const itemIndex = items.findIndex((item) => item._id === id);
    const existingItem = items[itemIndex];
    if (itemIndex !== -1) {
      const updatedItemsArray = [...items];

      if (existingItem.amount > 1) {
        updatedItemsArray[itemIndex].amount -= 1;
        const updatedItem = {
          title: existingItem.title,
          imageUrl: existingItem.imageUrl,
          price: existingItem.price,
          amount: updatedItemsArray[itemIndex].amount,
        };
        try {
          if (isLoggedIn) {
            const url = `https://crudcrud.com/api/63dab6d4b4074cceacb634131635a938/${useremail}`;
            await axios.put(`${url}/${id}`, updatedItem);
            console.log(url);
          }
          updatedItems(updatedItemsArray);
        } catch (error) {
          console.error("Error removing item:", error);
        }
      } else {
        updatedItemsArray.splice(itemIndex, 1);
        try {
          if (isLoggedIn) {
            const url = `https://crudcrud.com/api/63dab6d4b4074cceacb634131635a938/${useremail}/${id}`;
            await axios.delete(url);
            console.log(url);
          }
          updatedItems(updatedItemsArray);
        } catch (error) {
          console.error("Error removing item:", error);
        }
      }
    }
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
