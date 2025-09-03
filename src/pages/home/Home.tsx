import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <div className={styles.hero_content}>
          <div className={styles.hero_badge}>
            종이없는 현장의 시작, 오늘의작업장
          </div>
          <h1 className={styles.hero_title}>
            데이터기반 현장 서류관리 플랫폼
            <br />
            안전보건관리체계 시스템
          </h1>
          <p className={styles.hero_subtitle}>
            오늘의작업장과 함께 데이터로 관리하세요!
          </p>
          <p className={styles.hero_description}>
            TBM 일지, 안전작업허가서부터 위험성평가, 품의서까지!
          </p>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className={styles.problem_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>
            종이 서류의 문제점을 해결한
            <br />
            <span className={styles.highlight}>오늘의작업장</span>
          </h2>
          <p className={styles.section_description}>
            기존 수기 서류에서 자주 발생하던 데이터 누락 및 서류 훼손으로 인한
            과태료를 방지하고
            <br />
            종이 집계, 승인권자 부재로 인한 작업 지연 시간을 줄일 수 있습니다.
          </p>
          <button className={styles.contact_button}>문의하기</button>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features_section}>
        <div className={styles.container}>
          <div className={styles.features_grid}>
            <div className={styles.feature_item}>
              <div className={styles.feature_number}>01</div>
              <h3 className={styles.feature_title}>
                종이 보관을 위한
                <br />
                물리적인 장소 없음
              </h3>
            </div>
            <div className={styles.feature_item}>
              <div className={styles.feature_number}>02</div>
              <h3 className={styles.feature_title}>
                서류 분실 및<br />
                훼손 위험 없음
              </h3>
            </div>
            <div className={styles.feature_item}>
              <div className={styles.feature_number}>03</div>
              <h3 className={styles.feature_title}>
                데이터 기반으로
                <br />
                현장 한 번에 파악
              </h3>
            </div>
            <div className={styles.feature_item}>
              <div className={styles.feature_number}>04</div>
              <h3 className={styles.feature_title}>
                승인권자 부재시,
                <br />
                카카오톡 알림 승인
              </h3>
            </div>
            <div className={styles.feature_item}>
              <div className={styles.feature_number}>05</div>
              <h3 className={styles.feature_title}>
                필수 값 지정으로
                <br />
                데이터 누락 없음
              </h3>
            </div>
            <div className={styles.feature_item}>
              <div className={styles.feature_number}>06</div>
              <h3 className={styles.feature_title}>
                대기업 관계자들과
                <br />약 1년간 공동 개발
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>
            오늘의작업장이
            <br />
            외주보다 나은 이유
          </h2>
          <p className={styles.section_description}>
            기본 개발 비용과 유지 보수 비용이 없는 오늘의작업장에서는
            <br />
            합리적인 비용으로 2-3일 이내에 바로 현장에 도입할 수 있습니다.
          </p>
          <p className={styles.section_subdescription}>
            필요 시 초기에만 커스터마이징 서류를 제작하여
            <br />
            추가 비용 없이 계속 사용해 보세요.
          </p>
          <p className={styles.notice}>
            *단, 새로운 커스터마이징 추가 시 비용 발생
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statistics_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>
            오늘의작업장과 시간과 비용을 절감하세요
          </h2>
          <p className={styles.section_description}>
            수기로 작성되던 현장서류를 디지털화하여 더 이상 자원을 낭비하지
            않아도 됩니다.
          </p>

          <div className={styles.stats_grid}>
            <div className={styles.stat_item}>
              <h3 className={styles.stat_title}>작업지연 방지</h3>
              <div className={styles.stat_value}>43%</div>
            </div>
            <div className={styles.stat_item}>
              <h3 className={styles.stat_title}>인건비 절감</h3>
              <div className={styles.stat_value}>80%</div>
            </div>
            <div className={styles.stat_item}>
              <h3 className={styles.stat_title}>과태료 및 사후증빙</h3>
              <div className={styles.stat_value}>30%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Management Section */}
      <section className={styles.data_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>데이터기반 현장 서류관리란?</h2>
          <p className={styles.section_description}>
            수기로 작성해 관리되지 않던 현장 서류들을 모바일과 PC에서 동기화하여
            관리하고,
            <br />
            다양한 형태의 서류 통계를 확인할 수 있는 새로운 형태의 현장
            서류관리입니다.
          </p>

          <div className={styles.comparison}>
            <div className={styles.comparison_item}>
              <h3 className={styles.comparison_title}>
                PSM 현장 월 평균 수기 작성 서류 수
              </h3>
              <div className={styles.comparison_value}>약 100장+</div>
            </div>
            <div className={styles.comparison_vs}>VS</div>
            <div className={styles.comparison_item}>
              <h3 className={styles.comparison_title}>오늘의작업장은</h3>
              <div className={styles.comparison_value}>0장</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className={styles.partnership_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>Our Partnership</h2>
          <div className={styles.partners_grid}>
            <div className={styles.partner_item}>
              <div className={styles.partner_logo}>Partner 1</div>
            </div>
            <div className={styles.partner_item}>
              <div className={styles.partner_logo}>Partner 2</div>
            </div>
            <div className={styles.partner_item}>
              <div className={styles.partner_logo}>Partner 3</div>
            </div>
            <div className={styles.partner_item}>
              <div className={styles.partner_logo}>Partner 4</div>
            </div>
            <div className={styles.partner_item}>
              <div className={styles.partner_logo}>Partner 5</div>
            </div>
            <div className={styles.partner_item}>
              <div className={styles.partner_logo}>Partner 6</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
