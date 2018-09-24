import React, {Component} from 'react';
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

    onChangeName = (evento) => {
        this.setState ({nome: evento.target.value})
    }

    onChangeUserName = (evento) => {
        this.setState ({userName: evento.target.value})
    }

    onChangePhotoUrl = (evento) => {
        this.setState ({photoUrl: evento.target.value})
    }

    render() {
        const {nome, userName, photoUrl} = this.state;
        return (
            <div className="configuracao">
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control name="nome" value={nome} onChange={this.onChangeName} size="sm" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Nome de Usuário</Form.Label>
                            <Form.Control name="userName" value={userName} onChange={this.onChangeUserName} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Url da foto </Form.Label>
                            <Form.Control name="photoUrl" value={photoUrl} onChange={this.onChangePhotoUrl} />
                        </Form.Group>
                    <Button variant="sucess" onClick={this.onSave}>Salvar</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default Configuracao;