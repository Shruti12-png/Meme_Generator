import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Header(){
    return(
        <header className="header">
            <img className="header--img" src="https://i.pinimg.com/originals/dc/82/9b/dc829bfcafa108d5e9a884456a10fc60.png"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course Project</h4>
        </header>
    )
}
