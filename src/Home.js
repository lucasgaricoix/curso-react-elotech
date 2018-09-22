import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import './App.css';
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
        const {post, postlist} = this.state;

        return (
            <div>
                <input type="text" className="posttxt" name="postlist" value={this.state.value} onChange={this.onChangePost}></input>
    
                <Button variant="secondary" className="btnpost" onClick={this.adicionarPost} size="sm">Adicionar</Button>

                <ListarPost post={this.state.post} />

       
            </div>
        )
    }
    
}

export default Home;