import React, { useState } from "react";
import Navbar from "../Musts/Navbar";
import Footer from "../Musts/Footer";
import PoolMenu from "./PoolMenu";
import { IMAGE_URL } from "../configs";
import "./Pool.css";

const Pool = () => {
  const [chainChanged, setChainChanged] = useState(false);
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const myCallback = (dataFromChild) => {
    setChainChanged(dataFromChild);
    //console.log("Hello checking state" + clr);
  };

  const myCallback2 = (dataFromChild2) => {
    setConnected(dataFromChild2);
    //console.log("Hello checking state" + clr);
  };

  const myCallback3 = (dataFromChild3) => {
    setWalletAddress(dataFromChild3);
    //console.log("Hello checking state" + clr);
  };

  return (
    <>
      <img alt="" src={`${IMAGE_URL}honey-bg.svg`} className="sides-1" />
      <img alt="" src={`${IMAGE_URL}honey-bg.svg`} className="sides-2" />
      <div className="main-div">
        <div>
          <Navbar
            callbackFromParent={myCallback}
            callbackFromParent2={myCallback2}
            callbackFromParent3={myCallback3}
          />
          <div className="container">
            <div>
              <h6 style={{ fontWeight: "bold" }}>TOKEN</h6>

              <p>
                HONEY (ERC-20) is our NFT protocol’s native asset. HONEY can be
                used for staking and to mint our DeFi NFTs. When NFTs are used
                as collateral, loans are given out in the form of HONEY, which
                can be staked for passive income.
              </p>
              <br />
              <p>
                These NFTs will allow you to participate in the DAO, receive
                APRs, mine liquidity, and can be exchanged on our upcoming
                metaverse DEX.
              </p>

              <br />
              <PoolMenu
                chainChanged={chainChanged}
                connected={connected}
                walletAddress={walletAddress}
              />
              {/* <!-- add line break if there is any content --> */}
            </div>
          </div>
        </div>
        <div className="main-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Pool;
