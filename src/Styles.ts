import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`

export const MainContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`

export const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`

export const ImageContainer = styled.div`
    position: relative;
    flex-basis: 100%;
    flex-basis: calc(20% - 20px);
    margin: 10px;
    cursor: pointer;
    transition: 0.3s all ease-in;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    @media (max-width: 992px) {
      flex-basis: calc( 33.333% - 20px);
    }

    @media (max-width: 600px) {
      flex-basis: calc(50% - 20px)
    }

    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0,0,0,0.2);
    }
`

export const InfoImage = styled.div`
  padding: 5px 10px;
`

export const Image = styled.img`
    cursor: pointer;
    width: 100%;
`

export const InfoContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px, auto;
`

export const InfoDetails = styled.div`
  display: flex;
`

export const InfoDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
`

export const InfoDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`

export const InfoHeader = styled.h6``;

export const InfoText = styled.p`
  padding: 0px;
  margin: 3px;

`

export const Input = styled.input`
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

export const CustomButton = styled.div`
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

/* Modal */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`

export const Dialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`

export const Container = styled.div`
  position: relative;
  z-index: 0;
`

export const ModalWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`
export const ModalContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s all ease-in;
`
export const ModalInfo = styled.div`
  padding: 5px 10px;
`

export const Column = styled.div`
  float: left;
  width: 50%;
`

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`
export const ModalHeader = styled.h5``
export const ModalSubHeader = styled.h6``

export const ModalText = styled.p`
  padding: 0px;
  margin: 3px;
`

export const ModalList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
`
export const ModalTable = styled.table`
  font-size: 14px;
`

export const ModalTableColumn = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }
`

export const Line = styled.hr`
  color: rgba(0, 0, 0, 0.7);
  
`

export const CloseX = styled.div`
  &::after {
    display: inline-block;
    content: "\00d7";
  }
`

export const Select = styled.div`
  position: relative;
  background-color: #cccccc;
  margin-right: 10px;

  &::after {
    position: absolute;
    content: '';
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 3px solid transparent;
    border-color: #fff transparent transparent transparent;
  }

`

