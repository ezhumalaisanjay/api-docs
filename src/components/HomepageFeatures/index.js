import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Travel Nursing',
    img: require('@site/static/img/nurse2-1.jpg').default,
    description: (
      <>
        Travel Nursing offers healthcare professionals the flexibility and freedom to explore different hospitals and locations while building experience and enhancing skills in the nursing industry.
      </>
    ),
  },
  {
    title: 'IT Professionals',
    img: require('@site/static/img/IT-PROFESSIONALS-1.jpg').default,
    description: (
      <>
       On Call Staffing Solutions offers a wide variety of IT Jobs based on your experience, skills, and interests.
      </>
    ),
  },
  {
    title: 'Per Diem Nursing',
    img: require('@site/static/img/nurse3-1.jpg').default,
    description: (
      <>
        Per diem assignments offer exceptional flexibility and excellent compensation. You choose your own schedule and work as much or as little as you like–full time, part time, or picking up extra shifts. We staff all major clinical specialties at great facilities.
      </>
    ),
  },
];

function Feature({ Svg, img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? <Svg className={styles.featureSvg} role="img" /> : <img src={img} alt={title} className={styles.featureSvg} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

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
