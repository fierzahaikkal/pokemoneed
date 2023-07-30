import React from "react";

export const Search = () => {
  return (
    <div className="mb-8">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid  bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-indigo-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none border-indigo-600 text-indigo-200 placeholder:text-indigo-300 focus:border-primary"
          placeholder="Search pokemon name..."
          aria-label="Search"
          aria-describedby="button-addon1"
        />
        {/*Search button*/}
        <button
          className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase
          bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600 leading-tight text-white shadow-md transition duration-150 ease-in-out"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
