import about from '../assets/about.png'

export default function About() {
  return (
    <section id="about">
      <h1>
        <span>About</span> course
      </h1>
      <div className="about-course">
        <div className="text">
          <h3>Description</h3>
          <p>
            With interactive, easy-to-follow lessons, you’ll build your
            vocabulary, grammar, and communication skills step by step. Our
            personalized learning approach ensures that you progress at your own
            pace, focusing on areas that need the most attention.{" "}
          </p>
        </div>
        <img src={about} alt="about image" />
      </div>
    </section>
  );
}
