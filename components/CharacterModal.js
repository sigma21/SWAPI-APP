import { Header, Modal } from 'semantic-ui-react'

const CharacterModal = ({ title, name, character, planet, starship }) => (

    <Modal trigger={<a>{title}</a>}
        basic size='small'>
        <Header><h2><i className="big film icon"></i>{name}</h2></Header>
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


export default CharacterModal;