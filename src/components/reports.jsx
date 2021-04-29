import React from "react";
import {Link} from "react-router-dom";

class Reports extends React.Component{
state={
	reports:[]
}
componentWillMount(){
	const recieve = JSON.parse(localStorage.getItem("makereport"));
	this.setState({
		reports:[recieve]
	})
}
	render(){
		return(
			<div className="container mt-5">
				<br /><br />
				<h3 className="text-center text-primary">All Reports</h3>
				<div className="col-12">
					<table className="table table-hover table-responsive">
						<thead className="thead-dark">
						    <tr>
								<th className="text-center text-white">S/N</th>
								<th className="text-center text-white">FullName</th>
								<th className="text-center text-white">Mail Address</th>
								<th className="text-center text-white">Sickness Type</th>
								<th className="text-center text-white">Resident Address</th>
							</tr>
						</thead>
							<tbody>
								{this.state.reports.map( (report, index) =>(
									<tr key={index+1}>
										<td className="text-center text-primary">{index+1}</td> 
										<td className="text-center text-primary">{report.name}</td> 
										<td className="text-center text-primary">{report.mail}</td> 
										<td className="text-center text-primary">{report.sickType}</td> 
										<td className="text-center text-primary">{report.address}</td> 
									</tr>
									))}
							</tbody>
							<Link className="btn btn-success mx-auto d-block" to="/">Back to Home</Link>
					</table>
				</div>
			</div>
			)
	}
}
export default Reports;