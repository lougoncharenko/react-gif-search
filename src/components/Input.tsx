import React from 'react'

const Input = () => {
  return (
    <form action="/gif_search" method="POST">
    <fieldset>
            <label>
                Type in a search query to search for GIFs:
                <input type="text" name="search_query" />
            </label>
            <label>
                How many GIFs do you want?
                <input type="number" name="quantity" min="1" max="10" value="5" />
            </label>
        <input type="submit" value="Search for GIFs!" />
    </fieldset>
</form>
  )
}

export default Input