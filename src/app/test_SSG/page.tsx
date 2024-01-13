import React from 'react'

const Test = async () => {
    // console.log(item)
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1/', {
        cache: 'force-cache'
    })
    const result = await res.json()
    return (
        <div>
            <h1>Test SSG page</h1>
            <p>{result.name}</p>
            <img src={result.sprites.front_default} alt='' />
            {/* <p>{res.status}</p> */}
        </div>
    )
}
export default Test
