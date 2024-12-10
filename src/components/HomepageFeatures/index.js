import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

// Define the feature list with necessary attributes
const FeatureList = [
  {
    title: 'Admin Portal',
    img: require('@site/static/img/nurse2-1.jpg').default,
    link: "/docs/admin-portal/Recruiters",
    // description: (
    //   <>
    //     Travel Nursing offers healthcare professionals the flexibility and freedom to explore different hospitals and locations while building experience and enhancing skills in the nursing industry.
    //   </>
    // ),
  },
  {
    title: 'Candidate Portal',
    img: require('@site/static/img/IT-PROFESSIONALS-1.jpg').default,
    link: "/docs/candidate/generalprofile",
    // description: (
    //   <>
    //     On Call Staffing Solutions offers a wide variety of IT Jobs based on your experience, skills, and interests.
    //   </>
    // ),
  },
  {
    title: 'Recruit Hire Portal',
    img: require('@site/static/img/nurse3-1.jpg').default,
    link: "/docs/recruithire",
    // description: (
    //   <>
    //     Per diem assignments offer exceptional flexibility and excellent compensation. You choose your own schedule and work as much or as little as you like–full time, part time, or picking up extra shifts. We staff all major clinical specialties at great facilities.
    //   </>
    // ),
  },
];

// Feature component to render individual items
function Feature({ Svg, img, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : (
          <img src={img} alt={title} className={styles.featureSvg} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
        {link && (
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to={link}>
              Get Started
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

// Main component to render all features
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
