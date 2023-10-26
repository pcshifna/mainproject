import React from "react";
import style from "./Card.module.css";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect ,useContext} from "react";
import { Link } from "react-router-dom";
import { AllClickedProdut } from "../../App";
const Categories = (props) => {
  const { categoryid } = useParams();
  const [itemlist, setItemList] = useState();
var { setProduct } = useContext(AllClickedProdut);
  useEffect(() => {
    if (categoryid) {
      Axios.get(
        `https://api.goldenloafuae.com/api/products?category=${categoryid}`
      ).then((res) => {
        setItemList(res.data.data);
      });
    }
  }, [categoryid]);


const addtocart =(it)=>{
setProduct((prevState) => {
      let prodIndex = prevState?.products?.findIndex(
        (product) => product.code === it.code
      );

      if (prodIndex !== -1) {
        return prevState;
      } else {
        return {
          products: [...prevState.products, { ...it, count: 1 }],
          totalCount: prevState.totalCount + 1,
        };
      }
    });
}

  return (
    <div>
      <div className={style.fullCard}>
        {itemlist?.map((it) => (
          <div className={style.newItem} key={it.code}>
            <div className={style.whislist}>
              <button type="submit">
                <img
                  id="change"
                  src={props.imageWish}
                  onClick={() => addtoWishlist(props)}
                />
              </button>
            </div>

            <Link
              to={`/product/${it?.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div className={style.imageClass}>
                <img
                  src={`https://api.goldenloafuae.com/${it.images?.mainimage}`}
                />
              </div>
            </Link>
            <div className={style.imageTitleAndPrice}>
              <Link
                to={`/product/${it?.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div className={style.imageTitle}>{it.name}</div>
              </Link>

              <div className={style.imagePrice}>
                <div>AED</div>
                <div className={style.boldPrice}>{it.price}</div>
              </div>
              <button type="submit" onClick={() => addtocart(it)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
