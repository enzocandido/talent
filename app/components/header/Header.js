'use client'

import styles from './header.module.scss'
import Link from 'next/link'
import { Kanit } from 'next/font/google'
import { useState } from 'react'

const kanit = Kanit({
  subsets: ['latin'],
  weight: '400'
})

export default function Header(props) {
  const [logged, setLogged] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.header_nav}>
        <Link href='/' className={styles.header_nav_logo}>
          <p className={kanit.className}>TALENT</p>
        </Link>
        <input type="text" placeholder="Buscar Usuários" className={styles.header_nav_search} />
        <ul className={styles.header_nav_menu}>
          <Link href='/'>
            <li>Home</li>
          </Link>
          {
            logged ?
              <div className={styles.header_nav_menu_logged}>
                <Link href='/profile'>
                  <li>Perfil</li>
                </Link>
                <Link href='/upload'>
                  <li>Enviar Vídeo</li>
                </Link>
              </div>
              :
              props.login ?
                <Link href='/signup'>
                  <li>Criar Conta</li>
                </Link>
                :
                <Link href='/login'>
                  <li>Login</li>
                </Link>
          }
        </ul>
      </nav>
    </header>
  );
}