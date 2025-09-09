import styles from "./Sign.module.scss";
import { ScrollAnimationContainer } from "../../feature/scrollAnimation/ScrollAnimationContainer";

export default function Sign() {
  return (
    <div className={styles.sign_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <ScrollAnimationContainer>
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>
              간편해진 서명 프로세스, 카카오톡 알림까지!
            </h1>
            <p className={styles.hero_description}>
              필요 정보만 입력하세요. 오늘의작업장이 모두 알려드려요!
            </p>
          </div>
        </ScrollAnimationContainer>
        <ScrollAnimationContainer>
          <div className={styles.hero_image}>
            <img
              src="/src/assets/images/sign/todayworkings_sign_banner.png"
              alt="오늘의작업장"
            />
          </div>
        </ScrollAnimationContainer>
      </section>

      {/* Approval Status Section */}
      <section className={styles.approval_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.feature_grid}>
              <div className={styles.feature_content}>
                <h2 className={styles.feature_title}>결재현황 확인</h2>
                <p className={styles.feature_description}>
                  현장서류 결제가 어떻게 진행되고 있는지,
                  <br />
                  담당자 서명과 함께 한 눈에 확인할 수 있어요.
                  <br />
                  절대 놓칠 일 없도록 필수 선택 항목을 알려드려요!
                </p>
              </div>
              <div className={styles.feature_image}>
                <img
                  src="/src/assets/images/sign/sign_cross_image_1.gif"
                  alt="결재현황 확인"
                  className={styles.mobile_image}
                />
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Signature Section */}
      <section className={styles.signature_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.feature_grid_reverse}>
              <div className={styles.feature_image}>
                <img
                  src="/src/assets/images/sign/sign_cross_image_2.gif"
                  alt="서명하기"
                  className={styles.mobile_image}
                />
              </div>
              <div className={styles.feature_content}>
                <h2 className={styles.feature_title}>서명하기</h2>
                <p className={styles.feature_description}>
                  종이에 쓰고 사진으로 옮길 필요 없이,
                  <br />
                  앱에서 바로 서명할 수 있어요!
                </p>
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Kakao Notification Section */}
      <section className={styles.kakao_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.feature_grid}>
              <div className={styles.feature_content}>
                <h2 className={styles.feature_title}>카카오톡 서명 알림</h2>
                <p className={styles.feature_description}>
                  앱 알림을 놓칠 경우를 대비해
                  <br />
                  담당자들에게 카카오톡으로 알림을 전송해 드려요.
                </p>
              </div>
              <div className={styles.feature_image}>
                <img
                  src="/src/assets/images/sign/sign_cross_image_3.png"
                  alt="카카오톡 서명 알림"
                  className={styles.mobile_image}
                />
              </div>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Daily Worker Section */}
      <section className={styles.daily_worker_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.section_header}>
              <h2 className={styles.daily_worker_title}>
                일용직 서명도 문제없이!
              </h2>
              <p className={styles.daily_worker_description}>
                이름과 번호를 몰라도 괜찮아요. 현장 참여자들에게 직접 서명 받기!
                <br />
                <strong>* 오늘의작업장 TBM 서명 프로세스</strong>
              </p>
            </div>
          </ScrollAnimationContainer>

          <div className={styles.daily_worker_grid}>
            <ScrollAnimationContainer>
              <div className={styles.daily_worker_item}>
                <div className={styles.daily_worker_image_container}>
                  <img
                    src="/src/assets/images/sign/sign_daily-worker_image_1.png"
                    alt="참석자 추가하기"
                    className={styles.daily_worker_image}
                  />
                </div>
                <div className={styles.daily_worker_content}>
                  <h3 className={styles.daily_worker_title}>참석자 추가하기</h3>
                  <p className={styles.daily_worker_description}>
                    현장 참여자를 추가하거나, 잠시 자리를 비운 경우 번호로
                    공유할 수 있습니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.daily_worker_item}>
                <div className={styles.daily_worker_image_container}>
                  <img
                    src="/src/assets/images/sign/sign_daily-worker_image_2.png"
                    alt="참석자 확인용 서명 입력"
                    className={styles.daily_worker_image}
                  />
                </div>
                <div className={styles.daily_worker_content}>
                  <h3 className={styles.daily_worker_title}>
                    참석자 확인용 서명 입력
                  </h3>
                  <p className={styles.daily_worker_description}>
                    현장에 참여하고 있는 근로자에게 직접 이름과 서명을
                    입력하도록 합니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.daily_worker_item}>
                <div className={styles.daily_worker_image_container}>
                  <img
                    src="/src/assets/images/sign/sign_daily-worker_image_3.png"
                    alt="카카오톡 알림 보내기"
                    className={styles.daily_worker_image}
                  />
                </div>
                <div className={styles.daily_worker_content}>
                  <h3 className={styles.daily_worker_title}>
                    카카오톡 알림 보내기
                  </h3>
                  <p className={styles.daily_worker_description}>
                    한 번에 남은 인원만큼 휴대폰 번호로 카카오톡 알림을 전송할
                    수 있습니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.daily_worker_item}>
                <div className={styles.daily_worker_image_container}>
                  <img
                    src="/src/assets/images/sign/sign_daily-worker_image_4.png"
                    alt="서명 현황 바로 확인"
                    className={styles.daily_worker_image}
                  />
                </div>
                <div className={styles.daily_worker_content}>
                  <h3 className={styles.daily_worker_title}>
                    서명 현황 바로 확인
                  </h3>
                  <p className={styles.daily_worker_description}>
                    서명이 진행되고 있는 현황을 실시간으로 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>
          </div>
        </div>
      </section>

      {/* Remote Signature Section */}
      <section className={styles.remote_signature_section}>
        <div className={styles.container}>
          <ScrollAnimationContainer>
            <div className={styles.section_header}>
              <h2 className={styles.daily_worker_title}>
                근로자가 자리를 비워도 서명 가능!
              </h2>
              <p className={styles.daily_worker_description}>
                작업 등의 사유으로 서명 중 자리를 비울 경우, 카카오톡 웹서명으로
                발송해 드려요.
              </p>
            </div>
          </ScrollAnimationContainer>

          <div className={styles.daily_worker_grid}>
            <ScrollAnimationContainer>
              <div className={styles.daily_worker_item}>
                <div className={styles.daily_worker_image_container}>
                  <img
                    src="/src/assets/images/sign/sign_remote-process_image_1.png"
                    alt="카카오톡 서명 발송"
                    className={styles.daily_worker_image}
                  />
                </div>
                <div className={styles.daily_worker_content}>
                  <h3 className={styles.daily_worker_title}>
                    카카오톡 서명 발송
                  </h3>
                  <p className={styles.daily_worker_description}>
                    휴대폰 번호로 발송한 카카오톡 알림이 전송되어 웹 링크를 통해
                    서명할 수 있습니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.daily_worker_item}>
                <div className={styles.daily_worker_image_container}>
                  <img
                    src="/src/assets/images/sign/sign_remote-process_image_2.png"
                    alt="참석자 확인용 서명 입력"
                    className={styles.daily_worker_image}
                  />
                </div>
                <div className={styles.daily_worker_content}>
                  <h3 className={styles.daily_worker_title}>
                    참석자 확인용 서명 입력
                  </h3>
                  <p className={styles.daily_worker_description}>
                    현장 참여자처럼 참석자 정보를 입력하고, 서명을 전송할 수
                    있습니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.daily_worker_item}>
                <div className={styles.daily_worker_image_container}>
                  <img
                    src="/src/assets/images/sign/sign_remote-process_image_3.png"
                    alt="본인인증"
                    className={styles.daily_worker_image}
                  />
                </div>
                <div className={styles.daily_worker_content}>
                  <h3 className={styles.daily_worker_title}>본인인증</h3>
                  <p className={styles.daily_worker_description}>
                    오발송과 보안에 대비해 확인 이전 휴대폰 번호로 본인 인증을
                    진행합니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>

            <ScrollAnimationContainer>
              <div className={styles.daily_worker_item}>
                <div className={styles.daily_worker_image_container}>
                  <img
                    src="/src/assets/images/sign/sign_remote-process_image_4.png"
                    alt="TBM 회의록 확인"
                    className={styles.daily_worker_image}
                  />
                </div>
                <div className={styles.daily_worker_content}>
                  <h3 className={styles.daily_worker_title}>TBM 회의록 확인</h3>
                  <p className={styles.daily_worker_description}>
                    본인인증 후 진행했던 TBM 내용을 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </ScrollAnimationContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
