import { type ReactNode } from "react";
import styles from "./Layout.module.scss";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout_container}>
      <Header />
      <main className={styles.main_content}>{children}</main>
      <Footer />
    </div>
  );
}
