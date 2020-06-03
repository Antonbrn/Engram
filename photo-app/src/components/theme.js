
import { createMuiTheme }  from '@material-ui/core/styles'


const theme = createMuiTheme({
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
        fontFamily: [
            'Prompt',
            '"Baloo Cheetan 2"',
            '"Maven Pro"',
            '"Didact Gothic"',
            'Inter',
        ].join(','),  
    }

})

export default theme