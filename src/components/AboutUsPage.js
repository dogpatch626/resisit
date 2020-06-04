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
              <li>
                <a href=" https://www.change.org/p/louisville-mayor-greg-fischer-justice-for-david-mcatee?recruiter=914531230&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_initial&recruited_by_id=c58fdab0-e91e-11e8-b927-d16921f243b0">
                  Justice for David McAtee
                </a>
              </li>
              <li>
                <a href="    https://docs.google.com/document/u/1/d/1CjZMORRVuv-I-qo4B0YfmOTqIOa3GUS207t5iuLZmyA/mobilebasic">
                  Natl Resource List #GeorgeFloyd+
                </a>
              </li>
              <li>
                <a href="https://www.gofundme.com/f/vwzdk-fordham">
                  Help Fordham Local Buisness
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
              <li>
                <a href=" https://youtu.be/bCgLa25fDHM">
                  "How to financially help BLM vid"
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
