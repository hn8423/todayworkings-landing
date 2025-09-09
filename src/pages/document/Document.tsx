import { useEffect } from "react";

import styles from "./Document.module.scss";
import { ScrollAnimationContainer } from "../../feature/scrollAnimation/ScrollAnimationContainer";

export default function Document() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.document_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <ScrollAnimationContainer>
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
        </ScrollAnimationContainer>
      </section>

      <ScrollAnimationContainer>
        <div className={styles.hero_image}>
          <img
            src="/src/assets/images/document/todayworkings_document_banner.png"
            alt="오늘의작업장"
          />
        </div>
      </ScrollAnimationContainer>

      {/* Document Check Section */}
      <section className={styles.check_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
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
                <img
                  src="/src/assets/images/document/document_cross_image_1.png"
                  alt="현장서류 확인하기"
                  className={styles.mobile_image}
                />
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filter_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.feature_grid_reverse}>
              <div className={styles.feature_image}>
                <img
                  src="/src/assets/images/document/document_cross_image_2.gif"
                  alt="필터 기능으로 원하는 서류만 확인하기"
                  className={styles.mobile_image}
                />
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
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Signature Section */}
      <section className={styles.signature_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.feature_grid}>
              <div className={styles.feature_content}>
                <h2 className={styles.feature_title}>
                  서명 확인도 여기서 바로!
                </h2>
                <p className={styles.feature_description}>
                  결재현황과 서명 현황 프로세스를 한 눈에 볼 수 있어요.
                  <br />
                  <span className={styles.notice_text}>
                    * 안전작업허가서 필요/확인 항목 확인 가능
                  </span>
                </p>
              </div>
              <div className={styles.feature_image}>
                <img
                  src="/src/assets/images/document/document_cross_image_3.png"
                  alt="서명 확인도 여기서 바로!"
                  className={styles.mobile_image}
                />
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <h2 className={styles.process_main_title}>
              안전작업 허가서 프로세스
            </h2>
          </ScrollAnimationContainer>

          <div className={styles.process_grid}>
            <ScrollAnimationContainer>
              <div className={styles.process_item}>
                <div className={styles.process_image}>
                  <img
                    src="/src/assets/images/document/document_process_image_1.png"
                    alt="일반/화기 선택"
                    className={styles.process_mobile_image}
                  />
                </div>
                <div className={styles.process_step_content}>
                  <h3 className={styles.process_step_title}>일반/화기 선택</h3>
                  <p className={styles.process_step_description}>
                    작업 내용을 입력하고, 허가시간을 설정합니다. * 화기 선택 시
                    가스농도 측정
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.process_item}>
                <div className={styles.process_image}>
                  <img
                    src="/src/assets/images/document/document_process_image_2.png"
                    alt="허가관련"
                    className={styles.process_mobile_image}
                  />
                </div>
                <div className={styles.process_step_content}>
                  <h3 className={styles.process_step_title}>허가관련</h3>
                  <p className={styles.process_step_description}>
                    작업 내용, 설비 정보, 첨부서류를 업로드하고 신청자, 발주
                    담당자를 지정합니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.process_item}>
                <div className={styles.process_image}>
                  <img
                    src="/src/assets/images/document/document_process_image_3.png"
                    alt="안전조치 요구사항"
                    className={styles.process_mobile_image}
                  />
                </div>
                <div className={styles.process_step_content}>
                  <h3 className={styles.process_step_title}>
                    안전조치 요구사항
                  </h3>
                  <p className={styles.process_step_description}>
                    안전조치 요구사항 목록을 확인합니다. 필요 시 개소를 입력하고
                    도면을 업로드합니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.process_item}>
                <div className={styles.process_image}>
                  <img
                    src="/src/assets/images/document/document_process_image_4.png"
                    alt="안전보호구, 장비 준비사항"
                    className={styles.process_mobile_image}
                  />
                </div>
                <div className={styles.process_step_content}>
                  <h3 className={styles.process_step_title}>
                    안전보호구, 장비 준비사항
                  </h3>
                  <p className={styles.process_step_description}>
                    조명장치, 적정 소화기 배치 등 안전보호구와 장비 준비사항을
                    확인합니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.process_item}>
                <div className={styles.process_image}>
                  <img
                    src="/src/assets/images/document/document_process_image_5.png"
                    alt="보충작업 허가"
                    className={styles.process_mobile_image}
                  />
                </div>
                <div className={styles.process_step_content}>
                  <h3 className={styles.process_step_title}>보충작업 허가</h3>
                  <p className={styles.process_step_description}>
                    고소, 중장비, 밀폐공간, 굴착, 정전, 방사선 중 항목에
                    해당하는 정보를 기입합니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.process_item}>
                <div className={styles.process_image}>
                  <img
                    src="/src/assets/images/document/document_process_image_6.png"
                    alt="가스농도 측정(화기/밀폐)"
                    className={styles.process_mobile_image}
                  />
                </div>
                <div className={styles.process_step_content}>
                  <h3 className={styles.process_step_title}>
                    가스농도 측정(화기/밀폐)
                  </h3>
                  <p className={styles.process_step_description}>
                    가스농도 측정을 4차에 걸쳐 입력합니다. *2시간 마다 자체 알림
                    발송
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.process_item}>
                <div className={styles.process_image}>
                  <img
                    src="/src/assets/images/document/document_process_image_7.png"
                    alt="결재담당자 지정"
                    className={styles.process_mobile_image}
                  />
                </div>
                <div className={styles.process_step_content}>
                  <h3 className={styles.process_step_title}>결재담당자 지정</h3>
                  <p className={styles.process_step_description}>
                    각 항목의 담당자를 지정하고 서명합니다. 담당자에게 서명
                    가능한 알림이 전송됩니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.process_item}>
                <div className={styles.process_image}>
                  <img
                    src="/src/assets/images/document/document_process_image_8.png"
                    alt="작업허가 연장"
                    className={styles.process_mobile_image}
                  />
                </div>
                <div className={styles.process_step_content}>
                  <h3 className={styles.process_step_title}>작업허가 연장</h3>
                  <p className={styles.process_step_description}>
                    필요 시 작업허가 연장을 진행합니다. 각 담당자 서명까지
                    진행하면, 허가서 완성!
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className={styles.document_types_section}>
        <div className={styles.container}>
          {/* Safe Working Permit */}
          <ScrollAnimationContainer>
            <div className={styles.document_type_item}>
              <div className={styles.document_type_image_container}>
                <img
                  src="/src/assets/images/document/document_cross_image_4.png"
                  alt="작업위험성평가"
                  className={styles.document_type_image}
                />
              </div>
              <div className={styles.document_type_content}>
                <div className={styles.document_type_label}>현장서류</div>
                <h3 className={styles.document_type_title}>안전작업 허가서</h3>
                <p className={styles.document_type_description}>
                  현장서류의 중심, 안전작업 허가서!
                  <br />
                  KOSHA GUIDE를 그대로 반영한
                  <br />
                  안전작업 허가서 프로세스를 경험해 보세요.
                </p>
              </div>
            </div>
          </ScrollAnimationContainer>
          {/* Risk Assessment */}
          <ScrollAnimationContainer>
            <div className={styles.document_type_item}>
              <div className={styles.document_type_image_container}>
                <img
                  src="/src/assets/images/document/document_cross_image_5.png"
                  alt="작업위험성평가"
                  className={styles.document_type_image}
                />
              </div>
              <div className={styles.document_type_content}>
                <div className={styles.document_type_label}>현장서류</div>
                <h3 className={styles.document_type_title}>작업위험성평가</h3>
                <p className={styles.document_type_description}>
                  현장서류의 기본이 되는 작업위험성평가를
                  <br />
                  모바일에서 유형별로 간편하게 작성해 보세요!
                  <br />* 7단계 반영 완료!
                </p>
              </div>
            </div>
          </ScrollAnimationContainer>
          {/* TBM */}
          <ScrollAnimationContainer>
            <div className={styles.document_type_item}>
              <div className={styles.document_type_image_container}>
                <img
                  src="/src/assets/images/document/document_cross_image_6.png"
                  alt="TBM 회의록"
                  className={styles.document_type_image}
                />
              </div>
              <div className={styles.document_type_content}>
                <div className={styles.document_type_label}>현장서류</div>
                <h3 className={styles.document_type_title}>TBM 회의록</h3>
                <p className={styles.document_type_description}>
                  작업 전 필수, TBM 회의록 작성을 모바일로!
                  <br />
                  회의 내용 입력부터 근로자 서명까지
                  <br />
                  수기 작성의 한계를 해결한 똑똑한 프로세스
                </p>
              </div>
            </div>
          </ScrollAnimationContainer>

          {/* Safety Pledge */}
          <ScrollAnimationContainer>
            <div className={styles.document_type_item}>
              <div className={styles.document_type_image_container}>
                <img
                  src="/src/assets/images/document/document_cross_image_7.png"
                  alt="안전서약서"
                  className={styles.document_type_image}
                />
              </div>
              <div className={styles.document_type_content}>
                <div className={styles.document_type_label}>현장서류</div>
                <h3 className={styles.document_type_title}>안전서약서</h3>
                <p className={styles.document_type_description}>
                  안전작업 허가서 진행 전 필수!
                  <br />
                  우리 현장 서약서 내용을 그대로,
                  <br />
                  서약서 내용 확인과 단체 서명까지 한 번에!
                </p>
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>
    </div>
  );
}
