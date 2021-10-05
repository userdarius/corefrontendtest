import React, { useEffect, useState } from "react";
import { IMAGE_URL } from "../configs";
import "./Buy.css";
import "./Pool.css";

const Buy = (props) => {
  const [buyText, setBuyText] = useState("Enter Amount");
  const [eth, setEth] = useState("");
  const [honey, setHoney] = useState("");
  const [ethValue, setEthValue] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.eth && props.honey) {
      setEth(props.eth.substring(0, 6));
      setHoney(props.honey.substring(0, 6));
      setLoading(false);
    }
  }, [props.eth, props.honey]);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="buy-main">
          <a
            href="https://app.uniswap.org/#/swap?outputCurrency=0x5cb9b847fba8aadb8a943fe19c1cc8439d7e00c5"
            target="_blank"
            rel="noreferrer"
          >
            <p>UNISWAP</p>
          </a>

          <div className="buy-window">
            <div className="amount-window">
              <div className="from-div">
                <p>From</p>
                <input
                  type="number"
                  placeholder="0.0"
                  className="buy-input"
                  value={ethValue}
                  onChange={(e) => {
                    setEthValue(e.target.value);
                    if (e.target.value.toString() >= props.eth) {
                      setBuyText("Insufficient Balance");
                    } else if (
                      e.target.value === "0.0" ||
                      e.target.value === "0" ||
                      e.target.value === ""
                    ) {
                      setBuyText("Enter Amount");
                    } else {
                      setBuyText("Buy");
                    }
                  }}
                />
              </div>
              <div className="to-div">
                <p>To</p>
                <input
                  type="number"
                  placeholder="0.0"
                  className="buy-input"
                  disabled
                />
              </div>
            </div>
            <div className="amount-window">
              <div className="from-div">
                <p>Balance: {eth}</p>
                <p
                  style={{
                    display: "flex",
                    float: "right",
                    marginTop: 5,
                  }}
                >
                  <img
                    alt=""
                    src={`${IMAGE_URL}ethereum.svg`}
                    width="20px"
                    height="20px"
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <span style={{ marginLeft: 5 }}>ETH</span>
                </p>
              </div>
              <div className="to-div">
                <p>Balance: {honey}</p>
                <p style={{ display: "flex", float: "right", marginTop: 5 }}>
                  <img
                    alt=""
                    src={`${IMAGE_URL}logo.svg`}
                    width="20px"
                    height="20px"
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <span style={{ marginLeft: 5 }}>HONEY</span>
                </p>
              </div>
            </div>
          </div>
          <p style={{ marginTop: 20 }}>{buyText}</p>
        </div>
      )}
    </>
  );
};

export default Buy;
