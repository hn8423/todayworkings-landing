import { useEffect, useRef, useState } from "react";
import styles from "./ScrollAnimationContainer.module.scss";

export const ScrollAnimationContainer = ({
  children,
  width,
}: {
  children: React.ReactNode;
  width?: string;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 클라이언트 사이드에서만 실행되도록 보장
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isMounted]);

  // 서버 사이드 렌더링 시에는 애니메이션 없이 표시
  if (!isMounted) {
    return (
      <div className={styles.container} style={width ? { width: width } : {}}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isVisible ? styles.visible : ""}`}
      style={width ? { width: width } : {}}
    >
      {children}
    </div>
  );
};
