import styles from "./Sign.module.scss";

export default function Sign() {
  return (
    <div className={styles.sign_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>
            간편해진 서명 프로세스, 카카오톡 알림까지!
          </h1>
          <p className={styles.hero_description}>
            필요 정보만 입력하세요. 오늘의작업장이 모두 알려드려요!
          </p>
        </div>
      </section>

      {/* Approval Status Section */}
      <section className={styles.approval_section}>
        <div className={styles.container}>
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
              <div className={styles.placeholder_image}>결재현황 확인 화면</div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Section */}
      <section className={styles.signature_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid_reverse}>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>서명하기 화면</div>
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
        </div>
      </section>

      {/* Kakao Notification Section */}
      <section className={styles.kakao_section}>
        <div className={styles.container}>
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
              <div className={styles.placeholder_image}>카카오톡 알림 화면</div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Worker Section */}
      <section className={styles.daily_worker_section}>
        <div className={styles.container}>
          <div className={styles.section_header}>
            <h2 className={styles.section_title}>일용직 서명도 문제없이!</h2>
            <p className={styles.section_description}>
              이름과 번호를 몰라도 괜찮아요. 현장 참여자들에게 직접 서명 받기!
              <br />
              <strong>* 오늘의작업장 TBM 서명 프로세스</strong>
            </p>
          </div>

          <div className={styles.process_grid}>
            <div className={styles.process_item}>
              <h3 className={styles.process_title}>참석자 추가하기</h3>
              <p className={styles.process_description}>
                현장 참여자를 추가하거나, 잠시 자리를 비운 경우 번호로 공유할 수
                있습니다.
              </p>
            </div>

            <div className={styles.process_item}>
              <h3 className={styles.process_title}>참석자 확인용 서명 입력</h3>
              <p className={styles.process_description}>
                현장에 참여하고 있는 근로자에게 직접 이름과 서명을 입력하도록
                합니다.
              </p>
            </div>

            <div className={styles.process_item}>
              <h3 className={styles.process_title}>카카오톡 알림 보내기</h3>
              <p className={styles.process_description}>
                한 번에 남은 인원만큼 휴대폰 번호로 카카오톡 알림을 전송할 수
                있습니다.
              </p>
            </div>

            <div className={styles.process_item}>
              <h3 className={styles.process_title}>서명 현황 바로 확인</h3>
              <p className={styles.process_description}>
                서명이 진행되고 있는 현황을 실시간으로 확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Signature Section */}
      <section className={styles.remote_signature_section}>
        <div className={styles.container}>
          <div className={styles.section_header}>
            <h2 className={styles.section_title}>
              근로자가 자리를 비워도 서명 가능!
            </h2>
            <p className={styles.section_description}>
              작업 등의 사유으로 서명 중 자리를 비울 경우, 카카오톡 웹서명으로
              발송해 드려요.
            </p>
          </div>

          <div className={styles.remote_process_grid}>
            <div className={styles.remote_process_item}>
              <h3 className={styles.remote_process_title}>
                카카오톡 서명 발송
              </h3>
              <p className={styles.remote_process_description}>
                휴대폰 번호로 발송한 카카오톡 알림이 전송되어 웹 링크를 통해
                서명할 수 있습니다.
              </p>
            </div>

            <div className={styles.remote_process_item}>
              <h3 className={styles.remote_process_title}>
                참석자 확인용 서명 입력
              </h3>
              <p className={styles.remote_process_description}>
                현장 참여자처럼 참석자 정보를 입력하고, 서명을 전송할 수
                있습니다.
              </p>
            </div>

            <div className={styles.remote_process_item}>
              <h3 className={styles.remote_process_title}>본인인증</h3>
              <p className={styles.remote_process_description}>
                오발송과 보안에 대비해 확인 이전 휴대폰 번호로 본인 인증을
                진행합니다.
              </p>
            </div>

            <div className={styles.remote_process_item}>
              <h3 className={styles.remote_process_title}>TBM 회의록 확인</h3>
              <p className={styles.remote_process_description}>
                본인인증 후 진행했던 TBM 내용을 확인할 수 있습니다.
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
