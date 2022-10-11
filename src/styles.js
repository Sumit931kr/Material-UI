import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=> ({
 container :{ 
  backgroundColor: theme.palette.background.paper,
  padding : theme.spacing(8,0,6),
 },
 icon:{
marginRight: '20px'
 },
 buttons: {
    marginTop: '20px'
 },
cardGrid:{
padding: '20px 0'
},
card:{
height:'50vh',
display:'flex',
flexDirection:'column'
},
cardContent:{
    // flexGrow:1
},
cardMedia:{
    paddingTop:'56.25%'

}

}))
 
export default useStyles