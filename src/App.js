import React from 'react';
import AppRouter from 'base/Router'
import './App.css';
import InstallPWA from './PWA';
let deferredPrompt;


window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  console.log("qqq");
  // showInstallPromotion();
});


function App() {


  return (
  	<div>
  	 <InstallPWA />
    <AppRouter />
    </div>
  );
}

export default App;
