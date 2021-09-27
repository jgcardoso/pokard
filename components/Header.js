import React from 'react'
import styles from './../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerGrid}>
        
          <div className={styles.headerLogo}>
            <a href="#">
              <span className={styles.icoLogo}></span>
              Pokard
            </a>
          </div>
          <div className={styles.headerMenu}>
            <nav>
              <a href="#">Cards</a>
              <a href="#">Sets</a>
              <a href="#">Types</a>
              <a href="#">Rarities</a>
            </nav>
          </div>

        </div> 
      </div>
    </header>
  )
}

export default Header
