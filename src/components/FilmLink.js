import React, { Fragment } from 'react';
import './FilmsListCss.css'

function FilmLink(){


    return (
        <Fragment>
         
          <a className="film-link" href={"https://www.imdb.com/calendar/?region=gb"}>
              View Upcoming Releases Here!</a>
           
        </Fragment>


    )

  
        
  
};
 {/* <button onClick={ handleClick }>links here</button> */}


export default FilmLink;