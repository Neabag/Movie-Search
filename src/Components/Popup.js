import React from 'react'

function Popup({ selected, closePopup }) {
    return (
        <section className="Popup">
            <div className="content" >
                <h2>{selected.Title}
                    <span> {selected.Year}</span>
                </h2>
            </div>
            <p className="rating">Rating:{selected.imdbRating}</p>
            <div className="plot" >
                <img src={selected.Poster} />
                <p>{selected.Plot}</p>
            </div>
            <button className="close" onClick={closePopup}>Close</button>
        </section>
    )
}

export default Popup;
