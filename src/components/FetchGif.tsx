import React from 'react'

interface Args {
    gif: string,
    qty: number
}
const FetchGif = ({gif, qty}: Args) => {
    const apikey = "AIzaSyBWZkd9EYKL356BTQFOtgmJJvFmUHaMlvc"
    const url = `https://tenor.googleapis.com/v2/search?q=${gif}&key=${apikey}&limit=${qty}`
  return (
    <div>FetchGif</div>
  )
}

export default FetchGif