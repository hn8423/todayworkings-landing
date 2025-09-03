import { useState } from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    inquiryType: "",
    company: "",
    companySize: "",
    name: "",
    email: "",
    phone: "",
    content: "",
    meetingDate: "",
    meetingType: "온라인",
    file: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // 실제 구현에서는 여기에 API 호출 로직 추가
  };

  return (
    <div className={styles.contact_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <div className={styles.container}>
          <h1 className={styles.hero_title}>Contact</h1>

          <div className={styles.contact_info_grid}>
            <div className={styles.contact_item}>
              <h3 className={styles.contact_label}>TEL.</h3>
              <p className={styles.contact_value}>OFFICE. 010-8227-8845</p>
            </div>

            <div className={styles.contact_item}>
              <h3 className={styles.contact_label}>E-Mail.</h3>
              <p className={styles.contact_value}>lucy@todayworkings.kr</p>
            </div>

            <div className={styles.contact_item}>
              <h3 className={styles.contact_label}>Address</h3>
              <p className={styles.contact_value}>
                서울특별시 금천구 가산동 가산디지털1로 142, 1307호
                <br />
                인천광역시 연수구 갯벌로 12 B동 413, 414호
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.form_section}>
        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.contact_form}>
            {/* 문의 유형 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>문의 유형</label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleInputChange}
                className={styles.form_select}
              >
                <option value="">(선택)</option>
                <option value="서비스 문의">
                  서비스 문의(설명, 도입, 견적 등)
                </option>
                <option value="미팅 문의">미팅 문의</option>
              </select>
            </div>

            {/* 소속회사 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>소속회사</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className={styles.form_input}
              />
            </div>

            {/* 회사 규모 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>회사 규모</label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleInputChange}
                className={styles.form_select}
              >
                <option value="">(선택)</option>
                <option value="1~10">1~10</option>
                <option value="10~50">10~50</option>
                <option value="50~100">50~100</option>
                <option value="100~1000">100~1000</option>
              </select>
            </div>

            {/* 성함 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>성함</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.form_input}
              />
            </div>

            {/* 이메일 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>이메일</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.form_input}
              />
            </div>

            {/* 휴대폰 번호 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>휴대폰 번호</label>
              <div className={styles.phone_input_group}>
                <select className={styles.country_select}>
                  <option value="+82">대한민국 +82</option>
                  <option value="+1">미국 +1</option>
                  <option value="+86">중국 +86</option>
                  <option value="+81">일본 +81</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={styles.form_input}
                />
              </div>
            </div>

            {/* 문의 내용 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>문의 내용</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={6}
                className={styles.form_textarea}
              />
            </div>

            {/* 미팅 요청 날짜 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>미팅 요청 날짜</label>
              <input
                type="date"
                name="meetingDate"
                value={formData.meetingDate}
                onChange={handleInputChange}
                className={styles.form_input}
              />
            </div>

            {/* 미팅 유형 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>미팅 유형</label>
              <div className={styles.radio_group}>
                <label className={styles.radio_label}>
                  <input
                    type="radio"
                    name="meetingType"
                    value="온라인"
                    checked={formData.meetingType === "온라인"}
                    onChange={handleInputChange}
                  />
                  온라인
                </label>
                <label className={styles.radio_label}>
                  <input
                    type="radio"
                    name="meetingType"
                    value="오프라인"
                    checked={formData.meetingType === "오프라인"}
                    onChange={handleInputChange}
                  />
                  오프라인
                </label>
              </div>
            </div>

            {/* 첨부파일 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>첨부파일</label>
              <div className={styles.file_input_group}>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className={styles.file_input}
                  id="file-upload"
                />
                <label htmlFor="file-upload" className={styles.file_button}>
                  파일 올리기
                </label>
                {formData.file && (
                  <div className={styles.file_info}>
                    <span>{formData.file.name}</span>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, file: null }))
                      }
                      className={styles.file_remove}
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 제출 버튼 */}
            <div className={styles.form_actions}>
              <button type="submit" className={styles.submit_button}>
                문의하기
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Bottom Contact Section */}
      <section className={styles.bottom_contact_section}>
        <div className={styles.container}>
          <h2 className={styles.section_title}>궁금한 점이 있다면</h2>
          <h3 className={styles.contact_subtitle}>언제든지 연락 주세요</h3>
          <button className={styles.contact_button}>문의하기</button>
        </div>
      </section>
    </div>
  );
}
