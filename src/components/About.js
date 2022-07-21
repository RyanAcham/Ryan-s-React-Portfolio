import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('')}
					alt="photo of me!!"
					className="photo"
				/>
			</div>
			<div>
				<p>
					Insert Descriptor Here!!
				</p>
			</div>
		</section>
	);
}

export default About;