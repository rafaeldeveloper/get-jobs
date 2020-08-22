import React, { useState, useEffect } from 'react';
import { Button} from 'semantic-ui-react';

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    console.log("aaaaaaa");
    return null;
  }else{
    console.log("bbbbbbb")
  }
  return (
    <Button
      className="link-button"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      Install
    </Button>
  );
};

export default InstallPWA;
