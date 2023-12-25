import styles from './page.module.css'

const Test = async () => {
    // console.log(item)
    const res = await fetch('https://google.com/', { cache: 'no-store' })
    console.log(res.status)
    return (
        <div>
            <h1>Test SSR page</h1>
            <p>{res.status}</p>
        </div>
    )
}
export default Test
