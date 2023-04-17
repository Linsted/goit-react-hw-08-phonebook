import styled from '@emotion/styled'

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
    width: 800px;
    gap: 10px;
   
    margin-inline: auto;
    background-color: #bff5f5;
    padding: 20px;
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    border-radius: 8px;
    overflow-x: auto;
`

export const Title = styled.h2`
font-style: italic;

  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

export const WrapperStyled = styled.div`

    width: 800px;
    margin-inline: auto;
    background-color: rgba(248, 248, 255,0.7);
    border-radius: 16px;
    margin-top: 48px;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);

`;

export const ContactsInfoStyled = styled.div`
     padding: 30px 90px;
    border-radius: 16px;
    border: 1px solid #ccc;
    font-size: 18px;
`