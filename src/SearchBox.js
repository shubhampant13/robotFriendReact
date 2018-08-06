import React from 'react';

const SearchBox = ({searchField , searchChange}) => {

    return (
    	  <div className="pa2">
          <input className="pa3 ba b--green bg-light-yellow" 
          		 type="search" 
          		 placeholder="Search your robot friends" 
                 onChange = {searchChange}
          />
    	  </div>
    	);

}

export default SearchBox;