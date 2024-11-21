import React, { useState } from "react";
import firstPhoto from "../assets/first_photo.jpg";
import secondPhoto from "../assets/second_photo.jpg";
import thirdPhoto from "../assets/third_photo.jpg";

export default function Prices() {
  const [prices, setPrices] = useState([
    {
      name: "Basic",
      price: 8000,
      description: {
        who: "For students who have basic knowledge and want to deepen their skills.",
        incudesList: [
          "Access to video lessons",
          "Personalized homework assignments",
          "Practice with native speakers",
          "Flexible learning schedule",
          "Progress tracking and feedback",
        ],
        targetLevel: "A1",
      },
      photo: { firstPhoto },
    },
    {
      name: "Pro",
      price: 10000,
      description: {
        who: "For students who want to enhance their knowledge and gain comprehensive understanding.",
        incudesList: [
          "All Basic plan features",
          "One-on-one tutoring sessions",
          "Group discussions and activities",
          "Interactive quizzes and tests",
          "Extended access to resources",
        ],
        targetLevel: "B1-B2",
      },
      photo: { secondPhoto },
    },
    {
      name: "Elit",
      price: 12000,
      description: {
        who: "For advanced learners looking to master their skills and achieve fluency.",
        incudesList: [
          "All Pro plan features",
          "Private coaching",
          "Access to exclusive workshops",
          "Priority support and mentorship",
          "Tailored feedback on assignments",
        ],
        targetLevel: "C1",
      },
      photo: { thirdPhoto },
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleIndexNext() {
    if (currentIndex < prices.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  }

  function handleIndexPrev() {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  }

  return (
    <div className="container" id="prices">
      <div className="arrow">
        <span
          className="material-symbols-outlined left-arrow"
          onClick={handleIndexPrev}
        >
          arrow_left_alt
        </span>
      </div>
      <div className="card">
        <div className="name-price">
          <h2 className="name-price-name">{prices[currentIndex].name}</h2>
          <p className="name-price-price">{prices[currentIndex].price}</p>
        </div>

        <div className="main-content">
          <div className="who">
            <h3 className="text">Who?</h3>
            <p className="text">{prices[currentIndex].description.who}</p>
          </div>

          <div className="include">
            <div className="include-list">
              <h3>Includes</h3>
              <ul>
                {prices[currentIndex].description.incudesList.map((elem, i) => (
                  <li key={i} className="text">
                    <span className="material-symbols-outlined check-circle">
                      check_circle
                    </span>
                    {elem}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={prices[currentIndex].photo}
              alt="include-image"
              className="include-img"
            />
          </div>
          <div className="target">
            <h3 className="text">Target Level</h3>
            <p className="text">
              {prices[currentIndex].description.targetLevel}
            </p>
          </div>
        </div>
      </div>
      <div className="arrow">
        <span
          className="material-symbols-outlined right-arrow"
          onClick={handleIndexNext}
        >
          arrow_right_alt
        </span>
      </div>
    </div>
  );
}
