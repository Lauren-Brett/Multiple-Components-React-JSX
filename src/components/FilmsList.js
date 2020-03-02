import React, { Fragment } from 'react';
import Film from './Film'

function FilmsList({films}){

    const individualFilm = films.map(film => {
        return (
            <Film 
                name={film.name}
                url={film.url}
                key={film.id}
                ></Film>
        )
    
    })

    return (
        <Fragment>
            <h3>These are the films:</h3>
            <ul>
                {individualFilm}
            </ul>
        </Fragment>
    )
}

export default FilmsList;