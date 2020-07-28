import React from "react";
import Axios from "axios";
import ProductComp from "../Components/Products/product.components";
import { MainDiv, Dropdown } from "./productPage.style";
import Spinner from "../Components/Spinner/spinner";


class ProductPage extends React.Component {
  state = {
    products: "",
    categories: null,
  };
  async componentDidMount() {
    const { data } = await Axios.get(
      "https://aveosoft-react-assignment.herokuapp.com/categories"
    );
    this.setState({ categories: data });
  }
  render() {
    const { categories, products } = this.state;
    if (!categories) return <Spinner />
    const filteredData = categories.filter((list) => list.name === products);

    return (
      <MainDiv>
        <Dropdown>
          Product Category
          <select
            value={products}
            onChange={(e) => this.setState({ products: e.target.value })}
          >
            <option value="">Select an option</option>
            {categories.map((list) => (
              <option value={list.name} key={list.id}>
                {list.name}
              </option>
            ))}
          </select>
        </Dropdown>
        <ProductComp items={filteredData[0]} />
      </MainDiv>
    );
  }
}
export default ProductPage;
