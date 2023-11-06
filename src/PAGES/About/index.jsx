import React from "react";
import style from "./About.module.css";
import Osamaim from "../../assets/founder1.jpg";
import Osama from "../../assets/founder1.jpg";
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

import GoldenFounder from "../../assets/founder1.jpg";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus alias ex modi? Deleniti impedit ad magni dolores officia, quasi iusto voluptates fugit rem odit distinctio nemo hic maxime neque?
            Fuga maxime veniam delectus officia possimus dolore sequi expedita saepe dignissimos nisi alias consequatur natus odit rem qui ipsam quidem voluptatem, beatae provident, quae nulla adipisci soluta. Est, accusamus corporis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloribus tempora laborum nostrum nemo expedita esse quis saepe magni cupiditate, doloremque eligendi quae quibusdam distinctio in iusto, odit, numquam iure.
            Quo temporibus impedit vitae, distinctio ipsa vero praesentium corporis voluptatum dicta repudiandae facere eius quidem aut at dolore et? Corrupti debitis nesciunt voluptates quae dolore, animi provident ut accusantium similique!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium ea, eos quam aperiam obcaecati quis optio nobis pariatur. Perferendis nemo eligendi sequi nesciunt at praesentium sunt dolores provident dignissimos!
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta amet beatae tempora quidem repellat, nulla voluptatibus illum debitis quasi consequatur, similique totam temporibus. At suscipit, reprehenderit dicta ducimus accusantium deleniti?
              Iure labore cupiditate ut harum, soluta distinctio, aliquid quam qui eaque, optio modi consectetur inventore earum et! Mollitia culpa id debitis dolore, suscipit, aliquid dicta et modi magni, cupiditate eaque!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi neque facilis minus in hic nostrum quod laborum dolorem tempore incidunt vero ad, provident dolor cum. Non unde ipsum vitae illo!
            </p>
          </div>
          <p className={style.commitmentSecondHeading}>OUR QUALITY STANDARDS</p>
          <div className={style.secondCommitmentFull}>
            <p className={style.upper}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere nesciunt eius iure illo asperiores tempore corrupti aliquid esse ratione aliquam suscipit praesentium nulla, error alias libero. Sapiente, fugit ab?:
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempora veniam placeat rem nobis hic doloremque, quibusdam dicta error eius animi quasi autem earum ducimus! Quos optio eius quis non?
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
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias ad explicabo magnam, iste nisi veniam, deleniti laudantium aliquid earum enim incidunt ullam est assumenda repudiandae in molestias, vel perspiciatis.
           Delectus ut praesentium dolore nisi nam amet unde sint magnam culpa, veniam quae repudiandae deleniti voluptates illum excepturi voluptas rerum natus quod porro odio officiis saepe vero. Numquam, nihil deserunt!
           Quidem veritatis commodi quibusdam tempore, repellat accusantium incidunt doloremque voluptatum, nisi deserunt voluptas consectetur sit reprehenderit quaerat quas a quae! Inventore rem perferendis ipsa dolor unde iure doloribus voluptatum doloremque.
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
          <p className={style.colorName}>SHIFNA PC </p>
          <p className={style.nocolor}>
            <b>General Manager</b>
          </p>
        </div>
        <div className={style.firstarabi}>
          <div className={style.team1}>
            <img src={Osama} />
          </div>
          <p className={style.colorName}>SHIFNA PC</p>
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
