import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

const App = () => (
         <div>
            <Header/>
            <Content/>
         </div>
)

const Header = () => (
    <div>
      <h1>Header</h1>
    </div>
)




const Content = () =>(
    <div>
      <h2>Content</h2>
      <p>The content text!!!</p>
    </div>
)




ReactDOM.render(<App/>,document.getElementById("root"));
export default App;

reportWebVitals();
