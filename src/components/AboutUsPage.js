import React, { Component } from "react";

export default class AboutUsPage extends Component {
  render() {
    return (
      <div
        className="text-center"
        style={{ paddingTop: "120px", paddingBottom: "150px" }}
      >
        <h2 style={{ height: "100px" }}></h2>

        <div className="row pt-5">
          <div className="col-lg-4 col-12 my-3">
            {/*  */}

            <h1>{"<Links for Donations>"} </h1>
            <ul>
              <li>
                <a href="https://www.gofundme.com/f/GEORGEFLOYD">
                  George Floyd Memorial
                </a>
              </li>
              <a href="https://minnesotafreedomfund.org/">
                George Floyd Memorial
              </a>

              <li>
                <a href=" https://www.blackvisionsmn.org/">
                  Black vision Collective
                </a>
              </li>
              <li>
                <a href="  https://www.reclaimtheblock.org/home">
                  Reclaim The Block
                </a>
              </li>
              <li>
                <a href="   https://www.joincampaignzero.org/#vision">
                  Join Campaign Zero
                </a>
              </li>
            </ul>
          </div>
          {/*  end  */}
          {/* broken strdes begin  */}
          <div className="col-lg-4 col-12 my-3">
            <h1 className="description"></h1>
            <h2>This is a static dump of many websites known and trusted. </h2>
          </div>
          {/* broken strides end  */}
          <div className="col-lg-4 col-12 my-3">
            <h1>{"<Media>"}</h1>
            <ul>
              <li>
                <a href="https://unicornriot.ninja/">Unicorn Riot</a>
              </li>
              <a href="https://minnesotafreedomfund.org/">
                George Floyd Memorial
              </a>

              <li>
                <a href=" https://www.blackvisionsmn.org/">
                  Black vision Collective
                </a>
              </li>
              <li>
                <a href="  https://www.reclaimtheblock.org/home">
                  Reclaim The Block
                </a>
              </li>
              <li>
                <a href="   https://www.joincampaignzero.org/#vision">
                  Reclaim The Block
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row pt-5">
          <div className=" col-lg-4 col-12 my-3 "></div>
          <div className=" col-lg-4 col-12 my-3">
            <center>
              <h2
                className="description"
                style={{
                  height: "70px",
                  width: "px",
                  fontSize: "25px",
                }}
              ></h2>
            </center>
          </div>
          <div className=" col-lg-4 col-12 my-3 "></div>
        </div>
      </div>
    );
  }
}
