import { useState, useEffect } from "react";

const Meme = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])
    
    
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    return (
        <div className="p-9 max-w-xl md:max-w-full mx-auto">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <input 
                    className="input" 
                    type="text" 
                    placeholder="top text" 
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    className="input" 
                    type="text" 
                    placeholder="bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button className="col-span-2 bg-gradient-to-r from-[#672280] to-[#A626D3] text-white font-[Karla] font-bold text-xl rounded-md" onClick={getMemeImage}>
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="relative mt-9">
                <img src={meme.randomImage} alt="meme" className="max-w-full rounded-md m-auto"/>
                <h2 className="meme-text shadow top-0">{meme.topText}</h2>
                <h2 className="meme-text shadow bottom-0">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme;