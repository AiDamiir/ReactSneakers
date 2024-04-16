import styles from "./CartItem.module.css";
import { DeleteSvg } from "./DeleteSvg";

type CartItemProps = {
  id: number;
  image: string;
  name: string;
  price: string;
  onRemoveItem: (id: number) => void;
};

export const CartItem = ({
  id,
  image,
  name,
  price,
  onRemoveItem,
}: CartItemProps) => {
  return (
    <div className={`${styles.cartItem} d-flex align-center`}>
      <div
        className={`${styles.image} d-flex`}
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="w100p">
        <p>{name}</p>
        <div className="d-flex justify-between align-center">
          <b>{price} руб.</b>
          <button onClick={() => onRemoveItem(id)}>
            <DeleteSvg />
          </button>
        </div>
      </div>
    </div>
  );
};
