import React, { useState } from 'react';
import styled from 'styled-components';
import { checkGrammar } from './api';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: blue;
  color: white;
  cursor: pointer;
  transition: 0.125s all ease-in;

  &:hover {
    background-color: navy;
  }
`;

const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleButtonClick = async () => {
    try {
      const response = await checkGrammar(inputText);
      setOutputText(response);
      console.log(outputText)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Input
        placeholder="Enter some text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <Button onClick={handleButtonClick}>Check grammar</Button>
      {outputText && <p>{outputText}</p>}
    </Container>
  );
};

export default App;
