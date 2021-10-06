import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../assets/ProfilePic.png').default}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
				Hi, my name is Bailey and I live in IDallas, TX. I'm currently working on 
				a certificate in Full Stack Web Development from Southern Methodist 
				University Coding Boot Camp. Innovative problem-solver who is passionate 
				about developing apps and features. Strengths in creativity, teamwork, 
				and building projects from ideation to execution.
				</p>
			</div>
		</section>
	);
}

export default About;