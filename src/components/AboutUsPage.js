import React, { Component } from "react";

export default class AboutUsPage extends Component {
  render() {
    return (
      <div className="container">

        <div className="row pt-5">
          <div className="col-lg-4 col-12 my-3">

            <h1 className="sub-title">Donation Links</h1>
            <hr className="tiny-hr"></hr>
            <ul className="d-link">
              <li>
                <a href="https://www.gofundme.com/f/GEORGEFLOYD">
                  George Floyd Memorial
                </a>
              </li>

              <li>
              <a href="https://minnesotafreedomfund.org/">
                Minnesota Freedom Fund (Bailout)
              </a>
              </li>

              <li>
                <a href="https://www.gofundme.com/f/saving-fordham-looted-small-businesses">
                  Saving Fordham
                </a>
              </li>

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
                  Campaign Zero
                </a>
              </li>
              <li>
                
                  <a href="   https://brooklynbailfund.org/donation-form">
                    Brooklyn Bail Fund
                  </a>
              
              </li>
              <li>
                <a href="    https://www.naacpldf.org/">
                  NAACP Legal Defense and Educational Fund
                </a>
              </li>
              <li>
                <a href="   https://linktr.ee/freedomartsmovement">
                  Freedom Arts Movement 
                </a>

              </li>
            </ul>
          </div>
          {/*  end  */}
          {/* broken strdes begin  */}
          <div className="col-lg-4 col-12 my-3">
            <h1 className="description"></h1>
            <h2>
              This is a static dump of many websites known and trusted. Please
              help me expand this and continue to spread usefull sites. Remember
              watch your surroundings when protesting the police DO infiltrate
              and aggrivate crowds.
            </h2>
          </div>
          {/* broken strides end  */}
          <div className="col-lg-4 col-12 my-3">
            <h1 className="sub-title">Media</h1>
            <hr className="tiny-hr"></hr>
            <ul className="d-link">
              <li>
                <a href="https://unicornriot.ninja/">Unicorn Riot</a>
              </li>
              <a href="https://www.cnn.com/">CNN</a>
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
