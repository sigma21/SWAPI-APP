import Layout from '../components/app/Layout';
import useSWR from 'swr';
import { useRouter } from 'next/router';

function fetcher(url) {
    return fetch(url).then(r => r.json());
}

export default function Home() {
    const { query } = useRouter();
    const { data, error } = useSWR(`api/randomQuote`, fetcher);
    const author = data?.author;  // == data && data.author 
    let quote = data?.quote;

    if (!data) quote = 'Loading...'
    if (error) quote = 'Failed to fetch the quote. Sorry!'

    return (
        <Layout>
            <main className='center'>
                <h1>Homepage</h1>
                <h2>Here's a random quote for you</h2>
                <h4 className='quote'>{quote}</h4>
                {author && <span className='author'>- {author}</span>}
                <style jsx>{`
        main {
            width: 90%;
            max-width: 900px;
            margin: 300px auto;
            text-align: center;
        }
        .quote {
            font-family: cursive;
            color: #e243de;
            font-size: 24px;
            padding-bottom: 10px;
        }
        .author{
            font-family: sans-serif;
            color: #559834;
            font-size: 20px;
        }
        `}</style>
            </main>
        </Layout>
    );
}