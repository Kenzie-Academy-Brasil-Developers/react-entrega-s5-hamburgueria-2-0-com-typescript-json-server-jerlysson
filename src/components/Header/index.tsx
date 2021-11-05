import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { GiExitDoor } from "react-icons/gi";
import { History } from "history";
import { useHistory } from "react-router";
import { useUser } from "../../context/user";
import { useCart } from "../../context/cart";
import {
  ButtonGroup,
  CartButton,
  HeaderField,
  Options,
  ReesponsiveSearchField,
  Search,
  SearchButton,
  SearchField,
  Title,
  ToInput,
} from "./style";
import { useState } from "react";
import { useProduct } from "../../context/product";

interface HeaderProps {
  showCart: boolean;
  setShowCart: any;
}

const Header = ({ showCart, setShowCart }: HeaderProps) => {
  const history = useHistory<History>();
  const { logout } = useUser();
  const { cartProducts } = useCart();
  const { filterByName } = useProduct();
  const [showInput, setShowInput] = useState<boolean>();

  const displayInput = () => {
    if (showInput) {
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  };

  const displayCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  };

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  return (
    <HeaderField justify={showInput}>
      {showInput ? (
        <SearchField>
          <Search
            type="text"
            placeholder="Pesquisar"
            onChange={(event) => filterByName(event.target.value)}
          />
          <SearchButton onClick={displayInput}>
            <AiOutlineSearch />
          </SearchButton>
        </SearchField>
      ) : (
        <>
          <Title>
            Burguer<span>kenzie</span>
          </Title>
          <Options>
            <ReesponsiveSearchField>
              <Search
                type="text"
                placeholder="Pesquisar"
                onChange={(event) => filterByName(event.target.value)}
              />
              <SearchButton onClick={displayInput}>
                <AiOutlineSearch />
              </SearchButton>
            </ReesponsiveSearchField>
            <ButtonGroup>
              <ToInput onClick={displayInput}>
                <AiOutlineSearch />
              </ToInput>
              <CartButton onClick={displayCart}>
                <AiOutlineShoppingCart />
                {cartProducts.length > 0 && <span>{cartProducts.length}</span>}
              </CartButton>
              <button onClick={handleLogout}>
                <GiExitDoor />
              </button>
            </ButtonGroup>
          </Options>
        </>
      )}
    </HeaderField>
  );
};

export default Header;
