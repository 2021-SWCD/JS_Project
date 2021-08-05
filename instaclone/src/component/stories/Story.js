import React from "react";
import Stories from "react-insta-stories";
import "../../css/stories/Story.css";

const stories = [
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fk82WH%2Fbtq4H0g5Dhv%2FFUzG79rwXYgCxNgRx7q9j1%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcIlgDt%2Fbtq4IDza397%2FSwfbbS1K9fgm5pMbJsNFLk%2Fimg.jpg",
  "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHwjNy%2Fbtq4Ed2JH9Y%2F60q3k0W1RZ0cdhmImJ0Tv1%2Fimg.jpg",
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
