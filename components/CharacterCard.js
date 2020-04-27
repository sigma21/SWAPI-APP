import { Card, Image } from 'semantic-ui-react'
import CharacterModal from './CharacterModal'

const CharacterCard = ({ name, birth_year, homeworld, films, ...movies }) => {

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
        '1': {
            'name': 'A New Hope',
            'id': 0
        },                      
        '2': {
            'name': 'The Empire Strikes Back',
            'id': 1
        },        
        '3': {
            'name': 'Return of the Jedi',
            'id': 2
        },              
        '4': {
            'name': 'The Phantom Menace',
            'id': 3
        },              
        '5': {
            'name': 'Attack of the Clones',
            'id': 4
        },            
        '6': {
            'name': 'Revenge of the Sith',
            'id': 5
        }              
    }

    const matchFilms = (url) => {
        const filmNo = url.split('/')[5]
        return filmList[filmNo].name
    }

    const findID = (url) => {
        const filmNo = url.split('/')[5]
        return filmList[filmNo].id
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
                        <CharacterModal key={f.id} title={matchFilms(f)} character={movies[findID(f)].characters} name={movies[findID(f)].title} planet={movies[findID(f)].planets} starship={movies[findID(f)].starships} />
                    </li>))}
                </Card.Description>
            </Card.Content>
            {/* <Card.Content extra>
                <p>Homeworld: {homeworld} </p>
            </Card.Content> */}
        </Card>
    )
}

export default CharacterCard;