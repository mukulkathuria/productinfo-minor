import React from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import {
  Items,
  Itemtile,
  ItemHead,
  ItemImage,
  ItemDetails,
} from "./product.component.style";
import productimg from "../../image/product.png";
import Spinner from "../Spinner/spinner";

const ProductComp = ({ items, history }) => {
  const [products, change] = React.useState(null);
  React.useEffect(() => {
    const fetchdata = async () => {
      const { data } = await Axios.get(
        "https://aveosoft-react-assignment.herokuapp.com/products"
      );
      change(data);
    };
    fetchdata();
  }, []);
  if (!products) return <Spinner />
  let data;
  if (products && items) {
    data = products.filter((list) => list.categoryId === items.id);
  } else {
    data = products;
  }
  return (
    <Items>
      {data.map((list) => (
        <Itemtile key={list.id} onClick={() => history.push("/" + list.id)}>
          <ItemImage>
            <img src={productimg} alt="product" />
          </ItemImage>
          <ItemDetails>
            <ItemHead>
              <div>Product: {list.name}</div>
            </ItemHead>
            <div>Model No: {list.model}</div>
            <div className="price">₹{" " +list.price}</div>
          </ItemDetails>
        </Itemtile>
      ))}
    </Items>
  );
};
export default withRouter(ProductComp);
