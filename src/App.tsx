/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Service, IResults } from './Types'
import NavBar from './Header'
import GetChart from './Api'
import { Tracks, Albums, Artists, Playlists, Podcasts } from './Charts'
import { ModalProvider } from './Modal'
import { 
  GlobalStyle,
  MainContainer,
  ImagesWrapper,
  ImageContainer,
  Image,
  InfoContainer,
  InfoDetails,
  InfoDetailsLeft,
  InfoDetailsRight,
  InfoHeader,
  InfoText, 
  Input,
  CustomButton }  from './Styles'


const API_KEY = process.env.REACT_APP_DEEZER_API_KEY;

const App: React.FC = () => {
  const [results, setResults] = useState<Service<IResults>>({
    status: 'loading'
  })
  let r = Math.random().toString(36).substr(2, 1);
  const [query, setQuery] = useState(r)
  const [search, setSearch] = useState(r)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const chart = GetChart()

  useEffect(() => {
    fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}&limit=10`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": `${API_KEY}`
      }
    })
    .then(response => response.json())
    .then(response => {
      setResults({ status: 'loaded', payload: response});
      setQuery("")
    })
    .catch(error => setResults({ status: 'error', error}))
  }, [search])

  return (
      <Fragment>
        <GlobalStyle/>
         <NavBar/>
         <MainContainer>
          <InfoContainer>
            <ModalProvider>
          <h3>Top Tracks</h3>
          
          <ImagesWrapper>
              {chart.status === 'loaded' && 
                chart.payload.tracks.data.map(idx => (
                  <ImageContainer key={idx.id}>
                    <Tracks id={idx.id} title={idx.title} artist={idx.artist} album={idx.album}/>
                  </ImageContainer>
                ))
              }
            </ImagesWrapper>
         
            <hr/>
            <h3>Top Albums</h3>
            <ImagesWrapper>
              {chart.status === 'loaded' && 
                chart.payload.albums.data.map(idx => (
                  <ImageContainer key={idx.id}>
                    <Albums id={idx.id} title={idx.title} cover_big={idx.cover_big} artist={idx.artist} />
                  </ImageContainer>
                ))
              }
            </ImagesWrapper>
            <hr/>
            <h3>Top Artists</h3>
            <ImagesWrapper>
              {chart.status === 'loaded' && 
                chart.payload.artists.data.map(idx => (
                  <ImageContainer key={idx.id}>
                    <Artists id={idx.id} name={idx.name} picture_big={idx.picture_big} position={idx.position} tracklist={idx.tracklist}/>
                  </ImageContainer>
                ))
              }
            </ImagesWrapper>
            <hr/>
            <h3>Top Playlists</h3>
            <ImagesWrapper>
              {chart.status === 'loaded' && 
                chart.payload.playlists.data.map(idx => (
                  <ImageContainer key={idx.id}>
                    <Playlists id={idx.id} title={idx.title} picture_big={idx.picture_big} tracklist={idx.tracklist} user={idx.user}/>
                  </ImageContainer>
                ))
              }
            </ImagesWrapper>
            <hr/>
            <h3>Top Podcasts</h3>
            <ImagesWrapper>
              {chart.status === 'loaded' && 
                chart.payload.podcasts.data.map(idx => (
                  <ImageContainer key={idx.id}>
                    <Podcasts id={idx.id} title={idx.title} fans={idx.fans} picture_big={idx.picture_big} description={idx.description}/>
                  </ImageContainer>
                ))
              }
            </ImagesWrapper>
            <hr/>
            <h3>Discover...</h3>
            <InfoDetails>
              <InfoDetailsLeft>
                <Input placeholder="search for..." type="text" name="search" value={query} onChange={e => setQuery(e.target.value)}/>
                <CustomButton  onClick={() => setSearch(query)}>Search</CustomButton>
              </InfoDetailsLeft>
              <InfoDetailsRight>
              
                <div>Modal is: {isModalOpen ? "open" : "closed"}</div>
                <button onClick={() => setIsModalOpen(true)}>Open</button>
              </InfoDetailsRight>
            </InfoDetails>
            <ImagesWrapper>
            {results.status === 'loaded' &&
              results.payload.data.map(idx => (
                  <ImageContainer key={idx.id}>
                    <Image src={idx.album.cover_big} alt={idx.artist.name} onClick={() => setIsModalOpen(true)}/>
                    <InfoHeader>{idx.title}</InfoHeader>
                    <InfoText>{idx.artist.name}</InfoText>
                  </ImageContainer>
              ))
            }
            </ImagesWrapper>
            </ModalProvider>
          </InfoContainer>
        </MainContainer>
      </Fragment>
  )
}

export default App;
