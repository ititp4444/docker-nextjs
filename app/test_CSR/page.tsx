'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

interface Data {
    id: number
    title: string
}

const Test = () => {
    // console.log(item)
    const refEfectRun = useRef(false)

    const [data, setData] = useState<Data | null>(null)

    const [productID, setProductID] = useState<number | null>(null)

    const fetchData = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products/1')
            const result = await res.json()
            setData(result)
            setProductID(result.id)
            console.log(result)
        } catch {
        } finally {
        }
    }

    useEffect(() => {
        if (!refEfectRun.current) fetchData()
        return () => {
            refEfectRun.current = true
        }
    }, [])
    if (!productID) return ''
    return (
        <div>
            <h1>Test CSR page</h1>
            <p>{productID}</p>
            <div>{data?.title}</div>
        </div>
    )
}
export default Test
