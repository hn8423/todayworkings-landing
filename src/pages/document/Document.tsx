import styles from "./Document.module.scss";

export default function Document() {
  return (
    <div className={styles.document_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>
            지겨운 수기 작성은 이제 안녕.
            <br />
            현장서류를 모바일로 한 번에!
          </h1>
          <p className={styles.hero_description}>
            안전작업허가서, 위험성평가 등 현장에서 바로 어플로 작성해 보세요.
          </p>
        </div>
      </section>

      {/* Document Check Section */}
      <section className={styles.check_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid}>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>현장서류 확인하기</h2>
              <p className={styles.feature_description}>
                내가 확인해야 할 서류만 쏙쏙 골라서 확인하고,
                <br />
                버튼을 통해 해당 페이지로 바로 이동
              </p>
            </div>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>현장서류 확인 화면</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filter_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid_reverse}>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>필터 기능 화면</div>
            </div>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>
                필터 기능으로
                <br />
                원하는 서류만 확인하기
              </h2>
              <p className={styles.feature_description}>
                서류 더미 속 찾고 있는 서류가 있다면?
                <br />
                필터를 적용해 한 번에 조회
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className={styles.signature_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid}>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>서명 확인도 여기서 바로!</h2>
              <p className={styles.feature_description}>
                결재현황과 서명 현황 프로세스를 한 눈에 볼 수 있어요.
                <br />* 안전작업허가서 필요/확인 항목 확인 가능
              </p>
            </div>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>서명 확인 화면</div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Title Section */}
      <section className={styles.documents_title_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>현장서류</h2>
        </div>
      </section>

      {/* Safety Work Permit Section */}
      <section className={styles.safety_permit_section}>
        <div className={styles.container}>
          <div className={styles.document_header}>
            <h3 className={styles.document_title}>안전작업 허가서</h3>
            <p className={styles.document_description}>
              현장서류의 중심, 안전작업 허가서! KOSHA GUIDE를 그대로 반영한
              안전작업 허가서 프로세스를 경험해 보세요.
            </p>
          </div>

          <div className={styles.process_section}>
            <h4 className={styles.process_title}>안전작업 허가서 프로세스</h4>

            <div className={styles.process_grid}>
              <div className={styles.process_item}>
                <h5 className={styles.process_step_title}>일반/화기 선택</h5>
                <p className={styles.process_step_description}>
                  작업 내용을 입력하고, 허가시간을 설정합니다.
                  <br />* 화기 선택 시 가스농도 측정
                </p>
              </div>

              <div className={styles.process_item}>
                <h5 className={styles.process_step_title}>허가관련</h5>
                <p className={styles.process_step_description}>
                  작업 내용, 설비 정보, 첨부서류를 업로드하고 신청자, 발주
                  담당자를 지정합니다.
                </p>
              </div>

              <div className={styles.process_item}>
                <h5 className={styles.process_step_title}>안전조치 요구사항</h5>
                <p className={styles.process_step_description}>
                  안전조치 요구사항 목록을 확인합니다.
                  <br />
                  필요 시 개소를 입력하고 도면을 업로드합니다.
                </p>
              </div>

              <div className={styles.process_item}>
                <h5 className={styles.process_step_title}>
                  안전보호구, 장비 준비사항
                </h5>
                <p className={styles.process_step_description}>
                  조명장치, 적정 소화기 배치 등 안전보호구와 장비 준비사항을
                  확인합니다.
                </p>
              </div>

              <div className={styles.process_item}>
                <h5 className={styles.process_step_title}>보충작업 허가</h5>
                <p className={styles.process_step_description}>
                  고소, 중장비, 밀폐공간, 굴착, 정전, 방사선 중 항목에 해당하는
                  정보를 기입합니다.
                </p>
              </div>

              <div className={styles.process_item}>
                <h5 className={styles.process_step_title}>
                  가스농도 측정(화기/밀폐)
                </h5>
                <p className={styles.process_step_description}>
                  가스농도 측정을 4차에 걸쳐 입력합니다.
                  <br />
                  *2시간 마다 자체 알림 발송
                </p>
              </div>

              <div className={styles.process_item}>
                <h5 className={styles.process_step_title}>결재담당자 지정</h5>
                <p className={styles.process_step_description}>
                  각 항목의 담당자를 지정하고 서명합니다.
                  <br />
                  담당자에게 서명 가능한 알림이 전송됩니다.
                </p>
              </div>

              <div className={styles.process_item}>
                <h5 className={styles.process_step_title}>작업허가 연장</h5>
                <p className={styles.process_step_description}>
                  필요 시 작업허가 연장을 진행합니다.
                  <br />각 담당자 서명까지 진행하면, 허가서 완성!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Assessment Section */}
      <section className={styles.risk_assessment_section}>
        <div className={styles.container}>
          <div className={styles.document_card}>
            <div className={styles.document_card_header}>
              <span className={styles.card_label}>현장서류</span>
            </div>
            <h3 className={styles.document_card_title}>작업위험성평가</h3>
            <p className={styles.document_card_description}>
              현장서류의 기본이 되는 작업위험성평가를 모바일에서 유형별로
              간편하게 작성해 보세요!
              <br />* 7단계 반영 완료!
            </p>
          </div>
        </div>
      </section>

      {/* TBM Section */}
      <section className={styles.tbm_section}>
        <div className={styles.container}>
          <div className={styles.document_card}>
            <div className={styles.document_card_header}>
              <span className={styles.card_label}>현장서류</span>
            </div>
            <h3 className={styles.document_card_title}>TBM 회의록</h3>
            <p className={styles.document_card_description}>
              작업 전 필수, TBM 회의록 작성을 모바일로!
              <br />
              회의 내용 입력부터 근로자 서명까지
              <br />
              수기 작성의 한계를 해결한 똑똑한 프로세스
            </p>
          </div>
        </div>
      </section>

      {/* Safety Pledge Section */}
      <section className={styles.safety_pledge_section}>
        <div className={styles.container}>
          <div className={styles.document_card}>
            <div className={styles.document_card_header}>
              <span className={styles.card_label}>현장서류</span>
            </div>
            <h3 className={styles.document_card_title}>안전서약서</h3>
            <p className={styles.document_card_description}>
              안전작업 허가서 진행 전 필수!
              <br />
              우리 현장 서약서 내용을 그대로,
              <br />
              서약서 내용 확인과 단체 서명까지 한 번에!
            </p>
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
