import React from "react"
import { ThemeProvider } from "styled-components"
import { Header } from "../components/Header"
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
                <Header />
                <Container>
                    <h1>Hey from styled components</h1>
                </Container>
            </>
        </ThemeProvider>

    )
}