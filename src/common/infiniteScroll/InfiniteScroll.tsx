import { useState } from "react";
import styles from "./InfiniteScroll.module.scss";

interface InfiniteScrollProps {
  images: {
    src: string;
    alt: string;
    name?: string;
  }[];
  speed?: number; // 스크롤 속도 (초 단위)
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export const InfiniteScroll = ({
  images,
  speed = 20,
  direction = "left",
  pauseOnHover = true,
}: InfiniteScrollProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // 이미지 배열을 두 번 복제해서 끊김 없는 무한 스크롤 구현
  const duplicatedImages = [...images, ...images];

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsHovered(false);
    }
  };

  return (
    <div className={styles.infinite_scroll_container}>
      <div
        className={`${styles.infinite_scroll_track} ${
          direction === "right" ? styles.reverse : ""
        }`}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {duplicatedImages.map((image, index) => (
          <div key={index} className={styles.scroll_item}>
            <div className={styles.image_wrapper}>
              <img
                src={image.src}
                alt={image.alt}
                className={styles.partner_image}
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
