import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;
    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }
    a.remover {
        color: #FF0000;
        margin-top:20px;
    }
    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
    a{
        &:hover{
            text-decoration: underline;
        }
    }
`