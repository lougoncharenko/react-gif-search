import React, { useState }from 'react';
import { NormalModule } from 'webpack';
import GifURL from './GifUrl';
import './Input.css';

const Input = () => {
    const [keyword, setKeyword] = useState<string>("");
    const [qty, setQty] = useState<number>();
    const [gifs, setGifs] = useState([])

    const GifResults = gifs?(
        <section className='gif-results'>
            {gifs.map((gif) => {return (
                <img key = {gif.key} src={gif.image} alt={gif.header}></img>
        )})}
        
        </section>
    ):null
    
    async function fetchGIF (e: any) {
        e.preventDefault();
        fetch(GifURL(keyword, qty))
        .then((response) => response.json())
        .then((json) => {
            const information = []
            for ( let i = 0; i < qty; i++ ) {
                information.push({
                key: [i],
                header: json.results[i].content_description,
                image: json.results[i].media_formats.gif.url
            })
            console.log(information)
            setGifs(information);
            }
        })
    }

  return (
    <>
    <form onSubmit={fetchGIF}  className='gif-search'>
    <h1>Gif Search</h1>
    <fieldset>
            <label>
                Type in a search query to search for GIFs:
                <input 
                type="text" 
                value = {keyword}
                name="search_query"
                onChange={(e) => setKeyword(e.target.value)}
                 />
            </label>
            <label>
                How many GIFs do you want?
                <input 
                type="number" 
                value = {qty}
                name="quantity" 
                min="1" 
                max="10"
                onChange={(e) => setQty(parseInt(e.target.value))} 
                />
            </label>
        <button className = 'search-button' type="submit"> Search For GIFs </button>
    </fieldset>
</form>
{GifResults}
</>
  )
}

export default Input