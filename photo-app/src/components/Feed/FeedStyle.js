import styled from "styled-components";
import { Typography, Box, Container, Grid, Card } from "@material-ui/core";

export const FeedBox = styled(Container)`
  height: 100vh;
`;

export const ImageCard = styled(Grid)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  height: 60%;
  width: 40%;
`;

export const ImageStyle = styled.img`
  height: 100%;
  border: solid 4px orange;
  border-radius: 8px;
`;

export const ImageInfo = styled(Typography)`
  max-height: 20%;
  border: solid 2px orange;
`;
