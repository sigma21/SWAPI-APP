// import Layout from '../components/app/Layout'
import fetch from 'node-fetch'
import Head from 'next/head'
import { Card, Container } from 'semantic-ui-react'

import Movie from '../components/Movie'
import MovieModal from '../components/MovieModal'

const StarWars = ({ movies, character }) => {
    // console.log(movies.characters)
    console.log(character)
    return (
        <div className='container'>
            <Container>
                <Head>
                    <title>May The Force Be With You</title>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Head>
                <main>
                <h1 className='a'>Star Wars Movies</h1>

                <Card.Group itemsPerRow='3' stackable={true} centered={true} textAlign='center'>
                    {movies.map(movie => <MovieModal character={'xyz'} episode_id={movie.episode_id} title={movie.title} release_date={movie.release_date} director={movie.director} opening_crawl={movie.opening_crawl} />)}
                </Card.Group>
                </main>
                <footer>
                    <a
                        href="https://zeit.co?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Powered by <img src="/zeit.svg" alt="ZEIT Logo" /></a>
                </footer>
                </Container>
                <style jsx>
                    {`
                body {
                    width: 90%;
                    max-width: 900px;
                    margin: 300px auto;
                    text-align: center;
                }

                .container {
                    // background-color: #1A1B23;
                }

                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            
                footer img {
                    margin-left: 0.5rem;
                }
            
                footer a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }


                `}
                </style>

        </div>
    )
};

//cannot reach data object
async function getCharacterName(url) {
    const character = await fetch(`${url}`)
    const characterdata = await character.json()
    return characterdata.name

}


export async function getServerSideProps() {
    const res = await fetch(`https://swapi.dev/api/films/`)
    const data = await res.json()
    // const character = await getCharacterName(data.results)

    // console.log(data.results[0].characters[0])

    // const character = await fetch(`${data.results[0].characters[0]}`)
    // const characterdata = await character.json()

    return {
        props: {
            movies: data.results,
            // character: character
        }
    }
}


export default StarWars;