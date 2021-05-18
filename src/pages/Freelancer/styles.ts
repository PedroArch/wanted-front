import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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

      margin-right: 1rem;

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
        width: 8rem;
        height: 7rem;
        object-fit: cover;
      }
    }
  }

  .contact{
    width: 720px;

    margin-top: 5rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .messageBox{
      width: 300px;

      margin-right: 3rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      strong {
        font-size: 1.5rem;
        margin-bottom: .5rem;
      }

      input{
        width: 300px;
        height: 2.75rem;
        padding-left: 0.5rem;
        margin-bottom: 0.5rem;
      }

      textarea {
        width: 100%;
        height: 8rem;
        padding-left: 0.5rem;
        margin-bottom: 0.5rem
      }

      button {
        height: 2.75rem;
        width: 18.5rem;
        margin-bottom: 0.5rem;

        background-color: var(--pink);

        border:0;
               
        font-size: 1.5rem;
        font-style: italic;
        font-weight: 700;
        color: var(--white);
        
      }

      .whatsappButton {
        background-color: rgb(37, 211, 102);
        display: flex;
        align-items: center;
        justify-content: center;
        span{
          font-size: 1rem;
        }
      }
    }


  }

  .infoBoxes{
    width: 720px;

    margin-top: 2rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;

    align-items: center;
    justify-content: center;

    .openningHour{
      background-color: var(--blue);
      width: 300px;
      height: 120px;

      padding: 1rem;

      border-radius: 0.5rem;
      border: 1px solid rgba(169, 208, 242);

      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content:space-between;
    }

    .openOnWeekends{
      background-color: rgb(247, 113, 113);
      width: 300px;
      height: 120px;

      padding: 1rem;

      border-radius: 0.5rem;
      border: 1px solid rgb(206, 57, 57);

      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content:space-between;
    }
    
  }

  .reviewsWrapper {
    width: 100%;

    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong{
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .reviewBox{


      height: 6rem;
      width: 720px;

      margin-bottom: 1rem;

      padding: 1rem;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;


      background-color: var(--blue);
      
      .review {
        display: flex;
        flex-direction: column;
      
      }

      img{
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        object-fit: cover;
      }

      header{
        height: 2.25rem;
        margin-top:1rem;

        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        strong{
          margin: 0;
        }
      }

      p {
        margin: 1rem;
      }
    }
  }
`