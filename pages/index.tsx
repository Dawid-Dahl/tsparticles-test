import type { NextPage } from "next"
import Head from "next/head"
import ParticlesContainer from "../components/ParticlesContainer"
import styles from "../styles/Home.module.scss"

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Particles</title>
				<meta name="particles" content="particles next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.container}>
				<h1>particles.</h1>
				<ParticlesContainer />
			</main>
		</div>
	)
}

export default Home
