import React from "react";
import {Avatar, Box, Typography} from "@mui/material";
import ContainerElement from "../layout/ContainerElement.tsx";


const Home: React.FC = () => {
    return (

         <ContainerElement display={'flex'} flexDirection={'column'} justifyContent='space-between' alignItems='center'>

             <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3}}>
                 <Typography variant='h3'
                             sx={{
                                 color: (theme) => theme.palette.text.primary,
                                 fontWeight: 500,
                                 fontSize: {
                                     md: '3rem',
                                     xs: '1.7rem'
                                 }
                 }}>
                     David Linch
                 </Typography>
                 <Avatar alt='Profile photo'
                         src='https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg'
                         sx={{
                             width: {md: 70, xs: 60},
                             height: {md: 70, xs: 60},

                 }}/>
             </Box>


         </ContainerElement>
    );
};

export default Home;
