import React from 'react';

function Film({name, url}){

    const styles = {
        background: "grey"
    }

    return (
        <li style={styles}>
            <a href={url}>{name}</a>
        </li>
    )
}

export default Film;