const Home = () => {

  const handleClick = async () => {
    await new Promise(resolve => setTimeout(resolve, 100));
  
    const popup = window.open('https://example.com', '_blank');
    if (!popup) {
      alert('Safari bloqueó el popup');
    }
  };

  return ( 
    <div style={{ padding: '2rem' }}>
      <h1>Home Test</h1>
      <button onClick={handleClick} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
        Empezar
      </button>
    </div>
  );
}
 
export default Home;