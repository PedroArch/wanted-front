import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    width: 100%;
    height: 3rem;
    padding: 0 1rem;

    background-color: var(--pink);
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    
    img{
      width: 10%;
    }

    img:last-child{
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
    }
  }

  .userWrapper {
    width: 720px;
    margin-top: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
      height: 7rem;
      width: 7rem;
      
      border-radius: 50%;
      object-fit: cover;

      margin-right: 2rem;
    }
    
    .userInfos {
      font-size: 1.5rem;
    }

    .typeUser {
      font-weight: 700;

    }
  }

  .socialMediasIcons{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }

  .summary {
    width: 720px;

    margin-top: 3rem;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .about {
      width: 300px;

      margin-right: 4rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      strong{
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      
      p{
        text-align: center;
        margin-bottom: 1rem;
      }

      button {
        height: 2.75rem;
        width: 15rem;

        background-color: var(--pink);

        border:0;
               
        font-size: 1.5rem;
        font-style: italic;
        font-weight: 700;
        color: var(--white);
      }
    }

    .thumbnailsPorfolio {
      width: 400px;

      display:grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0;
      img{
        width: 10rem;
        height: 9rem;
        object-fit: cover;
      }
    }
  }
`