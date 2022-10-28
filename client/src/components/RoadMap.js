import React from "react";
import Platform from './Platform';

const roadMaps = [
  {
    date: `2021 Q1`,
    desc: `Idea Generation`,
    isCompleted: true
  },
  {
    date: `2021 Q2`,
    desc: `Market Research`,
    isCompleted: true
  },
  {
    date: `2022 Q4`,
    desc: `Conceptualization`,
    isCompleted: true
  },
  {
    date: `2023 Q1`,
    desc: `ICO Public Sales Launch`,
    isCompleted: true
  },
  {
    date: `2023 Q2`,
    desc: `Exchange Platform Launch and Third-Party listing`,
    isCompleted: true
  },
  {
    date: `2023 Q4`,
    desc: `Copy Trade & Bot Trading Platform Development`,
    isCompleted: false
  },
  {
    date: `2024 Q1`,
    desc: `VIP Rewards Implementation`,
    isCompleted: false
  },
  {
    date: `2024 Q2`,
    desc: `Lending & Borrow Implementation`,
    isCompleted: false
  },
  {
    date: `2024 Q4`,
    desc: `NFTs Marketplace Implementation`,
    isCompleted: false
  }
];

function RoadMap() {
  return (
    <main className="nk-pages tc-light">
      <section className="section py-5" id="roadmap">
        <div className="container">
          <div className="row justify-content-center text-center">

            <div className="col-lg-6">
              <div className="section-head section-head-s2">
                <h2
                  className="title title-xl animated"
                  data-animate="fadeInUp"
                  data-delay="0.1"
                  title="RoadMap"
                >
                  ROADMAP
                </h2>
                <p
                  className="animated"
                  data-animate="fadeInUp"
                  data-delay="0.2"
                >
                  The roadmap is update on a quarterly basis. Our team will keep
                  track of all changes on the market and take into the
                  consideration the feedback from our community.{" "}
                </p>
              </div>

              <div
                className="hexa-road-map"
              >
                <div className="road-map-line"></div>
                {
                  roadMaps?.map((roadMap) => {
                    return (
                      <div className="road-map-item">
                        {
                          roadMap?.isCompleted ?
                            <img src="images/icons/road-map-completed.svg" alt="img" /> :
                            <img src="images/icons/road-map-incompleted.svg" alt="img" />
                        }


                        <p className="q-date">{roadMap?.date}</p>

                        <p className="q-desc">&nbsp; -&nbsp; {roadMap?.desc}</p>
                      </div>
                    );
                  })
                }
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RoadMap;
