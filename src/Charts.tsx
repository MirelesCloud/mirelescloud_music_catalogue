import React, { useState, useEffect, useMemo } from 'react';
import { 
    Service,
    ITrackList,
    ITracks, 
    IAlbum, 
    IArtist,
    IArtistTopTracks, 
    IPlaylist,
    IPlayListData,
    IPodcast,
    IData } from './Types'

import {
  Row,
  Column,
  ModalWrapper,
  ModalContainer,
  ModalInfo,
  ModalHeader,
  ModalSubHeader,
  ModalText,
  ModalList,
  ModalTable,
  ModalTableColumn,
  InfoImage,
  Image,
  InfoHeader,
  InfoText,
  CloseX,
  Line  }  from './Styles'
  import { Modal } from './Modal'
 


export const Tracks: React.FC<ITracks> = ({id, title, artist, album }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
      <>
      <Image src={artist.picture_big} alt={artist.name} onClick={() => setIsModalOpen(true)}/>
      <InfoImage>
          <InfoHeader>{title}</InfoHeader>
          <InfoText>{artist.name}</InfoText>
      </InfoImage>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>
          <ModalWrapper>
            <ModalContainer>
              <Image src={album.cover} alt={album.title}/>
              <InfoImage>
                <InfoHeader>Album: {album.title}</InfoHeader>
                <InfoText>{artist.name}</InfoText>
              </InfoImage>
              <CloseX/>
            </ModalContainer>
          </ModalWrapper>
        </Modal>}
      </>
  )
}

export const Albums: React.FC<IAlbum> = ({id, title, artist, cover_big, tracklist}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [result, setResult] = useState<Service<ITrackList>>({
    status: 'loading'
  })

  useMemo(() => {
    fetch(`https://cors-anywhere.herokuapp.com/${tracklist}` )
    .then(response => response.json())
    .then(response => {
      setResult({ status: 'loaded', payload: response})
    })
    .catch(error => setResult({ status: 'error', error}))
  }, [tracklist]) 

  return (
      <>
      <Image src={cover_big} alt={title} onClick={() => setIsModalOpen(true)}/>
      <InfoImage>
          <InfoHeader>{title}</InfoHeader>
          <InfoText>{artist.name}</InfoText>
      </InfoImage>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>
          <ModalWrapper>
            <ModalContainer>
            <ModalHeader>{title}</ModalHeader>
              <Row>
                <Column>
                  <Image src={cover_big} alt={title}/>
                </Column>
                <Column>
                  <ModalInfo>
                    <ModalSubHeader>{artist.name}</ModalSubHeader>
                  </ModalInfo>
                </Column>
              </Row>
              <Line/>
              <Row>
                <Column>
                  <ModalSubHeader>Track List</ModalSubHeader>
                </Column>
                <Column>
                {result.status === 'loaded' &&
                  result.payload.data.map(idx => (
                     <ModalTable  key={idx.id}>
                       <ModalTableColumn>
                        <td>{idx.title}</td>
                       </ModalTableColumn>
                     </ModalTable>
                  ))
                  }
                </Column>
              </Row>
            </ModalContainer>
          </ModalWrapper>
        </Modal>}
      </>
  )
}

export const Artists: React.FC<IArtist> = ({id, name, tracklist, picture_big, position}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [result, setResult] = useState<Service<IArtistTopTracks>>({
    status: 'loading'
  })

  /* useMemo(() => {
    fetch(`https://cors-anywhere.herokuapp.com/${tracklist}` )
    .then(response => response.json())
    .then(response => {
      setResult({ status: 'loaded', payload: response})
    })
    .catch(error => setResult({ status: 'error', error}))
  }, [tracklist])
  
  console.log(result) */


  return (
      <>
      <Image src={picture_big} alt={name} onClick={() => setIsModalOpen(true)}/>
      <InfoImage>
          <InfoHeader>{name}</InfoHeader>
          <InfoText>No: {position}</InfoText>
      </InfoImage>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>
      <ModalWrapper>
            <ModalContainer>
            <ModalHeader>{name}</ModalHeader>
              <Row>
                <Column>
                  <Image src={picture_big} alt={name}/>
                </Column>
                <Column>
                  <ModalInfo></ModalInfo>
                </Column>
              </Row>
              <Line/>
              <Row>
                <Column>
                {tracklist}
                </Column>
              </Row>
            </ModalContainer>
          </ModalWrapper>
        </Modal>}
      </>
  )
}

export const Playlists: React.FC<IPlaylist> = ({id, title, tracklist, user, picture_big}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [result, setResult] = useState<Service<IPlayListData>>({
    status: 'loading'
  })

  useMemo(() => {
    fetch(`https://cors-anywhere.herokuapp.com/${tracklist}/?limit=10` )
    .then(response => response.json())
    .then(response => {
      setResult({ status: 'loaded', payload: response})
    })
    .catch(error => setResult({ status: 'error', error}))
  }, [tracklist]) 
  console.log(result)


  return (
      <>
      <Image src={picture_big} alt={title} onClick={() => setIsModalOpen(true)}/>
      <InfoImage>
          <InfoHeader>{title}</InfoHeader>
          <InfoText>{user.name}</InfoText>
      </InfoImage>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>
          <ModalWrapper>
            <ModalContainer>
            <ModalHeader>{title}</ModalHeader>
              <Row>
                <Column>
                  <Image src={picture_big} alt={title}/>
                </Column>
                <Column>
                  <ModalInfo></ModalInfo>
                </Column>
              </Row>
              <Line/>
              <Row>
                <Column>
                 <ModalSubHeader>Track List</ModalSubHeader>
                </Column>
                <Column>
                  {result.status === 'loaded' &&
                    result.payload.data.map(idx => (
                      <ModalTable  key={idx.id}>
                        <ModalTableColumn>
                          <td>{idx.title}</td>
                        </ModalTableColumn>
                      </ModalTable>
                    ))
                    }
                </Column>
              </Row>
            </ModalContainer>
          </ModalWrapper>
      </Modal>}
      </>
  )
}

export const Podcasts: React.FC<IPodcast> = ({id, title, fans, picture_big, description}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
      <>
      <Image src={picture_big} alt={title} onClick={() => setIsModalOpen(true)}/>
      <InfoImage>
          <InfoHeader>{title}</InfoHeader>
      </InfoImage>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>
      <ModalWrapper>
            <ModalContainer>
            <ModalHeader>{title}</ModalHeader>
              <Row>
                <Column>
                  <Image src={picture_big} alt={title}/>
                </Column>
                <Column>
                  <ModalInfo>{description}</ModalInfo>
                </Column>
              </Row>
              <Line/>
              <Row>
                <Column>
                  Fans: {fans}
                </Column>
              </Row>
            </ModalContainer>
          </ModalWrapper>
        </Modal>}
      </>
  )
}

export const Search: React.FC<IData> = ({id, title, artist, album}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Image src={album.cover_big} alt={title} onClick={() => setIsModalOpen(true)}/>
      <InfoImage>
          <InfoHeader>{title}</InfoHeader>
          <InfoText>{artist.name}</InfoText>
      </InfoImage>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>
      <ModalWrapper>
            <ModalContainer>
            <ModalHeader>{title}</ModalHeader>
              <Row>
                <Column>
                  <Image src={album.cover_big} alt={album.title}/>
                </Column>
                <Column>
                  
                </Column>
              </Row>
              <Line/>
              <Row>
                <Column>
                  <ModalInfo>{artist.name}</ModalInfo>
                </Column>
              </Row>
            </ModalContainer>
          </ModalWrapper>
        </Modal>}
    </>
  )
}