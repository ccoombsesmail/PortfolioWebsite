import React from 'react';
import * as styles from './Projects.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import MediaCard from '../Cards/ProjectCard';

import fidgetImg from '../../images/fidgetImg.png';
import harmonyImg from '../../images/harmonyImg.png';
import glowImg from '../../images/glow.png';
import algovizImg from '../../images/algoviz.png';
import blockscoutImg from '../../images/blockscout.png';
import portSiteImg from '../../images/portSite.png';

import reactIcon from '../../images/react-icon.png';
import reduxIcon from '../../images/redux.png';
import jsIcon from '../../images/js.png';
import rubyIcon from '../../images/ruby.png';
import railsLogo from '../../images/railsLogo3.png';
import postgresIcon from '../../images/postgres.png';
import awsIcon from '../../images/aws.png';
import nodeIcon from '../../images/node.png';
import expressIcon from '../../images/express.png';
import mongoDbIcon from '../../images/mongoDb.png';
import htmlIcon from '../../images/html-icon.png';
import threeIcon from '../../images/three2.png';
import d3Icon from '../../images/d3.png';
import gatsbyIcon from '../../images/gatsby-icon.png';
import civilImg from '../../images/civil_thumb.png';
import scalaIcon from '../../images/scala.svg';
import goIcon from '../../images/go.png';
import kafkaIcon from '../../images/kafka.svg';

const Projects = () => {
  return (
    <div id="projects" className={styles.wrapper}>
      <div className={styles.projectsHeader}>
        <h1> Projects </h1>
      </div>
      <h4>Note: These Are Personal Projects, Some Of Which I Built Years Ago. As Such Some Are No Longer Hosted</h4>

      <div className={styles.projectsWrapper}>
        <div className={styles.mediaCardWrapper}>
          <ScrollAnimation animateIn="fadeInUp" duration="1.5">
            <a style={{ textDecoration: 'none' }} href="https://github.com/ccoombsesmail/civil_backend_main" target="_blank" rel="noopener noreferrer">
              <MediaCard
                imgSrc={civilImg}
                title="Civil"
                body="A community-moderated intellectual discussion platform which uses Decentralized IDs and Proof of Humanity via novel web3 based decentralized identity authentication systems."
                iconSrc1={reactIcon}
                iconSrc2={reduxIcon}
                iconSrc3={jsIcon}
                iconSrc4={scalaIcon}
                iconSrc5={goIcon}
                iconSrc6={postgresIcon}
                iconSrc7={awsIcon}
                iconSrc8={kafkaIcon}
                siteURL="https://github.com/ccoombsesmail"
              />
            </a>
          </ScrollAnimation>
        </div>
        <div className={styles.mediaCardWrapper}>
          <ScrollAnimation animateIn="fadeInUp" duration="1.5">
            <a style={{ textDecoration: 'none', minHeight: '552px' }} href="https://fidget-tv.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">
              <MediaCard
                imgSrc={fidgetImg}
                title="Fidget"
                body="Live streaming app inspired by Twitch"
                iconSrc1={reactIcon}
                iconSrc2={reduxIcon}
                iconSrc3={jsIcon}
                iconSrc4={rubyIcon}
                iconSrc5={railsLogo}
                iconSrc6={postgresIcon}
                iconSrc7={awsIcon}
                gitRef="https://github.com/ccoombsesmail/Fidget"
                siteURL="https://fidget-tv.herokuapp.com/#/"
              />
            </a>
          </ScrollAnimation>
        </div>
        <div className={styles.mediaCardWrapper}>
          <ScrollAnimation animateIn="fadeInUp" duration="1.5">
            <a style={{ textDecoration: 'none' }} href="http://harmony-music.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">
              <MediaCard
                imgSrc={harmonyImg}
                title="Harmony"
                body="Collaborative real-time music making app"
                iconSrc1={reactIcon}
                iconSrc2={reduxIcon}
                iconSrc3={nodeIcon}
                iconSrc4={expressIcon}
                iconSrc5={mongoDbIcon}
                iconSrc6={htmlIcon}
                gitRef="https://github.com/iProgYou/harmony"
                siteURL="http://harmony-music.herokuapp.com/#/"
              />
            </a>
          </ScrollAnimation>
        </div>

        <div className={styles.mediaCardWrapper}>
          <ScrollAnimation animateIn="fadeInUp" duration="1.5">
            <a style={{ textDecoration: 'none' }} href="https://elastic-volhard-81f06d.netlify.app/" target="_blank" rel="noopener noreferrer">
              <MediaCard
                imgSrc={glowImg}
                title="Glow"
                body="A webGL mini-game / experiential demo"
                iconSrc1={jsIcon}
                iconSrc2={threeIcon}
                iconSrc3={htmlIcon}
                gitRef="https://github.com/ccoombsesmail/Glow"
                siteURL="https://elastic-volhard-81f06d.netlify.app/"
              />
            </a>
          </ScrollAnimation>
        </div>

        <div className={styles.mediaCardWrapper}>
          <ScrollAnimation animateIn="fadeInUp" duration="1.5">
            <a style={{ textDecoration: 'none' }} href="https://mystifying-benz-ae46a4.netlify.com/" target="_blank" rel="noopener noreferrer">
              <MediaCard
                imgSrc={algovizImg}
                title="Algorithm Visualizer"
                body="Sorting and Path Finding Algorithm Visualizer"
                iconSrc1={reactIcon}
                iconSrc2={jsIcon}
                iconSrc3={htmlIcon}
                iconSrc4={d3Icon}
                gitRef="https://github.com/ccoombsesmail/AlgoVisualizer"
                siteURL="https://mystifying-benz-ae46a4.netlify.com/"
              />
            </a>
          </ScrollAnimation>
        </div>

        <div className={styles.mediaCardWrapper}>
          <ScrollAnimation animateIn="fadeInUp" duration="1.5">
            <a style={{ textDecoration: 'none' }} href="https://block-scout.herokuapp.com" target="_blank" rel="noopener noreferrer">
              <MediaCard
                imgSrc={blockscoutImg}
                title="Block Scout"
                body="Real-time Ethereum Block Explorer"
                iconSrc1={reactIcon}
                iconSrc2={jsIcon}
                iconSrc3={mongoDbIcon}
                iconSrc4={htmlIcon}
                gitRef="https://github.com/ccoombsesmail/EthereumBlockExplorer"
                siteURL="https://block-scout.herokuapp.com"
              />
            </a>
          </ScrollAnimation>
        </div>

        <div className={styles.mediaCardWrapper}>
          <ScrollAnimation animateIn="fadeInUp" duration="1.5">
            <a style={{ textDecoration: 'none' }} href="https://agitated-shirley-08f058.netlify.app/" target="_blank" rel="noopener noreferrer">
              <MediaCard
                imgSrc={portSiteImg}
                title="Portfolio Website"
                body="Portfolio website from scratch"
                iconSrc1={reactIcon}
                iconSrc2={gatsbyIcon}
                iconSrc3={jsIcon}
                iconSrc4={htmlIcon}
                gitRef="https://github.com/ccoombsesmail/PortfolioWebsite"
                siteURL="https://agitated-shirley-08f058.netlify.app/"
              />
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Projects;
