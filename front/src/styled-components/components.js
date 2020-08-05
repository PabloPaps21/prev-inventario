import styled from 'styled-components';

export const FormAddProduct = styled.form`  
  display:flex;
  justify-content:center;
  flex-direction:column;
  width: 33%;
  height: 250px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
  box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.75);
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 22px;
  & input, label {
    width: 70%;
    margin-left:11%;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 22px;
  }
  & button {
    width: 20%;
    margin-left:38%;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color:#478055;
    color: #FFF;
    font-size: 22px;
  }
`;