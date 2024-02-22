import React from 'react';
import './FormHeader.css';
import { FiStar, FiSettings } from 'react-icons/fi';
import {AiOutlineEve, AiOutlineEye} from 'react-icons/ai';
import { IconButton } from '@mui/material';
import {Avatar} from '@mui/material';
import {IoMdFolderOpen} from 'react-icons/io'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import Button from '@mui/material';
import QuestionForm from './QuestionForm';

const FormHeader = () => {
  return (
    <div>
    <div className='form_header'>
        <div className='form_header_left'>
            <img src={'https://img.freepik.com/free-vector/happy-buddha-purnima-religious-background-lord-birthday-celebration_1017-44017.jpg?size=626&ext=jpg&ga=GA1.1.1790804099.1699766749&semt=sph'} style={{height:"45px", width:"40px"}}/>
            <input type='text' placeholder='untitled form' className='form_name'/>untitled Form
            <IoMdFolderOpen className='form_header_icon' style={{marginRight:'10px'}}/>
            <FiStar className='form_header_icon' style={{marginRight:'10px'}}/>
            <span style={{fontSize:'12px', fontWeight:'600'}}>All changes saved in Drive</span>
        </div>      
        <div className='form_header_right'>
            <IconButton>
                <ColorLensIcon size="small" className='form_header_icon'/>
            </IconButton>
            <IconButton>
                <AiOutlineEye style={{height:"20px", width:"20px"}} size="small" className='form_header_icon'/>
            </IconButton><IconButton>
                <FiSettings style={{height:"20px", width:"20px"}}  size="small" className='form_header_icon'/>
            </IconButton><IconButton>
                <MoreVertIcon  size="small" className='form_header_icon'/>
            </IconButton><IconButton>
                <Avatar style={{height:"30px", width:"30px"}} src={'https://img.freepik.com/free-vector/happy-buddha-purnima-religious-background-lord-birthday-celebration_1017-44017.jpg?size=626&ext=jpg&ga=GA1.1.1790804099.1699766749&semt=sph'}/>
            </IconButton>
        </div>
    </div>
    {/* <QuestionForm/> */}
    </div>
  )
}

export default FormHeader
