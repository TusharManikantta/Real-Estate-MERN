import "./homePage.scss";
import SearchBar from "../../components/searchBar/SearchBar";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get your Dream Place</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            explicabo assumenda possimus tempore neque. Eum quibusdam, rerum qui
            id eos quisquam eaque veniam sit vitae amet maxime et iure pariatur,
            accusantium assumenda veritatis eveniet! Saepe, fuga. Nihil neque,
            adipisci, et porro cumque odio dolore, in laborum beatae eius autem
            non!
          </p>

          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>

            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Home Page" />
      </div>
    </div>
  );
}

export default HomePage;
