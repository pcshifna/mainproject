import React from "react";
import MyBackground from "../../assets/bg-2.jpg";
import CommonBackgroundImage from "../../COMPONENTS/commonBackgroundImage/index";
import style from "./QualityPolicy.module.css";
const QualityPolicy = () => {
  const text = "QUALITY POLICY";
  return (
    <div>
      <CommonBackgroundImage data={text} backImage={MyBackground} />
      <div className={style.qualityHead}>
        <div>THE BEST QUALITY BAKERY PRODUCTS</div>
        <div className={style.lines}>
          <div className={style.Line1}></div>
          <div className={style.Line2}></div>
        </div>
      </div>
      <div className={style.fourColumn}>
        <div className={style.firstColumn}></div>
        <div className={style.secoundColumn}>
          WE MEAN QUALITY Golden Loaf Establishment has committed itself to
          produce the best quality bakery products at a reasonable price to win
          the customer’s satisfaction, increase our market share and maintain
          our reputation. We aim to improve our quality bakery products and
          services, comply with the quality specifications and the requirements
          of international standard ISO 22000:2018. The overall objectives of
          our quality management system (QMS) are: point Establish and maintain
          the highest quality level of all products and activities. point
          Achieve the departmental objectives and stated policies. point
          Effectively utilize the provided resources and continually (as
          possible) seek the best technological methods used in the field. point
          Commit to continually improve the quality of our products and services
          as well to continually improve the applied Quality Management System
          (QMS). point Motivate, involve and develop the skills and abilities of
          all levels of employees through effective training. point Satisfying
          our customers and fulfilling their current needs and anticipate future
          expectations. point Create and maintain a healthy and safe
          work-environment at all levels of the organization. We strongly
          believe that “ honesty and sincerity” are the key of a successful
          business. In summary, our quality policy is: point Know all our
          customers’ needs and expectations point Meet those needs and
          expectations at all times point Do everything right the first time
          point Do it even better the next time
        </div>
        <div className={style.thdColumn}></div>
        <div className={style.fourthColumn}></div>
      </div>
    </div>
  );
};

export default QualityPolicy;
