import React, {useState} from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StorageIcon from '@mui/icons-material/Storage';
import FolderIcon from '@mui/icons-material/Folder';
import { IconButton } from '@mui/material';
import './MainBody.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function MainBody () {
  const history=useNavigate();
  function navigate_to(docname){
    var fname=document.split(".");
    history.push("/form/"+fname[0])
  }
  const [files, setFiles]= useState([]);
  async function filenames(){
    var request=await axios.get("http://localhost:9000/get_all_filenames")
    let filenames=request.data;
    setFiles(filenames);
  }
  filenames()
  return (
    <div className='mainbody'>
      <div className='mainbody_top'>
        
        
              <div className='mainbody_top_left' style={{fontSize:'16px', fontWeight: '500px'}}>
                Recent Forms
              </div>
              <div className='mainbody_top_right'>
                        <div className='mainbody_top_center' style={{fontSize:"14px", marginRight:"125px"}}>
                          Owned by Anyone<ArrowDropDownIcon/>

                        </div>
                        <div>
                        <IconButton>
                          <StorageIcon style={{fontSize:'16px', color:'black'}}/>
                        </IconButton>
                        <IconButton>
                          <FolderIcon style={{fontSize:'16px', color:'black'}}/>
                        </IconButton>
                        </div>
            </div>
      </div>
      
      
  <div className='mainbody_docs'>
    {
      files.map((ele)=>(
        <div className='doc_card' onClick={()=>{
          navigate_to(ele);
        }}>
           <img src="doc_image" className='doc_image'/>
                    <div className='doc_card_content'>
                      <h5 style={{overflow:'ellipsis'}}>{ele ? ele:'Untitled Doc'}</h5>
                              <div className='doc_content' style={{fontSize:'12px', color:'grey'}}>
                                          <div className='content_left'>
                                            <StorageIcon style={{color:'white', fontSize:'12px', backgroundColor:'#6E2594', padding:'3px', marginRight:'10px'}}/>
                                          </div>
                                <MoreVertIcon style={{fontSize:'12px', color:'grey'}}/>
                              </div>
                    </div>
      </div>

      ))
    }
 </div>
 </div>
)
}

export default MainBody
