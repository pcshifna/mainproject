import React from "react";
import style from "./Navbar.module.css";
import callIcon from "../../assets/call_icon.svg";
import logo from "../../assets/logo.jpeg";
import List from "../../COMPONENTS/List/index";
// import { IoSearchOutline } from "react-icons/ai";
// import log from "../../assets/newlogo.svg";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import flag from "../../assets/ar.png";
// import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { useState } from "react";
import { Badge, Space } from "antd";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { AllWishlistProduct } from "../../App";
import { AllClickedProdut } from "../../App";
import { useContext } from "react";

const Navbar = () => {
  const { wishlist } = useContext(AllWishlistProduct);
  const [open, setOpen] = useState(false);
  const [value, SetValue] = useState();
  // const [isvalue, SetisValue] = useState(false);
  const { product, setProduct } = useContext(AllClickedProdut);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.navParent}>
      <div className={style.navTop}>
        <div className={style.help}>
          <p>For Help Call</p>
          <button>
            <img src={callIcon} width={18} height={18} />
            +91 9567683048
          </button>
        </div>
        <div className={style.mail}>
          <AiOutlineMail size={14} />
          <p>pcshifna12@gmail.com</p>
        </div>
      </div>

      <div className={style.navBottom}>
        <div className={style.left}>
          <img src={logo} width={185} height={53} />
        </div>

        <div className={style.center}>
          <form action="" className={style.searchbox} onSubmit={handleSubmit}>
            <input type="text" value={value}></input>
            <div className={style.clearbutton}>
              <button type="reset">x</button>
            </div>
            <BiSearchAlt2 />
          </form>

          <div className={style.links}>
            <Link to="/">Home</Link>
            <Link to="/Home/about">About</Link>
            <Link to="/Home/Facilities">Facilities</Link>
            <Link to="/Home/QualityPolicy">Quality Policy</Link>
            <Link to="/Home/contact">Contact</Link>
          </div>
        </div>

        <div className={style.right}>
          <div className={style.first}>
            <div className={style.flag}>
              <img src={flag} width={24} height={24}></img>
            </div>

            <div className={style.heart}>
              <Link to="/whishlist">
                <button type="button" onClick={handleOpen}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25.825"
                    viewBox="0 0 30.113 25.825"
                  >
                    <g id="wish_list" transform="translate(0.75 0.75)">
                      <g
                        id="Group_2422"
                        data-name="Group 2422"
                        transform="translate(0 0)"
                      >
                        <g id="Group_2421" data-name="Group 2421">
                          <path
                            id="Path_6178"
                            data-name="Path 6178"
                            d="M1901.875,506.284a7.935,7.935,0,0,0-11.287-.065l-.774.774-.774-.774a7.936,7.936,0,1,0-11.222,11.223l9.918,9.918a2.943,2.943,0,0,0,4.156,0l9.854-9.853A8.009,8.009,0,0,0,1901.875,506.284Z"
                            transform="translate(-1875.493 -503.895)"
                            fill="none"
                            stroke="#505555"
                            strokeLinecap="round"
                            strokeWidth="1.5"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className={style.cartwrap}>
            <div className={style.carticon}>
              <Link to="/cart">
                <Space size="middle">
                  <Badge count={product.totalCount} showZero color="#684f40">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24.035"
                      height="25.825"
                      viewBox="0 0 24.035 25.825"
                    >
                      <g id="cart" transform="translate(0.589 0.75)">
                        <path
                          id="Rectangle_6640"
                          data-name="Rectangle 6640"
                          d="M0,0H22.535a0,0,0,0,1,0,0V17.528a2.128,2.128,0,0,1-2.128,2.128H2.128A2.128,2.128,0,0,1,0,17.528V0A0,0,0,0,1,0,0Z"
                          transform="translate(0.161 4.669)"
                          fill="none"
                          stroke="#505555"
                          strokeWidth="1.5"
                        />
                        <path
                          id="Path_72304"
                          data-name="Path 72304"
                          d="M266.608,413.9l4.193-4.4h15.023l3.561,4.389"
                          transform="translate(-266.608 -409.5)"
                          fill="none"
                          stroke="#505555"
                          strokeWidth="1.5"
                        />
                        <path
                          id="Path_72305"
                          data-name="Path 72305"
                          d="M281.977,417.106a4.807,4.807,0,1,1-9.615,0"
                          transform="translate(-265.59 -408.155)"
                          fill="none"
                          stroke="#505555"
                          strokeWidth="1.5"
                        />
                      </g>
                    </svg>
                  </Badge>
                </Space>
              </Link>
            </div>

            <div className={style.cart}>
              <p className={style.bigcart}>Cart </p>
              <p className={style.smallaed}>AED 0.00</p>
            </div>
          </div>
          <div className={style.loginuser}>
            <div className={style.icon}>
              <AiOutlineUser />
            </div>
            <div className={style.log}>
              <p>login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
