import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="">Cart Items - {cartItems.length}</h1>
      <button className="btn-green" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      <div className="flex">
        {/* <FoodItem {...cartItems[0]} /> */}
        {cartItems.map((item) => {
          <FoodItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;

// Important: Interview Qeustion.
//useSelector: It is used to subscribe the store // this is the place u will tell what u r subsricing to?
//This is where people make performance mistake.
//Do not subscrive to the whole store.
//const store = useSelector((store) => store);
//Major performace issue.
//const cartItems = useSelector((store) => store.cart.items);
//Because everytime my store chnages, it will rerender the components.
//And the store is huge in large scale applications.
//So u have to subscribe to the specific portion of the store. It makes major performance improvement.
