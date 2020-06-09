import styled from "styled-components";
import { Typography, Box, Container, Grid, Card } from "@material-ui/core";

export const FeedBox = styled(Container)`
    background-color: green;
    height: 100vh;
    position: relative;
`;

export const FeedContainer = styled(Grid)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: wheat;
  overflow: scroll;
  scroll-behavior: smooth;
  height: 100vh;
  position: relative;
`

export const ImageCard = styled(Card)`
   width: 150px;
   border: solid 1px #bc5100;
   border-radius: 5px;
   max-height: 21.34471718249733vh;
`

 export default {
     FeedBox,
     FeedContainer,
     ImageCard,
    
 }
