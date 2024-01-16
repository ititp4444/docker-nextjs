import React, { FC } from 'react'
import { Metadata, ResolvingMetadata } from 'next'

import { useDispatch, useSelector } from 'react-redux'
import HeaderContainer from '@/components/layout/header/Container'
import Comp2 from '@/components/Comp2'
// type Props = {
//     params: { id: string }
//     searchParams: { [key: string]: string | string[] | undefined }
// }
// export async function generateMetadata(
//     { params, searchParams }: Props,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     // read route params
//     // const id = params.id

//     // // fetch data
//     // const product = await fetch(`https://.../${id}`).then((res) => res.json())

//     // // optionally access and extend (rather than replace) parent metadata
//     // const previousImages = (await parent).openGraph?.images || []

//     return {
//         title: 'ssr',
//         openGraph: {
//             images: ['/some-specific-page-image.jpg']
//         }
//     }
// }

import { userDataThunk, selectorUserData } from '@/features/user/store/slice'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
const Test: FC = async () => {
    // console.log(item)
    const res = await fetch('https://google.com/', { cache: 'no-store' })
    // const sss = useSelector((state) => state.user)
    // console.log(`SSR name:${sss.name}`)
    return (
        <>
            <HeaderContainer />
            <div>
                <h1>Test SSR page</h1>
                <p>{res.status}</p>
                <Comp2 />
            </div>
        </>
    )
}
export default Test
