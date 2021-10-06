import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../assets/BaileyResume.pdf").default} download>
					<h4>Download my Resume</h4>
				</a>
			</div>
			<div>
				<h5>Proficiencies</h5>
				<ol>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>MVC</li>
					<li>Progressive Web Applications (PWA)</li>
					<li>MySQL</li>
					<li>NoSQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
				
			</div>
		</section>
	);
}

export default Resume;