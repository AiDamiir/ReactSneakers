import { GreenButtonType } from "../../../types/GreenButtonType";
import styles from "./GreenButton.module.css";

export const GreenButton = ({ name }: GreenButtonType) => {
  return <button className={styles.greenButton}>{name}</button>;
};
