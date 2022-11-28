import React from 'react';
import './Input.css';

const Input = () => {
  return (
    <form className='gif-search'>
    <h1>Gif Search</h1>
    <fieldset>
            <label>
                Type in a search query to search for GIFs:
                <input type="text" name="search_query" />
            </label>
            <label>
                How many GIFs do you want?
                <input type="number" name="quantity" min="1" max="10" value="5" />
            </label>
        <button className = 'search-button' type="submit"> Search For GIFs </button>
    </fieldset>
</form>
  )
}

export default Input