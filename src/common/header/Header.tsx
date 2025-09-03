import styles from "./Header.module.scss";
import TodayworkingsLogo from "../../assets/todayworkings_logo.svg?react";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.header_container}>
      <div className={styles.header_content}>
        {/* 로고 */}
        <div className={styles.logo} onClick={() => navigate("/")}>
          <TodayworkingsLogo />
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className={styles.nav}>
          <div className={styles.nav_item}>
            <div className={styles.nav_button}>회사소개</div>

            <div className={styles.dropdown_menu}>
              <div className={styles.dropdown_item}>
                <button
                  className={styles.dropdown_button}
                  onClick={() => navigate("/about")}
                >
                  ABOUT
                </button>
              </div>
            </div>
          </div>

          <div className={styles.nav_item}>
            <div className={styles.nav_button}>서비스소개</div>
            <div className={styles.dropdown_menu}>
              <div className={styles.dropdown_item}>
                <button
                  className={styles.dropdown_button}
                  onClick={() => navigate("/service")}
                >
                  오늘의작업장 기능
                </button>
              </div>
              <div className={styles.dropdown_item}>
                <button
                  className={styles.dropdown_button}
                  onClick={() => navigate("/document")}
                >
                  현장서류 관리
                </button>
              </div>
              <div className={styles.dropdown_item}>
                <button
                  className={styles.dropdown_button}
                  onClick={() => navigate("/sign")}
                >
                  서명 및 결재
                </button>
              </div>
              <div className={styles.dropdown_item}>
                <button
                  className={styles.dropdown_button}
                  onClick={() => navigate("/backoffice")}
                >
                  백오피스 기능
                </button>
              </div>
              <div className={styles.dropdown_item}>
                <button
                  className={styles.dropdown_button}
                  onClick={() => navigate("/price")}
                >
                  가격 안내
                </button>
              </div>
            </div>
          </div>

          <div className={styles.nav_item}>
            <div className={styles.nav_button}>문의하기</div>
            <div className={styles.dropdown_menu}>
              <div className={styles.dropdown_item}>
                <button
                  className={styles.dropdown_button}
                  onClick={() => navigate("/contact")}
                >
                  CONTACT
                </button>
              </div>
              <div className={styles.dropdown_item}>
                <button
                  className={styles.dropdown_button}
                  onClick={() => navigate("/faq")}
                >
                  고객 센터
                </button>
              </div>
            </div>
          </div>

          {/* <div className={styles.nav_item}>
            <button className={styles.nav_button}>뉴스</button>
          </div> */}
        </nav>

        <div className={styles.blank} />
      </div>
    </header>
  );
}
