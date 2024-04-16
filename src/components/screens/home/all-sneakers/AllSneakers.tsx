import axios from "axios"
import { useEffect, useState } from "react"
import { AllSneakersType } from "../../../../types/AllSneakersType"
import styles from "./AllSneakers.module.css"
import { Search } from "./search/Search"
import { SneakersCard } from "./sneakers-card/SneakersCard"

const arr = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
]

export const AllSneakers = ({
  items,
  setItems,
  cartItems,
  onAddToCart,
  setCartItems
}: AllSneakersType) => {
  const [isLoading, setIsLoading] = useState(true)
  const [searchValue, setSearchValue] = useState("")

  const itemIsAdded = (card: any) =>
    cartItems.some((item) => item.idc === card.idc)

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://65b01b852f26c3f2139c81de.mockapi.io/cart")
        .then((res) => setCartItems(res.data))
      await axios
        .get("https://65b01b852f26c3f2139c81de.mockapi.io/items")
        .then((res) => setItems(res.data))
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.content}>
      <div className={`${styles.head} d-flex justify-between align-center`}>
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </h1>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="d-flex flex-wrap justify-center">
        {isLoading
          ? arr.map((card) => {
            return <SneakersCard key={card.id} loading={true} />
          })
          : items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((card) => {
              return (
                <SneakersCard
                  key={card.id}
                  {...card}
                  loading={false}
                  cartItems={cartItems}
                  added={itemIsAdded(card)}
                  onPlus={() => onAddToCart(card)}
                />
              )
            })}
      </div>
    </div>
  )
}
