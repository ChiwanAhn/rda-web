import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './index.module.scss';
import Video from '../components/video';

const Index = () => {
  return (
    <Layout>
      <Video videoSrcURL={''} />
      <section className={styles.fullHeight} id="lading">
        reasonab DESIGN Academy
      </section>
      <section className={styles.fullHeight}>
        <div className={styles.overlineText}>You can make it real</div>
        <h2>Do you</h2>
        <h2>Want to be</h2>
        <div className={styles.row}>
          <h2>a</h2>
          <div>
            <button>Check your dream major</button>
          </div>
          <h2>?</h2>
        </div>
      </section>
      <section className={styles.purple} id="program">
        <h2 className={styles.sectionTitle}>선배들의 가이드, 확실한 성공.</h2>
        <div className={styles.itemsContainer}>
          <div className={styles.row}>
            {Array.from({ length: 4 }).map((item) => (
              <div className={styles.itemContainer}>
                <div className={styles.itemTitle}>Step 1</div>
                <div
                  className={styles.itemSubtitle}
                >{`적성&진로&이민 상담`}</div>
                <div className={styles.imgContainer}></div>
                <div
                  className={styles.itemDescription}
                >{`15년 경력 원장의 1:1 학생 개인 맞춤형 상담`}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.rowNoWrap}>
            {Array.from({ length: 2 }).map((item) => (
              <div className={styles.infoColumn}>
                <div className={styles.itemTitle}>{'Non-stop! Guide'}</div>
                <div className={styles.itemSubtitle}>{'한번에 모두 해결!'}</div>
                <div className={styles.callout}>
                  <div className={styles.bullet}>
                    {'미대나 포트폴리오에 관해서 아무것도 모르신다구요?'}
                  </div>
                  <div className={styles.bullet}>
                    {'너무 복잡한 절차가 힘드신가요?'}
                  </div>
                  <div className={styles.description}>
                    {`초기에 학생/가족 맞춤형 심층 상담부터, 포트폴리오 제작,
학업 관리, 그리고 졸업 후 취업 준비와 영주권 가이드 까지!
A to Z, 이 모든 것이 RDA에서 가능합니다.
아는만큼 보이는 알다에서 확실한 성공을 보세요.`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.fullHeight}>
        <div>You can make it real</div>
        <h2>WE ARE</h2>
        <h2>WORKING</h2>
        <div className={styles.row}>
          <h2>WITH</h2>
          <div>
            <button>Check your dream major</button>
          </div>
        </div>
      </section>
      <section className={styles.pink} id="partnership">
        <h2 className={styles.sectionTitle}>선배들의 가이드, 확실한 성공.</h2>
        <div className={styles.itemsContainer}>
          <div className={styles.row}>
            {Array.from({ length: 4 }).map((item) => (
              <div className={styles.itemContainer}>
                <div className={styles.itemTitle}>Step 1</div>
                <div
                  className={styles.itemSubtitle}
                >{`적성&진로&이민 상담`}</div>
                <div className={styles.imgContainer}></div>
                <div
                  className={styles.itemDescription}
                >{`15년 경력 원장의 1:1 학생 개인 맞춤형 상담`}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.rowNoWrap}>
            {Array.from({ length: 2 }).map((item) => (
              <div className={styles.infoColumn}>
                <div className={styles.itemTitle}>{'Non-stop! Guide'}</div>
                <div className={styles.itemSubtitle}>{'한번에 모두 해결!'}</div>
                <div className={styles.callout}>
                  <div className={styles.bullet}>
                    {'미대나 포트폴리오에 관해서 아무것도 모르신다구요?'}
                  </div>
                  <div className={styles.bullet}>
                    {'너무 복잡한 절차가 힘드신가요?'}
                  </div>
                  <div className={styles.description}>
                    {`초기에 학생/가족 맞춤형 심층 상담부터, 포트폴리오 제작,
학업 관리, 그리고 졸업 후 취업 준비와 영주권 가이드 까지!
A to Z, 이 모든 것이 RDA에서 가능합니다.
아는만큼 보이는 알다에서 확실한 성공을 보세요.`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.fullHeight} id="trial">
        trial
      </section>
    </Layout>
  );
};

export default Index;
