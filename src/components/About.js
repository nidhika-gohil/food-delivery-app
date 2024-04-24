import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">About Us</h1>
      <p>This application is created to learn about react by Akshay Saini</p>
      <User name={"Nidhika Gohil Function"} location={"Pune"} />
      <UserClass name={"Nidhika Gohil Class"} location={"Pune"} />
    </div>
  );
};
export default About;
