import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 80%;
    margin-bottom: 1rem;
  }

  strong {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  input {
    height: 2.7rem;
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .loginButton{
    height: 2.25rem;
    width: 10rem;
    
    border: 0;

    font-size: 1.5rem;
    font-style: italic;
    font-weight: 700;
    background-color:var(--blue);
    color:var(--white);


    margin-bottom: 0.5rem
  }

  .signinButton {
    height: 2.25rem;
    width: 10rem;
    
    border: 0;

    font-size: 1.5rem;
    font-style: italic;
    font-weight: 700;
    background-color:var(--pink);
    color:var(--white);


    margin-bottom: 0.5rem;

    display: flex;
    justify-content:center;
    align-items:center;
  }

  p {
    width: 15rem;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 0.5rem;
  }

  .socialMediaButtons {
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .facebookButton {
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(63, 103, 178);

    color: var(--white);

    border: 0;

  }

  .googleButton {
    height: 2.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--white);

    color: var(--black);

    border: 0;

  }
`