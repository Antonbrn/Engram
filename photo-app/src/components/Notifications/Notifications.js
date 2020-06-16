import React from "react";
import { Box, Typography, Container, Grid } from "@material-ui/core";
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
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TitleDiv style={{ paddingTop: 100, paddingBottom: 50 }}>
          <Title variant="h4">Notifications</Title>
        </TitleDiv>
      </div>
      <Grid>
        <Container style={{ paddingBottom: 30 }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title="Contemplative Reptile"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  AlbumName
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Daniel and 4 other people has added photos to AlbumName
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: "center" }}></CardActions>
          </Card>
        </Container>
        <Container style={{ paddingBottom: 30 }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title="Contemplative Reptile"
              />
              <CardContent style={{ paddingBottom: 30 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  AlbumName
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Daniel and 4 other people has added photos to AlbumName
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: "center" }}></CardActions>
          </Card>
        </Container>
        <Container style={{ paddingBottom: 30 }}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  AlbumName
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Daniel and 4 other people has added photos to AlbumName
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{ justifyContent: "center" }}></CardActions>
          </Card>
        </Container>
      </Grid>
    </div>
  );
};

export default Notifications;
