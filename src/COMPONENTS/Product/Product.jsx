import React from "react";
import style from "./Product.module.css";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Product = () => {
  const { slugname } = useParams();
  const [productDetails, setproductDetails] = useState();

  useEffect(() => {
    Axios.get(
      `https://api.goldenloafuae.com/api/products/slug/${slugname}`
    ).then((res) => {
      setproductDetails(res.data);
    });
  }, [slugname]);

  return (
    <>
      {/* {console.log(productDetails)} */}
      <header></header>

      <main className={style.product_Page}>
        <section className={style.left_Section}>
          <div className={style.left_Upper}>
            <img
              src={`https://api.goldenloafuae.com/${productDetails?.product?.images?.mainimage}`}
              alt=""
            />
          </div>

          <div className={style.left_Lower}>
            <img
              src={`https://api.goldenloafuae.com/${productDetails?.product?.images?.gallery}`}
              alt=""
            />
          </div>
        </section>
        <section className={style.center_Section}>
          <img
            src={`https://api.goldenloafuae.com/${productDetails?.product?.images?.mainimage}`}
            alt=""
          />
        </section>
        <section className={style.right_Section}>
          <div>
            <p>{productDetails?.product?.name}</p>
          </div>
          <div>{productDetails?.product?.price}</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </main>
    </>
  );
};

export default Product;
