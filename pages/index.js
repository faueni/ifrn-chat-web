import React, { useState } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import {AppButton} from '../src/components/AppButtonComponent';


const AppNavBar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <ButtonLoginLogout isUserLogged={props.isUserLogged} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

const ButtonLoginLogout = (props) => {
  if (!props.isUserLogged()) {
    return <AppButton color="inherit" label="Login"></AppButton>
  }
  return <AppButton color="inherit" label="Logout"></AppButton>
}



export default function Home() {  
  //const isUserLogged = () => false ? false ;

  const [sessionID, setSessionID] = useState('');
  const isUserLogged = () => sessionID ? true : false

  return (
    <div>
      aa{sessionID}aa
      <AppNavBar isUserLogged={isUserLogged}/>
      <Head>
        <title>Chat de Infoweb</title>
        <meta name="description" content="Chat do curso de Infoweb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <nav>
          <p>Chat de Infoweb</p>
          <Link href="/login"><button>Login</button></Link>
        </nav>
        <h1>Landing page do chat de Infoweb</h1>
      </main>
    </div>
  )
}
