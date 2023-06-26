import styles from './App.module.css';
import { Link } from 'react-router-dom';
import Button from './Component/Button';

function App() {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          backgroundColor: 'pink',
          justifyContent: 'space-between',
        }}
      >
        <Link to="#" className={styles.Link}>
          TOKO SINAR
        </Link>

        <div className="">
          <Link to="/Menu" className={styles.Link}>
            Menu
          </Link>
          <Link to="/AboutUs" className={styles.Link}>
            About Me
          </Link>
          <Link to="/Order" className={styles.Link}>
            Contact Me
          </Link>
        </div>
      </nav>
      <h1 className="text-2xl hover:font-bold hover:pointer">Praktikum A2 Pagi</h1>
      <Button className="bg-blue-400 text-white  hover:bg-blue-500">Button 1</Button>
      <Button className="bg-blue-400 text-white  hover:bg-blue-500">Button 2</Button>
    </>
  );
}

export default App;
