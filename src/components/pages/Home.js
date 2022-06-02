import classes from "./Home.module.css";
import Card from "../UI/Card";

const Home = () => {
  let pageContent = ["Page Content"];

  for (let index = 0; index < 100; index++) {
    pageContent.push("Page Content");
  }

  return (
    <div className={classes.home}>
      <Card>
        <h1>Giving wings to the search and rescue mission!</h1>

        <p>
          During disasters like flood, avalanche and wildfire often people get
          stranded in tough and hard to reach terrains. Hence a quick and
          efficient search operation is required to locate all the stranded
          people to quickly rescue them. Traditional search operations are often
          time taking and lack coordination. Thus, an innovative solution is
          required to expedite search operations as human lives are at the
          stake! We designed an intelligent autonomous coordinative multi-UAV
          system that can quickly search for the people/animals in the affected
          regions.
        </p>
      </Card>
      {/* <ul>
        {pageContent.map((text) => (
          <li>{text}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
