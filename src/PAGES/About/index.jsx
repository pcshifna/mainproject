import React from "react";
import style from "./About.module.css";
import Osamaim from "../../assets/osama1.jpeg";
import Osama from "../../assets/osama.jpeg";
import Passion from "../../assets/passion.jpeg";
import Webp from "../../assets/webp.webp";
import MyBackground from "../../assets/bg-2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperComponent from "../../COMPONENTS/swiperComponent/index.jsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

import GoldenFounder from "../../assets/Golden Loaf M.S. Al Husseiny.jpeg";
import CommonBackgroundImage from "../../COMPONENTS/commonBackgroundImage/index";

const About = () => {
  const a = "about us";

  return (
    <div className={style.about}>
      <CommonBackgroundImage data={a} backImage={MyBackground} />

      <div className={style.aboutChild}>
        <p className={style.aboutfirstp}>GOLDEN LOAF EST. </p>
        <p>PIONEER BAKERS IN THE U.A.E.</p>
      </div>
      <div className={style.lines}>
        <div className={style.longline1}></div>
        <div className={style.longline2}></div>
      </div>
      <div className={style.alignment}>
        <div className={style.passionContent}>
          <div className={style.headingPassion}>
            <p>OUR PASSION – QUALITY BAKED PRODUCTS</p>
          </div>
          <p>
            A pioneer in the bakery industry, Golden Loaf Est. was established
            in the year 1979 with a single minded pursuit of providing best
            quality bread and baked products. Our extensive range of bread and
            confectionery products includes speciality breads like Arabic brown
            bread, Indian pav and Gluten-free products too.
          </p>
          <p>
            Our world class bakery facility is well equipped with advanced
            German machinery. Our dedicated staff of 300 personnel is trained by
            experience from top experts in the baking industry from Europe and
            other Western countries. Golden Loaf Est., and its sister concern,
            Golden Spike & Wheat Est., have the most extensive distribution
            network with a fleet of vehicles that daily cater to the needs of
            the UAE’s multinational/multiracial society, ensure highest standard
            of products reach your table.
          </p>
          <p>
            Drop in at our spacious showroom and coffee shop to taste our
            variety of products in Al Wahda Street near Sharjah City Center.
          </p>
        </div>
        <div className={style.rightPassion}>
          <img src={Passion} alt="" />
        </div>
      </div>

      <div className={style.thisiscommitment}>
        <div className={style.leftCommitment}>
          <img src={Webp} alt="" />
        </div>
        <div className={style.rightCommitment}>
          <div className={style.commitmentHeading}>
            <p>OUR COMMITMENT</p>
          </div>
          <div className={style.contents}>
            <p>
              Golden Loaf Est. is the first of establishment in the UAE bakery
              industry to achieve quality and safety standards by International
              Organization for Standardization (ISO 9001:2008) and Codex
              Alimentarious Commission guidelines for the application of Hazard
              Analysis and Critical Control Point (HACCP) system.
            </p>
            <p>
              Our products are put to various quality tests at multiple levels
              of production that are accomplished by qualified and competent
              food technologists. This ensures that health and hygiene standards
              are strictly followed to deliver superior quality products.
            </p>
          </div>
          <p className={style.commitmentSecondHeading}>OUR QUALITY STANDARDS</p>
          <div className={style.secondCommitmentFull}>
            <p className={style.upper}>
              Our highest priority is customer satisfaction and we are committed
              to quality in every aspect of operation, including:
            </p>
            <div className={style.firstPoint}>
              <div className={style.squareColorsBlack}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.556"
                  height="15.556"
                  viewBox="0 0 15.556 15.556"
                >
                  <rect
                    id="Rectangle_6905"
                    data-name="Rectangle 6905"
                    width="11"
                    height="11"
                    transform="translate(7.778) rotate(45)"
                    fill="#0b0708"
                  />
                </svg>
              </div>

              <p>Non-use of uncertified or harmful ingredients</p>
            </div>
            <div className={style.firstPoint}>
              <div className={style.squareColorsOrange}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.556"
                  height="15.556"
                  viewBox="0 0 15.556 15.556"
                >
                  <rect
                    id="Rectangle_6906"
                    data-name="Rectangle 6906"
                    width="11"
                    height="11"
                    transform="translate(7.778) rotate(45)"
                    fill="#b97625"
                  />
                </svg>
              </div>
              Upholding A-Class hygiene and sanitary conditions
            </div>
            <div className={style.firstPoint}>
              <div className={style.squareColorsBlack}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.556"
                  height="15.556"
                  viewBox="0 0 15.556 15.556"
                >
                  <rect
                    id="Rectangle_6905"
                    data-name="Rectangle 6905"
                    width="11"
                    height="11"
                    transform="translate(7.778) rotate(45)"
                    fill="#0b0708"
                  />
                </svg>
              </div>
              Implementation of regular improvement programs in our facilities
            </div>
            <div className={style.firstPoint}>
              <div className={style.squareColorsOrange}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.556"
                  height="15.556"
                  viewBox="0 0 15.556 15.556"
                >
                  <rect
                    id="Rectangle_6906"
                    data-name="Rectangle 6906"
                    width="11"
                    height="11"
                    transform="translate(7.778) rotate(45)"
                    fill="#b97625"
                  />
                </svg>
              </div>
              Superior Ingredients{" "}
            </div>
          </div>

          <p className={style.commitmentThdHeading}>OUR NEXT STEPS </p>
          <div className={style.secondCommitmentFull}>
            <p>
              Golden Loaf Est. has now embarked on another journey by earmarking
              2020 to increase its customer base by growing its penetration in
              the corporate sector. Contact us to know more.
            </p>
          </div>
        </div>
      </div>
      <div className={style.trainedImage}>
        <div className={style.contentsOnImage}>
          <p>
            We have highly trained and disciplined staff working with a
            professional and dedicated management,
          </p>
          <p>
            catering to the needs of UAE’s multinational/multiracial society.
          </p>
        </div>
      </div>
      <div className={style.messageFromFounder}>
        <div className={style.messageFromFounderLeft}>
          <p className={style.messageFromFounderHeading}>
            MESSAGE FROM OUR FOUNDER / MD
          </p>
          <p className={style.messageFromFounderContents}>
            I take this opportunity to express my sincere thanks to our
            established clients and indeed to all our customers, whose support
            has enabled us to progress and achieve continued success. Our
            establishment is unique in the sense that the knowledge to operate a
            successful food factory has been obtained from several countries.
            The art of manufacturing excellent breads and confectionery is the
            hobby of those who desire to remain in the forefront. It is also the
            result of seeking only the best of those craftsmen conversant in the
            trade to produce quality rather than quantity. We think we are
            unique because we aim to improve on a day-to-day basis. The proof is
            in our successful efforts in obtaining the different certifications
            such as ISO and HACCP. These are the manifestation on achievement.
            We look to the future with confidence and promise. Our hope is
            always to expand and provide to the UAE public the best services
            that we can offer. M.S. Al Husseiny
          </p>
        </div>
        <div className={style.messageFromFounderRight}></div>
        <img src={GoldenFounder} />
      </div>
      <div className={style.headteam}>
        <p>MANAGEMENT TEAM</p>
      </div>
      <div className={style.team}>
        <div className={style.firstarabi}>
          <div className={style.team1}>
            <img src={Osamaim} />
          </div>
          <p className={style.colorName}>Mustafa Al Husseiny </p>
          <p className={style.nocolor}>
            <b>General Manager</b>
          </p>
        </div>
        <div className={style.firstarabi}>
          <div className={style.team1}>
            <img src={Osama} />
          </div>
          <p className={style.colorName}>Osama Al Husseiny</p>
          <p className={style.nocolor}>
            <b> Trade Manager</b>
          </p>
        </div>
      </div>
      <div className={style.testimonials}>
        <p className={style.small}>TESTIMONIALS </p>
        <p className={style.big}>WHAT OUR CLIENTS SAY</p>

        <div className={style.boxSwiper}>
          <Swiper
            // navigation={true}
            direction={"horizontal"}
            cssMode={true}
            navigation={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper2"
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true, button: true }}
          >
            <SwiperSlide>
              <p className={style.swiperiIncContents}>
                We do not start any day without Golden Loaf breads. Your Arabic
                brown breads are our all-time favourite. We toast them slightly
                to make it crispy and have it with coffee. Delicious! Thanks.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className={style.swiperiIncContents}>
                Simply love your pastries and croissants. When I stop at a gas
                station, I make it a point to pick up your delicious cheese
                croissant.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className={style.swiperiIncContents}>
                Hey Team Golden Loaf... Thanks for making my parent's 50
                anniversary birthday so awesome. Your special anniversary cake
                made all the difference.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default About;
