import React from "react"
import styles from "../styles/ParticlesContainer.module.scss"
import Particles from "react-tsparticles"
import { Main, Container } from "react-tsparticles"

interface Props {}

const ParticlesContainer = (props: Props) => {
	const particlesInit = (main: Main) => {
		console.log(main)

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	}

	const particlesLoaded = (container: Container) => {
		console.log(container)
	}

	return (
		<div className={styles.container}>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					fpsLimit: 60,
					background: {
						color: {
							value: "#000",
						},
						position: "center",
						repeat: "no-repeat",
						size: "cover",
						opacity: 1,
					},
					fullScreen: {
						enable: false,
						zIndex: 0,
					},
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: "push",
							},
							onHover: {
								enable: true,
								mode: "repulse",
							},
							resize: true,
						},
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40,
							},
							push: {
								quantity: 1,
							},
							repulse: {
								distance: 100,
								duration: 0.1,
							},
						},
					},
					particles: {
						color: {
							value: "#ffffff",
						},
						links: {
							color: "#ffffff",
							distance: 150,
							enable: false,
							opacity: 0.5,
							width: 1,
						},
						collisions: {
							enable: false,
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 1,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 800,
							},
							value: 20,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "images",
							options: {
								images: [
									{
										src: "https://svgshare.com/i/bor.svg",
									},
									{
										src: "https://particles.js.org/images/cyan_amongus.png",
									},
								],
							},
						},
						size: {
							random: true,
							value: 50,
						},
						rotate: {
							value: {
								min: 0,
								max: 360,
							},
							animation: {
								enable: true,
								speed: 1,
								sync: true,
							},
						},
					},
					detectRetina: true,
				}}
			/>
		</div>
	)
}

export default ParticlesContainer
