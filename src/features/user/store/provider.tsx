'use client'
import React, { FC } from 'react'

import { ReactNode } from 'react'

import store from '@/store'
import { fetchUserData } from '@/features/user/api'
import { login, logout } from '@/features/user/store/slice'
type ReduxProviderType = {
    children: ReactNode
    arg?: {}
}
const UserProvider = async ({ children }: ReduxProviderType) => {
    return <>{children}</>
}
export default UserProvider
