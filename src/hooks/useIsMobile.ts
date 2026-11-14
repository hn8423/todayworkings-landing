import { useEffect, useState } from "react";

// SCSS의 `@media (max-width: 1024px)` 브레이크포인트와 동일하게 유지
export const MOBILE_BREAKPOINT_QUERY = "(max-width: 1024px)";

const getMatches = (query: string): boolean =>
  typeof window !== "undefined" && window.matchMedia(query).matches;

/**
 * 뷰포트가 모바일 브레이크포인트 이하인지 반환한다.
 * 첫 렌더부터 실제 뷰포트 기준 값을 사용하므로, resize 이벤트가 오지 않아도
 * 데스크톱 레이아웃으로 잘못 렌더링되지 않는다.
 */
export function useIsMobile(query: string = MOBILE_BREAKPOINT_QUERY): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => getMatches(query));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);

    // query 변경 시 현재 값으로 동기화
    setIsMobile(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return isMobile;
}
