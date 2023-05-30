import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Snowfall from "react-snowfall";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import Overlay from "../../components/UI/Overlay";
import Modal from "../../components/UI/Modal";
import modalStyles from '../../components/UI/Modal.module.css';
import GameForm from '../../components/form/GameForm';

const inter = Inter({ subsets: ["latin"] });
const snowFlakeSpeed = [0.25, 0.5];


const NewGamePage = () => {

	return (
		<>
			<main className={`${inter.className}`}>
				<Snowfall speed={snowFlakeSpeed} />
				<Overlay />
				<Modal>
                    <Link href="/" className={modalStyles['modal-home-btn']}>
                        <FontAwesomeIcon icon={faHouse} />
                    </Link>
                    <GameForm />
				</Modal>
			</main>
		</>
	);
};

export default NewGamePage;
