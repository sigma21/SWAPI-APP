import { Card, Image } from 'semantic-ui-react'
import MyModal from '../components/modal'

const CharacterModal = ({ name, birth_year, homeworld, films, ...movies }) => {

    const fetchResults = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.name)
            return data.name
        } catch (error) {
            console.error(error)
        }
    }

    // let x = await fetchResults(homeworld);


    const filmList = {
        '1': 'A New Hope',
        '2': 'The Empire Strikes Back',
        '3': 'Return of the Jedi',
        '4': 'The Phantom Menace',
        '5': 'Attack of the Clones',
        '6': 'Revenge of the Sith'
    }

    const matchFilms = (url) => {
        const filmNo = url.split('/')[5]
        return filmList[filmNo]
    }

    const findID = (url) => {
        const filmNo = url.split('/')[5]
        return (url.split('/')[5] < 4) ? (Number(filmNo) + 2) : (Number(filmNo) - 2)
    }

    return (
        <Card>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='/charLogo.jpeg'
                    alt='starwars character logo'
                />
                <Card.Header>{name}</Card.Header>
                <Card.Meta>Birth Year: {birth_year}</Card.Meta>
                <Card.Description>
                    {films.map(f => (<li>
                        <MyModal title={matchFilms(f)} character={movies[findID(f)].characters} name={movies[findID(f)].title} planet={movies[findID(f)].planets} starship={movies[findID(f)].starships} />
                        </li>))}
                        {/* <a>{matchFilms(f)}</a></li>))} */}
                    {/* {movies[findID(f)].title} */}
                    {/* populate a modal with the id, find the index in the array of films. */}
                </Card.Description>
            </Card.Content>
            {/* <Card.Content extra>
                <p>Homeworld: {homeworld} </p>
            </Card.Content> */}

        </Card>
    )
}

export default CharacterModal