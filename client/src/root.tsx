import init from './grid/pkg';

import './global.css';

export default () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <button
          onClick$={() => {
            init().then((module) => {
              module.greet();
            });
          }}
        >
          Greet
        </button>
      </body>
    </html>
  );
};
