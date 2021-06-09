import styled from 'styled-components';


export  const Container = styled.div`
  h1 {
    color: #FFF;
  }

  .headerNotLogged {
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

    img{
      width: 10%;
    }
    

    img:last-child{
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
    }
  }
  
  .headerIsLogged {
      width: 100%;
      padding: 0 1rem;
      height: 2.7rem;
      background-color: var(--pink);
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        width: 10%;
      }
      
      img:last-child {
        height: 2rem;
        width: 2rem;
        border-radius: 50%;
        object-fit: cover;
      }
  }
`