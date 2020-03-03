import React from 'react';

function Film({name, url}){
    return (
        <li>
            <a href={url}>{name}</a>
            <button>links here</button>
        </li>
    )
}

export default Film;