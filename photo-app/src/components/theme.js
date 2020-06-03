
import { createMuiTheme }  from '@material-ui/core/styles';


export const theme = createMuiTheme({
// -Orange-
  palette: {
    primary: { 
        main: "#f57f17",
        light: "#ffb04c",
        dark: "#bc5100"
     },
// -Green-
     secondary: {
         main: "#54c969",
         light: "#89fd98",
         dark: "#0e973c"
     }
  },
    typography: {
        h1: {
            fontFamily: "Changa"
        },
        h2: {
            fontFamily: "Changa"
        },
        h3: {
            fontFamily: '"Changa"'
        },
        h4: {
            fontFamily: "Changa"
        },
        h5: {
            fontFamily: "Changa"
        },
        body: {
            fontFamily: '"Prompt"'
        },  
    },

})

export default theme