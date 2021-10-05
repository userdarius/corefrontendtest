import React, { useEffect, useState } from "react";
import { IMAGE_URL } from "../configs";
import "./Buy.css";
import "./Pool.css";

const StakeLiquidity = (props) => {
  const [buyText, setBuyText] = useState("Enter Amount");
  const [eth, setEth] = useState("");
  const [honey, setHoney] = useState("");
  const [ethValue, setEthValue] = useState();
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);

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
          <p>Stake LP Tokens to farm rewards.</p>

          <div className="stake-window">
            <div
              className={
                active === 0
                  ? "display-pool-staking-active"
                  : "display-pool-staking"
              }
              onClick={() => setActive(0)}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ display: "flex" }}>
                  <p>HONEY-ETH </p>
                  <img
                    alt=""
                    src={`${IMAGE_URL}logo.svg`}
                    width="20px"
                    height="20px"
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <img
                    alt=""
                    src={`${IMAGE_URL}ethereum.svg`}
                    width="20px"
                    height="20px"
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                </p>
                <p style={{ marginRight: "auto" }}>Uniswap</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>52.88 UNI</p>
                <p>pools per day</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>$235,028</p>
                <p>Total Staked</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>81.7%</p>
                <p>Annualized Yield</p>
              </div>
            </div>
            <div
              className={
                active === 1
                  ? "display-pool-staking-active"
                  : "display-pool-staking"
              }
              onClick={() => setActive(1)}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ display: "flex" }}>
                  <p>HONEY-USDC </p>
                  <img
                    alt=""
                    src={`${IMAGE_URL}logo.svg`}
                    width="20px"
                    height="20px"
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                  <img
                    alt=""
                    src={`${IMAGE_URL}ethereum.svg`}
                    width="20px"
                    height="20px"
                    style={{
                      borderRadius: "50%",
                    }}
                  />
                </p>
                <p style={{ marginRight: "auto" }}>Coming Soon</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>Coming Soon</p>
                <p>pools per day</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>Coming Soon</p>
                <p>Total Staked</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>Coming Soon</p>
                <p>Annualized Yield</p>
              </div>
            </div>
          </div>

          <p style={{ marginTop: 20 }}>
            Stake HONEY-{active === 0 ? "ETH" : "USDC"} LP Tokens
          </p>
          {active === 0 ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Wallet Balance</p>
                  <p>0</p>
                </div>
                <input
                  type="number"
                  placeholder="0.0"
                  className="buy-input"
                  disabled
                />
                <p style={{ marginTop: 5, cursor: "pointer" }}>Stake</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Staked Balance</p>
                  <p>0</p>
                </div>
                <input
                  type="number"
                  placeholder="0.0"
                  className="buy-input"
                  disabled
                />
                <p style={{ marginTop: 5, cursor: "pointer" }}>Unstake</p>
              </div>
            </div>
          ) : (
            <p style={{ marginTop: 10 }}>Coming Soon</p>
          )}
          {/* <p style={{ marginTop: 20 }}>{buyText}</p> */}
        </div>
      )}
    </>
  );
};

export default StakeLiquidity;
