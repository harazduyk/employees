import React from 'react'
import './search-panel.css'

const SearchPanel = ({addTerm}) => {

    return (
        <input type="text"
               className="form-control search-input searchEmployee"
               placeholder="Введіть прізвище співробітника"
               onChange={() => addTerm()}
        />
    )
}

export default SearchPanel