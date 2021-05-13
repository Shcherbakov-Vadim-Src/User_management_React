import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Users from './components/Users';


class App extends Component {

    render(){
        return  ( 
            <div>
                <Users />
            </div>   
        );   
    }
}


const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);