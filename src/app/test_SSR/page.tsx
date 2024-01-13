import React from 'react'
import HeaderContainer from '@/components/layout/header/Container'

const Test = async () => {
    // console.log(item)
    const res = await fetch('https://google.com/', { cache: 'no-store' })
    return (
        <>
            <HeaderContainer />
            <div>
                <h1>Test SSR page</h1>
                <p>{res.status}</p>
            </div>
        </>
    )
}
export default Test
