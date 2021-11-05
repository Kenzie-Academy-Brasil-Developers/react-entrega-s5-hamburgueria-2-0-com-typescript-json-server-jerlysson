import { IProductCard } from "../../assets/types";
import { useCart } from "../../context/cart";
import {
  AddButton,
  Card,
  CardInfo,
  Frame,
  Image,
  Category,
  Name,
  Price,
} from "./style";

const ProductCard = ({ product }: IProductCard) => {
  const { name, price, category, image } = product;
  const { addToCart } = useCart();

  return (
    <Card>
      <Frame>
        <Image src={image} alt={name} />
      </Frame>
      <CardInfo>
        <Name>{name}</Name>
        <Category>{category}</Category>
        <Price>{`R$ ${price}`}</Price>
      </CardInfo>
      <AddButton onClick={() => addToCart(product)}>Adicionar</AddButton>
    </Card>
  );
};

export default ProductCard;
