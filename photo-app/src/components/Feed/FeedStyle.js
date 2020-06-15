import styled from "styled-components";
import { Container } from "@material-ui/core";

export const FeedBox = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 85px;
  padding-bottom: 85px;


  @media only screen and (min-width: 768px) {

}
`;

export const Wrapper = styled.div`

      margin-top: 20px;
      margin-bottom: 30px;
      height: 200px;
      width: 300px;

    @media only screen and (min-width: 768px) {
    height: 400px;
    width: 600px;

}
    /* @media only screen and (max-width: 700px){
      width: 100%;
      height: auto;
  }
*/
`;

export const ImageStyle = styled.img`
  border: solid 2px orange;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;



  
@media only screen and (min-width: 768px) {

}
  
/* @media only screen and (max-width: 700px){
    width: 100%;
    height: auto;
    margin-top: 10px;
}

@media only screen and (max-width: 500px){
    width: 100%;
    height: auto;
} */
`;

