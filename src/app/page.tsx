import Image from "next/image";

export default function Home() {
  return (
<div>
  {/* Hero Section Start */}
  <div className="bgAnimation" id="bgAnimation">
    <div className="backgroundAnim">
    </div>
  </div>
  <div className="container">
    <nav>
      <h1><span>MASAYID</span>ALFA</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skill</li>
        <li>Certification</li>
      </ul>
    </nav>
    <section>
      <div className="textBox">
        <h1><span>Muhamad</span> Masayid Alfarizqi</h1>
        <p>

        </p>
        {/* <button className="homeBtn" style={{-i: '#fff'}}>Contact Me</button>
        <button className="homeBtn" style={{-i: '#00bfff'}}>Explore</button> */}
      </div>
    </section>
  </div>
  {/* Hero Section End */}
</div>

  );
}
