import React from "react";

function Form() {
  const handleSubmit = () => {
    // alert("Validation successful");
    prompt("name");
  };
  return (
    <div className="flex flex-col lg:w-1/2">
      <form onSubmit={handleSubmit}>
        <div className="space-y-1 md:space-y-4">
          <h1 className="text-lg font-semibold text-gray-700 mt-8  ">
            Contact Information
          </h1>

          <div className="flex flex-col">
            <label>E-mail</label>
            <div className="border-2 rounded-lg border-gray-400 flex space-x-2 ">
              <svg
                className="p-1 "
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-mail"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#808080"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <input
                className="focus:outline-none  w-2/3"
                type="email"
                autoComplete="email"
                name="email"
                placeholder="Enter your email..."
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label>Phone</label>
            <div className="border-2 rounded-lg border-gray-400 flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-phone"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#808080"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
              <input
                className="focus:outline-none  w-2/3"
                name="tel"
                type="tel"
                autoComplete="tel"
                placeholder="Enter your phone..."
                required
              />
            </div>
          </div>
        </div>
        <div className="space-y-1 md:space-y-4">
          <h1 className="text-lg font-semibold text-gray-700 mt-8">
            Shipping address
          </h1>
          {/* full name */}
          <div className="flex flex-col">
            <label>Full name</label>
            <div className="border-2 rounded-lg border-gray-400 flex space-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-user"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#808080"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              <input
                className="focus:outline-none  w-2/3"
                type="full name"
                autoComplete="full name"
                name="full name"
                placeholder="Full name..."
                required
              />
            </div>
          </div>
          {/* address */}

          <div className="flex flex-col">
            <label>Address</label>
            <div className="border-2 rounded-lg border-gray-400 flex space-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-home"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#808080"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
              <input
                className="focus:outline-none w-2/3 "
                type="address"
                autoComplete="address"
                name="address"
                placeholder="Your address..."
                required
              />
            </div>
          </div>
          {/* city */}

          <div className="flex flex-col">
            <label>City</label>
            <div className="border-2 rounded-lg border-gray-400 flex space-x-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-building-skyscraper"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#808080"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="3" y1="21" x2="21" y2="21" />
                <path d="M5 21v-14l8 -4v18" />
                <path d="M19 21v-10l-6 -4" />
                <line x1="9" y1="9" x2="9" y2="9.01" />
                <line x1="9" y1="12" x2="9" y2="12.01" />
                <line x1="9" y1="15" x2="9" y2="15.01" />
                <line x1="9" y1="18" x2="9" y2="18.01" />
              </svg>
              <input
                className="focus:outline-none w-2/3 "
                type="city"
                autoComplete="city"
                name="city"
                placeholder="Your city..."
                required
              />
            </div>
          </div>
          {/* country */}
          <div className="flex  justify-between space-x-1">
            <div className="flex flex-col">
              <label>Country</label>
              <div className="border-2 rounded-lg border-gray-400 flex space-x-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-world"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#808080"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="3.6" y1="9" x2="20.4" y2="9" />
                  <line x1="3.6" y1="15" x2="20.4" y2="15" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3a17 17 0 0 1 0 18" />
                </svg>

                <select className="focus:outline-none " required>
                  <option value="India">India</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="USA">USA</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col">
              <label>Postal code</label>
              <div className="border-2 rounded-lg border-gray-400 flex space-x-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mailbox"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#808080"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
                  <path d="M12 11v-8h4l2 2l-2 2h-4" />
                  <path d="M6 15h1" />
                </svg>
                <input
                  className="focus:outline-none w-2/3 "
                  type="pin code"
                  autoComplete="pin code"
                  name="pin code"
                  placeholder="Your postal code..."
                  required
                />
              </div>
            </div>
          </div>
          <div className="justifu">
            <input className="md:h-4 md:w-4" type="checkbox" id="" name="" />
            <label className="text-gray-700" for="save-information ">
              {" "}
              Save this information for next time
            </label>
            <br />
          </div>
        </div>
        <div className="flex mt-4 justify-end">
          <button
            className="bg-yellow-500 py-2 px-6 rounded-lg text-white font-medium  "
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
