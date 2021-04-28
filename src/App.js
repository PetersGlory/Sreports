import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Reports from "./components/reports";
import MakeReport from "./components/makeReport";
import './App.css';

class App extends React.Component {
	
	render() {
   return (
		<React.Fragment>
		<BrowserRouter>
<nav className="navbar navbar-expand-md bg-white navbar-light shadow-lg" id='navbar'>
		  
		  <Link className="navbar-brand" to="/">Sreport</Link>
		  
		  
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		  
		   
		    <div className="collapse navbar-collapse" id="collapsibleNavbar">
		      <ul className="navbar-nav ml-auto">
		        <li className="nav-item">
		          <Link className="nav-link" to="/">Home</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link" to="/about">About</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link" to="/makeReport">Report</Link>
		        </li>
		        <li className="nav-item">
		          <Link className="nav-link" to="/all_reports">All Reports</Link>
		        </li>
		      </ul>
		    </div>
		</nav>
			<div>
			<Switch>
			<Route path='/' component={Home} exact />
			<Route path='/about' component={About} />
			<Route path='/all_reports' component={Reports} />
			<Route path='/makeReport' component={MakeReport} />
			</Switch>
			
			</div>
			<footer className="p-5">
				<h3 className="mt-2 text-center text-white">Footer</h3>
				<nav className="navbar">
				
					<ul className="navbar-nav">
		
		        <li className="nav-item">
		          <a href="https://www.facebook.com" className="nav-link"> <i className="fa fa-facebook text-white"></i> </a>
		        </li>
		      
		     
		        <li className="nav-item">
		          <a href="https://www.instagram.com" className="nav-link"> <i className="fa fa-instagram text-white"></i> </a>
		        </li>
		      
		     
		        <li className="nav-item">
		          <a href="https://www.twitter.com" className="nav-link"> <i className="fa fa-twitter text-white"></i> </a>
		        </li>
		      
		      </ul>
				
				</nav>
			</footer>
		</BrowserRouter>
		</React.Fragment>
   )
  }
}

export default App;
