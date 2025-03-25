const Home = () => {

  const handleRedirect = async () => {
    const nuevaVentana = window.open('', '_blank')

    try {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ location: 'https://www.example.com' })
        }, 2000)
      })

      if (res?.location) {
        nuevaVentana.location.href = res.location
      } else {
        nuevaVentana.close()
      }
    } catch (err) {
      console.error('Error:', err)
      nuevaVentana.close()
    }
  }

  return ( 
    <div style={{ padding: '2rem' }}>
      <h1>Home</h1>
      <button onClick={handleRedirect} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
        Empezar
      </button>
    </div>
  );
}
 
export default Home;