
import style from "./Swipercomponent.module.css";
import { Link } from "react-router-dom";
const swiperComponent = ({ data }) => {
  return (
    <>
     
      <div className={style.full}>
        <div className={style.swiperParent}>
          <img
            src={`https://api.goldenloafuae.com/${data.images?.menuthumbnail}`}
          />
        </div>
        <div className={style.categoryName}>
          <Link to={`/categories/${data?._id}`}>{data.name}</Link>
        </div>
        <div className={style.square}></div>
      </div>
    </>
  );
};

export default swiperComponent;
