import React, { useState, useContext, useEffect } from "react";
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  IconButton,
  Input,
  Fade,
  Backdrop,
  Tooltip,
  Grid,
  Paper,
} from "@material-ui/core";
import {
  ContainerStyled,
  BoxContainer,
  CardContainer,
  TypographyStyled,
  ButtonStyled,
  albumBackgroundDiv,
  AlbumDiv,
  Title,
  IconButtonStyled,
  StyledCardMedia,
  TitleDiv,
  TextFieldInputStyled,
  InputStyled,
  ModalDiv,
  ImgModal,
} from "./StylesAlbums";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import DeleteIcon from "@material-ui/icons/Delete";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { makeStyles } from "@material-ui/styles";
import { Link, Redirect } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import Modal from "@material-ui/core/Modal";
//CONTEXT
import { AuthContext } from "../../Auth";

//BACKEND
import { db } from "../../base";
import { storage } from "../../base";
import { nominalTypeHack } from "prop-types";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles({
  albumButton: {
    fontSize: 30,
    display: "flex",
    padding: 0,
    alignItems: "flex-end",
  },
  modal: {},
});

const Album = (props) => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  const albumId = props.match.params.id;
  const albumTitle = props.match.params.title;
  //State for photos
  const [url, setUrl] = useState("");
  const [photos, setPhotos] = useState([]);
  const [photoFile, setPhotoFile] = useState([]);
  const [inviteMember, setInviteMember] = useState([]);
  const [memberId, setMemberId] = useState("");

  const [openPhoto, setOpenPhoto] = React.useState(false);
  const [clickedPhoto, setClickedPhoto] = useState([]);
  const [openPhotoModal, setOpenPhotoModal] = useState(false);
  const [openInviteModal, setOpenInviteModal] = useState(false);

  const [stateRedirect, setStateRedirect] = useState(false);
  //Get photofile
  const getPhotoFile = (e) => {
    if (e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };

  //delete albums and photos
  const deleteAlbum = () => {
    db.collection("albums").doc(albumId).delete();
    const deletePhotos = db
      .collection("photos")
      .where("albumId", "==", albumId);
    deletePhotos.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });
  };

  const setRedirect = () => {
    setStateRedirect(true);
  };

  const renderRedirect = () => {
    if (stateRedirect) {
      return <Redirect to="/myalbums" />;
    }
  };
  const confirmDelete = () => {
    var shouldDelete = window.confirm(
      "Do you really want to delete this album?"
    );
    if (shouldDelete) {
      deleteAlbum();
      setRedirect();
    }
  };

  //Add photos function
  const addPhotos = (e) => {
    e.preventDefault();
    //Upload photofile to firebase storage
    const uploadTask = storage.ref(`photos/${photoFile.name}`).put(photoFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("photos")
          .child(photoFile.name)
          .getDownloadURL()
          .then((url) => {
            //Add url, userId to database
            db.collection("photos").add({
              url: url,
              userId: currentUser.id,
              albumId: albumId,
            });
          });
        setUrl(url);
      }
    );
  };

  //Get Photos
  useEffect(() => {
    db.collection("photos")
      .where("albumId", "==", albumId)
      .onSnapshot((snapshot) => {
        const newPhotos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPhotos(newPhotos);
      });
  }, []);

  const inviteMemberFunc = () => {
    const getMemberId = db
      .collection("users")
      .where("username", "==", inviteMember);
    getMemberId.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id);
      });
    });
  };

  //Modals
  const handleOpen = (photoUrl) => {
    setOpenPhoto(true);
    setClickedPhoto(photoUrl);
  };

  const handleClosed = () => {
    setOpenPhoto(false);
  };

  const handleOpenPhotoModal = () => {
    setOpenPhotoModal(true);
  };

  const handleClosedPhotoModal = () => {
    setOpenPhotoModal(false);
  };

  const handleOpenInviteModal = () => {
    setOpenInviteModal(true);
  };

  const handleClosedInviteModal = () => {
    setOpenInviteModal(false);
  };

  return (
    <div>
      {renderRedirect()}
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={openPhoto}
        onClose={handleClosed}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={openPhoto}>
          <ImgModal src={clickedPhoto} />
        </Fade>
      </Modal>
      {/* Add Photo Modal */}
      <Modal
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
        open={openPhotoModal}
        onClose={handleClosedPhotoModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={openPhotoModal}>
          <ModalDiv>
            <h2>Add Photo</h2>
            <TextFieldInputStyled>
              Choose File
              <InputStyled type="file" onChange={getPhotoFile} />
            </TextFieldInputStyled>
            <br />
            <TextFieldInputStyled
              onClick={addPhotos}
              type="submit"
              data-dismiss="modal"
            >
              Add
            </TextFieldInputStyled>
          </ModalDiv>
        </Fade>
      </Modal>

      {/* Invite members to Album modal*/}
      <Modal
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          color: "black",
        }}
        open={openInviteModal}
        onClose={handleClosedInviteModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={openInviteModal}>
          <ModalDiv>
            <h4>Invite members to album</h4>
            <TextField
              error={false}
              required
              label="Email"
              onChange={(e) => {
                setInviteMember(e.target.value);
              }}
            />
            <TextFieldInputStyled onClick={inviteMemberFunc}>
              Invite member
            </TextFieldInputStyled>
          </ModalDiv>
        </Fade>
      </Modal>

      {/* onClick={addPhotos} should sit inside modal as 'add button' */}

      <ContainerStyled maxWidth="md">
        <TitleDiv>
          <Title variant="h5">{albumTitle}</Title>
          <div className={classes.albumButton}>
            <Tooltip title="Add Photo" placement="bottom">
              <IconButtonStyled
                aria-label="Add Photo"
                onClick={handleOpenPhotoModal}
              >
                <AddPhotoAlternateIcon style={{ color: "#bc5100" }} />
              </IconButtonStyled>
            </Tooltip>
            <Tooltip title="Add Friend">
              <IconButtonStyled onClick={handleOpenInviteModal}>
                <PersonAddIcon style={{ color: "#bc5100" }} />
              </IconButtonStyled>
            </Tooltip>
            <Tooltip title="Delete Photo">
              <IconButtonStyled onClick={confirmDelete}>
                <DeleteIcon style={{ color: "#bc5100" }} />
              </IconButtonStyled>
            </Tooltip>
          </div>
        </TitleDiv>
        <Box borderBottom={1} />
      </ContainerStyled>
      <Container style={{ paddingBottom: "60px" }}>
        {/* Box för display flex */}
        <BoxContainer style={{ justifyContent: "flex-start" }}>
          {photos.map((photo, index) => (
            <AlbumDiv key={index}>
              <CardContainer style={{ display: "flex", alignItems: "center" }}>
                <CardActionArea
                  onClick={(e) => {
                    handleOpen(photo.url);
                  }}
                >
                  <StyledCardMedia component="img" src={photo.url} />
                </CardActionArea>
              </CardContainer>
            </AlbumDiv>
          ))}
        </BoxContainer>
        <ButtonStyled
          component={Link}
          to="/myalbums"
          style={{ float: "right" }}
        >
          My Albums
        </ButtonStyled>
      </Container>
    </div>
  );
};
export default Album;
