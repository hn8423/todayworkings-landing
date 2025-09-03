import styles from "./Service.module.scss";

export default function Service() {
  return (
    <div className={styles.service_container}>
      {/* Hero Section with Video */}
      <section className={styles.hero_section}>
        <div className={styles.hero_content}>
          <div className={styles.hero_badge}>
            종이없는 현장의 시작, 오늘의작업장
          </div>
          <h1 className={styles.hero_title}>오늘의작업장을 소개합니다!</h1>
          <p className={styles.hero_description}>
            안전보건관리체계 시스템 오늘의작업장과 함께, 현장서류의 디지털화를
            경험해 보세요.
          </p>
          <button className={styles.download_button}>
            서비스 소개서 다운로드
          </button>
        </div>

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
      </section>

      {/* Service Introduction Section */}
      <section className={styles.intro_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>오늘의작업장을 소개합니다</h2>
          <p className={styles.section_description}>
            수기작성 현장서류의 단점을 극복한 현장서류 디지털화를 경험해 보세요.
            종이없는 현장의 시작, 데이터기반 현장 서류관리 플랫폼 오늘의작업장을
            소개합니다.
          </p>
          <button className={styles.download_button_secondary}>
            서비스 소개서 다운로드
          </button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statistics_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>오늘의작업장과 함께하면</h2>
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

      {/* Service Features Section */}
      <section className={styles.features_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>서비스 소개</h2>

          <div className={styles.features_grid}>
            <div className={styles.feature_item}>
              <div className={styles.feature_icon}>
                <div className={styles.app_icon}>APP</div>
              </div>
              <div className={styles.feature_content}>
                <p className={styles.feature_description}>
                  현장에서 클릭만으로 빠르게 문서를 작성해 보세요.
                  <br />
                  안전작업허가서, TBM일지 등 회사 내부 양식 그대로
                  사용가능합니다.
                  <br />더 이상 안전 작업 허가 지연에 따른 문제를 걱정하지
                  마세요
                </p>
              </div>
            </div>

            <div className={styles.feature_item}>
              <div className={styles.feature_icon}>
                <div className={styles.backoffice_icon}>
                  BACKOFFICE
                  <br />
                  관리자페이지
                </div>
              </div>
              <div className={styles.feature_content}>
                <p className={styles.feature_description}>
                  APP에서 이뤄지고 있는 모든 데이터를 실시간 모니터링해 보세요.
                  <br />
                  제출된 서류의 법정기간 보관 및 모든 포맷(한글, 엑셀 등)으로
                  <br />
                  다운로드도 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Characteristics Section */}
      <section className={styles.characteristics_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>오늘의작업장 서비스 특징</h2>
          <p className={styles.section_description}>
            단순한 디지털화를 넘어, 효율성과 안전성, 생산성을 극대화합니다.
            <br />
            실시간 데이터 공유, 직관적인 UI/UX, 그리고 강력한 보안 기능을 통해
            기존 플랫폼들과의 차별화를 경험해보세요.
          </p>
        </div>
      </section>

      {/* Documents Section */}
      <section className={styles.documents_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>모든 현장서류를 어플 하나로</h2>

          <div className={styles.documents_grid}>
            <div className={styles.document_item}>
              <div className={styles.document_number}>01</div>
              <h3 className={styles.document_title}>TBM 회의록</h3>
            </div>

            <div className={styles.document_item}>
              <div className={styles.document_number}>02</div>
              <h3 className={styles.document_title}>
                안전작업허가서
                <br />
                (일반/화기)
              </h3>
            </div>

            <div className={styles.document_item}>
              <div className={styles.document_number}>03</div>
              <h3 className={styles.document_title}>
                JSA 위험성평가
                <br />
                (빈도/강도, 상/중/하)
              </h3>
            </div>

            <div className={styles.document_item}>
              <div className={styles.document_number}>04</div>
              <h3 className={styles.document_title}>점검표</h3>
            </div>
          </div>
        </div>
      </section>

      {/* PSM Section */}
      <section className={styles.psm_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>PSM 작성 대상 현장이라면?</h2>
          <h3 className={styles.psm_subtitle}>
            필수 공정안전보고서 데이터로 관리하기
          </h3>
          <p className={styles.section_description}>
            비효율적인 현장서류를 혁신적으로 디지털화해 보세요.
            <br />
            워드, 엑셀로 작성할 필요 없이 모바일로 간편하게!
          </p>
        </div>
      </section>

      {/* Law Compliance Section */}
      <section className={styles.law_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>산안법, Kosha 가이드 그대로!</h2>
          <h3 className={styles.law_subtitle}>
            최신 법령과 가이드에 맞게 내 현장을 바꿔보세요.
          </h3>
          <p className={styles.section_description}>
            플랫폼화에 관심이 있지만 법령을 반영하지 못할까봐 걱정되시나요?
            <br />
            실제 사용 중인 대규모 사업장의 피드백을 반영하여 업데이트합니다.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>궁금한 점이 있다면</h2>
          <h3 className={styles.contact_subtitle}>언제든지 연락 주세요</h3>
          <button className={styles.contact_button}>문의하기</button>
        </div>
      </section>
    </div>
  );
}
