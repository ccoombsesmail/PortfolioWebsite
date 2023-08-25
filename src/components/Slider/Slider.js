import React from 'react';
import * as styles from "./Slider.module.css";
import goImg from "../../images/go.png";
import reactImg from "../../images/react-icon.png";
import gatsbyImg from "../../images/gatsby-icon.png";
import htmlImg from "../../images/html-icon.png";
import rubyImg from "../../images/ruby.png";
import jsImg from "../../images/js.png";
import sqlImg from "../../images/SQL.png";
import gitImg from "../../images/git.png";
import scalaImg from "../../images/scala.svg";

import dockerImg from "../../images/docker.svg";
import kubernetesImg from "../../images/kubernetes.svg";
import kafkaImg from "../../images/kafka.svg";

const Slider = (props) => {
  const images = [
    scalaImg, dockerImg, kafkaImg, kubernetesImg, goImg, reactImg, htmlImg, jsImg, sqlImg, gitImg,
    scalaImg, dockerImg, kafkaImg, kubernetesImg, goImg, reactImg, htmlImg, jsImg, sqlImg, gitImg
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {images.map((imgSrc, index) => (
            <div key={index} className={styles.slide}>
              <img src={imgSrc} height="100" width="100" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" />
