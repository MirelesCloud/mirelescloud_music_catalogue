/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const InfoContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px, auto;
`

const InfoDetails = styled.div`
  display: flex;
`

const InfoDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
`

const InfoDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`

const InfoHeader = styled.h3``;

const InfoText = styled.p`
  margin-right: 25px;
`

const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`

const Button = styled.div`
 background-color: transparent;
 border: 1px solid #dbdbdb;
 color: #262626;
 border-radius: 4px;
 cursor: pointer;
 font-weight: 600;
 padding: 5px 9px;
 text-transition: capitalize;
 font-size: 14px;
 margin-left: 20px
`

interface Data {
  id: number;
  title: string;
}



const fetchData = () => {
  const [data, setData] = useState<Data>({ id: 0, title: ""})

  useEffect(() => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/infos", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "8ddf226683mshcf5b7b3b630e11cp10a39bjsn6413d2bd3322"
      }
    })
    .then(response => response.json())
    .then(response => {
      setData(data)
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
 })

  return data

}

const Info = () => {

  return (
    <InfoContainer>
      <InfoDetails>
        <InfoDetailsLeft>
          <Input/>
          <Button>Search</Button>
        </InfoDetailsLeft>
        <InfoDetailsRight>
          <InfoHeader></InfoHeader>
          <InfoText></InfoText>
        </InfoDetailsRight>
      </InfoDetails>
    </InfoContainer>
  )

}

export default Info;