import { Stack, TextField, InputAdornment } from '@mui/material'
import React from 'react'

const MuiTextField = () => {
  return (
    <Stack spacing={4}>
        <Stack direction={'row'} spacing={2}>
            <TextField label='Search Here...........' variant='outlined'/>
            <TextField label='Search Here...........' variant='filled'/>
            <TextField label='Search Here...........' variant='standard'/>
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <TextField label='Search Here...........' size='small' color='success' variant='outlined'/>
            <TextField label='Search Here...........' size='small' color='error' variant='filled'/>
            <TextField label='Search Here...........' size='small' color='info' variant='standard'/>
        </Stack>
        <Stack direction={'row'} spacing={2}>
            <TextField label='Form Input' required/>
            <TextField label='Form Input' helperText="Dont share your password" error/>
            <TextField label='Form Input' required disabled/>
            <TextField label='Form Input' required InputProps={{readOnly: true}}/>
        </Stack>
        <Stack direction={'row'} spacing={3}>
            <TextField label='Amount' InputProps={{
                startAdornment:<InputAdornment position='start'>$</InputAdornment>
            }}
            />
            <TextField label='Weight' InputProps={{
                endAdornment:<InputAdornment position='end'>kg</InputAdornment>
            }}/>
        </Stack>

    </Stack>
  )
}

export default MuiTextField
