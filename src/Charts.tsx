import React, { useState} from 'react';
import { 
    ITracks, 
    IAlbum, 
    IArtist, 
    IPlaylist, 
    IPodcast } from './Types'

import { 
  InfoImage,
  Image,
  InfoHeader,
  InfoText  }  from './Styles'
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
        <Image src={album.cover} alt={album.title}/>
        <InfoImage>
          <InfoHeader>Album: {album.title}</InfoHeader>
          <InfoText>{artist.name}</InfoText>
        </InfoImage>
        </Modal>}
      </>
  )
}

export const Albums: React.FC<IAlbum> = ({id, title, artist, cover_big}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
      <>
      <Image src={cover_big} alt={title} onClick={() => setIsModalOpen(true)}/>
      <InfoImage>
          <InfoHeader>{title}</InfoHeader>
          <InfoText>{artist.name}</InfoText>
      </InfoImage>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}><Image src={cover_big} alt={title}/></Modal>}
      </>
  )
}

export const Artists: React.FC<IArtist> = ({id, name, tracklist, picture_big, position}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
      <>
      <Image src={picture_big} alt={name} onClick={() => setIsModalOpen(true)}/>
      <InfoImage>
          <InfoHeader>{name}</InfoHeader>
          <InfoText>No: {position}</InfoText>
      </InfoImage>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}><Image src={picture_big} alt={name}/></Modal>}
      </>
  )
}

export const Playlists: React.FC<IPlaylist> = ({id, title, tracklist, user, picture_big}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
      <>
      <Image src={picture_big} alt={title} onClick={() => setIsModalOpen(true)}/>
      <InfoImage>
          <InfoHeader>{title}</InfoHeader>
          <InfoText>{user.name}</InfoText>
      </InfoImage>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}><Image src={picture_big} alt={title}/>
        <ul>{tracklist}</ul>
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
          <InfoText>Fans: {fans}</InfoText>
      </InfoImage>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}><Image src={picture_big} alt={title}/><p>{description}</p></Modal>}

      </>
  )
}