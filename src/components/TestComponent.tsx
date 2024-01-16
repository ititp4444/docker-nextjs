'use client'

import React, { FC, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import HeaderContainer from '@/components/layout/header/Container'

interface Data {
    id: number
    title: string
}

const TestComponent: FC = () => {
    // console.log(item)
    const refEfectRun = useRef(false)

    // const sss = useSelector((state) => state.user)
    // console.log(sss)

    const [data, setData] = useState<Data | null>(null)

    const [productID, setProductID] = useState<number | null>(null)

    const fetchData = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products/1')
            const result = await res.json()
            setData(result)
            setProductID(result.id)
            // console.log(result)
        } catch {
        } finally {
        }
    }

    // useEffect(() => {
    //     if (!refEfectRun.current) fetchData()
    //     return () => {
    //         refEfectRun.current = true
    //     }
    // }, [])
    // if (!productID) return ''
    return (
        <div>
            {/* <HeaderContainer /> */}
            <h1>Test CSR page です</h1>
            {/* <p>{productID}</p> */}
            {/* <div>{sss?.name}</div> */}
        </div>
    )
}
export default TestComponent
