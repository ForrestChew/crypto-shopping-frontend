import { useGetProductImageUrl } from "../../hooks/useGetProductImageUrl";
import { capitalizeStr, numToPrice } from "../../utils";
import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({
  productInfo: { id, title, category, price, quantity, rating, image_title },
}) => {
  const imgUrl = useGetProductImageUrl(image_title);

  return (
    <NavLink to={`/products/${id}`}>
      <article className="card">
        <header className="card__header">
          <h4 className="card__heading">{capitalizeStr(title)}</h4>
        </header>
        <img
          className="card__img"
          src={imgUrl}
          alt=""
          width="1024px"
          height="640px"
        />
        <div className="card__info">
          <h4>{numToPrice(price)}</h4>
          <p>Rating: {rating}/5 Stars</p>
        </div>
        <footer></footer>
      </article>
    </NavLink>
  );
};

export default Card;
