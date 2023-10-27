import React from "react";
import style from "./Populur.module.css";
import { Link } from "react-router-dom";
import { AllClickedProdut } from "../../App";
import { useContext } from "react";
import { AllWishlistProduct } from "../../App";
import Fav from "../../assets/Favorite.svg";
import { useState } from "react";
import FavActive from "../../assets/fav-active.svg";
const Populur = ({ data }) => {
  const { setProduct } = useContext(AllClickedProdut);
  const { wishlist, setWishlist } = useContext(AllWishlistProduct);
  const [activeImage, setActiveImage] = useState({
    defaultWishListImage: true,
    orangeWishlistimage: false,
  });

  const onChangeImage = () => {
    setActiveImage({
      defaultWishListImage: !activeImage.defaultWishListImage,
      orangeWishlistimage: !activeImage.orangeWishlistimage,
    });
    console.log(activeImage.orangeWishlistimage);
  };

  const addtoCart = (data) => {
    setProduct((prevstate) => {
      let indexofProduct = prevstate?.products?.findIndex(
        (product) => product._id === data._id
      );

      if (indexofProduct !== -1) {
        return prevstate;
      } else {
        return {
          products: [...prevstate.products, { ...data, count: 1 }],
          totalCount: prevstate.totalCount + 1,
        };
      }
    });
  };

  const handleAddtoWishlist = (data) => {
    if (activeImage.defaultWishListImage) {
      setWishlist((prevState) => {
        let proIndex = prevState?.findIndex(
          (product) => product?._id === data?._id
        );
        if (proIndex !== -1) {
          return prevState;
        } else {
          return [...prevState, data];
        }
      });
    } else if (activeImage.orangeWishlistimage) {
      setWishlist((prevState) => {
        return prevState?.filter((product) => product?._id !== data?._id);
      });
    }
  };
  console.log(wishlist);
  return (
    <div>
      <div className={style.newItem}>
        <div className={style.whislist}>
          <button
            type="submit"
            onClick={() => handleAddtoWishlist(data, activeImage)}
          >
            <img
              id="change"
              onClick={() => onChangeImage(activeImage)}
              src={activeImage.defaultWishListImage ? Fav : FavActive}
            />
          </button>
        </div>

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
          <button type="submit" onClick={() => addtoCart(data)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Populur;
