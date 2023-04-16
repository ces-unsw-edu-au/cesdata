import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Use and reuse',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This documentation explains how we use and reuse freely available geospatial data 
        in our projects. We focus in freely available data and open source software to make our workflows
        reproducible and portable for other users. Feel free to use it yourself and share with others.
      </>
    ),
  },
  {
    title: 'Global and regional',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We have compiled global data sources for global analysis, but also some regional or national datasets 
        that we use for more specific analysis.
      </>
    ),
  },
  {
    title: 'Find GIS data!',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We do not provide access to the data but we try to include easy to follow instructions
        for data access and download, and some initial data preparation steps.  
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
