import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";



const SearchBar = ({onChange , filterIllustration}) => {
  const [isFilterModalActive , setIsFilterModalActive] = useState(false);
  return ( 
    <div className="relative flex items-center gap-2">
      <input 
        type="search" 
        className="search-bar h-12 md:h-14 text-lg rounded-2xl w-full bg-transparent border border-gray-300 dark:border-slate-600 text-[0.95rem] md:text-[1rem] pl-12 px-5 outline-none md:mx-2 mx-0 w-[85%]" 
        placeholder="Search for images" 
        onChange={onChange}
      />
      <div className=" relative">
      <button className="flex items-center gap-1" onClick={() => setIsFilterModalActive(!isFilterModalActive)}>
        Filters
        <IoFilter className="text-lg cursor-pointer" />
      </button>
        <ul className={`${isFilterModalActive != true ? "hidden" : ""} bg-white shadow-xl dark:bg-[rgb(20,20,20)] absolute top-8 right-0 rounded py-5 z-10 pl-3 pr-10 flex flex-col gap-2`}>
          <li 
          className="text-[0.9rem] cursor-pointer"
          onClick={() => {
            setIsFilterModalActive(false);
            filterIllustration("all")
          }}
          >All</li>
          <li 
          className="text-[0.9rem] cursor-pointer"
          onClick={() => {
            setIsFilterModalActive(false);
            filterIllustration("photo")
          }}
          >Photo</li>
          <li 
          className="text-[0.9rem] cursor-pointer"
          onClick={() => {
            setIsFilterModalActive(false);
            filterIllustration("illustration")
          }}
          >Illustration</li>
          <li 
          className="text-[0.9rem] cursor-pointer"
          onClick={() => {
            setIsFilterModalActive(false);
            filterIllustration("vector")
          }}
          >Vector</li>
        </ul>
      </div>
        <IoIosSearch className="absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 text-[1.5rem] text-gray-400" />

    </div>
  )
}

export default SearchBar

