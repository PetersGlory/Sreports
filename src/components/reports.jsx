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
				<div className="col">
					<table className="table table-hover">
						<thead className="thead-dark">
							<tr>
								<th className="text-center text-white">S/N</th>
								<th className="text-center text-white">FullName</th>
								<th className="text-center text-white">Mail Address</th>
								<th className="text-center text-white">Sickness Type</th>
								<th className="text-center text-white">Resident Address</th>
							</tr>
						</thead>
						<div className="table-responsive">
							<tbody>
								{this.state.reports.map(report =>(
									<tr key={report.id}>
										<td className="text-center text-primary">{report}</td>
										<td className="text-center text-primary">{report.name}</td>
										<td className="text-center text-primary">{report.mail}</td>
										<td className="text-center text-primary">{report.sickType}</td>
										<td className="text-center text-primary">{report.address}</td>
									</tr>
									))}
							</tbody>
						</div>
						<center><Link className="btn btn-success">Back to Home</Link></center>
					</table>
				</div>
			</div>
			)
	}
}
export default Reports;