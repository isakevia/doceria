import styles from './Cardapio.module.scss';
import logo from 'assets/logo.png'

export default function Cardapio(){
    return (
        <main>
            <nav className={styles.menu}>Doceria
            <img src={logo} alt="logo" />
            </nav>
        </main>
    );
}