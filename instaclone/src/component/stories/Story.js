import React from "react";
import Stories from "react-insta-stories";
import "../../css/stories/Story.css";

const stories = [
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FvhiD3%2FbtqK16oJMFR%2F5YzkMdnJeX11SKIExiuEd1%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbaEBjb%2FbtqK6ABUzrf%2FsxGjl1DyLntNVYfw58Dpu1%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbIP3OD%2FbtqK2rzoMqt%2FgecgCKtzOf9DKKNwAP5Kyk%2Fimg.jpg",
];

export default function Story() {
  return (
    <div className="slide">
        <Stories
          stories={stories}
          defaultInterval={1500}
          width={432}
          height={768}
        />
    </div>
  );
}
