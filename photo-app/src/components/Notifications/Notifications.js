import React from "react";
import { Typography, Container, Grid, Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Title, TitleDiv, StyledCardContent } from "../Albums/StylesAlbums";

const Notifications = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <TitleDiv style={{ marginTop: 100, paddingBottom: 10 }}>
          <Title variant="h4" style={{ fontSize: "2vh" }}>
            Notifications
          </Title>
        </TitleDiv>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <TitleDiv style={{ paddingBottom: 20 }}>
          <Title variant="h5" style={{ fontSize: "2vh" }}>
            (Coming soon)
          </Title>
        </TitleDiv>
      </div>
      <Grid>
        <Container
          style={{
            paddingBottom: 30
          }}
        >
          <Card>
            <CardActionArea>
              <StyledCardContent
                style={{
                  paddingBottom: 30
                }}
              >
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
                      style={{ fontSize: "2vh" }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Anton has invited you to join the album 'Engram vaccation
                      2020'.
                    </Typography>
                  </div>
                </div>
              </StyledCardContent>
            </CardActionArea>
          </Card>
        </Container>

        <Container style={{ paddingBottom: 30 }}>
          <Card>
            <CardActionArea>
              <StyledCardContent style={{ paddingBottom: 30 }}>
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
                      style={{ fontSize: "2vh" }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Daniel and 16 other people has commented in Agust Wedding.
                    </Typography>
                  </div>
                </div>
              </StyledCardContent>
            </CardActionArea>
          </Card>
        </Container>

        <Container style={{ paddingBottom: 30 }}>
          <Card>
            <CardActionArea>
              <StyledCardContent style={{ paddingBottom: 30 }}>
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
                      style={{ fontSize: "2vh" }}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Alex and 4 other people has added photos to Agust Wedding.
                    </Typography>
                  </div>
                </div>
              </StyledCardContent>
            </CardActionArea>
          </Card>
        </Container>
      </Grid>
    </div>
  );
};

export default Notifications;
