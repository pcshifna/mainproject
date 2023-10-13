import { useEffect, useState } from "react";
import style from "./Confectionery.module.css";
import { useContext } from "react";
import Fav from "../../assets//Favorite.svg";
import { AllClickedProdut } from "../../App";
import CommonBackgroundImage from "../../COMPONENTS/commonBackgroundImage/index";
import Card from "../../COMPONENTS/Card/index";
import MyBackground from "../../assets/bg-2.jpg";
const Confectionery = () => {
  const [posts, setPost] = useState([]);
 
  var { setProduct } = useContext(AllClickedProdut);

  useEffect(() => {
    fetch("https://api.goldenloafuae.com/api/products")
      .then((response) => response.json())
      .then((posts) => setPost(posts));
  }, []);

  const handleAdd = (post) => {
    setProduct((prevState) => {
      let prodIndex = prevState?.products?.findIndex(
        (product) => product.code === post.code
      );

      if (prodIndex !== -1) {
        return prevState;
      } else {
        return {
          products: [...prevState.products, { ...post, count: 1 }],
          totalCount: prevState.totalCount + 1,
        };
      }
    });
  };
const text="Confictionery";
  return (
    <>
      <CommonBackgroundImage data={text} backImage={MyBackground} />

      <div className={style.my}>
        <div className={style.fullCard}>
          {posts.data
            ?.filter(
              (item) => item.categories[0]._id === "61de831e0bb93dd31585c314"
            )
            .map((post) => (
              <Card
                key={post._id}
                data={post}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Confectionery;
