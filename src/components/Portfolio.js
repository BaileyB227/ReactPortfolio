import React from 'react';
import Project from './Project';

function Portfolio() {
	const projects = [
		{
			name: 'cryptoxchange',
			description:
				'Convert top world currencies to other top world cryptocurrencies.',
			image: 'cryptoxchange.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Bootstrap',
				'jQuery',
			],
			github: 'https://github.com/BaileyB227/cryptoXchange',
			deployed: 'https://baileyb227.github.io/cryptoXchange/',
		},
		{
			name: 'Password Generator',
			description:
				'Generate a password based on parameters given by the user.',
			image: 'PasswordGenerator.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Bootstrap'
			],
			github: 'https://github.com/BaileyB227/PasswordGenerator',
			deployed: 'https://baileyb227.github.io/PasswordGenerator/',
		},
		{
			name: 'Day Planner',
			description:
				'Plan out your day with this day planner that takes account what time it is.',
			image: 'DayPlanner.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Bootstrap',
			],
			github: 'https://github.com/BaileyB227/DayPlanner',
			deployed: 'https://github.com/BaileyB227/DayPlanner',
		},
		{
			name: 'Recipe Blog',
			description:
				'Post about your recipe aswell as rate/leave comments on others.',
			image: 'RecipeBlog.png',
			technologies: [
				'JavaScript',
				'Node.js',
				'Express',
				'Bootstrap',
				'MVC'
			],
			github: 'https://github.com/hoofmonger/RecipeBlog',
			deployed: 'https://gentle-hamlet-82940.herokuapp.com/',
		}
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;