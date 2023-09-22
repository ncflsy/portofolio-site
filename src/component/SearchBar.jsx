import React from 'react'
import {FaSearch} from  "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="text-grey bg-darkgrey border border-bordergrey h-10 w-[280px] rounded-full p-4 pl-10"
        placeholder="Search"
      />
      <FaSearch className='absolute top-3 left-3 text-gray-400'/>
    </div>
  )
}

export default SearchBar