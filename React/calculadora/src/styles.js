import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:100vh;
    background-color: #2c3e50;

    display: flex;
    align-items:center;
    justify-content:center;
`;


export const Content = styled.div`
    background-color:#FFF;
    width:20%;
`

export const Row = styled.div`
    align-items:center;
    display: flex;
    flex-direction:row;
    justify-content:space-beetween;
`
export const Column = styled.div`
    align-items:center
    display: flex;
    flex-direction:column;
    justify-content:space-beetween;
`