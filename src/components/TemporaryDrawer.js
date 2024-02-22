import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Drawer, IconButton, List, ListItem } from '@mui/material';
import {Divider} from '@mui/material';
import {FiSettings} from 'react-icons/fi'
import {BsQuestionCircle} from 'react-icons/bs'

const TemporaryDrawer = () => {
    const [state, setState]=React.useState({
        left: false
    });
    const toggleDrawer = (anchor, open) => (event)=>{
        setState({...state, [anchor]: open});
    };
    const list=(anchor)=>(
        <div style={{width:"250px"}} role="presentation">
            <Divider/>
        <List>
            <ListItem style={{fontSize:"48px", marginLeft:"5px"}}>
                <span style={{color:"blue", fontWeight:"700", fontSize:"22px", fontFamily: "Product Sans , Arial Sans Serif"}}>G</span>
                <span style={{color:"red", fontWeight:"700", fontSize:"22px", fontFamily: "Product Sans , Arial Sans Serif"}}>o</span>
                <span style={{color:"yellow", fontWeight:"700", fontSize:"22px", fontFamily: "Product Sans , Arial Sans Serif"}}>o</span>
                <span style={{color:"red", fontWeight:"700", fontSize:"22px", fontFamily: "Product Sans , Arial Sans Serif"}}>g</span>
                <span style={{color:"indigo", fontWeight:"700", fontSize:"22px", fontFamily: "Product Sans , Arial Sans Serif"}}>l</span>
                <span style={{color:"blue", fontWeight:"700", fontSize:"22px", fontFamily: "Product Sans , Arial Sans Serif"}}>e</span>
                <span style={{color:"blue", fontWeight:"700", fontSize:"22px", fontFamily: "Product Sans , Arial Sans Serif"}}>Docs</span>

                
            </ListItem>
        </List>
        <Divider/>
        <List style={{marginLeft:"08px", marginRight:"8px", marginTop:"15px"}}>
            <ListItem className='list_item'>
                {/* <img src={} style={{height:"20px", width:"20px"}}/> */}
                <div style={{marginLeft:"20px", fontSize:"15px", fontWeight:"500", color:"grey"}}>Docs</div>
            </ListItem>
            <ListItem className='list_item'>
                {/* <img src={} style={{height:"20px", width:"20px"}}/> */}
                <div style={{marginLeft:"20px", fontSize:"15px", fontWeight:"500", color:"grey"}}>Docs</div>
            </ListItem>
            <ListItem className='list_item'>
                {/* <img src={} style={{height:"20px", width:"20px"}}/> */}
                <div style={{marginLeft:"20px", fontSize:"15px", fontWeight:"500", color:"grey"}}>Docs</div>
            </ListItem>
            <ListItem className='list_item'>
                {/* <img src={} style={{height:"20px", width:"20px"}}/> */}
                <div style={{marginLeft:"20px", fontSize:"15px", fontWeight:"500", color:"grey"}}>Docs</div>
            </ListItem>


        </List>
        <Divider/>
        <List>
            <ListItem className='list_item'>
                <FiSettings/><div style={{marginLeft:"20px", fontSize:"15px", fontWeight:"500", color:"grey"}}>Settings</div>
            </ListItem>
            <ListItem className='list_item'>
                <BsQuestionCircle/>
                <div style={{marginLeft:"20px", fontSize:"15px", fontWeight:"500", color:"grey"}}>Settings</div>

            </ListItem>
        </List>
    </div>

    )
    
  return (
    <div>
        <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
            <MenuBookIcon/>
        </IconButton>
        <Drawer open={state['left']} onClose={toggleDrawer("left", false)}>
           {list('left')}
        </Drawer>
        </React.Fragment>
      
    </div>
  )
}

export default TemporaryDrawer
