import React from 'react';
import AppRouter from 'base/Router'
import './App.css';
import InstallPWA from './PWA';


window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  // Update UI notify the user they can install the PWA
  console.log("qqq");
  // showInstallPromotion();
});


if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('display-mode is standalone');
}

window.addEventListener('appinstalled', (evt) => {
  console.log('a2hs installed');
});


window.addEventListener('appinstalled', (evt) => {
  // Log install to analytics
  console.log('INSTALL: Success');
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
