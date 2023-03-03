import React from 'react'
import './about.css'
import ME from '../../assets/Firmware-amico (2).png'
import { FaAward } from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
	return (
		<section id="about">
			<h5>Get to Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About Image" />
					</div>
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className='about__card'>
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>2+ Year Developing Personal Projects</small>
						</article>

						{/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

						<article className='about__card'>
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>10+ Completed Projects</small>
						</article>
					</div>
					<p>
						As a junior full-stack developer with experience in HTML, CSS, JavaScript, PHP, React, NodeJS, MySQL, and MongoDB, i have a strong foundation for building robust and dynamic web applications.
						My skills in front-end technologies such as HTML, CSS, and JavaScript enable me to create intuitive user interfaces, while mine expertise in back-end technologies such as PHP, NodeJS, MySQL, and MongoDB
						empowers me to design and develop scalable server-side applications. With mine familiarity in React, i can build powerful web applications with a modular architecture and reusable components.
						Overall, mine well-rounded experience makes me an asset to any team looking for a talented and adaptable junior full-stack developer.
					</p>
					<div className='center__btn__about'>
						<a href="#contact" className='btn btn-primary'>Let`s Talk</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About