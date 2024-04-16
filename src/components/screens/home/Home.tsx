import axios from "axios"
import { useEffect, useState } from "react"
import { Cart } from "../../../layout/cart/Cart"
import { Footer } from "../../../layout/footer/Footer"
import { Header } from "../../../layout/header/Header"
import { SneakersDataType } from "../../../types/SneakerDataType"
import { AllSneakers } from "./all-sneakers/AllSneakers"

export const Home = () => {
  const [items, setItems] = useState<SneakersDataType[]>([])
  const [cartItems, setCartItems] = useState<SneakersDataType[]>([])
  const [isOpened, setIsOpened] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [totalPrice, setTotalPrice] = useState("0")
  const [count, setCount] = useState(0)

  const onClickCart = () => {
    document.getElementById("root")?.classList.add("lock")
    setIsOpened(true)
  }

  const onCloseCart = () => {
    document.getElementById("root")?.classList.remove("lock")
    setIsOpened(false)
    setConfirmed(false)
  }

  const onChangeCart = () => {
    const newTotalPrice = cartItems.reduce((total, item) => {
      const itemPrice = Number(item.price.replace(/\s/g, ""))
      return total + itemPrice
    }, 0)
    const formattedTotalPrice = newTotalPrice.toLocaleString()
    setTotalPrice(formattedTotalPrice)
  }
  useEffect(onChangeCart, [cartItems])

  const onAddToCart = async (obj: SneakersDataType) => {
    try {
      const isItemInCart = cartItems.find((item) => item.idc === obj.idc)
      if (!isItemInCart) {
        await axios.post(
          "https://65b01b852f26c3f2139c81de.mockapi.io/cart",
          obj
        )
        setCartItems((prev: SneakersDataType[]) => [...prev, obj])
        await axios
          .get("https://65b01b852f26c3f2139c81de.mockapi.io/cart")
          .then((res) => setCartItems(res.data))
      }
    } catch (error) {
      alert("Произошла ошибка при добавлении в корзину, повторите попытку")
    }
  }

  const onRemoveItem = async (id: number) => {
    try {
      await axios.delete(
        `https://65b01b852f26c3f2139c81de.mockapi.io/cart/${id}`
      )
      setCartItems((prev) => prev.filter((item) => item.id !== id))
    } catch (error) {
      setCartItems((prev) => [...prev])
      alert("Произошла ошибка при удалении из корзины, повторите попытку")
    }
  }

  return (
    <>
      <Cart
        count={count}
        items={cartItems}
        isOpened={isOpened}
        confirmed={confirmed}
        totalPrice={totalPrice}
        setCount={setCount}
        onClose={onCloseCart}
        setConfirmed={setConfirmed}
        setCartItems={setCartItems}
        onRemoveItem={onRemoveItem}
      />
      <Header totalPrice={totalPrice} onClickCart={onClickCart} />
      <main className="page page-home">
        <div className="container">
          {/* <SwiperCompontent /> */}
          <AllSneakers
            items={items}
            cartItems={cartItems}
            setItems={setItems}
            onAddToCart={onAddToCart}
            setCartItems={setCartItems}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
