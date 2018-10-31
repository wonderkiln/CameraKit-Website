import React from 'react';

import features from '../../static/features';
import sponsors from '../../static/sponsors';
import clients from '../../static/clients';

import styles from '../../styles/home.scss';
import featureStyles from '../../styles/features.scss';
import globalStylesheet from '../../styles/styles.global.scss';

import Feature from './feature';
import News from './news';
import Sponsor from './sponsor';
import Client from './client';

const Home = ({ feed }) => (
  <div>
    <section id="trusted-by" className={`${styles.section} ${styles.clients}`}>
      <div className={globalStylesheet.container}>
        <h2 className={globalStylesheet['heading--small']}>
          {'Trusted By'}
        </h2>
        <ul className={`${styles.list} ${styles.clientsList}`}>
          {clients.map(client => (
            <Client
              key={client.name}
              logo={client.logo}
              name={client.name}
              link={client.link}
            />
          ))}
        </ul>
      </div>
    </section>
    <section id="features" className={styles.section}>
      <div className={globalStylesheet.container}>
        <div className={featureStyles.main}>
          <h2 className={globalStylesheet['heading--small']}>
            {'Features'}
          </h2>
          <div className={styles.flexWrapper}>
            <p className={`${globalStylesheet['heading--large']} ${featureStyles.heading}`}>
              {'High-level, simple, and extremely performant'}
            </p>
            <ul className={`${styles.list} ${styles.flexWrapper} ${featureStyles.list}`}>
              {features.map(feature => (
                <Feature
                  key={feature.text}
                  text={feature.text}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="sponsored-by" className={`${styles.section} ${styles.sponsors}`}>
      <div className={globalStylesheet.container}>
        <h2 className={globalStylesheet['heading--small']}>
          {'Support'}
        </h2>
        <ul className={`${styles.list} ${styles.sponsorsList}`}>
          {sponsors.map(sponsor => (
            <Sponsor
              key={sponsor.name}
              logo={sponsor.logo}
              name={sponsor.name}
              link={sponsor.link}
            />
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default Home;