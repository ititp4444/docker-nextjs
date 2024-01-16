import React, { FC } from 'react'
import HeaderContainer from '@/components/layout/header/Container'

const Test: FC = async () => {
    const num = Math.floor(Math.random() * (150 - 1) + 1)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`, {
        cache: 'force-cache'
    })
    const result = await res.json()
    return (
        <div>
            <HeaderContainer />
            <h1>Test SSG page</h1>
            <p>{result.name}</p>
            <img src={result.sprites.front_default} alt='' />
            {/* <p>{res.status}</p> */}
        </div>
    )
}
export default Test
