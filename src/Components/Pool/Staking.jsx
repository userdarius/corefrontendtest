import React, { useEffect, useState } from "react";
import { IMAGE_URL } from "../configs";
import "./Buy.css";
import "./Pool.css";

const Staking = (props) => {
  const [loading, setLoading] = useState(false);
  const [stakeValue, setStakeValue] = useState();
  const [unstakeValue, setUnstakeValue] = useState();
  const [honey, setHoney] = useState();

  useEffect(() => {
    if (props.honey) {
      setHoney(props.honey.substring(0, 6));
      setLoading(false);
    }
  }, [props.honey]);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="buy-main">
          <p>
            Stake your HONEY to capture the value of our actively managed NFTs.
          </p>

          <div className="buy-window">
            <div className="stake-window" style={{ marginTop: 10 }}>
              <div className="from-div">
                <p>Stake</p>
                <div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      type="number"
                      placeholder="0.0"
                      className="buy-input"
                      value={stakeValue}
                      onChange={(e) => {
                        setStakeValue(e.target.value);
                        // if (e.target.value.toString() >= props.eth) {
                        //   setBuyText("Insufficient Balance");
                        // } else if (
                        //   e.target.value === "0.0" ||
                        //   e.target.value === "0" ||
                        //   e.target.value === ""
                        // ) {
                        //   setBuyText("Enter Amount");
                        // } else {
                        //   setBuyText("Buy");
                        // }
                      }}
                    />
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setStakeValue(honey)}
                    >
                      max: HONEY
                    </p>
                  </div>
                  <p style={{ marginLeft: 5 }}>Stake HONEY</p>
                </div>
              </div>
              <div className="from-div">
                <p>Unstake</p>
                <div style={{ display: "flex" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <input
                      type="number"
                      placeholder="0.0"
                      className="buy-input"
                      value={unstakeValue}
                      onChange={(e) => {
                        setUnstakeValue(e.target.value);
                        // if (e.target.value.toString() >= props.eth) {
                        //   setBuyText("Insufficient Balance");
                        // } else if (
                        //   e.target.value === "0.0" ||
                        //   e.target.value === "0" ||
                        //   e.target.value === ""
                        // ) {
                        //   setBuyText("Enter Amount");
                        // } else {
                        //   setBuyText("Buy");
                        // }
                      }}
                    />{" "}
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => setUnstakeValue(honey)}
                    >
                      max: HONEY
                    </p>
                  </div>
                  <p style={{ marginLeft: 5 }}>Unstake HONEY</p>
                </div>
              </div>
            </div>
          </div>
          {/* <p style={{ marginTop: 20 }}>{buyText}</p> */}
        </div>
      )}
    </>
  );
};

export default Staking;
