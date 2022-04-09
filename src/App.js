
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import email from './assets/email.svg'
import location from './assets/location.svg'
import phone from './assets/phone.svg'
function App() {

  const [data, setData] = useState([])

  const url = 'https://randomuser.me/api/'

  useEffect(() => {
    handleClick()
  }, [])

  function handleClick() {
    axios.get(url)
      .then(res => setData(res.data.results))

  }
  return (
    <div className="App" >
      {data.map(item => (
        <div className='card-cont'>
          <div className='image'>
              <img src={item?.picture?.medium} alt={item?.picture?.medium} />
        
              <h3 className='name'>
                  {item.name.title} {item.name.first} {item.name.last}
              </h3>
            </div>

            <div className='icon'>
              <img src={email} alt={email} style={{width:'25px'}}/>
        
              <p>
                  {item.email}
              </p>

            </div>
            <div className='icon'>
              <img src={location} alt={location} style={{width:'25px'}}/>
        
              <p>
                  {item.location.city} {item.location.country}
              </p>
            </div>

            <div className='icon'>
              <img src={phone} alt={phone} style={{width:'25px'}}/>
      
              <p>
                  {item.phone}
              </p>
            </div>

            <p>
                Age: {item.dob.age}
            </p>

            <p>
                Register Date: {item.registered.date.slice(0, -14)}
            </p>

        </div>

          
      ))}
      <button onClick={handleClick}>Random User</button>
    </div>
  );
}

export default App;
