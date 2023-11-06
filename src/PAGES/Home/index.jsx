import style from "./Home.module.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperComponent from "../../COMPONENTS/swiperComponent/index.jsx";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import MaskGroup147 from "../../assets//Mask Group 147@2x.png";
import Image150 from "../../assets/Image 150@2x.png";
import MostPopular from "../../COMPONENTS/Most popular products/index";
import Image149 from "../../assets//Image 149@2x.png";
import Axios from "axios";
import HomePageStatic from "../../assets/bigimagehome.jpg";
import Ducemlogo400 from "../../assets/ducem-logo-400x150@2x.png";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { useEffect, useState } from "react";

const Home = ({ homeData }) => {
  const [activeButtonId, setActiveButtonId] = useState("");

  const [fetchProduct, setFetchProduct] = useState([]);
  useEffect(() => {
    Axios.get("https://api.goldenloafuae.com/api/home").then((res) => {
      setFetchProduct(res?.data?.popularProducts);
      setActiveButtonId(res?.data?.popularProducts[0]?._id);
    });
  }, []);

  return (
    <div className={style.home}>
      <div className={style.swiper1}>
        <Swiper
          // navigation={true}
          direction={"horizontal"}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
            button: true,
          }}
        >
          {homeData?.banners?.slice(0, 4)?.map((banner) => (
            <SwiperSlide key={banner._id}>
              <img
                src={`https://api.goldenloafuae.com/${banner?.images?.web}`}
                alt="Banner Image"
              ></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={style.swiper2}>
        <p className={style.swiperp}>Our Categories</p>

        <Swiper
          direction={"horizontal"}
          navigation={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper2"
          slidesPerView={5}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true, button: true }}
        >
          {homeData?.categories?.map((category) => (
            <SwiperSlide key={category?._id}>
              <div className={style.card}>
                <SwiperComponent data={category} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={style.shipparent}>
        <div className={style.delivery}>
          <svg
            id="Group_2626"
            data-name="Group 2626"
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="29.315"
            viewBox="0 0 43 29.315"
          >
            <path
              id="Path_8363"
              data-name="Path 8363"
              d="M512.854,360.116a3.971,3.971,0,0,0-2.8,1.156,3.89,3.89,0,0,0,0,5.569,3.986,3.986,0,0,0,2.8,1.156,3.94,3.94,0,0,0,0-7.88Zm0,6.129a2.189,2.189,0,1,1,0-4.378,2.189,2.189,0,0,1,0,4.378Zm0,0"
              transform="translate(-477.699 -338.682)"
              fill="#5a5a5a"
            />
            <path
              id="Path_8364"
              data-name="Path 8364"
              d="M506.032,238.344a.849.849,0,0,0-.587-.228h-4.492a.878.878,0,0,0-.876.876v7.18a.878.878,0,0,0,.876.876h7.127a.878.878,0,0,0,.876-.876v-4.807a.876.876,0,0,0-.289-.648Zm1.173,6.952h-5.376v-5.437H505.1l2.1,1.891Zm0,0"
              transform="translate(-469.862 -230.034)"
              fill="#5a5a5a"
            />
            <path
              id="Path_8365"
              data-name="Path 8365"
              d="M317.5,360.116a3.973,3.973,0,0,0-2.8,1.156,3.891,3.891,0,0,0,0,5.569A3.987,3.987,0,0,0,317.5,368a3.94,3.94,0,0,0,0-7.88Zm0,6.129a2.189,2.189,0,1,1,0-4.378,2.189,2.189,0,0,1,0,4.378Zm0,0"
              transform="translate(-303.722 -338.682)"
              fill="#5a5a5a"
            />
            <path
              id="Path_8366"
              data-name="Path 8366"
              d="M267.909,343.879h-1.76V341.55a.876.876,0,1,0-1.751,0v3.2a.878.878,0,0,0,.876.876h2.636a.876.876,0,0,0,0-1.751Zm0,0"
              transform="translate(-259.977 -321.367)"
              fill="#5a5a5a"
            />
            <path
              id="Path_8367"
              data-name="Path 8367"
              d="M236.372,319.23a.878.878,0,0,0-.876-.876H224.876a.876.876,0,1,0,0,1.751H235.5a.872.872,0,0,0,.876-.876Zm0,0"
              transform="translate(-224 -301.49)"
              fill="#5a5a5a"
            />
            <path
              id="Path_8368"
              data-name="Path 8368"
              d="M241.185,283.226l10.621.062a.884.884,0,0,0,.884-.867.867.867,0,0,0-.867-.884l-10.621-.062h-.009a.876.876,0,0,0-.009,1.751Zm0,0"
              transform="translate(-238.533 -268.648)"
              fill="#5a5a5a"
            />
            <path
              id="Path_8369"
              data-name="Path 8369"
              d="M257.435,246.906h10.621a.876.876,0,1,0,0-1.751H257.435a.876.876,0,1,0,0,1.751Zm0,0"
              transform="translate(-252.995 -236.303)"
              fill="#5a5a5a"
            />
            <path
              id="Path_8370"
              data-name="Path 8370"
              d="M302.653,173.7l-6.269-5.192a.863.863,0,0,0-.56-.2h-7.373v-3.152a.878.878,0,0,0-.876-.876h-22.3a.878.878,0,0,0-.876.876v6.409a.876.876,0,1,0,1.751,0v-5.534h20.559v20.76h-7.18a.876.876,0,1,0,0,1.751h10.691a.876.876,0,0,0,0-1.751h-1.76V170.055h7.057l5.709,4.728-.061,11.987h-.911a.876.876,0,0,0,0,1.751h1.777a.87.87,0,0,0,.876-.867l.07-13.274a.925.925,0,0,0-.324-.683Zm0,0"
              transform="translate(-259.977 -164.276)"
              fill="#5a5a5a"
            />
          </svg>
          <div className={style.uae}>
            <p>Delivery all over in </p>
            <p>UAE</p>
          </div>
        </div>

        <div className={style.line}></div>
        <div className={style.commitment}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36.989"
            height="36.473"
            viewBox="0 0 36.989 36.473"
          >
            <g id="Blockchain_Powered" transform="translate(0)">
              <g
                id="Group_3611"
                data-name="Group 3611"
                transform="translate(0)"
              >
                <path
                  id="Path_8481"
                  data-name="Path 8481"
                  d="M3889.875,1557.08c0-.066,0-9.767,0-9.767l-14.449-7.224-14.449,7.224v9.57a17.894,17.894,0,0,0,7.979,14.911l6.471,4.311,4.984-3.32a9.817,9.817,0,1,0,9.46-15.706Zm-14.445,17.638-5.829-3.885a16.736,16.736,0,0,1-7.464-13.95v-8.855l13.293-6.646,13.292,6.646v8.92c-.192-.011-.382-.03-.578-.03s-.387.018-.578.03v-8.207l-12.137-6.068-12.137,6.069v8.142a15.584,15.584,0,0,0,6.95,12.987l5.187,3.456,3.781-2.519a9.816,9.816,0,0,0,.547,1.027Zm3.349-5.011-3.349,2.231-4.546-3.029c-.225-.15-.442-.307-.656-.468v-5.166h-1.156v4.2a14.444,14.444,0,0,1-1.734-1.925v-3.358a1.734,1.734,0,0,1,1.312-1.681l3.92-.982a2.885,2.885,0,0,0,2.282,2.537v2.37h1.156v-2.37a2.884,2.884,0,0,0,2.282-2.537l2.573.646a9.777,9.777,0,0,0-2.083,9.537Zm-6.238-17.413h1.6a6.1,6.1,0,0,0,2.581-.578h.156l1.445,1.926v2.408l-1.927,1.445h-1.926l-1.926-1.445Zm-1.109-1.156a2.262,2.262,0,0,1,1.239-1.67,5.836,5.836,0,0,1,4.058-.256l.133.192h.88a.579.579,0,0,1,.578.578v1.734l-.867-1.156h-1l-.122.061a4.929,4.929,0,0,1-2.19.517Zm5.732,7.224v.867a1.734,1.734,0,1,1-3.467,0v-.867l.385.289h2.7Zm1.156-.022v-.844l1.156-.867v-6.646a1.734,1.734,0,0,0-1.734-1.734h-.384a6.62,6.62,0,0,0-4.393-.15,3.6,3.6,0,0,0-2.736,3.618v.578h1.155v4.335l1.157.867v.842l-4.172,1.049a2.885,2.885,0,0,0-2.186,2.8v1.561a14.427,14.427,0,0,1-1.734-6.865v-7.428l10.981-5.491,10.98,5.491v7.428c0,.066,0,.133,0,.2a9.786,9.786,0,0,0-4.574,2.142Zm9.825,17.072a8.669,8.669,0,1,1,8.669-8.669,8.67,8.67,0,0,1-8.669,8.669Zm0,0"
                  transform="translate(-3860.98 -1540.089)"
                  fill="#5a5a5a"
                />
              </g>
              <rect
                id="Rectangle_5826"
                data-name="Rectangle 5826"
                width="6.935"
                height="1.156"
                transform="translate(30.053 9.893)"
                fill="#5a5a5a"
              />
              <rect
                id="Rectangle_5827"
                data-name="Rectangle 5827"
                width="4.624"
                height="1.156"
                transform="translate(30.053 12.205)"
                fill="#5a5a5a"
              />
              <rect
                id="Rectangle_5828"
                data-name="Rectangle 5828"
                width="2.312"
                height="1.156"
                transform="translate(30.053 14.517)"
                fill="#5a5a5a"
              />
              <path
                id="Path_8482"
                data-name="Path 8482"
                d="M4139.3,1829.908l-2.042-2.043-3.27,3.269,5.313,5.313,8.991-8.991-3.271-3.269Zm0,4.9-3.678-3.678,1.635-1.635,2.042,2.043,5.722-5.722,1.634,1.635Zm0,0"
                transform="translate(-4114.265 -1803.662)"
                fill="#5a5a5a"
              />
            </g>
          </svg>

          <p>Our Commitment</p>
        </div>

        <div className={style.line}></div>

        <div className={style.secure}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28.858"
            height="36.846"
            viewBox="0 0 28.858 36.846"
          >
            <g id="Secure_Transaction" transform="translate(0)">
              <g
                id="Group_3617"
                data-name="Group 3617"
                transform="translate(11.104 19.437)"
              >
                <path
                  id="Path_8488"
                  data-name="Path 8488"
                  d="M2426.632,1802.88v1.428a2.625,2.625,0,0,0,.217,5.244h1.285a.91.91,0,1,1,0,1.817h-3.109a.859.859,0,0,0,0,1.719h1.606v1.319a.86.86,0,0,0,1.719,0v-1.328a2.625,2.625,0,0,0-.217-5.244h-1.285a.91.91,0,1,1,0-1.817h3.108a.859.859,0,1,0,0-1.718h-1.606v-1.419a.86.86,0,0,0-1.719,0Zm0,0"
                  transform="translate(-2424.167 -1802.021)"
                  fill="#5a5a5a"
                />
              </g>
              <g
                id="Group_3618"
                data-name="Group 3618"
                transform="translate(0 0)"
              >
                <path
                  id="Path_8489"
                  data-name="Path 8489"
                  d="M2296.929,1547.844h-.121v-2.967a11.908,11.908,0,0,0-23.816,0v2.967h-.121a2.4,2.4,0,0,0-2.4,2.4v17.18a2.4,2.4,0,0,0,2.4,2.4h5.193a.72.72,0,0,0,0-1.439h-5.193a.962.962,0,0,1-.961-.961v-3.66h3.461a.72.72,0,0,0,0-1.439h-3.461v-2.771h3.461a.72.72,0,1,0,0-1.439h-3.461v-2.769h3.461a.72.72,0,1,0,0-1.439h-3.461v-3.663a.961.961,0,0,1,.961-.959h24.058a.961.961,0,0,1,.96.959v3.663h-3.463a.72.72,0,1,0,0,1.439h3.463v2.769h-3.463a.72.72,0,1,0,0,1.439h3.463v2.771h-3.463a.72.72,0,0,0,0,1.439h3.463v3.66a.962.962,0,0,1-.96.961h-12.4a.72.72,0,1,0,0,1.439h12.4a2.4,2.4,0,0,0,2.4-2.4v-17.181a2.4,2.4,0,0,0-2.4-2.4Zm-22.5-2.967a10.469,10.469,0,0,1,20.937,0v2.967h-3.313v-2.967a7.155,7.155,0,0,0-14.311,0v2.967h-3.313Zm16.185,2.967h-11.431v-2.967a5.716,5.716,0,0,1,11.431,0Zm0,0"
                  transform="translate(-2270.471 -1532.977)"
                  fill="#5a5a5a"
                />
                <path
                  id="Path_8490"
                  data-name="Path 8490"
                  d="M2411.1,2023.077a.72.72,0,0,0,0,1.439h0a.72.72,0,1,0,0-1.439Zm0,0"
                  transform="translate(-2400.269 -1987.67)"
                  fill="#5a5a5a"
                />
                <path
                  id="Path_8491"
                  data-name="Path 8491"
                  d="M2514.609,1855.217"
                  transform="translate(-2496.972 -1831.937)"
                  fill="#5a5a5a"
                />
              </g>
            </g>
          </svg>
          <p>Secure Payment</p>
        </div>
        <div className={style.line}></div>
        <div className={style.call}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36.793"
            height="36.846"
            viewBox="0 0 36.793 36.846"
          >
            <g id="call" transform="translate(-115.999 -206.875)">
              <g
                id="Group_6380"
                data-name="Group 6380"
                transform="translate(115.999 206.875)"
              >
                <path
                  id="Path_72294"
                  data-name="Path 72294"
                  d="M145.093,249.495a3.625,3.625,0,0,0-2.628-1.205,3.746,3.746,0,0,0-2.66,1.2l-2.458,2.45c-.2-.109-.4-.21-.6-.311-.28-.14-.544-.272-.77-.412a26.71,26.71,0,0,1-6.4-5.832,15.764,15.764,0,0,1-2.1-3.313c.637-.583,1.229-1.19,1.8-1.773.218-.218.436-.443.654-.661a3.568,3.568,0,0,0,0-5.381l-2.123-2.123c-.241-.241-.49-.49-.723-.738-.467-.482-.957-.98-1.462-1.447a3.682,3.682,0,0,0-2.605-1.143,3.809,3.809,0,0,0-2.644,1.143l-.016.016-2.644,2.668a5.69,5.69,0,0,0-1.688,3.616,13.633,13.633,0,0,0,1,5.77,33.483,33.483,0,0,0,5.949,9.923,36.6,36.6,0,0,0,12.186,9.542,18.984,18.984,0,0,0,6.843,2.022c.164.008.335.016.49.016a5.858,5.858,0,0,0,4.487-1.929c.008-.016.023-.023.031-.039a17.606,17.606,0,0,1,1.361-1.408c.334-.319.676-.653,1.011-1a3.878,3.878,0,0,0,1.174-2.691,3.739,3.739,0,0,0-1.2-2.668Zm2.784,8.189c-.008,0-.008.008,0,0-.3.327-.614.622-.949.949a20.446,20.446,0,0,0-1.5,1.555,3.749,3.749,0,0,1-2.924,1.236c-.117,0-.241,0-.358-.008a16.87,16.87,0,0,1-6.066-1.82,34.548,34.548,0,0,1-11.479-8.99,31.575,31.575,0,0,1-5.6-9.324,11.1,11.1,0,0,1-.871-4.868,3.569,3.569,0,0,1,1.073-2.31l2.652-2.652a1.767,1.767,0,0,1,1.182-.552,1.665,1.665,0,0,1,1.135.544l.023.023c.475.443.925.9,1.4,1.392.241.249.49.5.739.755l2.123,2.123a1.484,1.484,0,0,1,0,2.411c-.226.226-.443.451-.669.669-.653.669-1.275,1.291-1.952,1.9-.016.016-.031.024-.039.039a1.587,1.587,0,0,0-.4,1.765l.024.07a17.046,17.046,0,0,0,2.512,4.1l.008.008a28.544,28.544,0,0,0,6.906,6.284,10.51,10.51,0,0,0,.957.521c.28.14.544.272.77.412.031.016.062.039.093.054a1.686,1.686,0,0,0,.77.194,1.663,1.663,0,0,0,1.182-.536l2.66-2.66a1.759,1.759,0,0,1,1.174-.583,1.582,1.582,0,0,1,1.12.568l4.3,4.3a1.537,1.537,0,0,1,.008,2.434Zm0,0"
                  transform="translate(-115.999 -226.67)"
                  fill="#5a5a5a"
                />
                <path
                  id="Path_72295"
                  data-name="Path 72295"
                  d="M312.543,277.7a10.009,10.009,0,0,1,8.15,8.15,1.043,1.043,0,0,0,1.034.871,1.432,1.432,0,0,0,.179-.016,1.051,1.051,0,0,0,.863-1.213,12.1,12.1,0,0,0-9.861-9.861,1.056,1.056,0,0,0-1.213.855,1.039,1.039,0,0,0,.848,1.213Zm0,0"
                  transform="translate(-292.657 -268.932)"
                  fill="#5a5a5a"
                />
                <path
                  id="Path_72296"
                  data-name="Path 72296"
                  d="M332.2,223.128a19.927,19.927,0,0,0-16.238-16.238,1.048,1.048,0,1,0-.342,2.069,17.8,17.8,0,0,1,14.511,14.511,1.043,1.043,0,0,0,1.034.871,1.348,1.348,0,0,0,.179-.016,1.03,1.03,0,0,0,.856-1.2Zm0,0"
                  transform="translate(-295.426 -206.875)"
                  fill="#5a5a5a"
                />
              </g>
            </g>
          </svg>
          <div className={style.number}>
            <p>Customer Service </p>
            <p>+91 9567683048</p>
          </div>
        </div>
      </div>

      <div className={style.backgroundfullimage}>
        <img src={HomePageStatic} alt="" />
      </div>

      <div className={style.mostpopular}>
        <div className={style.headingbutton}>
          <p>MOST POPULAR PRODUCTS</p>
        </div>

        <div className={style.popularbutton}>
          {fetchProduct?.map((category) => (
            <div
              key={category?._id}
              className={
                activeButtonId === category?._id
                  ? style["active"]
                  : style["popularbutton"]
              }
            >
              <button onClick={() => setActiveButtonId(category?._id)}>
                {category?.name}
              </button>
            </div>
          ))}
        </div>

        <div className={style.fullCard}>
          {fetchProduct
            ?.find((item) => item._id === activeButtonId)
            ?.products?.map((mostpopular) => (
              <div className={style.newItem} key={mostpopular._id}>
                <MostPopular data={mostpopular} />
              </div>
            ))}
        </div>
      </div>

      <div className={style.otherGolden}>
        <p>Golden loaf is now available at your favourite online outlets</p>
        <div className={style.goldensites}>
          <img
            src={Image149}
            className={style.img1}
            width={145}
            height={80}
            href="https://www.carrefouruae.com/mafuae/en/c/04061"
          />
          <img
            src={Image150}
            className={style.img2}
            width={145}
            height={50}
            href="https://grocery.noon.com/golden_loaf"
          />
          <img
            src={MaskGroup147}
            className={style.img3}
            href="https://www.amazon.ae/s?k=Golden+Loaf+Est.&ref=bl_dp_s_web_0"
          />
          <img
            src={Ducemlogo400}
            className={style.img4}
            href="https://www.ducem.ae/golden-loaf"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
