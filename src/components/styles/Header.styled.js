import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.header}; // yung theme props para sa style ng Theme Provider
    padding: 40px 0;
`