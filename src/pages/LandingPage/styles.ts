import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  background: url("./assets/logo-rosa.png") no-repeat center center;

  background-size: 70%;

  position: relative;

  a { 
    position: absolute;
    right: 3.1rem;
    bottom: 3.1rem;

    background: var(--pink);

    height: 50px;
    width: 200px;

    font-family: 'Roboto', sans-serif;
    font-style: italic;
    font-size: 1rem;
    font-weight: 700;

    display:flex;
    align-items: center;
    justify-content: center;
    
  }

`