import styles from "./Footer.module.scss";

import InstagramIcon from "../../assets/icons/instagram.svg?react";
import BlogIcon from "../../assets/icons/blog.svg?react";
import FacebookIcon from "../../assets/icons/facebook.svg?react";
import LinkedInIcon from "../../assets/icons/linked-in.svg?react";
import YoutubeIcon from "../../assets/icons/youtube.svg?react";

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      {/* 메인 푸터 섹션 - 파란색 배경 */}
      <div className={styles.footer_main}>
        <div className={styles.footer_content}>
          {/* 왼쪽: 메인 텍스트 */}
          <div className={styles.footer_left}>
            <h2 className={styles.footer_title}>
              궁금한 점이 있다면
              <br />
              언제든지 연락 주세요
            </h2>
            <button className={styles.contact_button}>문의하기</button>
          </div>

          {/* 오른쪽: 연락처 정보 */}
          <div className={styles.footer_right}>
            <div className={styles.contact_info}>
              <div className={styles.contact_item}>
                <span className={styles.contact_label}>TEL.</span>
                <span className={styles.contact_value}>
                  OFFICE. 010-8227-8845
                </span>
              </div>

              <div className={styles.contact_item}>
                <span className={styles.contact_label}>E-Mail.</span>
                <span className={styles.contact_value}>
                  todayworkings@gmail.com
                </span>
              </div>

              <div className={styles.contact_item}>
                <span className={styles.contact_label}>Address.</span>
                <div className={styles.address_text}>
                  <span>
                    서울특별시 금천구 가산동 가산디지털1로 142, 1307호
                  </span>
                  <span>인천광역시 연수구 갯벌로 12 B동 413, 414호</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 하단 섹션 - 검정색 배경 */}
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_content}>
          {/* SNS 아이콘들 */}
          <div className={styles.social_icons}>
            <a
              href="https://www.instagram.com/todayworkings.kr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.social_icon}>
                <InstagramIcon />
              </div>
            </a>

            <a
              href="https://blog.naver.com/todayworkings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.social_icon}>
                <BlogIcon />
              </div>
            </a>

            <a
              href="https://www.facebook.com/todayworkings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.social_icon}>
                <FacebookIcon />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/todayworkings/?originalSubdomain=kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.social_icon}>
                <LinkedInIcon />
              </div>
            </a>
            <a
              href="https://www.youtube.com/watch?v=OaQ_hsXKBNs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.social_icon}>
                <YoutubeIcon />
              </div>
            </a>
          </div>

          {/* 회사 정보 */}
          <div className={styles.company_info}>
            <h3 className={styles.company_name}>
              주식회사 오늘의작업장(TodayWorkings Co., Ltd.)
            </h3>
            <div className={styles.company_details}>
              <span>사업자번호 : 576-21-02397</span>
              <span>대표이사 : 김현인</span>
            </div>
          </div>

          {/* 저작권 */}
          <div className={styles.copyright}>
            <p>© Todayworkings Co. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
