import React from "react";
import { Data } from "./Data";
import { useHistory } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();
  const history = useHistory();
  const logout=()=>{
    history.push("/")
  }
  return (
    <div className="productConatiner">
      <div className="navigation">
      
        <Link to="/cart">
          <GiShoppingBag />
        </Link>
       <button class="logout-btn" onClick={logout}>Logout</button>
      </div>
      <div className="products">
        {Data.map((item) => {
          item.quantity = 1;
          return (
            <div className="product" key={item.id}>
              <img src={` ../images/${item.image}`} alt="cart" />
              <h4>{item.name}</h4>
              <p>ksh. {item.price}</p>
              <button onClick={() => dispatch({ type: "ADD", payload: item })}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
