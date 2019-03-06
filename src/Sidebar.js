import React, { Component } from "react";

export default class Sidebar extends Component {
	render() {
		return (
			<div id="sidebar">
				<img src="theindex.svg" className="logo" alt="the index logo" />
				<section>
					<h4 className="menu-item active">
						<button>AUTHORS</button>
					</h4>
				</section>
			</div>
		);
	}
}
