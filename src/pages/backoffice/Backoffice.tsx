import styles from "./Backoffice.module.scss";
import { ScrollAnimationContainer } from "../../feature/scrollAnimation/ScrollAnimationContainer";

export default function Backoffice() {
  return (
    <div className={styles.backoffice_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>
            어플과 백오피스 간 연동으로
            <br />
            실시간 데이터 관리를!
          </h1>
          <p className={styles.hero_description}>
            서류 관리는 물론, 근로자 관리까지! 모바일과 연동된 데이터를 관리해
            보세요.
          </p>
        </div>
      </section>
      <ScrollAnimationContainer>
        <div className={styles.hero_image}>
          <img
            src="/src/assets/images/backoffice/todayworkings_backoffice_banner.png"
            alt="오늘의작업장"
          />
        </div>
      </ScrollAnimationContainer>

      {/* Title Section */}
      <section className={styles.title_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.title_content}>
              <h2 className={styles.main_title}>
                모바일에서 작성한 현장서류를
                <br />
                <span className={styles.highlight_text}>
                  백오피스에서 확인해 보세요
                </span>
              </h2>
              <p className={styles.main_description}>
                백오피스 대시보드와 현장서류 목록에서 작업장별 현장 서류와
                종류별 통계 현황을 확인할 수 있어요.
              </p>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className={styles.dashboard_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.feature_grid}>
              <div className={styles.feature_content}>
                <h2 className={styles.feature_title}>
                  실시간으로 확인하는
                  <br />
                  현장서류 통계현황
                </h2>
                <p className={styles.feature_description}>
                  안전작업 허가서, 작업 위험성 평가, TBM 등
                  <br />
                  서류 및 작업 종류로 구분하여 확인 가능
                </p>
              </div>
              <div className={styles.feature_image}>
                <img
                  src="/src/assets/images/backoffice/backoffice_cross_image_1.png"
                  alt="실시간 통계현황"
                  className={styles.mobile_image}
                />
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statistics_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.feature_grid_reverse}>
              <div className={styles.feature_image}>
                <img
                  src="/src/assets/images/backoffice/backoffice_cross_image_2.png"
                  alt="현장서류 조회 및 엑셀 다운로드"
                  className={styles.mobile_image}
                />
              </div>
              <div className={styles.feature_content}>
                <h2 className={styles.feature_title}>
                  현장서류 조회 및
                  <br />
                  엑셀 다운로드
                </h2>
                <p className={styles.feature_description}>
                  필터를 사용해 현장 서류를 조회하고,
                  <br />
                  엑셀 파일로 다운로드할 수 있어요.
                </p>
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Member Management Title Section */}
      <section className={styles.member_title_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <h2 className={styles.section_title}>회원 관리도 백오피스에서</h2>
            <p className={styles.section_subtitle}>
              관리자 가입 승인부터 공지사항 작성까지
            </p>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Admin Approval Section */}
      <section className={styles.excel_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.feature_grid}>
              <div className={styles.feature_content}>
                <h2 className={styles.feature_title}>
                  관리자 가입{" "}
                  <span className={styles.highlight_text}>승인·반려</span>
                </h2>
                <p className={styles.feature_description}>
                  해당 회사로 가입한 관리자를
                  <br />
                  승인 또는 반려 처리
                </p>
              </div>
              <div className={styles.feature_image}>
                <img
                  src="/src/assets/images/backoffice/backoffice_cross_image_3.png"
                  alt="관리자 가입 승인·반려"
                  className={styles.mobile_image}
                />
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Member Management Section */}
      <section className={styles.approval_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.feature_grid_reverse}>
              <div className={styles.feature_image}>
                <img
                  src="/src/assets/images/backoffice/backoffice_cross_image_4.png"
                  alt="가입한 회원 관리"
                  className={styles.mobile_image}
                />
              </div>
              <div className={styles.feature_content}>
                <h2 className={styles.feature_title}>
                  가입한{" "}
                  <span className={styles.highlight_text}>회원 관리</span>
                </h2>
                <p className={styles.feature_description}>
                  관리자 가입 승인 처리 및
                  <br />
                  사용 중인 근로자 정보, 출·퇴근 현황 확인
                </p>
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Notice Management Section */}
      <section className={styles.member_management_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.feature_grid}>
              <div className={styles.feature_content}>
                <h2 className={styles.feature_title}>
                  <span className={styles.highlight_text}>공지사항</span> 등록 ·
                  관리
                </h2>
                <p className={styles.feature_description}>
                  근로자들이 어플로 바로 확인할 수 있는
                  <br />
                  공지사항을 작성하고 관리해 보세요.
                </p>
              </div>
              <div className={styles.feature_image}>
                <img
                  src="/src/assets/images/backoffice/backoffice_cross_image_5.png"
                  alt="공지사항 등록·관리"
                  className={styles.mobile_image}
                />
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>
    </div>
  );
}
