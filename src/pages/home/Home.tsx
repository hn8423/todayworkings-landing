import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { ScrollAnimationContainer } from "../../feature/scrollAnimation/ScrollAnimationContainer";
import { InfiniteScroll } from "../../common/infiniteScroll/InfiniteScroll";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // 파트너 이미지 데이터
  const partnerImages = [
    {
      src: "/src/assets/images/home/home_infinite_banner_1.png",
      alt: "banner_1",
      name: "banner_1",
    },
    {
      src: "/src/assets/images/home/home_infinite_banner_2.png",
      alt: "banner_2",
      name: "banner_2",
    },
    {
      src: "/src/assets/images/home/home_infinite_banner_3.png",
      alt: "banner_3",
      name: "banner_3",
    },
    {
      src: "/src/assets/images/home/home_infinite_banner_4.png",
      alt: "banner_4",
      name: "banner_4",
    },
    {
      src: "/src/assets/images/home/home_infinite_banner_5.png",
      alt: "banner_5",
      name: "banner_5",
    },
    {
      src: "/src/assets/images/home/home_infinite_banner_6.png",
      alt: "banner_6",
      name: "banner_6",
    },
    {
      src: "/src/assets/images/home/home_infinite_banner_7.png",
      alt: "banner_7",
      name: "banner_7",
    },
    {
      src: "/src/assets/images/home/home_infinite_banner_8.png",
      alt: "banner_8",
      name: "banner_8",
    },
    {
      src: "/src/assets/images/home/home_infinite_banner_9.png",
      alt: "banner_9",
      name: "banner_9",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      // console.log("innerWidth:", window.innerWidth);
      // console.log("innerHeight:", window.innerHeight);
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.home_container}>
      {/* Hero Section */}
      <ScrollAnimationContainer>
        <section className={styles.hero_section}>
          <div className={styles.hero_content}>
            <div className={styles.hero_badge}>
              데이터기반 현장 서류관리 플랫폼
            </div>
            <h1 className={styles.hero_title}>안전보건관리체계 시스템</h1>
            <p className={styles.hero_title}>
              오늘의작업장과 함께 데이터로 관리하세요!
            </p>
            <br />
            <p className={styles.hero_description}>
              TBM 일지, 안전작업허가서부터 위험성평가, 품의서까지!
            </p>
          </div>
        </section>
      </ScrollAnimationContainer>

      <ScrollAnimationContainer>
        <div className={styles.hero_image}>
          <img
            src="/src/assets/images/home/todayworkings_home_banner.png"
            alt="오늘의작업장"
          />
        </div>
      </ScrollAnimationContainer>

      {/* Features Problem Section */}
      <section className={styles.features_section}>
        <div className={styles.features_content}>
          <ScrollAnimationContainer width={isMobile ? "100%" : "70%"}>
            <div className={styles.features_container}>
              <div className={styles.features_grid}>
                <div className={styles.feature_item}>
                  <div className={styles.feature_image}>
                    <img
                      src="/src/assets/images/home/home_computer.png"
                      alt="종이 보관을 위한 물리적인 장소 없음"
                    />
                  </div>
                  <h3 className={styles.feature_title}>
                    종이 보관을 위한
                    <br />
                    <span className={styles.highlight}>물리적인 장소 없음</span>
                  </h3>
                </div>
                <div className={styles.feature_item}>
                  <div className={styles.feature_image}>
                    <img
                      src="/src/assets/images/home/home_document.png"
                      alt="종이 보관을 위한 물리적인 장소 없음"
                    />
                  </div>
                  <h3 className={styles.feature_title}>
                    서류 분실 및<br />
                    <span className={styles.highlight}>훼손 위험 없음</span>
                  </h3>
                </div>
                <div className={styles.feature_item}>
                  <div className={styles.feature_image}>
                    <img
                      src="/src/assets/images/home/home_graph.png"
                      alt="종이 보관을 위한 물리적인 장소 없음"
                    />
                  </div>
                  <h3 className={styles.feature_title}>
                    데이터 기반으로
                    <br />
                    <span className={styles.highlight}>현장 한 번에 파악</span>
                  </h3>
                </div>
                <div className={styles.feature_item}>
                  <div className={styles.feature_image}>
                    <img
                      src="/src/assets/images/home/home_bell.png"
                      alt="종이 보관을 위한 물리적인 장소 없음"
                    />
                  </div>
                  <h3 className={styles.feature_title}>
                    승인권자 부재시,
                    <br />
                    <span className={styles.highlight}>카카오톡 알림 승인</span>
                  </h3>
                </div>
                <div className={styles.feature_item}>
                  <div className={styles.feature_image}>
                    <img
                      src="/src/assets/images/home/home_inspect.png"
                      alt="종이 보관을 위한 물리적인 장소 없음"
                    />
                  </div>
                  <h3 className={styles.feature_title}>
                    필수 값 지정으로
                    <br />
                    <span className={styles.highlight}>데이터 누락 없음</span>
                  </h3>
                </div>
                <div className={styles.feature_item}>
                  <div className={styles.feature_image}>
                    <img
                      src="/src/assets/images/home/home_highfive.png"
                      alt="종이 보관을 위한 물리적인 장소 없음"
                    />
                  </div>
                  <h3 className={styles.feature_title}>
                    대기업 관계자들과
                    <br />
                    <span className={styles.highlight}>약 1년간 공동 개발</span>
                  </h3>
                </div>
              </div>
            </div>
          </ScrollAnimationContainer>

          <ScrollAnimationContainer width={isMobile ? "100%" : "30%"}>
            <div className={styles.problem_container}>
              <h2 className={styles.problem_title}>
                종이 서류의
                <br />
                문제점을 해결한
                <br />
                오늘의작업장
              </h2>
              <p className={styles.problem_description}>
                기존 수기 서류에서 자주 발생하던
                <br />
                데이터 누락 및 서류 훼손으로
                <br />
                인한 과태료를 방지하고
                <br />
                <br />
                종이 집계, 승인권자 부재로 인한 <br />
                작업 지연 시간을 줄일 수 있습니다.
              </p>
            </div>
            <button className={styles.contact_button}>문의하기</button>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits_section}>
        <div className={styles.benefits_content}>
          <ScrollAnimationContainer width={isMobile ? "100%" : "35%"}>
            <div className={styles.benefits_container}>
              <h2 className={styles.benefits_title}>
                <span className={styles.highlight}>오늘의작업장</span>이
                <br />
                외주보다 나은 이유
              </h2>
              <p>
                기본 개발 비용과 유지 보수 비용이 없는 오늘의작업장에서는
                <br />
                합리적인 비용으로 2-3일 이내에 바로 현장에 도입할 수 있습니다.
              </p>
              <p>
                필요 시 초기에만 커스터마이징 서류를 제작하여
                <br />
                추가 비용 없이 계속 사용해 보세요.
              </p>
            </div>
            <p className={styles.notice}>
              *단, 새로운 커스터마이징 추가 시 비용 발생
            </p>
          </ScrollAnimationContainer>
          <ScrollAnimationContainer width={isMobile ? "100%" : "65%"}>
            <div className={styles.benefits_image}>
              <img
                src="/src/assets/images/home/todayworkings_home_2nd_banner.png"
                alt="benefits_image"
              />
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statistics_section}>
        <div className={styles.container}>
          <div className={styles.stats_grid}>
            <div
              style={{
                gridColumn: "1 / 2",
                gridRow: "1 / 2",
                display: isMobile ? "none" : "",
              }}
              className={`${styles.stat_item_header}`}
            >
              <ScrollAnimationContainer>
                <div className={styles.stats_icon}>
                  <img
                    src="/src/assets/images/home/home_money_and_clock.png"
                    alt="시간과 비용 절감"
                  />
                </div>
              </ScrollAnimationContainer>
            </div>

            <div
              style={{
                gridColumn: `${isMobile ? "1" : "2"} / 4`,
                gridRow: "1 / 2",
              }}
              className={`${styles.stats_header_content}`}
            >
              <ScrollAnimationContainer>
                <div className={styles.stats_asterisk}>*</div>
                <h2 className={styles.stats_title}>
                  오늘의작업장과 시간과 비용을 절감하세요
                </h2>
                <p className={styles.stats_description}>
                  수기로 작성되던 현장서류를 디지털화하여 더 이상 자원을
                  낭비하지 않아도 됩니다.
                </p>
              </ScrollAnimationContainer>
            </div>

            {/* Statistics Cards */}

            <div
              className={`${styles.stat_item} ${styles.stat_item_dark}`}
              style={{ gridColumn: "1 / 2", gridRow: "2 / 3" }}
            >
              <ScrollAnimationContainer>
                <h3 className={styles.stat_title}>작업지연 방지</h3>
                <div className={styles.stat_value}>43%</div>
              </ScrollAnimationContainer>
            </div>
            <div
              className={`${styles.stat_item} ${styles.stat_item_blue}`}
              style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}
            >
              <ScrollAnimationContainer>
                <h3 className={styles.stat_title}>인건비 절감</h3>
                <div className={styles.stat_value}>80%</div>
              </ScrollAnimationContainer>
            </div>
            <div
              className={`${styles.stat_item} ${styles.stat_item_dark}`}
              style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}
            >
              <ScrollAnimationContainer>
                <h3 className={styles.stat_title}>과태료 및 사후증빙</h3>
                <div className={styles.stat_value}>30%</div>
              </ScrollAnimationContainer>
            </div>

            {/* Data Management Item */}
            <div
              className={`${styles.stat_item} ${styles.stat_item_data}`}
              style={{ gridColumn: "1 / 4", gridRow: "3 / 4" }}
            >
              <ScrollAnimationContainer>
                <h3 className={styles.data_title}>
                  데이터기반 현장 서류관리란?
                </h3>
                <p className={styles.data_description}>
                  수기로 작성해 관리되지 않던 현장 서류들을 모바일과 PC에서
                  동기화하여 관리하고,
                  <br />
                  다양한 형태의 서류 통계를 확인할 수 있는 새로운 형태의 현장
                  서류관리입니다.
                </p>
              </ScrollAnimationContainer>
            </div>

            {/* Comparison Cards as Grid Items */}
            <div
              style={{ gridColumn: "1 / 3", gridRow: "4 / 5" }}
              className={`${styles.stat_item} ${styles.stat_item_comparison_left}`}
            >
              <ScrollAnimationContainer>
                <div className={styles.comparison_content}>
                  <h4 className={styles.comparison_subtitle}>
                    PSM 현장 월 평균 수기 작성 서류 수
                  </h4>
                  <div className={styles.comparison_value_large}>약 100장+</div>
                </div>
              </ScrollAnimationContainer>
            </div>
            <div
              style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}
              className={`${styles.stat_item} ${styles.stat_item_comparison_right}`}
            >
              <ScrollAnimationContainer>
                <h4 className={styles.comparison_subtitle_white}>
                  오늘의작업장은
                </h4>
                <div className={styles.comparison_value_white}>0장</div>
              </ScrollAnimationContainer>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className={styles.data_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.youtube_container}>
              <div className={styles.youtube_wrapper}>
                <iframe
                  src="https://www.youtube.com/embed/fuLQyecjQjQ"
                  title="오늘의작업장 소개 영상"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={styles.youtube_iframe}
                ></iframe>
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Partnership Section */}

      <div className={styles.scroll_section}>
        <InfiniteScroll
          images={partnerImages.slice(0, 9)}
          speed={25}
          direction="left"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}
