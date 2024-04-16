import { HeaderPropsType } from "../../types/HeaderPropsType"
import styles from "./Header.module.css"
import { CartSvg } from "./icons/CartSvg"

export const Header = ({ totalPrice, onClickCart }: HeaderPropsType) => {
  return (
    <header>
      <div className="container d-flex justify-between align-center">
        <div className={`${styles.headerLeft} d-flex`}>
          <img width={40} height={40} src="./img/logo.png" alt="logo" />
          <div className={styles.content}>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className={`${styles.headerRight} d-flex`}>
          <li className="d-flex align-center cu-p" onClick={onClickCart}>
            <CartSvg />
            <span>{totalPrice} руб.</span>
          </li>
          {/* <li className="d-flex align-center cu-p">
            <UserSvg />
            <span>Профиль</span>
          </li> */}
        </ul>
      </div>
    </header>
  )
}
