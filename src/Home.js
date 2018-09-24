import React, { Component } from 'react';
import {Button, InputGroup, Form, FormControl} from 'react-bootstrap';
import './index.css';
import ListarPost from './ListarPost';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postlist: '',
            post: []
         
        }
    }

    onChangePost = (evento) => {
        this.setState ({postlist: evento.target.value})
    }

    adicionarPost = () => {
        const newPost = {
          postlist: this.state.postlist
        }
        
        this.setState((state) => {
          const NovoPost = [...state.post, newPost]
          return {
            post: NovoPost,
            postlist: ''
          }
        }
        )
    
    }

    render () {
        return (
            <div className="home">
                <Form > 
                    <Form.Group >
                        <Form.Label className="formpost"><input type="text" name="postlist" className="tweet" value={this.state.value} onChange={this.onChangePost} /> </Form.Label>                                
         
                        <Button variant="secondary" className="btnpost" onClick={this.adicionarPost} size="sm">Postar</Button>
                    </Form.Group>
                
                    <Form.Group className="formlist">
                        <ListarPost className="listarpost" post={this.state.post} />
                    </Form.Group>

                </Form> 
            </div>
        )
    }
    
}

export default Home;