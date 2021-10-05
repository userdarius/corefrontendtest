import React, { useEffect, useState } from "react";
import { IMAGE_URL } from "../configs";
import "./Buy.css";
import "./Pool.css";

const CreatePair = (props) => {
  const [buyText, setBuyText] = useState("Enter Amount");
  const [eth, setEth] = useState("");
  const [honey, setHoney] = useState("");
  const [ethValue, setEthValue] = useState();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);

  const buttons = ["0.3", "0.5", "1", "13"];

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
                <p>HONEY</p>
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
                <p>ETH</p>
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
            </div>
            <div className="amount-window">
              <div className="from-div">
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
              <div className="to-div">
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
            </div>
          </div>
          <div className="pair-box">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>2294</p>
              <p>HONEY per ETH</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>0.000042</p>
              <p>ETH per HONEY</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>5%</p>
              <p>Share of Pool</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>551</p>
              <p>Expected LP</p>
            </div>
          </div>
          <p style={{ textAlign: "left", marginTop: 20 }}>
            Slippage Difference between the expected price and the price at
            which the trade is executed. Recomended: 13%
          </p>
          <div className="create-pair-slippage">
            {buttons.map((data, i) => {
              return (
                <p
                  className={
                    i === active
                      ? "pool-menu-button-active"
                      : "pool-menu-button"
                  }
                  key={i}
                  onClick={() => {
                    setActive(i);
                  }}
                >
                  {data}
                </p>
              );
            })}
          </div>
          <p style={{ marginTop: 20 }}>Confirm</p>
        </div>
      )}
    </>
  );
};

export default CreatePair;
