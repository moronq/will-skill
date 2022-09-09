import React, { useEffect, useState } from 'react'
import logo from '../../img/logo.svg'
import cart from '../../img/cart.svg'
import styles from './Header.module.scss'

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false)
  useEffect(() => {
    if (burgerActive) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [burgerActive])
  const burgerClass =
    `${styles.headerBurger}` + ' ' + `${burgerActive ? styles.active : ''}`
  const burgerMenuClass =
    `${styles.headerNavContainer}` +
    ' ' +
    `${burgerActive ? styles.active : ''}`

  const burgerButtonToggle = () => {
    setBurgerActive((prev) => !prev)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerBody}>
          <a href="#" className={styles.headerLogo}>
            <img src={logo} alt="logo" width={'120px'} />
          </a>
          <nav className={burgerMenuClass}>
            <ul className={styles.headerList}>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Оплата и доставка</a>
              </li>
              <li>
                <a href="#">Возврат</a>
              </li>
              <li>
                <a href="#">Исследования</a>
              </li>
              <li>
                <a href="#">Личный кабинет</a>
              </li>
              <li>
                <a href="tel:888006000990">8 8 (800) 600-09-90</a>
              </li>
            </ul>
          </nav>
          <a href="#" className={styles.headerCart}>
            <img src={cart} alt="cart" />
            <span>1</span>
          </a>
          <button className={burgerClass} onClick={burgerButtonToggle}>
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
