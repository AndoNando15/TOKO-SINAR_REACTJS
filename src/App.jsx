import styles from './App.module.css';
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
        <a href="#" className={styles.link}>
          TOKO SINAR
        </a>

        <div className="">
          <a href="#" className={styles.link}>
            Menu
          </a>
          <a href="#" className={styles.link}>
            About Me
          </a>
          <a href="#" className={styles.link}>
            Contact Me
          </a>
        </div>
      </nav>
      <h1 className="text-2xl hover:font-bold hover:pointer">Praktikum A2 Pagi</h1>
      <Button className="bg-blue-400 text-white  hover:bg-blue-500">Button 1</Button>
      <Button className="bg-blue-400 text-white  hover:bg-blue-500">Button 2</Button>
    </>
  );
}

export default App;
