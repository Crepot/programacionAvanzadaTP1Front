import '../css/App.css';
import NavBar from '../components/NavBar/NavBar';
import Cookies from 'universal-cookie'



const cookie = new Cookies();


// TODO: esto es regla de negocio, me tendría que venir en el tablero
const Menu= () => {
 
  const token = cookie.get('authToken')
  const playerId = cookie.get('playerId')
  console.log('Token: ',token)
  console.log('playerId: ',playerId)
/*----------------------------------------- */
  // Function to add our give data into cache
  // const addDataIntoCache = (cacheName, url, response) => {
  //   // Converting our respons into Actual Response form
  //   const data = new Response(JSON.stringify(response));
  
  //   if (window.caches) {
  //     // Opening given cache and putting our data into it
  //     caches.open(cacheName).then((cache) => {
  //       cache.put(url, data);
  //       alert('Data Added into cache!')
  //     });
  //   }
  // };
/*----------------------------------------- */

  return (
    <div>
    <div className='navbar'> 
    <NavBar></NavBar>
    </div>
    <div className='container'>

    </div>
    </div>


  );
}

export default Menu;