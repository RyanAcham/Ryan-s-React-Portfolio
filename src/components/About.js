import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../assets/me.png')}
					alt="photo of me!!"
					className="photo"
				/>
			</div>
			<div>
				<p>
					Hi there! I'm Ryan Acham and I am a Full-Stack Developer. I am an alumni of UofT's Coding Bootcamp, and with 
					my graduation I have learned how to code in JS, CSS, HTML, as well as Node and Express.js, React, and Tailwind.
					I am quick and eager to learn, and I am looking forward to starting my career as a Full-Stack developer!!
				</p>
			</div>
		</section>
	);
}

export default About;