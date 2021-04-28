import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component{
	render(){
		return(
			<div>
					<header>
		<br /> <br />
		<div className="intro"><br /> <br /><br /> <br />
			<h3 className="text-center text-white"><i>Sickness Report</i></h3>
			<center><Link className="btn btn-warning rounded" to="/makeReport">Make Report</Link></center>
		</div>
		</header>
			</div>
			)
	}
}
export default Header;