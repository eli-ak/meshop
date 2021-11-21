import React,{useState,useEffect} from 'react';
import {Row, Col} from "react-bootstrap";
import Product from '../Components/Product/product';
import axios from 'axios';

const HomeScreen = () => {
  const [productState,setProductState] = useState([]);
  useEffect(() =>{
    const fetchData =async () => {
      const products = await axios.get('http://localhost:5000/api/products');
      setProductState(products.data);
    }
    fetchData();
  },[]);
  return (
    <div className="HomeScreen_container">
     <h1>Latest Products</h1>
     <Row>
         {productState.map((product) => (
		 <Col key= {product.id} xs={12} sm={6} md={4} xl={3}>
		 <Product info={product}/>
		 </Col>
		
	 ))}
     </Row>
    </div>
  )
}

export default HomeScreen
