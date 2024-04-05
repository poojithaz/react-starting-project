const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import reactImg from "../assets/state-mgmt.png";
import "./Header.css";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const a = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {a} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
