import React, { useState } from "react";
import Product1 from "../images/photo1.png";
import Product2 from "../images/photo2.png";

function Productblock() {
  // first input
  const [count, setCount] = useState(1);
  const handleEvent = (e) => {
    const x = +e.target.value;
    setCount(x);
  };
  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    if (count <= 1) {
      setCount(1);
    } else setCount(count - 1);
  };
  // second input
  const [count2, setCount2] = useState(1);
  const handleEvent2 = (e) => {
    const x = +e.target.value;
    setCount2(x);
  };
  const add2 = () => {
    setCount2(count2 + 1);
  };
  const sub2 = () => {
    if (count2 <= 1) {
      setCount2(1);
    } else setCount2(count2 - 1);
  };
  return (
    <div className="pb-10">
      <div className="flex">
        <div className="p-2">
          <img
            className="rounded-xl w-24 h-24"
            src={Product1}
            alt="product number 1"
          />
        </div>
        <div className="flex flex-col justify-between p-2 ">
          <div className="w-36">
            <p className="text-sm">Vintage Backbag</p>
            <div className="flex justify-between items-center">
              <p className="text-yellow-500 text-base">$54.99</p>
              <p className="text-sm">
                <s> $94.99</s>
              </p>
            </div>
          </div>
          <div className="flex justify-between border border-gray-600 rounded-xl items-center w-24">
            <button
              className="text-gray-500 px-1  m-1 rounded-lg bg-gray-300"
              onClick={sub}
            >
              -
            </button>
            <input
              id="productOne"
              className="bg-gray-200 w-8 text-center outline-none "
              type="number"
              value={count}
              onChange={handleEvent}
            />
            <button
              className="text-gray-500 px-1  m-1 rounded-lg bg-gray-300"
              onClick={add}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2">
          <img
            className="rounded-xl w-24 h-24"
            src={Product2}
            alt="product number 1"
          />
        </div>
        <div className="flex flex-col justify-between p-2 ">
          <div className=" w-36">
            <p className="text-sm">Levi Shoes</p>
            <div className="flex justify-between items-center">
              <p className="text-yellow-500 text-base">$74.99</p>
              <p className="text-sm">
                <s> $124.99</s>
              </p>
            </div>
          </div>
          <div className="flex justify-between border border-gray-600 rounded-xl items-center w-24">
            <button
              className="text-gray-500 px-1  m-1 rounded-lg bg-gray-300"
              onClick={sub2}
            >
              -
            </button>
            <input
              id="productTwo"
              className="bg-gray-200 w-8 text-center outline-none "
              type="number"
              value={count2}
              onChange={handleEvent2}
            />
            <button
              className="text-gray-500 px-1  m-1 rounded-lg bg-gray-300"
              onClick={add2}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productblock;
