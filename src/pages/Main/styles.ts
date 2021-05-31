import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

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

    .searchResults {
      width: 100%;
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      a {

      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

        .freelancer{
        background-color: var(--blue);
        width: 40%;
        height: 110px;
        margin-bottom: 2rem;
        border-radius: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        img {
          height: 5rem;
          width: 5rem;
          border-radius: 50%;
          object-fit: cover;
          margin: 0;
        }

        .freelancerInfo {
          margin-left: 2rem;

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          
          ul {
            list-style: none;
            margin-left: 0.8rem;

            li:first-child {
              font-size: 1.5rem;
              font-weight: 700;
            }
          }
        }

        .porfolios {
          margin-right: 2rem;

          img {
            border-radius: 0;
            margin-right: 1rem;
          }
        }  
      }

    }      
      
    }
  }
`