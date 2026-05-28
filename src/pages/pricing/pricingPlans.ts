export interface PricingPlan {
  name: string;
  badge?: string;
  description: string;
  priceAnnual: string;
  priceMonthly: string;
  documents: string;
  storage: string;
  features: string[];
  recommended: string[];
  highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "현장 시작형",
    description: "소규모 현장의 디지털 문서 전환",
    priceAnnual: "2,400,000",
    priceMonthly: "월 환산 약 20만원",
    documents: "작업허가서·안전문서 연 500건",
    storage: "저장공간 50GB",
    features: [
      "사용자 계정 무제한",
      "카카오톡 알림 무제한",
      "GPS 출퇴근 기능",
      "기본 고객 지원",
    ],
    recommended: [
      "현장 인원 10~30명",
      "종이 문서 전산화 시작 단계",
      "협력업체 및 중소 제조업",
    ],
  },
  {
    name: "현장 운영형",
    badge: "가장 많이 선택하는 플랜",
    description: "여러 현장을 체계적으로 운영하는 기업용",
    priceAnnual: "4,800,000",
    priceMonthly: "월 환산 약 40만원",
    documents: "작업허가서·안전문서 연 2,000건",
    storage: "저장공간 150GB",
    features: [
      "문서 승인 프로세스",
      "사용자 계정 무제한",
      "카카오톡 알림 무제한",
      "GPS 출퇴근 기능",
      "현장별 권한 관리",
      "우선 기술 지원",
    ],
    recommended: [
      "다수 현장 운영",
      "안전 프로세스 체계화 필요",
      "관리자 승인 체계 운영 기업",
    ],
  },
  {
    name: "본사 통합형",
    badge: "대기업·중견기업 추천",
    description: "대규모 현장 및 본사 통합 관리",
    priceAnnual: "9,600,000",
    priceMonthly: "월 환산 약 80만원",
    documents: "작업허가서·안전문서 연 10,000건",
    storage: "저장공간 500GB",
    features: [
      "본사 통합 대시보드",
      "통계 및 리포트",
      "커스텀 기능 지원",
      "API 연동 지원",
      "전담 기술 지원",
      "우선 장애 대응",
    ],
    recommended: [
      "대기업 협력사",
      "ESG·안전 감사 대응",
      "다수 사업장 통합 운영",
      "본사 단위 관리 기업",
    ],
    highlighted: true,
  },
];
