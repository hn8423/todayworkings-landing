import { useEffect, useState } from "react";
import styles from "./Service.module.scss";
import { ScrollAnimationContainer } from "../../feature/scrollAnimation/ScrollAnimationContainer";

export default function Service() {
  const [isMobile, setIsMobile] = useState(false);

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

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/오늘의작업장 서비스 소개서.pdf";
    link.download = "오늘의작업장 서비스 소개서.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.service_container}>
      {/* Hero Section with Video */}
      <section className={styles.hero_section}>
        <div className={styles.hero_content}>
          <ScrollAnimationContainer>
            <h1 className={styles.hero_title}>
              종이없는 현장의 시작,
              <br />
              오늘의작업장을 소개합니다!
            </h1>
            <p className={styles.hero_description}>
              안전보건관리체계 시스템 오늘의작업장과 함께, 현장서류의 디지털화를
              경험해 보세요.
            </p>
            <button
              className={styles.download_button}
              onClick={handleDownloadBrochure}
            >
              서비스 소개서 다운로드
            </button>
          </ScrollAnimationContainer>
        </div>
      </section>
      <div className={styles.video_section}>
        <div className={styles.video_container}>
          <iframe
            src="https://www.youtube.com/embed/fuLQyecjQjQ"
            title="오늘의작업장 소개 영상"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Statistics Section */}
      <section className={styles.statistics_section}>
        <div className={styles.container}>
          <h2 className={styles.statistics_title}>오늘의작업장과 함께하면</h2>
          <div className={styles.stats_grid}>
            <div
              style={{ gridColumn: "1 / 2", gridRow: "1 / 3" }}
              className={styles.stat_item}
            >
              <h3 className={styles.stat_title}>작업지연 방지</h3>
              <div className={styles.stat_value}>43%</div>
            </div>
            <div
              style={{ gridColumn: "2 / 3", gridRow: "1 / 3" }}
              className={styles.stat_item}
            >
              <h3 className={styles.stat_title}>인건비 절감</h3>
              <div className={styles.stat_value}>80%</div>
            </div>
            <div
              style={{ gridColumn: "3 / 4", gridRow: "1 / 3" }}
              className={styles.stat_item}
            >
              <h3 className={styles.stat_title}>과태료 및 사후증빙</h3>
              <div className={styles.stat_value}>30%</div>
            </div>
            <div
              style={{
                gridColumn: "1 / 4",
                gridRow: "3 / 6",
                display: isMobile ? "none" : "",
              }}
              className={`${styles.stat_item} ${styles.service_banner}`}
            />
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className={styles.features_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <h2 className={styles.section_title}>서비스 소개</h2>
          </ScrollAnimationContainer>

          <div className={styles.features_grid}>
            {/* APP Section */}
            <div className={styles.feature_item}>
              <ScrollAnimationContainer>
                <div className={styles.feature_content}>
                  <h3 className={styles.feature_title}>APP</h3>
                  <div className={styles.feature_description}>
                    <p>현장에서 클릭만으로 빠르게 문서를 작성해 보세요.</p>
                    <p>
                      안전작업허가서, TBM일지 등 회사 내부 양식 그대로
                      사용가능합니다.
                    </p>
                    <p>
                      더 이상 안전 작업 허가 지연에 따른 문제를 걱정하지 마세요
                    </p>
                  </div>
                  <div className={styles.feature_image}>
                    <img
                      src="/src/assets/images/service/service_image_1.png"
                      alt="APP 서비스"
                    />
                  </div>
                </div>
              </ScrollAnimationContainer>
            </div>

            {/* BACKOFFICE Section */}
            <div className={styles.feature_item}>
              <ScrollAnimationContainer>
                <div className={styles.feature_content}>
                  <h3 className={styles.feature_title}>
                    BACKOFFICE 관리자페이지
                  </h3>
                  <div className={styles.feature_description}>
                    <p>
                      APP에서 이뤄지고 있는 모든 데이터를 실시간 모니터링해
                      보세요.
                    </p>
                    <p>
                      제출된 서류의 법정기간 보관 및 모든 포맷(한글, 엑셀
                      등)으로
                    </p>
                    <p>다운로드도 가능합니다.</p>
                  </div>
                  <div className={styles.feature_image}>
                    <img
                      src="/src/assets/images/service/service_image_2.png"
                      alt="BACKOFFICE 관리자페이지"
                    />
                  </div>
                </div>
              </ScrollAnimationContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Service Characteristics Section */}
      <section className={styles.characteristics_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <h2 className={styles.section_title}>오늘의작업장 서비스 특징</h2>
          </ScrollAnimationContainer>

          <div className={styles.characteristics_grid}>
            <ScrollAnimationContainer>
              <div className={styles.characteristic_item}>
                <img
                  src="/src/assets/images/service/service_character_image_1.png"
                  alt="서비스 특징 1"
                  className={styles.characteristic_image}
                />
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.characteristic_item}>
                <img
                  src="/src/assets/images/service/service_character_image_2.png"
                  alt="서비스 특징 2"
                  className={styles.characteristic_image}
                />
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.characteristic_item}>
                <img
                  src="/src/assets/images/service/service_character_image_3.png"
                  alt="서비스 특징 3"
                  className={styles.characteristic_image}
                />
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.characteristic_item}>
                <img
                  src="/src/assets/images/service/service_character_image_4.png"
                  alt="서비스 특징 4"
                  className={styles.characteristic_image}
                />
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.characteristic_item}>
                <img
                  src="/src/assets/images/service/service_character_image_5.png"
                  alt="서비스 특징 5"
                  className={styles.characteristic_image}
                />
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.characteristic_item}>
                <img
                  src="/src/assets/images/service/service_character_image_6.png"
                  alt="서비스 특징 6"
                  className={styles.characteristic_image}
                />
              </div>
            </ScrollAnimationContainer>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className={styles.documents_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <h2 className={styles.documents_title}>
              모든 현장서류를 어플 하나로
            </h2>
          </ScrollAnimationContainer>

          <div className={styles.documents_grid}>
            <ScrollAnimationContainer>
              <div className={styles.document_item}>
                <div className={styles.document_item_content}>
                  <div className={styles.document_number}>01</div>
                  <h3 className={styles.document_title}>TBM 회의록</h3>
                </div>
                <div className={styles.document_item_image}>
                  <img
                    src="/src/assets/images/service/service_document_image_1.png"
                    alt="TBM 회의록"
                    className={styles.document_image}
                  />
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.document_item}>
                <div className={styles.document_item_content}>
                  <div className={styles.document_number}>02</div>
                  <h3 className={styles.document_title}>
                    안전작업허가서
                    <br />
                    <span className={styles.document_subtitle}>
                      (일반/화기)
                    </span>
                  </h3>
                </div>
                <div className={styles.document_item_image}>
                  <img
                    src="/src/assets/images/service/service_document_image_2.png"
                    alt="안전작업허가서"
                    className={styles.document_image}
                  />
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.document_item}>
                <div className={styles.document_item_content}>
                  <div className={styles.document_number}>03</div>
                  <h3 className={styles.document_title}>
                    JSA 위험성평가
                    <br />
                    <span className={styles.document_subtitle}>
                      (빈도/강도, 상/중/하)
                    </span>
                  </h3>
                </div>
                <div className={styles.document_item_image}>
                  <img
                    src="/src/assets/images/service/service_document_image_3.png"
                    alt="JSA 위험성평가"
                    className={styles.document_image}
                  />
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.document_item}>
                <div className={styles.document_item_content}>
                  <div className={styles.document_number}>04</div>
                  <h3 className={styles.document_title}>점검표</h3>
                </div>
                <div className={styles.document_item_image}>
                  <img
                    src="/src/assets/images/service/service_document_image_4.png"
                    alt="점검표"
                    className={styles.document_image}
                  />
                </div>
              </div>
            </ScrollAnimationContainer>
          </div>
          <div className={styles.psm_law_content}>
            <ScrollAnimationContainer>
              <div className={styles.psm_content}>
                <h2 className={styles.section_title}>
                  PSM 작성 대상 현장이라면?
                </h2>
                <h3 className={styles.psm_subtitle}>
                  필수 공정안전보고서 데이터로 관리하기
                </h3>
                <p className={styles.section_description}>
                  비효율적인 현장서류를 혁신적으로 디지털화해 보세요.
                  <br />
                  워드, 엑셀로 작성할 필요 없이 모바일로 간편하게!
                </p>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.law_content}>
                <h2 className={styles.section_title}>
                  산안법, Kosha 가이드 그대로!
                </h2>
                <h3 className={styles.law_subtitle}>
                  최신 법령과 가이드에 맞게 내 현장을 바꿔보세요.
                </h3>
                <p className={styles.section_description}>
                  플랫폼화에 관심이 있지만 법령을 반영하지 못할까봐
                  걱정되시나요?
                  <br />
                  실제 사용 중인 대규모 사업장의 피드백을 반영하여
                  업데이트합니다.
                </p>
              </div>
            </ScrollAnimationContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
