import React, { useState }from 'react';
import { NormalModule } from 'webpack';
import GifURL from './GifUrl';
import './Input.css';

const Input = () => {
    const [keyword, setKeyword] = useState<string>("");
    const [qty, setQty] = useState<number>();
    const [gifs, setGifs] = useState(null)

    const GifResults = gifs?(
        <section className='gif-results'>
        <h1>{gifs.header}</h1>
        <img src={gifs.image}></img>
        </section>
    ):null
    
    async function fetchGIF (e: any) {
        e.preventDefault();
        fetch(GifURL(keyword, qty))
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            const information = {
                header: json.results[0].content_description,
                image: json.results[0].media_formats.gif.url
            }
            setGifs(information)
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