import styled from "styled-components";
import { Container } from "@material-ui/core";

export const FeedBox = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 85px;

  @media only screen and (max-width: 500px){
    padding-bottom: 85px;
}
`;

export const Wrapper = styled.div`
    height: 400px;
    width: 600px;

    @media only screen and (max-width: 700px){
      width: 100%;
      height: auto;
      margin-top: 20px;
      margin-bottom: 30px;
  }
  
  @media only screen and (max-width: 500px){
      width: 100%;
      height: auto;
      margin-top: 20px;
      margin-bottom: 30px;
  }
`;

export const ImageStyle = styled.img`
  border: solid 4px orange;
  border-radius: 8px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  
@media only screen and (max-width: 700px){
    width: 100%;
    height: auto;
    margin-top: 10px;
}

@media only screen and (max-width: 500px){
    width: 100%;
    height: auto;
}
`;
