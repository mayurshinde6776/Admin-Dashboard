import React from 'react'
import SideBar from '../components/SideBar'
import Box from '@mui/material/Box';

export default function Setting() {


  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <h1>Settings</h1>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        </Box>
      </Box>

    </>
  )
}
