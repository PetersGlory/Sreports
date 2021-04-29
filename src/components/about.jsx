import React from "react";

class About extends React.Component{
	render(){
		return(
			<div className="container mt-5"><br /><br />
					<div className="mt-5 container">
					<div className="col-md col">
						<h3 className="text-center text-primary">About Us</h3>
						<p className="text-secondary text-center">Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Adipisci, quae deleniti rerum repudiandae. Doloribus qui amet rerum dolorem a debitis ea .</p>
					</div>
					<div className="col-md col">
						<h3 className="text-center text-primary">What We Do..</h3>
						<p className="text-secondary text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, alias accusamus nostrum? Ipsam, molestias. Exercitationem, fugit earum nesciunt ex.</p>
						<div className="mt-3">
							 <ul className="list-group">
							    <li className="list-group-item d-flex justify-content-between align-items-center">
							      <i className="fa fa-book"></i>
							      <span className="text-secondary">Get Your Informations</span>
							    </li>
							    <li className="list-group-item d-flex justify-content-between align-items-center">
							     <i className="fa fa-bell"></i>
							      <span className="text-secondary">Gets your Reports..</span>
							    </li>
							    <li className="list-group-item d-flex justify-content-between align-items-center">
							     <i className="fa fa-list"></i>
							      <span className="text-secondary">Tender your reports to the World </span>
							    </li>
							 </ul>
						</div>
					</div>
				</div>
			</div>
			)
	}
}
export default About;