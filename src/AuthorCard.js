import React, { Component } from "react";

export default class AuthorCard extends Component {

	render() {
		console.log("this AuthorCard: ", this);
		// console.log("this AuthorCard KEY: ", this.props.key);
		const authObj = this.props.authItem
		return (
			<div className="col-lg-4 col-md-6 col-12">
				
				<div className="card">
					<div className="image">
						<img
							className="card-img-top img-fluid"
							src={authObj.imageUrl}
							alt={
								authObj.first_name +
								" " +
								authObj.last_name
							}
						/>
					</div>
					<div className="card-body">
						<h5 className="card-title">
							<span>
								{authObj.first_name +
									" " +
									authObj.last_name}
							</span>
						</h5>
						<small className="card-text">
							{authObj.books.length} books
						</small>
					</div>
				</div>

			</div>
		);
	}
}