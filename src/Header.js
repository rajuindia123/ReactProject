import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, IconButton } from '@material-ui/core';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import pic from './Pic.png';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  hedermar:{
    paddingLeft: theme.spacing(30)
        },
        AppBarHeder:{
            marginTop: theme.spacing(1),
        backgroundColor:'azure',
        color:'#000',
        },
 
}));

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.AppBarHeder}>
            <Toolbar>
<Grid container>
<Grid item sm={4} >
<IconButton><FiberManualRecordOutlinedIcon className="headerbac"/></IconButton><span>Logo</span>

</Grid>
<Grid item sm={4} > 

<p className='hed'><span>Deshboard</span> <span className='headertext'>Find Experts</span> <span>Discussion</span></p>
</Grid>
<Grid item sm={4} className={classes.hedermar} >
<IconButton >
<NotificationsNoneOutlinedIcon className="headericoncolor"/>
    
</IconButton>
<IconButton>
    <CommentOutlinedIcon className="headericoncolor"/>
    </IconButton>
    <IconButton><div className={classes.root}>
      <Avatar alt="Remy Sharp" src={pic} className={classes.small} />
      <p className="headericoncolor">^</p>
    </div></IconButton>
</Grid>

</Grid>

            </Toolbar>
        </AppBar>
    )
}
