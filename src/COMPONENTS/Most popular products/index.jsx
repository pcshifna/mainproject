import React from "react";
import style from "./Populur.module.css";
import { Link } from "react-router-dom";
const Populur = ({ data }) => {
  return (
    <div>
      <div className={style.newItem}>
        {/* <div className={style.whislist}>
                <button type="submit">
                  <img
                    id="change"
                    src={}
                    onClick={() => addtoWishlist()}
                  />
                </button>
              </div> */}

        <Link to={`/product/${data?.slug}`} style={{ textDecoration: "none" }}>
          <div className={style.imageClass}>
            <img
              src={`https://api.goldenloafuae.com/${data?.images?.mainimage}`}
            />
          </div>
        </Link>
        <div className={style.imageTitleAndPrice}>
          <Link
            to={`/product/${data?.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div className={style.imageTitle}>{data?.name}</div>
          </Link>

          <div className={style.imagePrice}>
            <div>AED</div>
            <div className={style.boldPrice}>{data?.price}</div>
          </div>
          <button type="submit" onClick={() => addtocart()}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Populur;
