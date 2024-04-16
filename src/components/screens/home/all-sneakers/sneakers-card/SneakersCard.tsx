import { useEffect, useState } from "react"
import ContentLoader from "react-content-loader"
import styles from "./SneakersCard.module.css"

export const SneakersCard = ({
  image,
  name,
  price,
  onPlus,
  added = false,
  loading = false,
}: any) => {
  const [isAdded, setIsAdded] = useState(added)

  useEffect(() => {
    setIsAdded(added)
  }, [added])

  const onClickAdd = () => {
    setIsAdded(!isAdded)
    onPlus()
  }

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={202}
          viewBox="0 0 150 202"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="112" />
          <rect x="0" y="130" rx="0" ry="0" width="150" height="15" />
          <rect x="0" y="150" rx="0" ry="0" width="100" height="15" />
          <rect x="0" y="180" rx="0" ry="0" width="80" height="22" />
          <rect x="115" y="170" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <img width={133} height={112} src={image} alt="Sneakers" />
          <h5>{name}</h5>
          <div
            className={`${styles.cardBottom} d-flex justify-between align-center`}
          >
            <div className="d-flex flex-column">
              <span className="text-uppercase">Цена:</span>
              <b>{price} руб.</b>
            </div>
            <button
              className={`${isAdded ? styles.plusClicked : styles.plus} ${styles.clickAdd
                }`}
              onClick={onClickAdd}
            >
              <img
                height={32}
                width={32}
                src="./img/icons/plus.svg"
                alt="Add"
              />
              <img
                className={styles.plusClickedImage}
                height={32}
                width={32}
                src="./img/icons/plusClicked.svg"
                alt="Add"
              />
            </button>
          </div>
        </>
      )}
    </div>
  )
}
