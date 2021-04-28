import React from 'react';
import Header from './header';
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";

class Home extends React.Component{
	state={
		subContent:'',
	};
	handleChange=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		});
		console.log(this.state.sub);
	};
	handleSub=()=>{
		console.log("Have successfully Subscribed " + this.state.subContent);
	}
	render(){
		return(
			<div>
			<Header />
			<div className="mt-5 container-fluid">
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
				<div className="col sub mt-3">
					<h3 className="text-center text-white">Keep Connected..</h3>
					<div className="form-group">
						<input type="text" className="form-control" onChange={this.handleChange} name="subContent" placeholder="Subscribe.." />
						<button className="btn btn-warning rounded btn-block" onClick={this.handleSub}>Subscribe.</button>
					</div>
				</div>
				<div className="col mt-3">
				<h3 className="text-primary text-center">Testimonials..</h3>
					<div id="demo" className="carousel slide" data-ride="carousel">


  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

 
  <div className="carousel-inner">
   <div className="carousel-item active shadow-lg">
   <div className="shadow-lg p-2 card text-center">

  <img src={img1} width="200px" className="card-img-top" alt="Los Angeles" />
  
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos eaque nobis velit cupiditate ullam praesentium exercitationem a, soluta. Vitae ad modi ipsam consectetur quas veritatis deserunt cum ipsum debitis.</p>
   </div>
  	</div>

	   <div className="carousel-item shadow-lg">
 <div className="shadow-lg p-2 card text-center">

  <img src={img2} width="200px" className="card-img-top" alt="Los Angeles" />
  
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure voluptatem totam esse inventore voluptatum natus eius ex porro laudantium maiores aliquam adipisci minus possimus quam, exercitationem, consectetur vitae quas.</p>
   </div>
	</div>

	   <div className="carousel-item shadow-lg">
  <div className="shadow-lg p-2 card text-center">

  <img src={img3} width="200px" className="card-img-top" alt="Los Angeles" />
  
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sit sunt eveniet ratione quibusdam incidunt laborum corrupti optio praesentium, itaque accusantium, ullam labore magni blanditiis delectus officia repellat! Accusantium, eaque!</p>
   </div>
	</div>
  </div>

  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>

</div>
				</div><br />
				<br />
			</div>
			</div>
			)
	}
}
export default Home;