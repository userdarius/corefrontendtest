import React, { useState } from "react";
import { IMAGE_URL } from "../configs";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import "../Pool/Pool.css";

const Navbar = (props) => {
  const [wallet, setWallet] = useState("");
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState();
  const [web3, setWeb3] = useState();

  async function fetchProvider() {
    if (window.ethereum) {
      setProvider(await detectEthereumProvider());
      if (window.ethereum.networkVersion === "1") {
        props.callbackFromParent2(false);
        props.callbackFromParent(false);
        try {
          if (window.ethereum) {
            setWeb3(new Web3(window.ethereum));
            window.ethereum
              .request({ method: "eth_requestAccounts" })
              .then(handleAccountsChanged)
              .catch((err) => {
                if (err.code === 4001) {
                  // EIP-1193 userRejectedRequest error
                  // If this happens, the user rejected the connection request.
                  console.log("Please connect to MetaMask.");
                } else {
                  console.error(err);
                }
              });
          } else if (window.web3) {
            setWeb3(new Web3(window.web3.currentProvider));
            console.log("WEB3", web3);
          } else {
            window.alert("Please install MetaMask plugin");
            return;
          }
        } catch (e) {
          console.log("ERROR ", e);
        }
      } else {
        setConnected(false);
        //   setLoading(false);
        props.callbackFromParent(true);
      }
    }
    // setProvider(window.ethereum);
  }

  if (provider) {
    window.ethereum.on("chainChanged", handleChainChanged);
    window.ethereum.on("accountsChanged", function (accounts) {
      window.location.reload();
    });
    startApp(provider);
  } else {
    console.log("Please install MetaMask!");
  }

  function startApp(provider) {
    if (provider !== window.ethereum) {
      console.error("Do you have multiple wallets installed?");
    }
  }

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      setConnected(false);
      props.callbackFromParent2(false);
      console.log("Please connect to MetaMask.");
    } else {
      console.log(accounts[0]);
      var string1 = accounts[0].substr(0, 4);
      var string2 = accounts[0].substr(
        accounts[0].length - 4,
        accounts[0].length - 1
      );
      console.log(
        "GET CONNECTED ",
        window.ethereum.isConnected(),
        string1,
        string2
      );
      setConnected(true);
      props.callbackFromParent2(true);
      props.callbackFromParent3(accounts[0]);
      setWallet(`${string1}...${string2}`);
      //   setLoading(false);
    }
  }

  //   function connect() {
  //     window.ethereum
  //       .request({ method: "eth_requestAccounts" })
  //       .then(handleAccountsChanged)
  //       .catch((err) => {
  //         if (err.code === 4001) {
  //           // EIP-1193 userRejectedRequest error
  //           // If this happens, the user rejected the connection request.
  //           console.log("Please connect to MetaMask.");
  //         } else {
  //           console.error(err);
  //         }
  //       });
  //   }

  function disconnect() {
    setConnected(false);
    props.callbackFromParent2(false);
  }

  function handleChainChanged(_chainId) {
    // console.log("CHAIN ID ", _chainId);
    if (_chainId !== "0x1") {
      props.callbackFromParent(true);
    } else {
      props.callbackFromParent(false);
    }
  }

  return (
    <>
      <div className="container">
        <header>
          <div className="menu">
            <img
              alt=""
              src={`${IMAGE_URL}logo.svg`}
              width="40px"
              height="40px"
              style={{
                borderRadius: "50%",
              }}
            />
            <ul>
              {/* <li>
                <a href="metrics">metrics</a>
              </li>
              <li>
                <a href="token">token</a>
              </li>
              <li>
                <a href="quant">quant</a>
              </li>
              <li>
                <a href="/memorandum">memorandum</a>
              </li> */}
              <li>
                <a href="https://honeydefi.com">Home</a>
              </li>
              <li>
                <a href="https://docs.honeydefi.com">Docs</a>
              </li>
              <span style={{ paddingLeft: "10px" }}>|</span>
              <li>
                {connected ? (
                  <span
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={() => disconnect()}
                  >
                    {wallet}
                  </span>
                ) : (
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => fetchProvider()}
                  >
                    Connect
                  </span>
                )}
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
