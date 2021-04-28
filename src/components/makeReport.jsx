import React from "react";

class MakeReports extends React.Component{
		state={
		name:'',
		address:'',
		mail:'',
		sickType:''
	};
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		});
	};
	handleSubmit =()=>{
		localStorage.makereport = JSON.stringify(this.state);
	setTimeout(()=>{
			this.setState({
				name:'',
			address:'',
			mail:'',
			sickType:''
			})
		}, 1000);
	};
	render(){
		return(
			<div className="container mt-5">
				<br/><br/>
				<h3 className="text-center text-primary">Make Reports.</h3>
				<div className="col">
					<div className="form-group">
						<label htmlFor="name">Full Name <span className="text-danger">*</span></label>
						<input type="text" onChange={this.handleChange} className="form-control" name="name" value={this.state.name} placeholder="Enter your Name" id="name" />
					</div>
						<div className="form-group">
						<label htmlFor="mail">Mail Address <span className="text-danger">*</span></label>
						<input type="email" onChange={this.handleChange} className="form-control" name="mail" value={this.state.mail} placeholder="Enter your Name" id="mail" />
					</div>
						<div className="form-group">
						<label htmlFor="sickType">Sickness Type <span className="text-danger">*</span></label>
						<input type="text" onChange={this.handleChange} className="form-control" name="sickType" value={this.state.sickType} placeholder="Enter your Name" id="sickType" />
					</div>
						<div className="form-group">
						<label htmlFor="address">Address <span className="text-danger">*</span></label>
						<input type="text" onChange={this.handleChange} className="form-control" name="address" value={this.state.address} placeholder="Enter your Name" id="address" />
					</div>
					<button className="btn btn-block btn-success" onClick={this.handleSubmit}>Send</button>
				</div>
				<br /><br />
			</div>
			)
	}
}
export default MakeReports;