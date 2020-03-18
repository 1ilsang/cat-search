import React, { FunctionComponent } from 'react';
import Routes from 'presentation/routes/Routes';

const App: FunctionComponent<{}> = () => {
  console.info(
    `
     
  \u001b[33m██╗ ██╗ ██╗    ███████╗ █████╗ ███╗   ██╗ \u001b[32m███\u001b[33m███╗
 ███║   ║ ██║    ██╔════╝██╔══██╗████╗  \u001b[32m██║██\u001b[33m╔════╝ 
 ╚██║ ██║ ██║    ███████╗█\u001b[32m██████║██╔██╗\u001b[33m ██║██║  ███╗
  ██║ ██║ ██║    ╚═══\u001b[32m═██║██╔\u001b[33m══██║██║╚██╗██║██║   ██║
  ██║ ██║ ██████╗██\u001b[32m████\u001b[33m█║██║  ██║██║ ╚████║╚██████╔╝
  ╚═╝ ╚═╝ ╚═════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ 
                                                   
                                   \u001b[31mLife is too short.\u001b[0m
    `,
  );

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
