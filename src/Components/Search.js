import React from 'react';

function Search(props) {
    return (
        <section className="SearchBox" >
            <input type="text"
                placeholder="search for a movie"
                className="SearchBar"
                onChange={props.change}
                onKeyPress={props.search}

            />
        </section>
    )
};
export default Search;