import Layout from '../components/app/Layout'
import Link from 'next/link'
import fetch from 'node-fetch'

const Shows = ({shows}) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {shows.map(show => (
                <li key={show.id}>
                    <Link href='s/[id]' as={`/s/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

export async function getServerSideProps() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`data fetched. count: ${data.length}`)

    return {
        props: {
            shows: data.map(entry=>entry.show)
        }
    }
}


export default Shows;