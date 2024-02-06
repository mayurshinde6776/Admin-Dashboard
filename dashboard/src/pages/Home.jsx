import React from 'react'
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar'
import Box from '@mui/material/Box';

export default function Home() {


  return (
    <>
    <NavBar/>
      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <h1>Home</h1>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        </Box>
      </Box>

    </>
  )
}
