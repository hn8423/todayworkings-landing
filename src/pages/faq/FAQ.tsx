import { useState } from "react";
import styles from "./FAQ.module.scss";

interface FAQItem {
  id: number;
  question: string;
  answer: string | React.ReactElement;
  date: string;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "Q. 계약 절차는 어떻게 되나요?",
      date: "2024-10-14",
      answer: (
        <div>
          <p>
            <strong>1. 문의하기 또는 메일, 고객센터</strong>로 연락해주세요
          </p>
          <div className={styles.info_box}>
            <strong>[양식]</strong>
            <br />
            <strong>1. 회사별 (사업명)</strong>
            <br />
            <strong>2. 사용 기간, 사용자 계정 수, 현장 서류 파일</strong>
          </div>

          <p>
            <strong>
              2. 오늘의작업장에서 사용하고자 하는 현장 서류 원본 파일을 첨부
            </strong>
            해 주세요.
            <br />
            EX. 안전작업허가서, 위험성평가, TBM일지 등
          </p>

          <p>
            <strong>
              3. 첨부파일을 보고 오늘의작업장에서 세팅 기간 및 견적을
              산출합니다.
            </strong>
          </p>

          <p>
            <strong>4. 계약금 협의 및 계약서 작성 진행</strong>
          </p>

          <p>
            <strong>5. 오늘의작업장 세팅 시작</strong>
            <br />
            기획 → 디자인(UI/UX) → 개발(API, DB, APP, WEB) → 내부테스트 → 현장
            테스트 → 수정 → 현장 도입
          </p>
        </div>
      ),
    },
    {
      id: 2,
      question: "Q. 현장 세팅 기간은 어떻게 되나요?",
      date: "2024-10-14",
      answer: (
        <div>
          <p>
            요청하신 현장 서류 개수 및 종류에 따라 상이하지만,
            <br />
            <strong>
              기존 저희가 가지고 있는 현장 서류일 경우 평균 1주~2주 이내로 완료
            </strong>
            가 됩니다.
          </p>
          <p>
            새로운 현장 서류일지라도,{" "}
            <strong>
              결재 프로세스가 없는 간단한 서류는 1주일 이내로 완료
            </strong>
            가 됩니다.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      question: "Q. 오늘의작업장 무료체험은 어떻게 하나요?",
      date: "2024-10-14",
      answer: (
        <div>
          <p>
            오늘의작업장 플랫폼 체험을 위해 게스트 계정을 제공하고 있습니다.
          </p>

          <div className={styles.guest_account}>
            <strong>[게스트 계정]</strong>
            <br />
            <strong>아이디 : GUEST</strong>
            <br />
            <strong>비밀번호 : 123456</strong>
          </div>

          <p>
            <strong>1. 오늘의작업장 회사 페이지 접근 (APP + WEB)</strong>
            <br />- APP : APP STORE에서 오늘의작업장 검색 후, 다운로드를
            해주셔야 합니다
          </p>

          <p>
            <strong>2. 관리자 계정 권한</strong>
          </p>
          <p>
            <strong>3. 현장서류 작성 및 관리</strong>
          </p>
          <p>
            <strong>4. 출퇴근</strong>
          </p>
          <p>
            <strong>5. 백오피스(www.todayworkings.com) 접근 권한</strong>
          </p>
          <p>
            <strong>6. 공지사항 관리, 민원관리 등</strong>
          </p>
        </div>
      ),
    },
    {
      id: 4,
      question:
        "Q. 오늘의작업장 APP 다운 받고 회원가입 했습니다. 그 다음은 어떻게 진행하나요?",
      date: "2024-10-14",
      answer: (
        <div>
          <div className={styles.case_section}>
            <h4>
              <strong>1. 계약 된 회사인 경우</strong>
            </h4>
            <p>
              - APP에서 가입 및 관리자 신청 시, 근무하시는 회사 리스트에서 선택
              (업체명, 부서 및 직책, 서명 기입)
            </p>
            <p>
              - 계약 회사의 마스터 계정에서 백오피스 로그인 통해, 회원 관리 &gt;
              관리자 승인에서 가입 한 회원 승인
            </p>
            <p>- 가입 승인 완료에 따라 회사 페이지 접근 가능</p>
          </div>

          <div className={styles.case_section}>
            <h4>
              <strong>2. 계약 미완료인 회사인 경우</strong>
            </h4>
            <p>
              - 아쉽지만 현재 계약 미완료 회사 관리자인 경우 페이지 접근 권한이
              없습니다
            </p>
            <p>- 관리자 체험은 게스트 계정을 이용해주시길 바랍니다</p>
          </div>

          <div className={styles.guest_account}>
            <strong>[게스트 계정]</strong>
            <br />
            <strong>아이디 : GUEST</strong>
            <br />
            <strong>비밀번호 : 123456</strong>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      question: "Q. 중대재해처벌법에 대해 대응(대처)이 가능할까요?",
      date: "2024-10-14",
      answer: (
        <div>
          <p>
            먼저 오늘의작업장은 중대재해처벌법의 판례문에 대해 지속적으로 내용
            업데이트 및 분석을 하고 있습니다.
            <br />
            그러나 아직 시행 초기라 대법원 판례가 나오지 않았고 산업안전보건법과
            중대재해처벌법 관련하여 많은 이슈가 발생하고 있는 상황입니다.
          </p>

          <p>현재 나와있는 판례문을 분석해보면,</p>

          <div className={styles.law_analysis}>
            <ul>
              <li>
                사건들에서 원청의 현장소장, 하청업체 및 그 대표이사, 현장소장
                등은 업무상과실치사, 산업안전보건법으로 처벌되고, 중처법은
                적용되지 않음
              </li>
              <li>
                '죄수' 항목 중 '상상적 경합', '경합범 가중'은 산업안전보건법,
                중처법위반이 모두 적용된 경우이며, '중처법위반'은 중처법만
                적용된 경우
              </li>
              <li>
                상상적 경합(실질 1죄)은 중한 형으로 처벌, 경합범 가중(실질
                수죄)은 중한 형에 1/2 가중하여 처벌
              </li>
              <li>
                산업안전보건법 위반 및 중처법 위반에 관하여 '상상적 경합'이라고
                한 경우와 '경합범 가중'으로 처리한 경우가 혼재 (판례 정리 필요)
              </li>
              <li>
                대표이사의 경우 실제 관리 역할을 수행하면 산업안전보건법 및
                업무상 과실치사로도 기소, 그렇지 않으면 중처법위반만 적용
              </li>
              <li>
                8번 판례만 중처법(다수 상해) 사안, 나머지는 모두 사망 사안
              </li>
              <li>
                12건 판례 중 건설업 관련 8건, 건물관리업 1건, 제조업 3건이며,
                하청업체 근로자가 사망사고가 9건
              </li>
              <li>
                중처법 상 의무위반 여부가 다투어진 경우는 4번, 5번, 8번, 3건
                (의무위반에 대한 구체적 판단 내용이 중요)
              </li>
              <li>
                중처법 상 의무위반 인정과 관련하여서는, 형식적, 일반적인 위험성
                평가 및 개선, 조치로는 불인정, 각 사업장 특성에 맞춘 구체적,
                실질적 조치가 필요함
              </li>
              <li>
                위험성 평가와 관련, 당해 사고가 발생한 원인에 대한 평가, 조치가
                이루어지지 않으면 의무 이행을 인정하기 어렵다는 취지도 포함
              </li>
              <li>
                대표이사에 대해 실형 선고 1건(징역 1년), 나머지 11건은
                집행유예(징역 6월 ~ 1년 6월, 집행유예 1년 ~ 3년)
              </li>
              <li>회사에 대한 벌금형은 2천만원 ~ 1억원 사이에서 정해짐</li>
            </ul>
          </div>

          <p>
            현재 어떤 솔루션 및 기술, 안전 컨설팅 등을 진행하더라도{" "}
            <strong>
              중대재해처벌법이 100% 대응이 된다는 것은 아직은 섣부른 판단
            </strong>
            이라고 생각합니다.
            <br />
            1) 지속적인 안전보건 관리체계의 구축 2) 경영자의 안전관리에 대한
            의지 등 복합적인 변수들을 고려해야 하기 때문입니다.
          </p>

          <p>
            그러나, 중처법의 찬성 측이든 반대 측이든 수기로 작성되는 현장서류의
            비효율성에 대해서는 모두가 공감하는 아젠다입니다.
            <br />
            <strong>
              관리자의 업무 효율성 및 시간 절감 + 실시간 현장 모니터링 시스템
              구축 + 원청~하청 정보 체계 효율화 + 과태료 방지 등
            </strong>
            <br />
            <strong>
              수기의 한계점을 극복하기 위해 오늘의작업장은 계속해서 고도화 해
              나가고 있습니다.
            </strong>
          </p>
        </div>
      ),
    },
    {
      id: 6,
      question: "Q. APP에서 서류 작성한 건 어떻게 다운받나요?",
      date: "2024-10-14",
      answer: (
        <div>
          <p>
            오늘의작업장은 현장에서 수기로 작성되던 서류를 디지털화로 바꾸는
            서비스를 제공하고 있습니다.
            <br />
            먼저,{" "}
            <strong>
              APP에서 현장서류를 작성했다면 이는 관리자용 웹페이지에 실시간으로
              연동
            </strong>
            이 됩니다.
          </p>

          <p>따라서,</p>

          <p>
            <strong>1. APP에서 현장 서류 작성</strong>
          </p>

          <p>
            <strong>
              2. WEB에서 로그인 후, 공정관리 &gt; 현장서류 메뉴를 클릭하여
              작성한 서류 리스트를 확인합니다
            </strong>
          </p>

          <p>
            <strong>
              3. [열람] 을 누르면 서류 형태로 확인하실 수 있고, SAVE를 누르면
              PDF, EXCEL, WORD 등 모든 포맷 파일로 다운 받을 수 있습니다.
            </strong>
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.faq_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <div className={styles.container}>
          <h1 className={styles.hero_title}>자주 묻는 질문 FAQ</h1>
        </div>
      </section>

      {/* FAQ List Section */}
      <section className={styles.faq_section}>
        <div className={styles.container}>
          <div className={styles.faq_list}>
            {faqData.map((item) => (
              <div key={item.id} className={styles.faq_item}>
                <div
                  className={styles.faq_question}
                  onClick={() => toggleItem(item.id)}
                >
                  <h3 className={styles.question_text}>{item.question}</h3>
                  <div className={styles.question_meta}>
                    <span className={styles.question_date}>{item.date}</span>
                    <span
                      className={`${styles.toggle_icon} ${
                        openItems.includes(item.id) ? styles.open : ""
                      }`}
                    >
                      {openItems.includes(item.id) ? "−" : "+"}
                    </span>
                  </div>
                </div>

                {openItems.includes(item.id) && (
                  <div className={styles.faq_answer}>
                    <div className={styles.answer_content}>{item.answer}</div>
                  </div>
                )}
              </div>
            ))}
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
