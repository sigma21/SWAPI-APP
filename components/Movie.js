import { Card, Icon, Image } from 'semantic-ui-react'

const Movie = ({ episode_id, title, release_date, opening_crawl, director }) => (
    <Card key={episode_id} color='yellow'>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/260px-Star_Wars_Logo.svg.png' wrapped ui={false} />
        <Card.Content textAlign='center'>
            <Card.Header>{title}</Card.Header>
            <Card.Meta>
                <span className='release-date'>Release Date: {release_date}</span>
            </Card.Meta>
            <Card.Description>
                {opening_crawl}
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name='user' />
            Director: {director}
        </Card.Content>
    </Card>
)

export default Movie;

//NOTE FOR FUTURE:
//intention was to map this card component in card modal but threw error. 
//had to directly create the card inside trigger of modal instead of importing from this component