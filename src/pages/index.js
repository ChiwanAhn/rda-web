import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Head from '../components/head';
import { SectionTitle } from '../components/SectionTitle';
import { OverlineText } from '../components/OverlineText';
import { graphql, useStaticQuery } from 'gatsby';
import styles from './index.module.scss';
import Video from '../components/video';
import cn from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

const Index = () => {
  return (
    <Layout>
      <section className={cn(styles.landing)} id="landing">
        <Video videoSrcURL="//videos.ctfassets.net/4eu5tqzj0bgb/4qEdNwPU356GW3hvDL29Ka/f5f50944781681cbbd7adefe6cbb0110/production_ID_4965871.mp4" />
      </section>

      <section className={styles.fitContent}>
        <OverlineText>You can make it real</OverlineText>
        <h2>
          Do you
          <br />
          want to be
        </h2>
        <div className={styles.row}>
          <h2>a</h2>
          <div>
            <CTAButton>Check your dream major</CTAButton>
          </div>
          <h2>?</h2>
        </div>
      </section>

      <section className={styles.purple} id="program">
        <SectionTitle>다양한 파트너쉽, 준비된 과정.</SectionTitle>
        <div className={styles.itemsContainer}>
          {Array.from({ length: 4 }).map((item) => (
            <div className={styles.itemContainer}>
              <div className={styles.itemTitle}>Step 1</div>
              <div className={styles.itemSubtitle}>{`적성&진로&이민 상담`}</div>
              <StaticImage
                className={styles.imgContainer}
                src={'../images/image1.svg'}
              />
              <div
                className={styles.itemDescription}
              >{`15년 경력 원장의 1:1 학생 개인 맞춤형 상담`}</div>
            </div>
          ))}
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
        <StaticImage className={styles.bg} src={'../images/bg.svg'} />
        <div className={styles.overlineText}>You can make it real</div>
        <h2>WE ARE</h2>
        <h2>WORKING</h2>
        <div className={styles.row}>
          <h2>WITH</h2>
          <div>
            <CTAButton>Check your dream major</CTAButton>
          </div>
        </div>
      </section>
      <section className={styles.pink} id="partnership">
        <div className={styles.content}>
          <SectionTitle>선배들의 가이드, 확실한 성공.</SectionTitle>
          <div className={styles.itemsContainer}>
            {Array.from({ length: 4 }).map((item) => (
              <div className={styles.itemContainer}>
                <div className={styles.itemTitle}>Step 1</div>
                <div
                  className={styles.itemSubtitle}
                >{`적성&진로&이민 상담`}</div>
                <StaticImage
                  className={styles.imgContainer}
                  src={'../images/image1.svg'}
                />
                <div
                  className={styles.itemDescription}
                >{`15년 경력 원장의 1:1 학생 개인 맞춤형 상담`}</div>
              </div>
            ))}
          </div>
          <div>
            <div className={styles.rowNoWrap}>
              {Array.from({ length: 2 }).map((item) => (
                <div className={styles.infoColumn}>
                  <div className={styles.itemTitle}>{'Non-stop! Guide'}</div>
                  <div className={styles.itemSubtitle}>
                    {'한번에 모두 해결!'}
                  </div>
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
        </div>
      </section>

      <section className={styles.fitContent}>
        <OverlineText>You can make it real</OverlineText>
        <h2>
          WHO
          <br />
          WE ARE
        </h2>
        <div>
          <CTAButton>Check your dream major</CTAButton>
        </div>
      </section>

      <section className={styles.black} id="tutor">
        <h2 className={styles.sectionTitle}>검증된 튜터, 최상의 교육.</h2>
        <div className={styles.itemsContainer}>
          {Array.from({ length: 4 }).map((item) => (
            <div className={styles.itemContainer}>
              <div className={styles.itemTitle}>Step 1</div>
              <div className={styles.itemSubtitle}>{`적성&진로&이민 상담`}</div>
              <StaticImage
                className={styles.imgContainer}
                src={'../images/image1.svg'}
              />
              <div
                className={styles.itemDescription}
              >{`15년 경력 원장의 1:1 학생 개인 맞춤형 상담`}</div>
            </div>
          ))}
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
    </Layout>
  );
};

export default Index;

const CTAButton = styled.button`
  border: 2px solid #5349ab;
  border-radius: 16px;
  padding: 2rem 2rem;
  background-color: white;
  color: #5349ab;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 40px;
  font-weight: bold;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap};
  flex-wrap: ${({ disableWrap }) => (disableWrap ? 'unset' : 'wrap')};
  align-items: center;
  justify-content: center;
`;
