import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// const element = <Welcome name="Sara" />;
const element = Welcome({name: "Abdullah"});

ReactDOM.render(element, document.getElementById('test1'));
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
