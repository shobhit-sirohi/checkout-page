import React from "react";
import Productblock from "./Productblock";
function Finalcard() {
  return (
    <div className="bg-gray-200 rounded-xl p-2 flex flex-col divide-y divide-gray-400">
      <Productblock />

      <div className=" flex justify-between p-2">
        <p>Shipping</p>
        <p>$19</p>
      </div>
      <div className=" flex justify-between p-2">
        <p>Total</p>
        <p>$148.98</p>
      </div>
    </div>
  );
}

export default Finalcard;
