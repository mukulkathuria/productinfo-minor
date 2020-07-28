import React from "react";
import Axios from "axios";
import {
  MainDiv,
  Item,
  ItemImage,
  ItemDesc,
  ItemDetails,
  ItemDet,
} from "./productDetails.style";
import productimg from "../../image/product.png";
import Spinner from "../Spinner/spinner";

const ProductDesp = ({ match,history }) => {
  const [product, changedata] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios.get(
        "https://aveosoft-react-assignment.herokuapp.com/products/" +
          match.params.id
      );
      changedata(data);
    };
    fetchData();
  }, [match.params]);
  if (!product) return <Spinner />
  return (
    <MainDiv>
      <Item>
        <ItemImage>
          <button onClick={() => history.goBack() }>&#8592; </button>
          <img src={productimg} alt="" />
        </ItemImage>
        <ItemDet>
          <ItemDetails>
            <div>Product:{" "+product.name}</div>
            <div>Model No: {product.model}</div>
            <div className="price">₹{" " +product.price}</div>
          </ItemDetails>
          <ItemDesc>
            <div>Description</div>
            <p>{product.description}</p>
          </ItemDesc>
        </ItemDet>
      </Item>
    </MainDiv>
  );
};

export default ProductDesp;
