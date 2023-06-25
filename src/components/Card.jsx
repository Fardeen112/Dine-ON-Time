import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
const Card = (props) => {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  let options = props.options;
  let priceOptions = Object.keys(options);
  let foodItem = props.foodItem;
  // console.log(foodItem);
  const [Qty, setQty] = useState(1);
  const [size, setsize] = useState("");
  const handleAddtoCart = async () => {
    let food = [];
    // console.log(data.size);
    for (const item of data) {
      if (item.id === foodItem._id) {
        food = item;

        break;
      }
    }
    // console.log(food);
    // console.log(props.foodItem._id);
    // console.log(new Date());
    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          Qty: Qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          Qty: Qty,
          size: size,
          img: props.ImgSrc,
        });
        // console.log(data);
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      Qty: Qty,
      size: size,
      img: props.ImgSrc,
    });
    // console.log(props.foodItem._id);
    // console.log(data);
    //     // console.log(props.name);
  };
  useEffect(() => {
    setsize(priceRef.current.value);
  }, []);
  let finalPrice = Qty * parseInt(options[size]);
  return (
    <div
      className="card mt-3 overflow-scroll"
      style={{ width: "18rem", maxHeight: "360px" }}
    >
      <img src={props.foodItem.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.foodItem.name}</h5>
        <div className="container width:100">
          <select
            className="m-2 h-100  bg-success"
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className="m-2 h=100 bg-success rounded"
            ref={priceRef}
            onChange={(e) => setsize(e.target.value)}
          >
            {priceOptions.map((data) => {
              console.log(data);
              return data !== "_id" ? (
                <option key={data} value={data}>
                  {data}
                </option>
              ) : (
                ""
              );
            })}
          </select>
          <div className="d-inline h-100" fs-5>
            ${finalPrice}
          </div>
        </div>
        <hr />
        <button
          className={"btn btn-success justify-center ms-2"}
          onClick={handleAddtoCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
