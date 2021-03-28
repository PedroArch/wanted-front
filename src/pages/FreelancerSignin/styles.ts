import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
    header { 
      padding: 0 1rem;
      width: 100%;
      height: 3rem;
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

  .formWrapper{
    width: 720px;
    
    margin-top: 1rem;
    padding: 4rem 5rem;
    
    background-color: var(--burgundy);

    border-radius: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h1 {
      margin-bottom: 1rem;
      font-size: 3rem;
    }

    input{
      width: 100%;
      height: 2.7rem;

      padding-left: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .contactsWrapper {
      width: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;

      input {
        width: 100%;
      }
    }

    strong {
      font-size: 2rem;
      margin-bottom: .5rem;
    }

    .leaflet-container {
      width: 80%;
      margin-bottom: 1rem;
      border-radius: 1rem;
    }

    .switchs {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: .5rem;

      input[type="checkbox"] {
        height: 1.5rem;
        width: 1.5rem;
        margin-right: .5rem;
      }

      strong {
        font-size: 1rem;
        font-weight: 700;
        line-height: 2rem;
      }
    }

    textarea {
      padding: 0.5rem;
      width: 100%;
      height: 8rem;
      margin-bottom: 1rem;
    }

    .socialMediasWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      
      width: 100%;

      .inputWrapper {
        display: flex;
        justify-content:center;
        align-items: center;
        margin-bottom: .5rem;

        .socialMediasIcon {
          background: var(--white);
          height: 2.7rem;
          padding: 0 0.2rem;
        }

        .socialMediasInput {
          margin: 0;
          height: 2.7rem;
          border: 0;

          &:focus{
            outline: none;
          }
        }

        
      }
    }
    
    button {
      height: 2.7rem;
      width: 9rem;

      margin-top: 1rem;

      background: var(--pink);

      border: 0;

      font-size: 1.5rem;
      font-weight: 700;
      font-style: italic;
      color: var(--white);
    }
  }
`