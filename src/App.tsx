/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Service, IResults, ISelect } from './Types'
import NavBar from './Header'
import GetChart from './Api'
import { Tracks, Albums, Artists, Playlists, Podcasts, Search } from './Charts'
import { ModalProvider } from './Modal'
import { 
  GlobalStyle,
  MainContainer,
  ImagesWrapper,
  ImageContainer,
  InfoContainer,
  InfoDetails,
  InfoDetailsLeft,
  InfoDetailsRight,
  Input,
  CustomButton,
  Select }  from './Styles'

const App: React.FC = () => {
  const [results, setResults] = useState<Service<IResults>>({
    status: 'loading'
  })
  let r = Math.random().toString(36).substr(2, 1);
  const [query, setQuery] = useState(r)
  const [search, setSearch] = useState(r)
  const [select, setSelect] = useState<ISelect>()
  const chart = GetChart()

  function handleSubmit (e: any) {
    e.preventDefault();
    console.log(select);
  }

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?q=${search}&limit=10`)
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
                    <Albums id={idx.id} title={idx.title} cover_big={idx.cover_big} artist={idx.artist} tracklist={idx.tracklist}/>
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
                <form onSubmit={handleSubmit}>
                  <Select>
                    <select>
                      <option>Select</option>
                      <option value="artist" >Artist</option>
                      <option value="track">Track</option>
                    </select>
                  </Select>
                </form>
                <Input placeholder="search for..." type="text" name="search" value={query} onChange={e => setQuery(e.target.value)}/>
                <CustomButton  onClick={() => setSearch(query)}>Search</CustomButton>
              </InfoDetailsLeft>
              <InfoDetailsRight>
               
              </InfoDetailsRight>
            </InfoDetails>
            <ImagesWrapper>
            {results.status === 'loaded' &&
              results.payload.data.map(idx => (
                  <ImageContainer key={idx.id}>
                    <Search id={idx.id} title={idx.title} artist={idx.artist} album={idx.album}/>
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
