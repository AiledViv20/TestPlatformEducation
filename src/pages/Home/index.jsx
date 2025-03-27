const Home = () => {

 const handleClick = async () => {
  let popup = window.open('', '_blank', 'width=1000,height=1000');

  if (!popup) {
    console.log('El popup fue bloqueado.');
    return;
  }

    const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data1 = await res1.json();

    const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const data2 = await res2.json();

    const res3 = await fetch('https://jsonplaceholder.typicode.com/posts/3');
    const data3 = await res3.json();

    const finalURL = 'https://example.com';
    popup.location.href = finalURL;

    const checkPopUpClosed = setInterval(async () => {
      if (popup && popup.closed) {
        clearInterval(checkPopUpClosed);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/4');
        if (response.status === 200) {
          window.location.reload();
        }
      }
    }, 3000);
  };

  return ( 
    <div>
      <h1>Home Redirect Safari Test v5</h1>
      <button onClick={handleClick} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
        Empezar
      </button>
    </div>
  );
}
 
export default Home;