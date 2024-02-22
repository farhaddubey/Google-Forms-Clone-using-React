import { FormatItalic, FormatUnderlined, Send } from "@mui/icons-material";
import {Stack, Button, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatItalicIcon from '@mui/icons-material/FormatBold';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import SendIcon from '@mui/icons-material/Send';
import { format } from "path";
import { useState } from "react";
export const MuiButton = () =>{
    const[formats, setFormats] =useState<string[]>([]);
    console.log({
        formats,
    })
    const handleFormatChange = (
        _event:React.MouseEvent<HTMLElement>,
        updatedFormats:string[],
    )=>{setFormats(updatedFormats)}
    return (
        <div>
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant="text">Text</Button>
                <Button variant="contained">contained</Button>
                <Button variant="outlined">outlined</Button>
            </Stack>
            <Stack spacing={2} direction={"row"}>
                <Button variant="contained" color="primary">contained</Button>
                <Button variant="contained" color="secondary">secondary</Button>
                <Button variant="contained" color="warning">warning</Button>
                <Button variant="contained" color="error">error</Button>
                <Button variant="contained" color="success">success</Button>
                <Button variant="contained" color="primary">primary</Button>
            </Stack>
            <Stack display='block' spacing={2} direction='row'>
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
                <Button variant="text" size="small">Small</Button>
                <Button variant="text" size="medium">Medium</Button>
                <Button variant="text" size="large">Large</Button>
                <Button variant="outlined" size="small">Small</Button>
                <Button variant="outlined" size="medium">Medium</Button>
                <Button variant="outlined" size="large">Large</Button>
            </Stack>
            <Stack spacing={2} direction={'row'}>
                <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
                <Button variant="outlined" endIcon={<SendIcon/>}>Send</Button>
            </Stack>
            <IconButton aria-label="send" size="small" color="success"><SendIcon/></IconButton>
            <IconButton aria-label="send" size="small" color="error"><SendIcon/></IconButton>
            <Stack direction={'row'}>
                <ButtonGroup variant="outlined">
                <Button color="secondary" onClick={()=>alert('Left Clicked')} startIcon={<SendIcon/>}>Send</Button>
                <Button color="success" onClick={()=>alert(
                'Middle Clicked'
                )} startIcon={<SendIcon/>}>Send</Button>
                <Button color="error" onClick={()=>alert('Right Clicked')} startIcon={<SendIcon/>}>Send</Button>
                    
                </ButtonGroup>
            </Stack>
            <Stack direction={'row'}>
                <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange}>
                    <ToggleButton value={'bold'}><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value={'italic'}><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value={'underline'}><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>    
            
        </div>
    )
}