import Header from "./Header.jsx";
import Slider from "./Slider.jsx";
import Content from "./Content.jsx";
import Footer from "./Footer.jsx";

import person1 from "./assets/person1.jpg";
import person2 from "./assets/person2.jpg";
import person3 from "./assets/person3.jpg";
import person4 from "./assets/person4.jpg";


import "./index.css";

const boxData = [
  {
    image: person1,
    heading: "Person 1",
    description: "Dummy Description for Person 1",
  },
  {
    image: person2,
    heading: "Person 2",
    description: "Dummy Description for Person 2",
  },
  {
    image: person3,
    heading: "Person 3",
    description: "Dummy Description for Person 3",
  },
  {
    image: person4,
    heading: "Person 4",
    description: "Dummy Description for Person 4",
  },
];

function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Content boxData={boxData} />
      <Footer />
    </>
  );
}

export default Home;
