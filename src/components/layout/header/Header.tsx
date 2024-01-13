// 'use client'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData } from '@/features/user/store/slice'

const Header: FC = () => {
    const dispatch = useDispatch()
    const sss = useSelector((state) => state.user)
    // console.log(sss)

    // useEffect(() => {
    //     dispatch(fetchUserData())
    //     // dispatch(fetchUserData());
    // }, [])
    return (
        <>
            <header>
                <div>header</div>
                <div>{sss.name}</div>
            </header>
        </>
    )
}
export default Header
