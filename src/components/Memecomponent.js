import React from 'react';
import ReactDOM from 'react-dom/client';


export default function Memecomponent(){
    const [meme, setMeme]=React.useState({
        topText:"",
        bottomText: "",
        randomImage: "https://tse1.mm.bing.net/th/id/OIP.Qs-hxqaNYvjrPYBGTtgwKQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
    })

    const [allMemes, setAllMemes]=React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res =>res.json())
        .then(data =>setAllMemes(data.data.memes))
    }, [])

    function getMemeImage(){
        const randomNumber= Math.floor(Math.random()* allMemes.length)
        const url= allMemes[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage: url
        }))

    }

    function handleChange(event){
        const {name,value}= event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]:value
        }))
    }

    

    return(
        <main>
            <form className="form">
                <input className="form--input" type="text" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input className="form--input" type="text" placeholder=" Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button className="form--button" type="button" onClick={getMemeImage}>Get a new meme image</button>
            </form>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>

            </div>
        </main>

    )
}