import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

function App () {
      return (
         <div>
            <Header/>
            <Content/>
         </div>
      );
}
function Header () {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
}
function Content (){
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
}
ReactDOM.render(<App/>,document.getElementById("root"));
export default App;

reportWebVitals();
