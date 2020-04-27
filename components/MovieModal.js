import { Header, Icon, Modal, Card, Image } from 'semantic-ui-react'

const MovieModal = ({ episode_id, title, release_date, opening_crawl, director, character, planet, starship }) => (
    <Modal closeIcon={true} trigger={<Card key={episode_id} color='yellow'>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/260px-Star_Wars_Logo.svg.png' wrapped ui={false} />
        <Card.Content textAlign='center'>
            <Card.Header>{title}</Card.Header>
            <Card.Meta><span className='release-date'>Release Date: {release_date}</span></Card.Meta>
            <Card.Description>{opening_crawl}</Card.Description>
        </Card.Content>
        <Card.Content extra><Icon name='user' />Director: {director}</Card.Content>
    </Card>}
        basic size='small'>
        <Header><h2><i className="big film icon"></i>{title}</h2></Header>
        <Modal.Content>
            <h3><i className="large user icon"></i>Characters:<ul>{character.map(i => (<li key={i.toString()}>{i}</li>))}</ul></h3>
        </Modal.Content>
        <Modal.Content>
            <h3><i className="large map marker alternate icon"></i>Planets:<ul>{planet.map(i => (<li key={i.toString()}>{i}</li>))}</ul></h3>
        </Modal.Content>
        <Modal.Content>
            <h3><i className="large rocket icon"></i>Starships:<ul>{starship.map(i => (<li key={i.toString()}>{i}</li>))}</ul></h3>
        </Modal.Content>
    </Modal>
)
export default MovieModal;
