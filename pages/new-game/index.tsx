import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Snowfall from "react-snowfall";

import Overlay from "../../components/UI/Overlay";
import Modal from "../../components/UI/Modal";
import GameForm from "../../components/form/GameForm";

const inter = Inter({ subsets: ["latin"] });
const snowFlakeSpeed = [0.25, 0.5];

const NewGamePage = () => {
	return (
		<>
			<main className={`${inter.className}`}>
				<Snowfall speed={snowFlakeSpeed} />
				<Overlay />
				<Modal>
					<GameForm />
				</Modal>
			</main>
		</>
	);
};

export default NewGamePage;
