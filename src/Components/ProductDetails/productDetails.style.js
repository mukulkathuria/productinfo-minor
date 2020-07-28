import styled from "styled-components";

export const MainDiv = styled.div`
    position:relative;
`;
export const Item = styled.div`
    width:70%;
    margin:10% 15%;
    display:flex;
    justify-content:space-between;
`;
export const ItemDet = styled.div`
    max-width:48%;
`;
export const ItemImage = styled.div`
    button{
        position:absolute;
        top:-45px;
        padding:0;
        background-color:inherit;
        font-size:2rem;
        border:none;
        cursor:pointer;
        &:hover{
            color:red;
        }
    }
    img{
        width:25rem;
        height:100%;
    }
`;
export const ItemDetails = styled.div`
font-size:0.9em;
div{
    margin:1.5rem 0;
}
.price{
    color:red;
}
`;
export const ItemDesc = styled.div`
div{
    margin:1rem 0;
    font-weight:600;
}
p{
    font-size:0.8em;
    text-align:justify-content;
    line-height:1.7;
}
`;