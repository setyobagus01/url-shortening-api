import React from "react";
import { ReactComponent as BrandIcon } from "../../images/iconbrandrecognition.svg";
import { ReactComponent as DetailedIcon } from "../../images/icondetailedrecords.svg";
import { ReactComponent as FullyIcon } from "../../images/iconfullycustomizable.svg";
import ShortenedLink from "../ShortenedLink";
import { ShortenLink } from "../../ShortenContext";

function MainContent() {
  const shortenlinks = React.useContext(ShortenLink);

  return (
    <section className="content">
      {shortenlinks.map((shortenlink) => {
        return (
          <ShortenedLink key={shortenlink.hashid} shortenlink={shortenlink} />
        );
      })}

      <div className="content-description">
        <h1>Advance Statistics</h1>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="content-benefit">
        <div className="benefit">
          <div className="benefit-icon">
            <BrandIcon />
          </div>
          <div className="benefit-description">
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
      </div>
      <div className="content-benefit">
        <div className="benefit">
          <div className="benefit-icon">
            <DetailedIcon />
          </div>
          <div className="benefit-description">
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
      </div>
      <div className="content-benefit">
        <div className="benefit">
          <div className="benefit-icon">
            <FullyIcon />
          </div>
          <div className="benefit-description">
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
