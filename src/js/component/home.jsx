//@ts-check 
import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Home = () => {
	return (
		<div className="text-center">
			
			<Navbar/>
			<div className="container">
				<div className="row">
					<Jumbotron/>
				</div>
				<div className="row">
					
					<div className="col-3"> 
						<Card
							img="https://picsum.photos/400/300?random"
						/> 
					</div>
					<div className="col-3"> 
						<Card
							img="https://picsum.photos/400/300?random"
						/> 
					</div>
					<div className="col-3"> 
						<Card
							img="https://picsum.photos/400/300?random"
						/> 
					</div>
					<div className="col-3"> 
						<Card
							img="https://picsum.photos/400/300?random"
						/> 
					</div>

				</div>
			</div>

		</div>
	);
};

export default Home;
