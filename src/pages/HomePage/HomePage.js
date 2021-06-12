import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import Navbar from '../../components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import { auth } from '../../services/firebase';


const HomePage = () => {

  const [userState, setUserState] = useState({
    user: null,
  })

  useEffect(function () {
    async function getAppData() {
      if (!userState.user) return;
    }
    getAppData();
    const unsubscribe = auth.onAuthStateChanged(user => setUserState({ user }));

    return function () {
      unsubscribe();
    }
  }, [userState.user]);

  return (
    <div className="App">
      <Navbar user={userState.user} />
      <Banner />
      <Services />
    </div>
  )
}

export default HomePage;