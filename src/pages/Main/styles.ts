import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  header{
    width: 100%;
    height: 2.7rem;

    background-color:var(--pink);

    display: flex;
    justify-content: flex-end;

    .headerButton {
      height: 2.3rem;
      width: 5rem;
      background-color: var(--blue);

      margin: .2rem .3rem;

      border:0;
      
      font-size: 1.5rem;
      font-weight: 700;
      font-style: italic;
      color: var(--white);

      display: flex;
      align-items: center;
      justify-content: center;
      
    }
  }

  .content {

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
      width: 60%;

      margin-top: 10rem;
    }

    strong{
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .inputWrapper {
      width: 100%;
      display: flex;
      flex-direction:row;
      align-items: center;
      justify-content: center;

      .searchIcon{
        height: 2.7rem;
        background-color: #FFF;
      }

      input{
        height: 2.7rem;
        width: 30rem;
        
        border: 0;
        
        padding-left: .2rem;

        &:focus{
        outline: none;
        }
      }
      
      button {
        height: 2.7rem;
        width: 8rem;
        
        border: 0;
        
        background-color: var(--pink);
        
        font-size: 1.5rem;
        font-weight: 700;
        font-style: italic;
        color: #FFF;

        &:focus{
        outline: none;
        }
        
      }
    }
  }
`