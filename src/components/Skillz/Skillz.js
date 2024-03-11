import React from "react";
import * as styles from "./Skillz.module.css"
import Card from '../Cards/Card'
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "../Slider/Slider"
import TechnologyItem from './TechnologyItem/TechnologyItem'
import frontendImg from '../../images/front-end.png'
import backendImg from '../../images/backend.png'
import databaseImg from '../../images/database.png'

const Skillz = (props) => {

  const technologies = [
    'Scala',
    'JavaScript/TypeScript',
    'React / Redux / Next',
    'PostgreSQL',
    'Kafka',
    'Functional Programming',
    'Docker / Docker-Compose',
    'Kubernetes / Helm',
    'GO',
    'Node / Express',
    'CSS3',
    'HTML5',
    'AWS (S3, EC2, ECS)',
    'Python',
    'OpenAPI / REST',
    'FIX',
    'WebSockets',
    'Webpack/Vite',
    'Geth',
    'Protobuf / gRPC'
  ];

  return (
    <div id="skills" className={styles.wrapper}>
      <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" duration="1">
        <h1> Skills </h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut" duration="1">
        <h1 style={{ marginTop: '-1.2vh' }}> ─── </h1>
      </ScrollAnimation>
      <Slider></Slider>
      <div className={styles.technologiesWrapper}>
        {
          technologies.map((technology) => {
            return <TechnologyItem technology={technology} />
          })
        }
      </div>
      <div className={styles.cardWrapper}>
        <ScrollAnimation animateIn="fadeInUp" duration="1">
          <Card
            img={backendImg}
            title="Backend"
            sub="Extensive experience with Scala, Kafka, and working knowledge of Golang/Node. Proficient in REST API development, Container technologies, and functional programming."
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration="1" delay="200">
          <Card
            img={frontendImg}
            title="Front-End"
            sub="Proficient in Typescript, React/Redux/Next, HTML5/CSS3, and frontend build tools like Webpack and Vite"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" duration="1" delay="400">
          <Card
            img={databaseImg}
            title="Database"
            sub="Skilled in RDBMS like Postgres, as with working knowledge of NoSQL databases like MongoDB"
          />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Skillz;
