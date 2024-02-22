import React from 'react'
import { IconButton } from '@mui/material'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Template.css';
import uuid from 'react-uuid';
import { useNavigate } from "react-router-dom";
const Template = () => {
    let navigate=useNavigate();
    const createForm=() => {
        const id_=uuid();
        // history.push('/form/'+id_);
        navigate(`/form/${id_}`);

    }
  return (

    <div className='template_section'>
        <div className='template_top'>
            <div className='template_left'>
                <span style={{fontSize: '10px', color:"#202124"}}>Start New Form Form</span>
            </div>
            <div className='template_right'>
                <div className='gallery_buttons'>
                    Template Gallery
                    <UnfoldMoreIcon/>
                </div>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>

        </div>
        <div className='template_body'>
            <div className='card' onClick={createForm}>
                <img className='card_image' src={"https://img.freepik.com/free-vector/happy-buddha-purnima-religious-background-lord-birthday-celebration_1017-44017.jpg?size=626&ext=jpg&ga=GA1.1.1790804099.1699766749&semt=sph"} />
                <p className='card_title'>Blank</p>
            </div>
            <div className='card'>
                <img className='card_image' src={"https://img.freepik.com/free-vector/happy-buddha-purnima-religious-background-lord-birthday-celebration_1017-44017.jpg?size=626&ext=jpg&ga=GA1.1.1790804099.1699766749&semt=sph"} />
                <p className='card_title'>Blank</p>
            </div>
            <div className='card'>
                <img className='card_image' src={"https://img.freepik.com/free-vector/happy-buddha-purnima-religious-background-lord-birthday-celebration_1017-44017.jpg?size=626&ext=jpg&ga=GA1.1.1790804099.1699766749&semt=sph"} />
                <p className='card_title'>Blank</p>
            </div>

        </div>
    </div>
  )
}

export default Template
