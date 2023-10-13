import React from "react";
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <div>
      <div className={style.newItem}>
        <div className={style.whislist}>
          <button type="submit">
            <img
              id="change"
              src={props.imageWish}
              onClick={() => addtoWishlist(props)}
            />
          </button>
        </div>
        <div className={style.imageClass}>
          <img src={props.productimage} />
        </div>

        <div className={style.imageTitleAndPrice}>
          <div className={style.imageTitle}>{props.nameOfProduct}</div>
          <div className={style.imagePrice}>
            <div>AED</div>
            <div className={style.boldPrice}>{props.price}</div>
          </div>
          <button type="submit" onClick={() => props.addtocart(props)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
