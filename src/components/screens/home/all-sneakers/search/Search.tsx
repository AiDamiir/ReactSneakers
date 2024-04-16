import { ChangeEvent } from "react";
import { DeleteSvg } from "../../../../../layout/cart/cart-item/DeleteSvg";
import styles from "./Search.module.css";
import { SearchSvg } from "./SearchSvg";

type SearchProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

export const Search = ({ searchValue, setSearchValue }: SearchProps) => {
  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={`${styles.searchBox} d-flex align-center`}>
      <SearchSvg />
      <input
        onChange={onChangeSearchValue}
        value={searchValue}
        placeholder="Поиск..."
      />
      {searchValue && (
        <button onClick={() => setSearchValue("")}>
          <DeleteSvg />
        </button>
      )}
    </div>
  );
};
