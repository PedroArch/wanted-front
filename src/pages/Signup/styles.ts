import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  form {

    width: 30%;

    margin-top: 6rem;

    background-color:var(--blue);
    padding: 2rem;

    border-radius: 0.7rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    h1 {
      font-size: 3.5rem;
      margin-bottom: 0.8rem;
    }

    img {
      margin-bottom: 0.5rem;
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid var(--white);
    }

    input[type="email"] {
      height: 2.7rem;
      width: 100%;
      margin: 0.3rem 0;
      padding-left: 0.3rem;
    }


    .formRow {
      height: 2.7rem;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.3rem;
      margin-top: 0.3rem;

      button {
        background: var(--pink);
        
        border: 0;

        font-size: 1.5rem;
        font-weight: 700;
        font-style: italic;
        color: var(--white);
      }

      input{
        padding: 0.3rem;
      }
    }

    .cityState {
      height: 2.7rem;
      width: 100%;
      
      display: grid;
      grid-template-columns: 7fr 1fr;
      gap: 0.3rem;

      input {
        padding: 0.3rem;
      }
    }
    
    .terms {
      margin-top: 0.3rem;
      
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        margin-right: 0.3rem;
        height: 1rem;
        width: 1rem;
      }

      span {
        font-size: 0.9rem;
      }

      input {
        padding-left: 0.3rem;
      }
    }

    .avatar-container {
      display: flex;
      align-items: center;
      justify-content: center;

      .new-image {
        height: 96px;
        width: 96px;
        margin-bottom: 1rem ;
        background: #f5f8fa;
        border: 1px dashed #96d2f0;
        border-radius: 50%;
        cursor: pointer;


        display: flex;
        align-items:center;
        justify-content:center;

        img {
          height: 100%;
          width: 100%;
          margin: 0;

          border: 1px solid var(--white);

          object-fit: cover;
          cursor: pointer;
       }
      }
    }

    input[type="file"] {
      display: none;
    }
  }
`