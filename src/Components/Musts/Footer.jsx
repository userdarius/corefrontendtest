import React from "react";
import { IMAGE_URL } from "../configs";
import "../Pool/Pool.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <footer style={{ marginBottom: 0 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div>
              <a
                style={{ paddingRight: "5px" }}
                href="https://twitter.com/honeydefi"
                className="hover:opacity-70"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={`${IMAGE_URL}twitter.svg`} width="18px" />
              </a>

              <a
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
                href="https://t.me/honeydefi"
                className="hover:opacity-70"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={`${IMAGE_URL}telegram.svg`} width="18px" />
              </a>
              <a
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
                href="https://discord.gg/drEa7ZmvXr"
                className="hover:opacity-70"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={`${IMAGE_URL}discord.svg`} width="20px" />
              </a>
              <a
                style={{ paddingRight: "5px", paddingLeft: "5px" }}
                href="https://github.com/honeydefi"
                className="hover:opacity-70"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={`${IMAGE_URL}github.png`} width="18px" />
              </a>
            </div>

            <div>
              <a
                style={{ marginLeft: "5px", marginRight: "5px" }}
                href="https://docs.honeydefi.com"
              >
                Docs
              </a>
              <a
                style={{ marginLeft: "5px", marginRight: "5px" }}
                href="https://linkedin.com/company/honeylabsio"
              >
                Team
              </a>
              <a
                style={{ marginLeft: "5px", marginRight: "5px" }}
                href="https://github.com/TechRate/Smart-Contract-Audits/blob/main/September/Honey.pdf"
              >
                Audit
              </a>
              <a
                style={{ marginLeft: "5px", marginRight: "5px" }}
                href="https://docs.honeydefi.com/general-faq"
              >
                FAQ
              </a>
              {/* <a style={{ marginLeft: "5px" }} href="about">
              token
            </a> */}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
