import React, { useCallback, useEffect, useRef, useState } from "react";
import { useStyles } from "./style";
import { sliders } from "../../dummyData";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
const Header = ({ type }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const classes = useStyles({ slideIndex: slideIndex * -100, type });
  const interval = useRef(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const nextSlide = useCallback(() => {
    setSlideIndex(slideIndex === sliders.length - 1 ? 0 : slideIndex + 1);
  }, [slideIndex]);

  useEffect(() => {
    if (type === "home") {
      const timeout = setTimeout(nextSlide, 10000);
      interval.current = timeout;
      return function () {
        if (interval.current) {
          clearTimeout(interval.current);
        }
      };
    }
  }, [nextSlide, type]);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex === 0 ? sliders.length - 1 : slideIndex - 1);
    } else {
      setSlideIndex(slideIndex === sliders.length - 1 ? 0 : slideIndex + 1);
    }
  };
  switch (type) {
    case "home":
      return (
        <div className={classes.mainContainer}>
          <div
            className={classes.leftArrow}
            onClick={() => handleClick("left")}
          >
            <ArrowLeftOutlined />
          </div>
          <div className={classes.container}>
            {sliders.map((i, index) => (
              <div
                key={index}
                className={classes.sliderContainer}
                style={{
                  backgroundImage: `url(${PF}/images/slide_0${index + 1}.jpg)`,
                  minWidth: "100vw",
                  backgroundRepeat: "none",
                  backgroundSize: "cover",
                }}
              >
                <div className={classes.content}>
                  <h6 className={classes.slogan}>{i.slogan}</h6>
                  <h4 className={classes.title}>{i.title}</h4>
                  <p className={classes.desc}>{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className={classes.rightArrow}
            onClick={() => handleClick("right")}
          >
            <ArrowRightOutlined />
          </div>
        </div>
      );
      case 'about-us': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>About Us</h2>
              <p className={classes.descOther}>WE HAVE OVER 20 YEARS OF EXPERIENCE</p>
            </div>
        </div>
      );
      case 'update-information': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>Update Informations</h2>
              <p className={classes.descOther}>It 's significant section. Please don't share to anyone.</p>
            </div>
        </div>
      );
      case 'our-services': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>Our Services</h2>
              <p className={classes.descOther}>ECS helps organizations develop innovative business and commerce strategies and solutions which focus on creating innovative products and services for economy. Our consulting team stays focused on defining, optimizing, aligning our client ‘s business and IT strategies</p>
            </div>
        </div>
      );
      case 'contact-us': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>Contact Us</h2>
              <p className={classes.descOther}>FEEL FREE TO SEND US A MESSAGE NOW!</p>
            </div>
        </div>
      );
      case 'login': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>Welcome to our customer area</h2>
              <p className={classes.descOther}>To Request an account, just call us : 090-080-0760</p>
            </div>
        </div>
      );
      case 'payment': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>PAYMENT AREA</h2>
              <p className={classes.descOther}>If you want to support about payment. Please contact us : 090-080-0760</p>
            </div>
        </div>
      );
      case 'register': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>REGISTER NEW ACCOUNT</h2>
              <p className={classes.descOther}>Easy to create, manage, get support</p>
            </div>
        </div>
      );
      case 'change-password': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>Change Password</h2>
              <p className={classes.descOther}>It 's significant section. Please don't share to anyone.</p>
            </div>
        </div>
      );
      case 'not-found': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>Not Found 404</h2>
            </div>
        </div>
      );
      case 'confirm-account': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>You activated your account. You can login now.</h2>
              <p className={classes.descOther}>Thanks for using our services</p>
            </div>
        </div>
      );
      case 'service-user': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>Your All Services</h2>
              {/* <p className={classes.descOther}>WE HAVE OVER 20 YEARS OF EXPERIENCE</p> */}
            </div>
        </div>
      );
      case 'chart': return (
        <div className={classes.mainContainer}>
            <div className={classes.sliderContainer} 
            style={{
              backgroundImage: `url(${PF}/images/page-heading-bg.jpg)`,
              backgroundRepeat: "none",
              // backgroundSize: "cover",
            }}
            >
              <h2 className={classes.titleOther}>Services Details</h2>
              {/* <p className={classes.descOther}>WE HAVE OVER 20 YEARS OF EXPERIENCE</p> */}
            </div>
        </div>
      );
      default: return;
  }
};

export default Header;
