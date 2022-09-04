import './global.css';
import { Grid } from './components/grid/grid.component';

export default () => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Grid />
      </body>
    </html>
  );
};
