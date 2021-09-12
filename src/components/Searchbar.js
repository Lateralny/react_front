import React from 'react';
import './Searchbar.css';
import { useState } from "react";
//props: data

function Searchbar({ data}){
    return(
        <div className="searchbar">
            <div className="searchbarInput">
                <input type="text" placeholder="search..." />
                <div className="fas fa-search"></div>
            </div>
            <div className="searchResult">
                
            </div>
        </div>
    );
}
export default Searchbar 


/*

function Searchbar(props) {
  const { 
    onSearch 
  } = props;

  const [searchText, setSearchText] = useState('')

  const handleInput = (e) => {
    const text = e.target.value
    setSearchText(text)
  }

  const handleEnterKeyPressed = (e) => {
    if(e.key=== 'Enter') {
      onSearch(searchText)
    }
  }

  return (
    <div className="searchbar">
    <div className="searchbarInput">
    <input
          className="input"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          type="text"
          value={searchText}
          placeholder="Search..."
        />
        <div className="fas fa-search"></div>
    </div>
    <div className="searchResult">
        
    </div>
    </div>
   
  );
}

export default Searchbar;
*/