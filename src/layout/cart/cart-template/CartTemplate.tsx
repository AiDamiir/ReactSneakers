import { GreenButton } from "../../../components/ui/green-button/GreenButton";
import styles from "./CartTemplate.module.css";

type CartEmptyProps = {
  image: string;
  title: string;
  text: string;
  buttonText: string;
  onClose: () => void;
};

export const CartTemplate = ({
  image,
  title,
  text,
  buttonText,
  onClose,
}: CartEmptyProps) => {
  return (
    <div className={`${styles.cartEmpty} text-center`}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <div className={styles.buttonWrapper} onClick={onClose}>
        <GreenButton name={buttonText} />
        <img
          width={13.7}
          height={12}
          src="./img/icons/arrowLeft.svg"
          alt="arrow"
        />
      </div>
    </div>
  );
};
