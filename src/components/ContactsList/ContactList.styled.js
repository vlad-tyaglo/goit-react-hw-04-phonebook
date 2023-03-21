import styled from "styled-components";

export const ListContacts = styled.li `
    height: 32px;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`

export const ContactInfo = styled.span `
    display: inline-block;
    width: 300px;
    height: 100%;
    margin: 0;
`
export const List = styled.ul `
list-style: none;
padding: 0;
`