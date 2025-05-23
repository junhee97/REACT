import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about?name=H&age=32">About</Link>
          </li>
          <li>
            <Link to="/contact/K/20">Contact</Link>
          </li>
        </ul>
      </nav>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
    </div>
  );
};

export default Home;
