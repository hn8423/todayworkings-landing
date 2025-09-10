import styles from "./Header.module.scss";
import TodayworkingsLogo from "../../assets/todayworkings_logo.svg?react";
import HeaderMenuIcon from "../../assets/icons/header_menu.svg?react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigateAndClose = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
    handleCloseMobileMenu();
  };

  return (
    <header className={styles.header_container}>
      <div className={styles.header_content}>
        {/* 로고 */}
        <div
          className={styles.logo}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/");
          }}
        >
          <TodayworkingsLogo />
        </div>

        {/* 네비게이션 메뉴 */}
        <nav className={styles.nav}>
          <div className={styles.nav_item}>
            <div className={styles.nav_button}>회사소개</div>

            <div className={styles.dropdown_menu}>
              <div className={styles.dropdown_item}>
                <button
                  className={`${styles.dropdown_button} ${
                    location.pathname === "/about" ? styles.active : ""
                  }`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/about");
                  }}
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
                  className={`${styles.dropdown_button} ${
                    location.pathname === "/service" ? styles.active : ""
                  }`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/service");
                  }}
                >
                  오늘의작업장 기능
                </button>
              </div>
              <div className={styles.dropdown_item}>
                <button
                  className={`${styles.dropdown_button} ${
                    location.pathname === "/document" ? styles.active : ""
                  }`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/document");
                  }}
                >
                  현장서류 관리
                </button>
              </div>
              <div className={styles.dropdown_item}>
                <button
                  className={`${styles.dropdown_button} ${
                    location.pathname === "/sign" ? styles.active : ""
                  }`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/sign");
                  }}
                >
                  서명 및 결재
                </button>
              </div>
              <div className={styles.dropdown_item}>
                <button
                  className={`${styles.dropdown_button} ${
                    location.pathname === "/backoffice" ? styles.active : ""
                  }`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/backoffice");
                  }}
                >
                  백오피스 기능
                </button>
              </div>
              <div className={styles.dropdown_item}>
                <button
                  className={`${styles.dropdown_button} ${
                    location.pathname === "/pricing" ? styles.active : ""
                  }`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/pricing");
                  }}
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
                  className={`${styles.dropdown_button} ${
                    location.pathname === "/contact" ? styles.active : ""
                  }`}
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  CONTACT
                </button>
              </div>
              <div className={styles.dropdown_item}>
                <button
                  className={`${styles.dropdown_button} ${
                    location.pathname === "/faq" ? styles.active : ""
                  }`}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate("/faq");
                  }}
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

        {/* 햄버거 메뉴 버튼 (모바일용) */}
        <button
          className={styles.mobile_menu_button}
          onClick={handleToggleMobileMenu}
          aria-label="메뉴 열기"
        >
          <HeaderMenuIcon />
        </button>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div
          className={styles.mobile_menu_overlay}
          onClick={handleCloseMobileMenu}
        />
      )}

      {/* 모바일 메뉴 */}
      <div
        className={`${styles.mobile_menu} ${
          isMobileMenuOpen ? styles.mobile_menu_open : ""
        }`}
      >
        <div className={styles.mobile_menu_header}>
          <TodayworkingsLogo />
          <button
            className={styles.mobile_menu_close}
            onClick={handleCloseMobileMenu}
            aria-label="메뉴 닫기"
          >
            ✕
          </button>
        </div>

        <nav className={styles.mobile_nav}>
          {/* 회사소개 섹션 */}
          <div className={styles.mobile_nav_section}>
            <div className={styles.mobile_nav_title}>회사소개</div>
            <div className={styles.mobile_nav_items}>
              <button
                className={`${styles.mobile_nav_item} ${
                  location.pathname === "/about" ? styles.active : ""
                }`}
                onClick={() => handleNavigateAndClose("/about")}
              >
                ABOUT
              </button>
            </div>
          </div>

          {/* 서비스소개 섹션 */}
          <div className={styles.mobile_nav_section}>
            <div className={styles.mobile_nav_title}>서비스소개</div>
            <div className={styles.mobile_nav_items}>
              <button
                className={`${styles.mobile_nav_item} ${
                  location.pathname === "/service" ? styles.active : ""
                }`}
                onClick={() => handleNavigateAndClose("/service")}
              >
                오늘의작업장 기능
              </button>
              <button
                className={`${styles.mobile_nav_item} ${
                  location.pathname === "/document" ? styles.active : ""
                }`}
                onClick={() => handleNavigateAndClose("/document")}
              >
                현장서류 관리
              </button>
              <button
                className={`${styles.mobile_nav_item} ${
                  location.pathname === "/sign" ? styles.active : ""
                }`}
                onClick={() => handleNavigateAndClose("/sign")}
              >
                서명 및 결재
              </button>
              <button
                className={`${styles.mobile_nav_item} ${
                  location.pathname === "/backoffice" ? styles.active : ""
                }`}
                onClick={() => handleNavigateAndClose("/backoffice")}
              >
                백오피스 기능
              </button>
              <button
                className={`${styles.mobile_nav_item} ${
                  location.pathname === "/pricing" ? styles.active : ""
                }`}
                onClick={() => handleNavigateAndClose("/pricing")}
              >
                가격 안내
              </button>
            </div>
          </div>

          {/* 문의하기 섹션 */}
          <div className={styles.mobile_nav_section}>
            <div className={styles.mobile_nav_title}>문의하기</div>
            <div className={styles.mobile_nav_items}>
              <button
                className={`${styles.mobile_nav_item} ${
                  location.pathname === "/contact" ? styles.active : ""
                }`}
                onClick={() => handleNavigateAndClose("/contact")}
              >
                CONTACT
              </button>
              <button
                className={`${styles.mobile_nav_item} ${
                  location.pathname === "/faq" ? styles.active : ""
                }`}
                onClick={() => handleNavigateAndClose("/faq")}
              >
                고객 센터
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
