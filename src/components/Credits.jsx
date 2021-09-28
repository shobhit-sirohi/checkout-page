import React from "react";

function Credits() {
  return (
    <div className="flex justify-center items-end mt-10 h-full pb-4">
      <p class=" text-xs  text-gray-500 ">
        created by{" "}
        <a
          class="hover:text-blue-600 underline"
          href="https://devchallenges.io/portfolio/shobhit-sirohi"
          target="_blank"
        >
          Shobhit
        </a>{" "}
        - devchallenges.io
      </p>
    </div>
  );
}

export default Credits;
