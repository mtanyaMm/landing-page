export default function WhyUs() {
  const listWhyUs = [
    "Modern teaching methods",
    "Experienced teachers",
    "Flexible schedule",
  ];

  return (
    <section className="why-us-wrap" id="advantages">
      <img src="../assets/whyUs.png" alt="image" />
      <div className="text">
        <h1>
          <span>Why</span> us?
        </h1>
        <ul className="include-list">
          {listWhyUs.map((elem, i) => (
            <li key={i}>
              <span className="material-symbols-outlined check-circle">
                check_circle
              </span>
              {elem}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
