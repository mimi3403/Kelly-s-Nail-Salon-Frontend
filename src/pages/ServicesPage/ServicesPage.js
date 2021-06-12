import Menu from '../../components/Menu/Menu';
import Navbar from '../../components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import { auth } from '../../services/firebase';

const ServicesPage = () => {

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
      <Menu />
    </div>
  )
}

export default ServicesPage;