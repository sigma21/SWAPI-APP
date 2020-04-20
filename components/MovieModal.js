import { Button, Header, Icon, Modal, Card, Image } from 'semantic-ui-react'
import Movie from './Movie'


const MovieModal = ({ episode_id, title, release_date, opening_crawl, director, character }) => (
    <Modal trigger={<Card key={episode_id} color='yellow'>
                    <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/260px-Star_Wars_Logo.svg.png' wrapped ui={false} />
                    <Card.Content textAlign='center'>
                    <Card.Header>{title}</Card.Header>
                    <Card.Meta><span className='release-date'>Release Date: {release_date}</span></Card.Meta>
                    <Card.Description>{opening_crawl}</Card.Description>
                    </Card.Content>
                    <Card.Content extra><Icon name='user' />Director: {director}</Card.Content>
                    </Card>} 
        basic size='small'>
        <Header><h2><i className="big film icon"></i>{title} Details</h2></Header>
        <Modal.Content>
        
        <h3><i className="user icon"></i>Starring: {character}</h3>
        </Modal.Content>
        {/* <Modal.Actions>
            <Button basic color='red' inverted>
                <Icon name='remove' /> No</Button>
            <Button color='green' inverted>
                <Icon name='checkmark' /> Yes</Button>
        </Modal.Actions> */}
    </Modal>
)

export default MovieModal;
