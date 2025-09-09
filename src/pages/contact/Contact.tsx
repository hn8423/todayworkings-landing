import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const companySizeOptions = [
    { value: "1~10", label: "1~10" },
    { value: "10~50", label: "10~50" },
    { value: "50~100", label: "50~100" },
    { value: "100~1000", label: "100~1000" },
  ];

  const inquiryTypeOptions = [
    {
      value: "서비스 문의(설명, 도입, 견적 등)",
      label: "서비스 문의(설명, 도입, 견적 등)",
    },
    { value: "미팅 문의", label: "미팅 문의" },
  ];

  const meetAtTimeOptions = [
    { value: "09:00", label: "09:00" },
    { value: "10:00", label: "10:00" },
    { value: "11:00", label: "11:00" },
    { value: "12:00", label: "12:00" },
    { value: "13:00", label: "13:00" },
    { value: "14:00", label: "14:00" },
    { value: "15:00", label: "15:00" },
    { value: "16:00", label: "16:00" },
    { value: "17:00", label: "17:00" },
    { value: "18:00", label: "18:00" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    title: "오늘의작업장 이메일 문의",
    name: "",
    inquiry_type: "",
    company_name: "",
    company_size: "",
    email: "",
    phone_number: "",
    meet_at_time: "",
    meet_at_date: format(new Date(), "yyyy-MM-dd", { locale: ko }),
    message: "",
    onoff: "온라인",
  });
  const [isLoading, setIsLoading] = useState(false);

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

  const canSubmit = () => {
    return (
      formData.name !== "" &&
      formData.inquiry_type !== "" &&
      formData.company_name !== "" &&
      formData.company_size !== "" &&
      formData.email !== "" &&
      formData.phone_number !== "" &&
      formData.meet_at_date !== "" &&
      formData.meet_at_time !== ""
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    if (!canSubmit()) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    try {
      setIsLoading(true);
      emailjs
        .send("service_moea9ri", "template_rp8mpwq", {
          title: formData.title,
          name: formData.name,
          inquiryType: formData.inquiry_type,
          companyName: formData.company_name,
          companySize: formData.company_size,
          email: formData.email,
          phoneNumber: formData.phone_number,
          message: formData.message,
          onoff: formData.onoff,
          meetAt: `${formData.meet_at_date} ${formData.meet_at_time}`,
        })
        .then((res) => {
          if (res.text === "OK") {
            alert("성공적으로 메일이 발신되었습니다!");
            setFormData({
              title: "오늘의작업장 이메일 문의",
              name: "",
              inquiry_type: "",
              company_name: "",
              company_size: "",
              email: "",
              phone_number: "",
              meet_at_time: "",
              meet_at_date: "",
              message: "",
              onoff: "온라인",
            });
          }
        });
    } catch (error) {
      console.error(error);
      alert("메일 발신에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };
  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <div className={styles.contact_container}>
      {/* Hero Section */}
      <section className={styles.hero_section}>
        <div className={styles.container}>
          <h1 className={styles.hero_title}>Contact</h1>

          <div className={styles.contact_info_list}>
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
              <label className={styles.form_label}>
                문의 유형 <span className={styles.required}>*</span>
              </label>
              <select
                name="inquiry_type"
                value={formData.inquiry_type}
                onChange={handleInputChange}
                className={styles.form_select}
                required
              >
                <option value="">(선택)</option>
                {inquiryTypeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 소속회사 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>
                소속회사 <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleInputChange}
                className={styles.form_input}
                required
                maxLength={50}
              />
            </div>

            {/* 회사 규모 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>
                회사 규모 <span className={styles.required}>*</span>
              </label>
              <select
                name="company_size"
                value={formData.company_size}
                onChange={handleInputChange}
                className={styles.form_select}
                required
              >
                <option value="">(선택)</option>
                {companySizeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 성함 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>
                성함 <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.form_input}
                required
                maxLength={50}
              />
            </div>

            {/* 이메일 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>
                이메일 <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.form_input}
                required
                maxLength={50}
              />
            </div>

            {/* 휴대폰 번호 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>
                휴대폰 번호
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.phone_input_group}>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  className={styles.form_input}
                  placeholder="전화번호"
                  maxLength={11}
                />
              </div>
            </div>

            {/* 문의 내용 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>
                문의 내용 <span className={styles.required}>*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className={styles.form_textarea}
                required
                maxLength={500}
              />
            </div>

            {/* 미팅 요청 날짜 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>
                미팅 요청 날짜&nbsp;
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.date_input_group}>
                <input
                  type="date"
                  name="meet_at_date"
                  value={formData.meet_at_date}
                  onChange={handleInputChange}
                  className={styles.form_input}
                  min={format(new Date(), "yyyy-MM-dd", { locale: ko })}
                  required
                />
                <select
                  className={styles.time_select}
                  onChange={handleInputChange}
                  name="meet_at_time"
                  value={formData.meet_at_time}
                  required
                >
                  <option value="시/분">시/분</option>
                  {meetAtTimeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 미팅 유형 */}
            <div className={styles.form_group}>
              <label className={styles.form_label}>
                미팅 유형&nbsp;
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.radio_group}>
                <label className={styles.radio_label}>
                  <input
                    type="radio"
                    name="onoff"
                    value="온라인"
                    checked={formData.onoff === "온라인"}
                    onChange={handleInputChange}
                  />
                  온라인
                </label>
                <label className={styles.radio_label}>
                  <input
                    type="radio"
                    name="onoff"
                    value="오프라인"
                    checked={formData.onoff === "오프라인"}
                    onChange={handleInputChange}
                  />
                  오프라인
                </label>
              </div>
            </div>

            {/* 제출 버튼 */}
            <div className={styles.form_actions}>
              <button
                type="submit"
                className={`${styles.submit_button} ${
                  !canSubmit() ? styles.disabled : ""
                }`}
                disabled={isLoading || !canSubmit()}
              >
                {isLoading ? "접수 중..." : "문의하기"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
