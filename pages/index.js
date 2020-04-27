import fetch from 'node-fetch'
import Head from 'next/head'
import uuidv4 from 'uuid/v4'
import { Card, Container, Image } from 'semantic-ui-react'
import MovieModal from '../components/MovieModal'
import Search from '../components/Search'

const StarWars = ({ movies }) => {

    return (
        <div className='container'>
            <Container>
                <Head>
                    <title>Star Wars</title>
                    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                </Head>
                <main>
                    <h1 className='a'>May The Force Be With You</h1>
                    <Image
                    centered={true}
                    rounded={true}
                    size='small'
                    src='charLogo.jpeg'
                    alt='starwars characters logo'/>
                    <Search {...movies}/>
                    <Card.Group itemsPerRow='3' stackable={true} centered={true} textAlign='center'>
                        {movies.map(movie => <MovieModal key={uuidv4()} starship={movie.starships} planet={movie.planets} character={movie.characters} episode_id={movie.episode_id} title={movie.title} release_date={movie.release_date} director={movie.director} opening_crawl={movie.opening_crawl} />)}
                    </Card.Group>
                </main>
                <footer>
                    Powered by <Image className='yoda' src="/yoda.png" alt="Yoda Logo" size='tiny' rounded={true} />
                </footer>
            </Container>
            <style global jsx>
                {`
                footer {
                    margin-top: 30px;
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            
                .yoda {
                    margin-left: 10px;
                }
                `}
            </style>
        </div>
    )
};


export async function getStaticProps() {
    const res = await fetch(`https://swapi.dev/api/films/`)
    const data = await res.json()

    const characterURLs = data.results.map(e => e.characters)
    const planetURLS = data.results.map(e => e.planets)
    const starshipURLS = data.results.map(e => e.starships)


    const getData = async (group, limit, objKey) => {
        let bigList = [];
        for (const list of group) {
            let tempArr = [];
            for (let i = 0; i < limit; i++) {
                try {
                    const res = await fetch(list[i])
                    const groupData = await res.json()
                    tempArr.push(groupData.name)
                } catch (error) {
                    console.error(error)
                }
            }
            bigList.push(tempArr)
        }
        // change the array of char urls with the array of char name strings
        for (let i = 0; i < bigList.length; i++) {
            data.results[i][objKey] = bigList[i]
        }
        return bigList;
    }

    await getData(characterURLs, 5, 'characters')
    await getData(planetURLS, 3, 'planets')
    await getData(starshipURLS, 3, 'starships')

    return {
        props: {
            movies: data.results,
        }
    }
}

export default StarWars;



// TODOs:
// search bar for mobile