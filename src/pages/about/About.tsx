import styles from "./About.module.scss";
import { ScrollAnimationContainer } from "../../feature/scrollAnimation/ScrollAnimationContainer";

export default function About() {
  return (
    <div className={styles.about_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <div className={styles.hero_image}>
          <img
            src="/src/assets/images/about/todayworkings_about_banner.jpg"
            alt="오늘의작업장"
          />
        </div>

        <div className={styles.hero_content}>
          <ScrollAnimationContainer>
            <h1 className={styles.hero_title}>
              <span className={styles.highlight}>내:일을 편하게</span>
            </h1>
            <div className={styles.hero_description}>
              <p>
                오늘의 노력이 내일의 편안함을 보장하는 방법. <br />
                무수히 많은 현장 서류들을 혁신적인 솔루션으로 간소화시키세요.
              </p>
              <p>내 일을 더욱 효율적이고, 더욱 쉽게 만듭니다.</p>
            </div>
          </ScrollAnimationContainer>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.vision_mission_section}>
        <div className={styles.container}>
          <div className={styles.vision_mission_container}>
            {/* Vision */}
            <div className={styles.vision_block}>
              <ScrollAnimationContainer>
                <h2 className={styles.vision_title}>Vision</h2>
                <p className={styles.vision_text}>
                  모두가 공감할 수 있는 산업현장 생태계 조성
                </p>
              </ScrollAnimationContainer>
            </div>

            {/* Mission */}
            <div className={styles.mission_block}>
              <ScrollAnimationContainer>
                <h2 className={styles.mission_title}>Mission</h2>
              </ScrollAnimationContainer>
              <ScrollAnimationContainer>
                <div className={styles.mission_items}>
                  <div className={styles.mission_item}>
                    <div className={styles.mission_number}>01</div>
                    <div className={styles.mission_content}>
                      <h3 className={styles.mission_title}>
                        정보전달 방식 구축
                      </h3>
                      <div className={styles.mission_description}>
                        <p>
                          데이터 기반 현장 서류관리 플랫폼으로서,
                          <br />
                          수기 작성 현장서류는 불가능한
                          <br />
                          효율적인 정보 복제 및 전달 방식 구축합니다.
                        </p>
                        <p>
                          산업현장의 디지털 전환을 처음 경험하는 고객들을
                          설득하고, 초기 가치를 입증하기 위해 노력합니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.mission_item}>
                    <div className={styles.mission_number}>02</div>
                    <div className={styles.mission_content}>
                      <h3 className={styles.mission_title}>
                        산업현장 새로운 문화
                      </h3>
                      <div className={styles.mission_description}>
                        <p>
                          문자는 카카오톡, 영상은 유튜브, 송금은 토스.
                          <br />
                          "현장 서류는 오늘의작업장"이 되고자 합니다.
                        </p>
                        <p>
                          끊임없이 변화하는 환경에 맞추어 핵심 비즈니스에 대한
                          지속적인 혁신과 고객 행동 변화에 대한 질문, 이를
                          추진하는 내부 역량을 계속해서 재평가합니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.mission_item}>
                    <div className={styles.mission_number}>03</div>
                    <div className={styles.mission_content}>
                      <h3 className={styles.mission_title}>
                        이해관계자들의 행동 변화
                      </h3>
                      <div className={styles.mission_description}>
                        <p>"아무 것도 습관보다 강하지 못하다"</p>
                        <p>
                          디지털화의 장벽을 해결할 수 있는 유일한 열쇠는
                          <br />
                          장벽을 정확하게 이해하고 인지하는 것입니다.
                        </p>
                        <p>
                          자사는 비전을 가지고 플랫폼을 고도화하고,
                          <br />
                          고객 피드백을 기반으로 제품을 최적화합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimationContainer>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className={styles.history_section}>
        <div className={styles.container}>
          <div className={styles.history_title_container}>
            <ScrollAnimationContainer>
              <h2 className={styles.section_title}>History</h2>
              <p className={styles.history_subtitle}>걸어온 길</p>
            </ScrollAnimationContainer>
          </div>

          <div className={styles.history_timeline}>
            {/* 2024 */}

            <div className={styles.history_year_block_container}>
              <div className={styles.history_year_block}>
                <ScrollAnimationContainer>
                  <h3 className={styles.history_year}>2024</h3>
                </ScrollAnimationContainer>
                <ScrollAnimationContainer>
                  <div className={styles.history_events}>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>01월 03일</span>
                      <span className={styles.event_description}>
                        사무실 이전 (가산디지털단지 더스카이밸리 1차)
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>03월 25일</span>
                      <span className={styles.event_description}>
                        한국사회적기업진흥원, 하나파워온 혁신기업 인턴십
                        참여기업 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>04월 26일</span>
                      <span className={styles.event_description}>
                        클라우드바우처 수요기업 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>05월 08일</span>
                      <span className={styles.event_description}>
                        데이터바우처 수요기업 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>05월 28일</span>
                      <span className={styles.event_description}>
                        (주)오늘의작업장 B.I. 변경
                      </span>
                    </div>
                  </div>
                </ScrollAnimationContainer>
              </div>
            </div>

            {/* 2023 */}

            <div className={styles.history_year_block_container}>
              <div className={styles.history_year_block}>
                <ScrollAnimationContainer>
                  <h3 className={styles.history_year}>2023</h3>
                </ScrollAnimationContainer>
                <ScrollAnimationContainer>
                  <div className={styles.history_events}>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>03월 27일</span>
                      <span className={styles.event_description}>
                        중소벤처기업진흥공단, 청년창업사관학교 13기 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>04월 19일</span>
                      <span className={styles.event_description}>
                        세르파벤처스, Hike Valley 3기 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>05월 09일</span>
                      <span className={styles.event_description}>
                        벤처기업협회, 강남구 글로벌 스타트업 IR 활성화 지원사업
                        선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>05월 18일</span>
                      <span className={styles.event_description}>
                        인천 창조경제혁신센터, 청년창업 챌린지 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>
                        06월 01일 ~ 02일
                      </span>
                      <span className={styles.event_description}>
                        2023 Nextrise 참여기업
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>06월 05일</span>
                      <span className={styles.event_description}>
                        한국사회적기업진흥원, 하나파워온 혁신기업 인턴십
                        참여기업 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>
                        08월 03일 ~ 06일
                      </span>
                      <span className={styles.event_description}>
                        2023 Korea Build 참여기업
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>
                        09월 13일 ~ 15일
                      </span>
                      <span className={styles.event_description}>
                        2023 한국건설안전박람회 참여기업
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>
                        11월 22일 ~ 24일
                      </span>
                      <span className={styles.event_description}>
                        2023 스마트건설 EXPO 참여기업
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>12월 05일</span>
                      <span className={styles.event_description}>
                        벤처기업협회 협회장상 수상
                      </span>
                    </div>
                  </div>
                </ScrollAnimationContainer>
              </div>
            </div>

            {/* 2022 */}
            <div className={styles.history_year_block_container}>
              <div className={styles.history_year_block}>
                <ScrollAnimationContainer>
                  <h3 className={styles.history_year}>2022</h3>
                </ScrollAnimationContainer>
                <ScrollAnimationContainer>
                  <div className={styles.history_events}>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>01월 13일</span>
                      <span className={styles.event_description}>
                        수원대학교 창업지원단, 스타트업 JUMP UP School 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>02월 18일</span>
                      <span className={styles.event_description}>
                        벤처기업협회, PSWC 23기 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>02월 18일</span>
                      <span className={styles.event_description}>
                        인천지방중소벤처기업청장, 여성기업 확인증
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>03월 01일</span>
                      <span className={styles.event_description}>
                        인천테크노파크, 지피지기 R&D 창업기업 컨설팅 참여기업
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>03월 16일</span>
                      <span className={styles.event_description}>
                        한국공인회계사회, 창업기업서비스 바우처
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>05월 27일</span>
                      <span className={styles.event_description}>
                        인천상공회의소, 인천지식재산센터 IP나래 프로그램 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>05월 11일</span>
                      <span className={styles.event_description}>
                        인천대학교 창업지원단, INU 대학원 창업동아리 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>06월 07일</span>
                      <span className={styles.event_description}>
                        인천테크노파크, 청년 TIPS 인큐베이션 프로그램 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>06월 30일</span>
                      <span className={styles.event_description}>
                        중소벤처기업진흥공단, 예비창업패키지 13기 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>07월 08일</span>
                      <span className={styles.event_description}>
                        한국여성벤처기업협회, 여성창업경진대회 우수상
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>09월 01일</span>
                      <span className={styles.event_description}>
                        경남창조경제혁신센터, 한국남동발전 Start-UP 서포터즈
                        선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>09월 02일</span>
                      <span className={styles.event_description}>
                        2022 대한민국 굿컴퍼니대상, 중대재해예방 솔루션 대상
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>09월 04일</span>
                      <span className={styles.event_description}>
                        이지스자산운용, 이지스 임팩트 스테이지 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>09월 14일</span>
                      <span className={styles.event_description}>
                        벤처기업협회 회원사 등록
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>10월 06일</span>
                      <span className={styles.event_description}>
                        국가균형발전위원회, Better together 우수상
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>10월 20일</span>
                      <span className={styles.event_description}>
                        인천강소연구특구, 이노폴리스캠퍼스 사업 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>11월 29일</span>
                      <span className={styles.event_description}>
                        제3회 스마트대한민국포럼 대상, 중소기업진흥원장상
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>12월 15일</span>
                      <span className={styles.event_description}>
                        '주식회사 오늘의작업장' 설립
                      </span>
                    </div>
                  </div>
                </ScrollAnimationContainer>
              </div>
            </div>

            {/* 2021 */}
            <div className={styles.history_year_block_container}>
              <div className={styles.history_year_block}>
                <ScrollAnimationContainer>
                  <h3 className={styles.history_year}>2021</h3>
                </ScrollAnimationContainer>
                <ScrollAnimationContainer>
                  <div className={styles.history_events}>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>01월 14일</span>
                      <span className={styles.event_description}>
                        부산항만공사, 부산항 혁신성장 아이디어 공모전 우수상
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>01월 30일</span>
                      <span className={styles.event_description}>
                        제 22회 이데일리 경제유니버시아드 대회 산업부분 최우수상
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>05월 16일</span>
                      <span className={styles.event_description}>
                        인천대학교, INU 학부생 창업동아리 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>07월 12일</span>
                      <span className={styles.event_description}>
                        인천대학교, 연수구 4차산업혁명 청년창업자 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>08월 13일</span>
                      <span className={styles.event_description}>
                        벤처기업협회, KTB Venture Challenge
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>09월 01일</span>
                      <span className={styles.event_description}>
                        중소벤처기업부, 생애최초 청년창업 지원사업 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>09월 13일</span>
                      <span className={styles.event_description}>
                        중소벤처기업부, 실전창업교육 2기 선정
                      </span>
                    </div>
                    <div className={styles.history_event}>
                      <span className={styles.event_date}>10월 20일</span>
                      <span className={styles.event_description}>
                        포스코건설, 창업희망 멘토링 참여기업
                      </span>
                    </div>
                  </div>
                </ScrollAnimationContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
