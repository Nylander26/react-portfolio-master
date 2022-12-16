import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/weather.jpg'
import IMG2 from '../../assets/foro.png'
import IMG3 from '../../assets/gestor_fotos.jpg'
import IMG4 from '../../assets/conectax.png'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'


const data = [
	{
		id: 1,
		image: IMG1,
		title: 'Weather App',
		github: 'https://github.com/Nylander26/react-weather-app',
		demo: 'https://nylander26.github.io/react-weather-app/'
	},
	{
		id: 2,
		image: IMG2,
		title: 'Foro APP',
		github: 'https://github.com/Nylander26/Foro-LaRuecaF5-wolfgang',
		demo: ''
	},
	{
		id: 3,
		image: IMG3,
		title: 'Gestor Fotos',
		github: 'https://github.com/Nylander26/Gestor-fotos',
		demo: ''
	},
	{
		id: 4,
		image: IMG4,
		title: 'Conecta X',
		github: 'https://github.com/Nylander26/ConectaX',
		demo: 'https://nylander26.github.io/ConectaX/'
	}
]

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{
					data.map(({ id, image, title, github, demo }) => {
						return (
							<article key={id} className="portfolio__item">
								<div className="portfolio__item-image">
									<img src={image} alt={title} />
								</div>
								<h3>{title}</h3>
								<div className="portfolio__item-cta">
									<a href={github} className='btn btn-primary'>Github</a>
									{
									demo === "" ? <a href={demo} className='btn-none' target='_blank' rel="noreferrer">Live Demo</a> : 
									<a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
									}
								</div>
							</article>
						)
					})
				}
			</div>
		</section>
	)
}

export default Portfolio