import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Comment from './App';
import reportWebVitals from './reportWebVitals';


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);



//ReactDOM.render(<App/>,document.getElementById("root"));
//export default App;

reportWebVitals();
