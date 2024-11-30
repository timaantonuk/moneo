import { Box, Container} from "@mui/material";
import React from "react";
import {IContainerProps} from "../types/containerTypes";
import BottomNavigationElement from "./BottomNavigation.tsx";



const ContainerElement: React.FC<IContainerProps> = ({ children, ...boxProps }) => {



    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: 3,
                backgroundColor: "red",
                minHeight: "100vh",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                component="section"
                sx={{
                    padding: 5,
                    backgroundColor: "var(--background-color)",
                    height: "90vh",
                    width: "100%",
                    borderRadius: 15,
                    ...boxProps.sx,
                }}
                {...boxProps}
            >
                {children}

                <BottomNavigationElement/>
            </Box>



        </Container>
    );
};

export default ContainerElement;
