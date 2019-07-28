import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import jay1 from "./jay1.JPG";

class LandingPage extends Component {
	render() {
		return (
			<div style={{ width: "100%", margin: "auto" }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img src={jay1} alt="profile" className="avatar-img" />
						<div className="banner-text">
							<h1> Full stack developer</h1>
							<hr />
							<p>
								HTML/CSS | Bootstrap | Javascript | React |
								React Native | NodeJs | Express |Mongodb{" "}
								<div className="social-links">
									{/* Linkedin*/}
									<a
										href="http://google.com"
										rel="noopener noreferrer"
										target="_blank"
									>
										<i
											className="fa fa-linkedin-square"
											aria-hidden="true"
										>
											{" "}
										</i>
									</a>

									{/* Github*/}
									<a
										href="http://google.com"
										rel="noopener noreferrer"
										target="_blank"
									>
										<i
											className="fa fa-github-square"
											aria-hidden="true"
										>
											{" "}
										</i>
										</a>

									{/* freecodecamp*/}
									<a
										href="http://google.com"
										rel="noopener noreferrer"
										target="_blank"
									>
										<i
											className="fa fa-free-code-camp"
											aria-hidden="true"
										>
											{" "}
										</i>
										</a>
									{/* youtube*/}
									<a
										href="http://google.com"
										rel="noopener noreferrer"
										target="_blank"
									>
										<i
											className="fa fa-youtube-square"
											aria-hidden="true"
										>
											{" "}
										</i>


									</a>
								</div>
							</p>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default LandingPage;
