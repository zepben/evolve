import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import JumboImage from "../../static/img/jumbo.png";
import EvolveLogo from "../../static/img/evolve.png";
import { ImGithub } from "react-icons/im";

const features = [
  {
    title: "CIM Compliant",
    description: (
      <>IEC CIM Data Platform that implements the Australian CIM profile</>
    ),
  },
  {
    title: "Multi Language Support",
    description: (
      <>Producer and Consumer libraries available in Java, Python and C#</>
    ),
  },
  {
    title: "Integration",
    description: (
      <>
        Ingestion capabilities for third party sources including weather and
        forecasting
      </>
    ),
  },
  {
    title: "API Development Environment",
    description: <>Environment in which new DERMS capabilities can be developed</>,
  },
  {
    title: "UI Framework",
    description: <>Framework allowing data to be easily visualized through performant, vector-based asset maps</>,
  },
  {
    title: "Open Source",
    description: <>Develop or extend the framework and build new capabilities.</>,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout>
      <header className={styles.header}>
        <div className={styles.jumbotron}>
          <div className={styles.jumboLeft}>
            <img className={styles.logo} src={EvolveLogo} alt={"evolve-logo"}/>
            <div className={styles.tagline}>{siteConfig.tagline}</div>
            <div className={styles.info}>
              Open source, standards based solution for marshalling data and
              creating a data platform
            </div>
            <div className={styles.linkContainer}>
              <Link
                className={clsx("button button--primary button--lg")}
                to={useBaseUrl("docs/")}
              >
                Get Started
              </Link>
              <Link
                className={clsx(
                  "button button--outline button--secondary button--lg"
                )}
                to={"https://www.github.com/zepben"}
              >
                <span className={styles.icon}>
                  <ImGithub />
                </span>{" "}
                View on Github
              </Link>
            </div>
          </div>
          <div className={styles.jumboRight}>
            <img alt={"evolve-landing-image"} src={JumboImage} />
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section>
            <div className={styles.features}>
              {features.map((props, idx) => (
                <div className={styles.feature} id={`${idx}`}>
                  <h3 className={styles.featureTitle}>{props.title}</h3>
                  <div className={styles.featureDesc}>{props.description}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
