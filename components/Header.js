import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './../styles/Header.module.css'

function Header() {
  const router = useRouter()

  const [inputSearch, setInputSearch] = React.useState('')

  function handleForm(e) {
    e.preventDefault()

    if(!inputSearch.trim()) return

    router.push(`/search/${inputSearch}`)
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerGrid}>
        
          <div className={styles.headerLogo}>
            <Link href="/">
              <a>
                <span className={styles.icoLogo}></span>
                Pokard
              </a>
            </Link>
          </div>
          <div className={styles.headerMenu}>
            <nav>
              <a href="#">Cards</a>
              <a href="#">Sets</a>
            </nav>
            <div className={styles.formSearch}>
              <form onSubmit={handleForm}>
                <input type="text" placeholder="Search" onChange={(event) => setInputSearch(event.target.value)} />
              </form>
            </div>
          </div>

        </div> 
      </div>
    </header>
  )
}

export default Header
