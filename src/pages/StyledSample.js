import React from "react"
import { ThemeProvider } from "styled-components"
import { Header } from "../components/Header"
import Navbar from "../components/Navbar"
import { Container } from "../components/styles/Container.styled"
import { GlobalStyles } from "../components/styles/Global"

const theme = {
    colors: {
        header: "#ebfbff",
        body: "#fff",
        footer: "#003333"
    }
}

export const StyledSample = () => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <Navbar />
                <Header />
                <Container>
                    <p>This page implements theme provider for the overall color scheme</p>
                    <p>Please check "src/components/styles" inside the project folder to see the code for the components that uses styled components</p>
                </Container>
            </>
        </ThemeProvider>

    )
}