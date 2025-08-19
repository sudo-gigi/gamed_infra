import React from 'react'
import '../../Styles/SearchInputStyles.css'

function SearchInput() {
  return (
    <React.Fragment>
      <input id="search-input" type='text' placeholder='Search Courses'></input>
    </React.Fragment>
  )
}

export default SearchInput