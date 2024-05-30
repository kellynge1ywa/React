import styles  from './Header.module.css'

function Header ()
{
    return(
        <div className={styles.header}>
            <div>
            <h1>My App</h1>

            </div>
            <div>
            <nav >
                <ul className={styles.nav}>
                    <li ><a className={styles.nav_element} href="#">Home</a></li>
                    <li><a className={styles.nav_element} href="#">About</a></li>
                    <li><a className={styles.nav_element} href="#">Services</a></li>
                    <li><a className={styles.nav_element} href="#">Contact</a></li>
                </ul>
            </nav>

            </div>
            <div>
                Account
            </div>

        </div>
    );

}
export default Header;