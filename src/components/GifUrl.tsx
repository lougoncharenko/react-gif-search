import React from 'react'

interface Args {
    keyword: string,
    qty: number,
}
const GifURL = (keyword:string, qty: number) => {
    const apikey = "AIzaSyBWZkd9EYKL356BTQFOtgmJJvFmUHaMlvc"
    const url = `https://tenor.googleapis.com/v2/search?q=${keyword}&key=${apikey}&limit=${qty}`
    return url
}

export default GifURL