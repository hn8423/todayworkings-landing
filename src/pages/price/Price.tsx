import styles from "./Price.module.scss";

export default function Price() {
  return (
    <div className={styles.price_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>
            서비스 항목·사용량·규모에 맞는
            <br />
            오늘의작업장 가격 플랜
          </h1>
        </div>
      </section>

      {/* Customizing Service Section */}
      <section className={styles.customizing_section}>
        <div className={styles.container}>
          <div className={styles.feature_grid}>
            <div className={styles.feature_content}>
              <h2 className={styles.feature_title}>
                오늘의작업장만의
                <br />
                커스터마이징 서비스
              </h2>
              <p className={styles.feature_description}>
                기본 정부 양식 대비 다른 부분과 추가 기획 및 옵션이 필요한
                부분이 개발 공수로 계산됩니다.
              </p>
            </div>
            <div className={styles.feature_image}>
              <div className={styles.placeholder_image}>
                커스터마이징 서비스 이미지
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>
            계약부터 현장 세팅까지
            <br />
            오늘의작업장 프로세스
          </h2>

          <div className={styles.process_grid}>
            <div className={styles.process_item}>
              <div className={styles.process_number}>01</div>
              <h3 className={styles.process_title}>도입 문의</h3>
              <p className={styles.process_description}>
                도입하고자 하는 현장 및 담당자 정보 전달받고, 현장 상황에 대해
                파악해 기능을 도출합니다.
                <br />
                *영업일 기준 1일 내에 연락
              </p>
            </div>

            <div className={styles.process_item}>
              <div className={styles.process_number}>02</div>
              <h3 className={styles.process_title}>킥오프 미팅</h3>
              <p className={styles.process_description}>
                프로젝트 팀과 고객과의 처음 가지는 모임(미팅)에서 당사 현장에
                필요한 기본요소들을 확정하고, 도입할 서류를 공유 받습니다.
              </p>
            </div>

            <div className={styles.process_item}>
              <div className={styles.process_number}>03</div>
              <h3 className={styles.process_title}>프로젝트 시작</h3>
              <p className={styles.process_description}>
                플랫폼 도입에 필요한 내부 기획, 디자인, 개발 회의를 거쳐 해당
                서류에 대한 개발이 시작됩니다.
              </p>
            </div>

            <div className={styles.process_item}>
              <div className={styles.process_number}>04</div>
              <h3 className={styles.process_title}>시범운영 및 QA 회의</h3>
              <p className={styles.process_description}>
                추가 기능 개발 후 품질 보증(QA) 테스트와 추가 회의를 거쳐
                수정하여 서비스를 완성합니다.
              </p>
            </div>

            <div className={styles.process_item}>
              <div className={styles.process_number}>05</div>
              <h3 className={styles.process_title}>현장 테스트 및 피드백</h3>
              <p className={styles.process_description}>
                실제 현장에서 서비스를 테스트하고 피드백에 대한 수정을 거칩니다.
              </p>
            </div>

            <div className={styles.process_item}>
              <div className={styles.process_number}>06</div>
              <h3 className={styles.process_title}>현장 도입 및 계약 진행</h3>
              <p className={styles.process_description}>
                당사용 서비스가 완성되고 현장에 도입될 준비가 완료되면 계약을
                진행합니다.
              </p>
            </div>

            <div className={styles.process_item}>
              <div className={styles.process_number}>07</div>
              <h3 className={styles.process_title}>유지보수 및 추가요청</h3>
              <p className={styles.process_description}>
                추가 유지보수와 수정 요청사항을 반영하여 안정적인 운영을 할 수
                있도록 관리합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plan Section */}
      <section className={styles.subscription_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>
            사용자 수 상관 없이, 쓰는 만큼만
            <br />
            합리적인 오늘의작업장 연간 구독플랜
          </h2>
          <p className={styles.section_subtitle}>
            * 기본 스토리지 초과, 서류 커스터마이징 가격 별도
          </p>

          <div className={styles.pricing_cards}>
            <div className={styles.pricing_card}>
              <div className={styles.card_header}>
                <h3 className={styles.plan_name}>기본 플랜</h3>
                <div className={styles.plan_price}>
                  <span className={styles.price_amount}>문의</span>
                  <span className={styles.price_period}>/ 년</span>
                </div>
              </div>
              <div className={styles.card_features}>
                <div className={styles.feature_item}>기본 현장서류 관리</div>
                <div className={styles.feature_item}>모바일 앱 지원</div>
                <div className={styles.feature_item}>웹 백오피스</div>
                <div className={styles.feature_item}>기본 스토리지</div>
              </div>
            </div>

            <div className={styles.pricing_card}>
              <div className={styles.card_header}>
                <h3 className={styles.plan_name}>스탠다드 플랜</h3>
                <div className={styles.plan_price}>
                  <span className={styles.price_amount}>문의</span>
                  <span className={styles.price_period}>/ 년</span>
                </div>
              </div>
              <div className={styles.card_features}>
                <div className={styles.feature_item}>기본 플랜 모든 기능</div>
                <div className={styles.feature_item}>커스터마이징 서류</div>
                <div className={styles.feature_item}>확장 스토리지</div>
                <div className={styles.feature_item}>우선 고객 지원</div>
              </div>
            </div>

            <div className={styles.pricing_card}>
              <div className={styles.card_header}>
                <h3 className={styles.plan_name}>프리미엄 플랜</h3>
                <div className={styles.plan_price}>
                  <span className={styles.price_amount}>문의</span>
                  <span className={styles.price_period}>/ 년</span>
                </div>
              </div>
              <div className={styles.card_features}>
                <div className={styles.feature_item}>
                  스탠다드 플랜 모든 기능
                </div>
                <div className={styles.feature_item}>무제한 커스터마이징</div>
                <div className={styles.feature_item}>무제한 스토리지</div>
                <div className={styles.feature_item}>전담 매니저</div>
              </div>
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
