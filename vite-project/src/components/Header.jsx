import styles from './Header.module.css'
import logo from '../img/logo.png'

export function Header() {
    return (
        <header className ={styles.header}>

            <img src={logo} alt="Logo" />
            
           
        </header>
    );
}