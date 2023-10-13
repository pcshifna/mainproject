import style from "./Cart.module.css";
import { useContext, useEffect, useState } from "react";
import { AllClickedProdut } from "../../App";
import Movetowishlist from "../../assets/Move_to_wishlist.svg";
import Delete from "../../assets/Delete.svg";

const Cart = () => {
  const [subtotal, setsubTotal] = useState(0);
  var { product, setProduct } = useContext(AllClickedProdut);
  const handleDelete = (pro) => {
    setProduct((preData) => ({
      products: preData?.products?.filter((item) => item.code !== pro.code),
      totalCount: preData.totalCount - 1,
    }));
  };

  const increaseQuantity = (code) => {
    // setProduct(prevState=>{
    //   let productIndex=prevState?.products?.findOndex(product=>product.code===code)
    //   if (productIndex!==-1) {
    //     prevState.products[productIndex] = {
    //       ...prevState.products[productIndex],
    //       count: prevState.products[productIndex].count+1,
    //     };
    //   }
    // })
    setProduct((preData) => ({
      products: preData?.products?.map((pr) =>
        pr.code === code ? { ...pr, count: pr.count + 1 } : { ...pr }
      ),
      totalCount: preData.totalCount,
    }));
  };

  const decreaseQuantity = (code) => {
    setProduct((preData) => ({
      products: preData?.products?.map((item) =>
        item.code === code && item.count > 1
          ? { ...item, count: item.count - 1 }
          : { ...item }
      ),
      totalCount: preData.totalCount,
    }));
  };

  useEffect(() => {
    // console.log("gg");
    function calculateSubtotal() {
      return product?.products?.reduce(
        (total, value) => total + value.count * value.price,
        0
      );
    }
    const total = calculateSubtotal();

    setsubTotal(total);
  }, [product]);
  console.log(product);
  return (
    <div className={style.alignment}>
      <div className={style.mainCart}>
        {/* product.filter( (item) => item.code !==  ) */}
        <h4> cart ({product.totalCount}items)</h4>
        {product?.products?.map((pro) => (
          <div className={style.cartBox} key={pro.code}>
            <div className={style.imageSide}>
              <div className={style.productImage}>
                <img src={pro.productimage} />
              </div>
              <div className={style.buttons}>
                <button
                  type="submit"
                  onClick={() => increaseQuantity(pro.code)}
                >
                  +
                </button>
                <p>{pro.count}</p>
                <button
                  type="submit"
                  onClick={() => decreaseQuantity(pro.code)}
                >
                  -
                </button>
              </div>
            </div>
            <div className={style.productDescription}>
              <div className={style.productTitle}>
                <p>{pro.name}</p>
              </div>
              <div className={style.productQuantity}>
                <p>Qty:{pro.count}</p>
              </div>
              <div className={style.unitPrice}>
                <div className={style.firstP}>
                  <p>unit price: AED {pro.price}</p>
                </div>
              </div>
              <div className={style.totalPrice}>
                <p>
                  <b>AED{(pro.count * pro.price).toFixed(2)}</b>
                </p>
              </div>
              <div className={style.rowWishlist}>
                <div className={style.wishlist}>
                  <button type="submit">
                    <img src={Movetowishlist} /> move to wishlist
                  </button>
                </div>
                <div className={style.standLine}></div>
                <div className={style.delete}>
                  <button type="submit" onClick={() => handleDelete(pro)}>
                    <img src={Delete} />
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={style.orderSummary}>
        <div className={style.headingSummery}>
          <p>Oder summary</p>
        </div>

        <div className={style.subTotal}>
          <div>
            <p>Sub total ({product.totalCount} items)</p>
          </div>
          <div>
            <p>AED {subtotal.toFixed(2)}</p>
          </div>
        </div>

        <div className={style.shippingSummery}>
          <div className={style.left}>
            <p>Shipping</p>
          </div>
          <div className={style.right}>
            <p>{subtotal >= 10 || subtotal === 0 ? "Free" : "AED 5"}</p>
          </div>
        </div>
        <div className={style.discountSummery}>
          <div>
            <p>Discount</p>
          </div>

          <div className={style.greendis}>
            <p>AED 0</p>
          </div>
        </div>
        <div className={style.longline}></div>
        <div></div>
        <div className={style.totalSummery}>Total</div>

        <div className={style.info}>
          <div
            style={
              subtotal >= 10
                ? { display: "none" }
                : {
                    display: "block",

                    background: "#e6f7ff",
                    border: "1px solid #91d5ff",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }
            }
          >
            <div className={style.mysvg}>
              <svg
                width="40px"
                height="40px"
                viewBox="-15.75 -15.75 56.50 56.50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="white"
                transform="matrix(1, 0, 0, 1, 0, 0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z"
                    stroke="#1890ff"
                    strokeWidth="0px"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="#1890ff"
                  ></path>{" "}
                  <path
                    d="M12.9309 8.15005C12.9256 8.39231 12.825 8.62272 12.6509 8.79123C12.4767 8.95974 12.2431 9.05271 12.0008 9.05002C11.8242 9.04413 11.6533 8.98641 11.5093 8.884C11.3652 8.7816 11.2546 8.63903 11.1911 8.47415C11.1275 8.30927 11.1139 8.12932 11.152 7.95675C11.19 7.78419 11.278 7.6267 11.405 7.50381C11.532 7.38093 11.6923 7.29814 11.866 7.26578C12.0397 7.23341 12.2192 7.25289 12.3819 7.32181C12.5446 7.39072 12.6834 7.506 12.781 7.65329C12.8787 7.80057 12.9308 7.97335 12.9309 8.15005ZM11.2909 16.5301V11.1501C11.2882 11.0556 11.3046 10.9615 11.3392 10.8736C11.3738 10.7857 11.4258 10.7057 11.4922 10.6385C11.5585 10.5712 11.6378 10.518 11.7252 10.4822C11.8126 10.4464 11.9064 10.4286 12.0008 10.43C12.094 10.4299 12.1863 10.4487 12.272 10.4853C12.3577 10.5218 12.4352 10.5753 12.4997 10.6426C12.5642 10.7099 12.6143 10.7895 12.6472 10.8767C12.6801 10.9639 12.6949 11.0569 12.6908 11.1501V16.5301C12.6908 16.622 12.6727 16.713 12.6376 16.7979C12.6024 16.8828 12.5508 16.96 12.4858 17.025C12.4208 17.09 12.3437 17.1415 12.2588 17.1767C12.1738 17.2119 12.0828 17.23 11.9909 17.23C11.899 17.23 11.8079 17.2119 11.723 17.1767C11.6381 17.1415 11.5609 17.09 11.4959 17.025C11.4309 16.96 11.3793 16.8828 11.3442 16.7979C11.309 16.713 11.2909 16.622 11.2909 16.5301Z"
                    fill="#1890ff"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div>
              <p>
                Add Aed {subtotal < 10 ? (10 - subtotal).toFixed(2) : 0} more to
                get free delivery.
              </p>
            </div>
          </div>
        </div>

        <div className={style.buttonSummery}>
          <button type="submit">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
