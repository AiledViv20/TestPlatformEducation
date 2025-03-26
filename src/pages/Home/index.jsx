import { redirigirLMS } from "../../services/redirect";


const Home = () => {

  const handleClick = async () => {
    const res = await redirigirLMS();
    const checkPopUpClosed = setInterval(async () => {
      if (res && res?.closed) {
        clearInterval(checkPopUpClosed);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (response.status === 200) {
          window.location.reload();
        }
        window.location.reload();
      }
    }, 3 * 1000)
  };

  return ( 
    <div>
      <h1>Home Redirect Safari</h1>
      <button onClick={handleClick} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
        Empezar
      </button>
    </div>
  );
}
 
export default Home;