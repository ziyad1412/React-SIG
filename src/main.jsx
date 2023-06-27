import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//import BrowserRouter dari react router
import { BrowserRouter } from 'react-router-dom';

//import CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//mapbox gl CSS
import 'mapbox-gl/dist/mapbox-gl.css';

//mapbox gl directions CSS
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

//mapbox gl geocoder CSS
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </React.StrictMode>,
)