import React from 'react';
import Result from './Result';
function Results(props) {
    return (
        <section className="Results" >
            {props.results.map(result => (
                <Result result={result}
                    key={result.imdbID}
                    openPopup={props.openPopup} />
            ))}
        </section>
    )
};
export default Results;