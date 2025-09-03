import styles from "./Backoffice.module.scss";

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
          <button className={styles.hero_button}>더보기</button>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className={styles.dashboard_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid}>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>
                모바일에서 작성한 현장서류를
                <br />
                백오피스에서 확인해 보세요
              </h2>
              <p className={styles.feature_description}>
                백오피스 대시보드와 현장서류 목록에서 작업장별 현장 서류와
                종류별 통계 현황을 확인할 수 있어요.
              </p>
            </div>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>
                백오피스 대시보드 화면
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statistics_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid_reverse}>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>
                실시간 통계현황 화면
              </div>
            </div>
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
          </div>
        </div>
      </section>

      {/* Excel Download Section */}
      <section className={styles.excel_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid}>
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
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>엑셀 다운로드 화면</div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Management Title Section */}
      <section className={styles.member_title_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>회원 관리도 백오피스에서</h2>
          <p className={styles.section_subtitle}>
            관리자 가입 승인부터 공지사항 작성까지
          </p>
        </div>
      </section>

      {/* Admin Approval Section */}
      <section className={styles.approval_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid_reverse}>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>관리자 승인 화면</div>
            </div>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>관리자 가입 승인·반려</h2>
              <p className={styles.feature_description}>
                해당 회사로 가입한 관리자를
                <br />
                승인 또는 반려 처리
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Management Section */}
      <section className={styles.member_management_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid}>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>가입한 회원 관리</h2>
              <p className={styles.feature_description}>
                관리자 가입 승인 처리 및
                <br />
                사용 중인 근로자 정보, 출·퇴근 현황 확인
              </p>
            </div>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>회원 관리 화면</div>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Management Section */}
      <section className={styles.notice_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid_reverse}>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>공지사항 관리 화면</div>
            </div>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>공지사항 등록 · 관리</h2>
              <p className={styles.feature_description}>
                근로자들이 어플로 바로 확인할 수 있는
                <br />
                공지사항을 작성하고 관리해 보세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suggestion Box Section */}
      <section className={styles.suggestion_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid}>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>근로자 건의함</h2>
              <p className={styles.feature_description}>
                민원 관리 모바일 근로자 건의함으로
                <br />
                제출된 민원을 확인하고 처리
              </p>
            </div>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>근로자 건의함 화면</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Assignment Section */}
      <section className={styles.work_assignment_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid_reverse}>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>작업 부여 화면</div>
            </div>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>오늘의 작업 부여하기</h2>
              <p className={styles.feature_description}>
                금일 해야 할 작업과 명일 해야 할 작업을 추가하여
                <br />
                근로자에게 오늘의 작업을 할당하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Type Management Section */}
      <section className={styles.work_type_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid}>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>작업유형 관리하기</h2>
              <p className={styles.feature_description}>
                위치에 따라 추가한 작업 유형을
                <br />
                캘린더에서 작업 일정을 확인해 보세요.
              </p>
            </div>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>작업유형 관리 화면</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Section */}
      <section className={styles.emergency_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid_reverse}>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>긴급알림 전송 화면</div>
            </div>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>긴급알림 전송</h2>
              <p className={styles.feature_description}>
                근무지, 작업유형별 근로자를 지정하여 실시간으로 긴급알림
                발송하고 관리
              </p>
            </div>
          </div>
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
