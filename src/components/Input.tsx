import React, { useState }from 'react';
import GifURL from './GifUrl';
import './Input.css';

const Input = () => {
    const [gif, setGif] = useState<string>("");
    const [qty, setQty] = useState<number>();
    async function fetchGIF (e: any) {
        e.preventDefault();
        alert(`${gif} ${qty}`);
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
                value = {gif}
                name="search_query"
                onChange={(e) => setGif(e.target.value)}
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
<section className='gif-results'>
    {/* insert gifs here */}
</section>
</>
  )
}

export default Input