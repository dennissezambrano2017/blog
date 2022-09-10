import React from 'react';
import './styles.css';

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => (
        <div className="SearchBar-wrap">
            <form onSubmit={formSubmit}>
                <input type="text" onChange={handleSearchKey} placeholder='Búsqueda por categoria' value={value} />
                {value && <span onClick={clearSearch}>X</span>}


                <button>Buscar</button>
            </form>
        </div>
    )

export default SearchBar