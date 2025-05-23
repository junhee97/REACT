import { Link, useNavigate, useParams } from "react-router-dom";

const Contact = () => {
  const { name, age } = useParams();
  const navigate = useNavigate();
  const handleHome = () => {
    console.log("HOME");
    navigate("/");
  };
  const handleAbout = () => {
    console.log("ABOUT");
    navigate("/about?name=J&age=29");
  };
  const handleContact = () => {
    console.log("CONTACT");
    navigate("/contact");
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={handleHome}>HOME</button>
          </li>
          <li>
            <button onClick={handleAbout}>ABOUT</button>
          </li>
          <li>
            <button onClick={handleContact}>CONTACT</button>
          </li>
        </ul>
      </nav>
      <h1>Contact</h1>
      NAME : {name}, AGE : {age} <br />
      <p>Welcome to the Contact page!</p>
    </div>
  );
};

export default Contact;
