import React from "react";
import style from "./Facilities.module.css";
import Right from "../../assets/newimg.webp";
import MyBackground from "../../assets/bg-2.jpg";
import CommonBackgroundImage from "../../COMPONENTS/commonBackgroundImage/index";
const Facilities = () => {
  const text = "Facilities";
  return (
    <div>
      <CommonBackgroundImage data={text} backImage={MyBackground} />
      <div className={style.briefHeadContainer}>
        <div className={style.briefHead}>
          <p>A BRIEF LOOK INTO OUR FACILITIES</p>
        </div>
        <div className={style.briefHeadLines}>
          <div className={style.briefHeadLine1}></div>
          <div className={style.briefHeadLine2}></div>
        </div>
      </div>
      <div className={style.briefContents}>
        <div className={style.briefLeft}>
          <p className={style.briefLeftHead}>WHERE WE BAKE AND CAKE</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero atque odit neque, laboriosam possimus ut in provident doloribus accusamus quam vero sint aperiam, id labore sapiente consectetur quisquam reprehenderit nesciunt!
            Explicabo eos molestias ea vitae nisi, hic dolor nesciunt facilis consequuntur delectus nobis dolore, similique omnis cum a earum adipisci accusamus ex nulla magnam voluptate? Quaerat corporis officia numquam facilis.
          </p>
        </div>
        <div className={style.brieRight}>
          <img src={Right} />
        </div>
      </div>
      <div className={style.hyginContents}>
        <div className={style.hyginLeft}>
          <img src={Right} />
        </div>
        <div className={style.hyginRight}>
          <p className={style.hyginRightHead}>HYGIENE</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quae voluptate in ipsam, rerum nulla minus nihil est, neque sapiente porro corrupti id ipsum odit eos necessitatibus error facere sunt.
            Voluptates blanditiis magnam eveniet totam ut ex, hic, itaque odit alias asperiores tenetur rem nulla consequatur repellat quaerat architecto adipisci iusto quibusdam. Odit nesciunt consectetur ipsam quisquam deserunt labore dolor?
          </p>
        </div>
      </div>
      <div className={style.facilitiesLast}>
        <p>
          We have highly trained and disciplined staff working with a
          professional and dedicated management, catering to the needs of UAE’s
          multinational/multiracial society.
        </p>
      </div>
    </div>
  );
};

export default Facilities;
