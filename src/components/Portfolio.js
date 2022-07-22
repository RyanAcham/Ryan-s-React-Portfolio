import React from 'react';
import Project from './Projects';

function Portfolio() {
	const projects = [
		{
			name: 'Text Editor Progressive Web Application',
			description:
				'A simple text editor that meets the Progressive Web Application, using JavaScript, HTML, and CSS.',
			image: '../assets/PWA.png',
			technologies: [
				Github,
				Heroku,
				Javascript,
				Html,
				CSS
			],
			github: 'https://github.com/RyanAcham/Text-Editor-Progressive-Web-Application',
			deployed: 'https://text-editor-progressive-web-ap.herokuapp.com/',
		},
		{
			name: 'Express.js Note Taker',
			description:
				'A basic note taker app that takes your notes and stores them to exemplify my proficiency in Express.js, and by extension, Node.js.',
			image: '../assets/notes.png',
			technologies: [
				Github,
				Heroku,
				Javascript,
				Html,
				CSS,
				Express.js,

			],
			github: 'https://github.com/RyanAcham/Ryan-s-Epic-Note-Taker/',
			deployed: 'https://epic-note-taker.herokuapp.com/',
		},
		{
			name: 'Star Wars Database',
			description:
				'A project I worked on with three other students that showcases our knowledge on APIs and how to utilise them. Additionally, I was the lead CSS developer in this project, and learned how to use Tailwind proficiently.'
			image: '../assets/starwar.png',
			technologies: [
				Github,
				Github Pages,
				Javascript,
				Html,
				CSS,
				Tailwind,
				APIs
			],
			github: 'https://github.com/SuedePritch/crispy-spork.git',
			deployed: 'https://suedepritch.github.io/crispy-spork/',
		}
		{
			name: 'Professional README Generator',
			description:
				'A program that I made in JavaScript that utilizes Node.js to automatically create a professional README once the user inputs their information.'
			image: '../assets/README.png',
			technologies: [
				Github,
				Javascript,
				Html,
				Node.js
			],
			github: 'https://github.com/RyanAcham/Professional-README-Generator',
			deployed: 'https://github.com/RyanAcham/Professional-README-Generator',
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