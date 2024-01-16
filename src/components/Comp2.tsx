'use client'

import React, { FC, memo } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import HeaderContainer from '@/components/layout/header/Container'

interface Data {
    id: number
    title: string
}

const Comp2: FC = memo(() => {
    const sss = useSelector((state) => state.user)
    // console.log(sss)
    return <div>{sss.name}</div>
})
export default Comp2
