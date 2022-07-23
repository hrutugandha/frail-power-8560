import React from "react";
import style from "../Payment/Payment.module.css";
import { Link } from "react-router-dom";
import PaymentNav from ".././Tour_Description/Images/PaymentNav.png";
const Payment = () => {
  let paymentData = JSON.parse(localStorage.getItem("Data"));
  console.log(paymentData);
  return (
    <div>
      <img src={PaymentNav} alt="" />
      <p
        style={{
          textAlign: "left",
          margin: "20px",
          marginLeft: "150px",
          color: "#545454",
          fontSize: "12px",
          marginTop: "10px",
        }}
      >
        {" "}
        Back to Cart {">"} Traveler Details
      </p>
      {/* <h1 style={{ textAlign: "left", margin: "20px" ,marginLeft:"150px",marginTop:"50px"}}>Payment Details</h1> */}

      <div className={style.main}>
        <div className={style.leftdiv}>
          <p style={{ fontWeight: "700", fontSize: "25px" }}>Payment Details</p>
          <div>
            <div style={{ display: "flex" }}>
              <input type="radio" /> <span>Credit Card</span>
              <div style={{ display: "flex" }}>
                <img
                  style={{ height: "20px", width: "30px", marginLeft: "10px" }}
                  src="https://static.tacdn.com/img2/solutions/shoppingcart/cc_AMEX_2019_icon.svg"
                  alt=""
                />
                <img
                  style={{ height: "20px", width: "30px", marginLeft: "10px" }}
                  src="https://static.tacdn.com/img2/solutions/shoppingcart/cc_Visa_icon.svg"
                  alt=""
                />
                <img
                  style={{ height: "20px", width: "30px", marginLeft: "10px" }}
                  src="https://static.tacdn.com/img2/solutions/shoppingcart/cc_Mastercard_icon.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="emaildiv" style={{ gap: "90px" }}>
            <div>
              <p style={{ fontWeight: "700" }}>Cardholder Name *</p>
              <input
                style={{
                  height: "40px",
                  width: "300px",
                  borderRadius: "3px",
                  borderColor: "#e0e0e0",
                }}
                type="text"
              />
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>Credit/debit card number *</p>
              <input
                style={{
                  height: "40px",
                  width: "300px",
                  borderRadius: "3px",
                  borderColor: "#e0e0e0",
                }}
                type="text"
              />
            </div>
          </div>
          <div style={{ fontWeight: "700", display: "flex" }}>
            <p style={{ fontWeight: "700", display: "flex" }}>
              Expiration date *
            </p>
            <p
              style={{ fontWeight: "700", display: "flex", marginLeft: "80px" }}
            >
              CVC Code *
            </p>
          </div>
          <select
            style={{
              height: "40px",
              width: "80px",
              marginLeft: "5px",
              borderColor: "#e0e0e0",
            }}
            name="Month"
            id=""
          >
            <option value="Month">Month</option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>
          <select
            style={{
              height: "40px",
              width: "80px",
              marginLeft: "20px",
              borderColor: "#e0e0e0",
            }}
            name="Year"
            id=""
          >
            <option value="Year">Year</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
          <input
            type="Number"
            style={{
              height: "40px",
              width: "80px",
              marginLeft: "20px",
              maxlength: "3",
              borderColor: "#e0e0e0",
            }}
          />
          <div style={{ display: "flex" }}></div>
          <p style={{ fontWeight: "700", fontSize: "25px" }}>Billing Address</p>
          <div
            className="emaildiv"
            style={{ display: "flex", gap: "90px", marginTop: "-15px" }}
          >
            <div>
              <p style={{ fontWeight: "700" }}> Country *</p>
              <select
                style={{
                  height: "40px",
                  width: "180px",
                  marginLeft: "0px",
                  borderColor: "#e0e0e0",
                }}
                name="Year"
                id=""
              >
                <option value="Country">Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="China">China</option>
              </select>
            </div>
            <div>
              <p style={{ fontWeight: "700" }}>Postal/Zip Code*</p>
              <input
                style={{
                  height: "40px",
                  width: "200px",
                  borderRadius: "3px",
                  borderColor: "#e0e0e0",
                }}
                type="text"
              />
            </div>
          </div>
          <input style={{ marginTop: "20px" }} type="checkbox" />{" "}
          <span>Add this card to your account for future use</span>
          <br />
          <Link to="/PaymentSuccess">
            <button
              style={{
                borderRadius: "18px",
                height: "40px",
                width: "350px",
                marginTop: "0px",
                margin: "35px",
                color: "white",
                backgroundColor: "black",
                border: "none",
                cursor: "pointer",
                // marginLeft:"-50px"
              }}
            >
              <b>Submit</b>
            </button>
          </Link>
        </div>

        <div className={style.rightdiv} style={{ width: "30%" }}>
          {paymentData.map((item) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  width: "100%",
                }}
              >
                <h3 style={{ textAlign: "left", margin: "20px" }}>
                  Review Order Details
                </h3>
                <div key={item.id} style={{ display: "flex" }}>
                  <div>
                    <div>
                      <img
                        style={{
                          height: "120px",
                          width: "120px",
                          margin: "20px",
                        }}
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </div>

                  <div>
                    <div style={{}}>
                      {" "}
                      <h4 style={{ textAlign: "left", width: "70%" }}>
                        {item.title}
                      </h4>
                    </div>
                    <div
                      className={style.circles}
                      style={{
                        fontWeight: "400",
                        marginTop: "-15px",
                        // border: "1px solid",
                      }}
                    >
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <i className="fa fa-circle" aria-hidden="true"></i>
                      <p style={{ marginTop: "-3px", marginLeft: "25px" }}>
                        <u
                          style={{
                            color: "black",
                            fontWeight: "400",
                            fontSize: "14px",
                            marginLeft: "-10px",
                          }}
                        >
                          (355 reviews)
                        </u>
                      </p>
                    </div>
                    <p
                      style={{
                        marginTop: "-10px",
                        textAlign: "left",
                        fontSize: "13px",
                        width: "70%",
                      }}
                    >
                      B:Live E-bike Tours - Village - 08:00
                    </p>
                    <p
                      style={{
                        marginTop: "-10px",
                        textAlign: "left",
                        fontSize: "13px",
                        width: "70%",
                      }}
                    >
                      Sunday, July 24, 2022 | 08:00:00
                    </p>
                  </div>
                </div>

                <div style={{}}>
                  <div style={{ display: "flex" }}>
                    {" "}
                    <p
                      style={{
                        marginRight: "105px",
                        width: "100px",
                        textAlign: "left",
                        marginLeft: "50px",
                      }}
                    >
                      Booking Fee
                    </p>{" "}
                    <p>$00.00</p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginLeft: "50px",
                    }}
                  >
                    {" "}
                    <p
                      style={{
                        marginRight: "105px",
                        width: "100px",
                        textAlign: "left",
                        // marginLeft: "155px",
                        marginTop: "-10px",
                      }}
                    >
                      Subtotal
                    </p>{" "}
                    <p style={{ marginTop: "-10px", textAlign: "right" }}>
                      ${item.price}
                    </p>
                  </div>
                  {/* <hr style={{ marginTop: "-10px" }}></hr> */}
                  <div style={{ display: "flex", marginLeft: "50px" }}>
                    <p
                      style={{
                        marginRight: "105px",
                        width: "100px",
                        textAlign: "left",
                        // marginLeft: "105px",
                        marginTop: "-10px",
                        fontWeight: "700",
                      }}
                    >
                      Total :
                    </p>{" "}
                    <p
                      style={{
                        marginTop: "-10px",
                        fontWeight: "700",
                        textAlign: "right",
                      }}
                    >
                      ${item.price}
                    </p>
                  </div>
                </div>

                {/* <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "70%" }}>Subtotal</p>{" "}
                  <p>${item.price}</p>
                </div>
                <div style={{ display: "flex",width:"100%" }}>
                  <p style={{ marginRight: "280px" }}>Total</p>{" "}
                  <p>${item.price}</p> 

                </div>*/}
              </div>
            );
          })}
          <div
            className={style.rightbotdiv}
            style={{
              width: "100%",
              border: "1px solid black",
              height: "380px",
              textAlign: "left",
              marginTop: "50px",
              borderRadius: "5px",
            }}
          >
            <div>
              <div
                style={{
                  margin: "10px",

                  display: "flex",
                  // height: "200",
                }}
              >
                {/* <img src="" alt="" /> */}
                <i
                  style={{ marginTop: "2rem",marginLeft: "5px", }}
                  class="fa fa-credit-card"
                  aria-hidden="true"
                ></i>

                <div style={{ marginLeft: "20px",textAlign:"left" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    Lowest price guarantee
                  </p>
                  <p style={{ marginTop: "-10px" }}>
                    Find it cheaper? We'll refund the difference
                  </p>
                </div>
              </div>
              <div
                style={{
                  margin: "10px",
                  marginTop: "-20px",
                  display: "flex",
                  // height: "200",
                }}
              >
                {/* <img src="" alt="" /> */}
                {/* <i class="fa-light fa-lock"></i> */}
                <i
                  style={{ marginTop: "2rem",marginLeft: "5px" }}
                  class="fa fa-lock"
                  aria-hidden="true"
                ></i>

                <div style={{ marginLeft: "25px",textAlign:"left" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "10px",
                     
                    }}
                  >
                    Privacy protection
                  </p>
                  <p style={{ marginTop: "-10px" }}>
                    We use SSL encryption to keep your data secure
                  </p>
                </div>
              </div>
              <div
                style={{
                  margin: "10px",
                  marginTop: "-20px",
                  display: "flex",
                  // height: "200",
                }}
              >
                <img src="" alt="" />
                <i
                  style={{ marginTop: "2rem",marginLeft: "5px" }}
                  class="fa fa-headphones"
                  aria-hidden="true"
                ></i>

                <div style={{ marginLeft: "20px",textAlign:"left" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    24/7 global support
                  </p>
                  <p style={{ marginTop: "-10px" }}>
                    Get the answers you need, when you need them
                  </p>
                </div>
              </div>
              <div
                style={{
                  margin: "10px",
                  marginTop: "-20px",
                  display: "flex",
                  // height: "200",
                }}
              >
                {/* <img src="" alt="" /> */}
                <i
                  style={{ marginTop: "2rem", height: "50px",marginLeft: "5px" }}
                  class="fa fa-phone"
                  aria-hidden="true"
                ></i>

                <div style={{ marginLeft: "22px",textAlign:"left" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "10px",
                      textAlign: "left",
                    }}
                  >
                    Give us a call
                  </p>
                  <p
                    style={{
                      marginTop: "-10px",
                      marginLeft: "0px",
                      textAlign: "left",
                    }}
                  >
                    We’d be happy to help you out with your booking
                  </p>
                  <p style={{ marginTop: "-10px" }}>
                    {" "}
                    <u> Call now: +1 855 275 5071</u>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
