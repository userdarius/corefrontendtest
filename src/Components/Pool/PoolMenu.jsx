import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Buy from "./Buy";
import Staking from "./Staking";
import "./PoolMenu.css";
import CreatePair from "./CreatePair";
import StakeLiquidity from "./StakeLiquidity";

const PoolMenu = (props) => {
  const [active, setActive] = useState(0);
  const [ETHBalance, setETHBalance] = useState(0);
  const [honeyBalance, setHoneyBalance] = useState(0);

  const buttons = ["Buy", "Stake", "Pair", "Farms"];

  const minABI = [
    // balanceOf
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
  ];
  const honeyAddress = "0x5cb9b847fba8aadb8a943fe19c1cc8439d7e00c5";

  useEffect(() => {
    getHoneyBalance();
  }, [props.walletAddress]);

  const getHoneyBalance = async () => {
    if (props.walletAddress) {
      const walletAddress = props.walletAddress;
      const web3 = new Web3(
        new Web3.providers.HttpProvider(
          `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`
        )
      );

      console.log("ADDRESS NI ", walletAddress);

      web3.eth.getBalance(
        web3.utils.toChecksumAddress(walletAddress),
        function (err, result) {
          if (err) {
            console.log(err);
          } else {
            console.log(web3.utils.fromWei(result, "ether") + " ETH");
            var ethBl = web3.utils.fromWei(result, "ether").toString();
            // ethBl = ethBl.substring(0, 6);
            setETHBalance(ethBl);
          }
        }
      );
      const contract = new web3.eth.Contract(minABI, honeyAddress);
      console.log("HONEY CON ", contract);

      const result = await contract.methods.balanceOf(walletAddress).call(); // 29803630997051883414242659

      var honBl = (result / 100).toString();
      //   honBl = honBl.substring(0, 6);
      setHoneyBalance(honBl);
    }
  };

  return (
    <>
      <div>
        <div className="pool-menu-main">
          {buttons.map((data, i) => {
            return (
              <p
                className={
                  i === active ? "pool-menu-button-active" : "pool-menu-button"
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

        <div className="data-to-show">
          {props.chainChanged ? (
            <span className="pool-menu-button-active">
              Please make sure you are on ETH Network.
            </span>
          ) : (
            <>
              {!props.connected ? (
                <span className="pool-menu-button-active">
                  Wallet Not Connected.
                </span>
              ) : (
                <>
                  {active === 0 && (
                    <Buy eth={ETHBalance} honey={honeyBalance} />
                  )}
                  {active === 1 && <Staking honey={honeyBalance} />}
                  {active === 2 && (
                    <CreatePair eth={ETHBalance} honey={honeyBalance} />
                  )}
                  {active === 3 && (
                    <StakeLiquidity eth={ETHBalance} honey={honeyBalance} />
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PoolMenu;
