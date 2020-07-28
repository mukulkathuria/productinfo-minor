import styled from "styled-components";

export const Items = styled.div`
  display: grid;
  padding: 2rem;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`;
export const Itemtile = styled.div`
    text-align:center;
    cursor:pointer;
`;
export const ItemImage = styled.div`
    img{
        width:100%;
        height:17rem;
    }
`;
export const ItemHead = styled.div``;
export const ItemDetails = styled.div`
    display:flex;
    justify-content:space-between;
    font-size:0.9em;
    
    .price{
        color:red;
    }
`;
