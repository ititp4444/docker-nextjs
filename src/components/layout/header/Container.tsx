import React, { FC } from 'react'
import ReduxProvider from '@/store/provider'
import Header from './Header'
const HeaderContainer: FC = () => {
    return (
        <ReduxProvider>
            <Header />
        </ReduxProvider>
    )
}
export default HeaderContainer
