import React from "react";
import { Box, Typography, Container, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import {
  Title,
  TitleDiv,
  ContainerStyled,
  ButtonStyled
} from "../Albums/StylesAlbums";

const useStyles = makeStyles({
  root: {},
  media: {}
});

const Notifications = () => {
  const classes = useStyles();
  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <TitleDiv style={{ marginTop: 100, paddingBottom: 10 }}>
          <Title variant="h4">Notifications</Title>
        </TitleDiv>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <TitleDiv style={{ paddingBottom: 20 }}>
          <Title variant="h5">(Coming soon)</Title>
        </TitleDiv>
      </div>
      <Grid>
        <Container style={{ paddingBottom: 30 }}>
          <Card>
            <CardActionArea>
              <CardContent style={{ paddingBottom: 30 }}>
                <div style={{ display: "flex" }}>
                  <div style={{ paddingRight: 20 }}>
                    <Avatar
                      src="https://picsum.photos/200"
                      style={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      H
                    </Avatar>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Anton has invited you to join Engram vaccation 2020.
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>

        <Container style={{ paddingBottom: 30 }}>
          <Card>
            <CardActionArea>
              <CardContent style={{ paddingBottom: 30 }}>
                <div style={{ display: "flex" }}>
                  <div style={{ paddingRight: 20 }}>
                    <Avatar
                      src="https://picsum.photos/201"
                      style={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      D
                    </Avatar>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Daniel and 16 other people has commented in Agust Wedding.
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>

        <Container style={{ paddingBottom: 30 }}>
          <Card>
            <CardActionArea>
              <CardContent style={{ paddingBottom: 30 }}>
                <div style={{ display: "flex" }}>
                  <div style={{ paddingRight: 20 }}>
                    <Avatar
                      src="https://picsum.photos/202"
                      style={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      A
                    </Avatar>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Alex and 4 other people has added photos to Agust Wedding.
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Grid>
    </div>
  );
};

export default Notifications;
