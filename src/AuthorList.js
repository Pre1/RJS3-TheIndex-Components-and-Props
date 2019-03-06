import React, { Component } from "react";

import AuthorCard from './AuthorCard'

export default class AuthorList extends Component {
	render() {

		let authCards = this.props.authors.map( (elm, indx) => 
	        <AuthorCard
	        	key = {`${indx}-${elm.first_name}`}
				authItem = {elm}
	        />
        );

		console.log("this AuthorLis: ", this);

		return (
			<div className="authors">
				<h3>Authors</h3>
				<div className="row">
						
					{authCards}

				</div>
			</div>
		);
	}
}