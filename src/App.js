import React from 'react';
import './App.css';
import Header from './Component/Website/Main/Header/Header';
import Footer from './Component/Website/Main/Footer/Footer';
import Contact from './Component/Website/Main/Contact/Contact';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Component/Website/Main/Home/Home';
import Condition from './Component/Statements/Condition/Condition';
import Props from './Component/Statements/Props/props';

function App() {
  // var company="Datacube Software Solutions";
  // function company(name){
  // return <h1>{name}</h1>
  // }
  // var since=2020;
  return (
  //   <div className="App">
  //     <header className="App-header">
  // {company("Datacube Software Solutions")} <span>since <b>{since}</b></span>
  //     </header>
  //   </div>
<Router>
<Header/>
<Footer/>
  <Route path="/" exact component={Home}/>
  <Route path="/Condition" component={Condition}/>
  <Route path="/Contact" component={Contact}/>
  <Route path="/Props" component= {() => <Props title={`Props through component`} />}/>
  {/* recomondaed method */}
  {/* <Route exact path="/props-through-render" render={(props) => <PropsPage {...props} title={`Props through render`} />} /> */}
</Router>
  );
 

}

export default App;
