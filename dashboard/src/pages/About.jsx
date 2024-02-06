import React from 'react'
import SideBar from '../components/SideBar'
import Box from '@mui/material/Box';

export default function About() {


  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <h1>About</h1>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        </Box>
      </Box>

    </>
  )
}
