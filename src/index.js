import React from 'react';
import ReactDOM from 'react-dom/client';

function App(){
  return(
    <h3>ფუნქციური კომპონენტი</h3>
  )
}
 
class App2 extends React.Component {
  FunctionalComponent() {
    return <h1>Hello world</h1>;
  }
  
  render() {
    return (

      <div>
        <hr></hr>
        <h3>class component</h3>
        {this.FunctionalComponent()}
      </div>
    );
  }
}

function Main(){
  return(
    <div>
      <App/>
      <App2/>
    </div>
  )
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Main/>);

