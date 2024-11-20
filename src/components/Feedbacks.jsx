export default function Feedbacks() {
  const feedbacks = [
    {
      name: "Kate Evans",
      comment:
        "The best language learning experience I've ever had! The lessons are engaging, and the teachers are incredibly supportive.",
      photo: "./src/assets/firstFeedback.png",
    },
    {
      name: "Tom Clark",
      comment:
        "I highly recommend these English courses! The teachers are incredibly supportive, and the lessons are always engaging.",
      photo: "./src/assets/secondFeedback.png",
    },
  ];

  return (
    <section className="feedback-wrapper" id="feedbacks">
      <div className="feedback">
        <div className="main-part">
          <img src={feedbacks[0].photo} alt="first person" />
          <p className="name">{feedbacks[0].name}</p>
          <img src="./src/assets/firstStars.svg" alt="five stars" />
        </div>

        <div className="text-feedback">
          <p>{feedbacks[0].comment}</p>
        </div>
      </div>

      <div className="feedback">
        <div className="main-part">
          <img src={feedbacks[1].photo} alt="second person" />
          <p className="name">{feedbacks[1].name}</p>
          <img src="./src/assets/secondStars.svg" alt="four stars" />
        </div>

        <div className="text-feedback">
          <p>{feedbacks[1].comment}</p>
        </div>
      </div>
    </section>
  );
}
