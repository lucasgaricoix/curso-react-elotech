import {React, Component} from 'react';
import {Form, Button, Container} from 'react-bootstrap';

class Configuracao extends Component {

    
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            userName: '',
            photoUrl: ''
         
        }
    }

    render() {
        const {nome, userName, photoUrl} = this.state;
        
        return (
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control name="nome" value={nome} onChange={this.onChange} size="sm" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Nome de Usuário</Form.Label>
                        <Form.Control name="userName" value={userName} onChange={this.onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Url da foto </Form.Label>
                        <Form.Control name="photoUrl" value={photoUrl} onChange={this.onChange} />
                    </Form.Group>
                <Button variant="sucess" onClick={this.onSave}>Salvar</Button>
                </Form>
            </Container>
            
        )
    }

    
}

export default Configuracao;