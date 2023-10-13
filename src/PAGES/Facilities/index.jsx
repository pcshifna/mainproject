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
            Our service is to maintain the quality of its products through
            selecting the best base ingredients and raw materials, improving the
            industry to satisfy its clients, and to serve them faster by using
            modern packaging techniques, and continuing to maintain its artistic
            and traditional handcraft through choosing qualified and experienced
            employees.
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
            Over the past four decades Golden Loaf Est. is nourishing different
            generations with varieties of bakery products under hazard free
            environment. Hygiene is the paramount element in our working
            environment to produce high standard and quality products. We
            designed our production cycle by establishing Hazard Analysis and
            Critical Control Point system. (HACCP). Our products are made
            through advanced and calibrated machinery under strict supervision,
            complying with the quality specifications and the requirements of
            International Standard ISO 22000:2018
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
