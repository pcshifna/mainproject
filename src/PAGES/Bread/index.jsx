import React from "react";
import style from "./Bread.module.css";

import { useEffect, useState } from "react";

import { AllMenuContext } from "../../App";
import { useContext } from "react";
import Fav from "../../assets//Favorite.svg";

const Bread = () => {
  var { count, setCount } = useContext(AllMenuContext);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://api.goldenloafuae.com/api/products")
      .then((response) => response.json())
      .then((posts) => setPost(posts));
  }, []);

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className={style.my}>
      <div className={style.fullCard}>
        {posts.data
          ?.filter(
            (item) => item.categories[0]._id === "61de82fb0bb93dd31585c30e"
          )
          .map((post) => (
            <div className={style.newItem} key={post._id}>
              <div className={style.whislist}>
                <img src={Fav} alt="wishlist" />
              </div>
              <div className={style.imageClass}>
                <img
                  src={`https://api.goldenloafuae.com/${post.images?.mainimage}`}
                />
              </div>

              <div className={style.imageTitleAndPrice}>
                <div className={style.imageTitle}>{post.name}</div>
                <div className={style.imagePrice}>
                  <div>AED</div>
                  <div className={style.boldPrice}>{post.price}</div>
                </div>
                <button type="submit" onClick={handleAdd}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Bread;
