import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className='app'>
      <Nav />
      
      <Banner />

      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchTopRated} isLargeRow={true} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} isLargeRow={false} />
      <Row title='Top Rated' fetchUrl={requests.fetchActionMovies} isLargeRow={false} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} isLargeRow={false} />
      <Row title='Action Movies' fetchUrl={requests.fetchTopRated} isLargeRow={false} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} isLargeRow={false} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} isLargeRow={false} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} isLargeRow={false} />
    </div>
  );
}

export default App;
