import React from 'react'
import { Link } from 'react-router-dom';
import { Row,Col,Image,ListGroup,Card,Button, ListGroupItem } from 'react-bootstrap';
import products from '../products';
import Rating from '../Components/Rating/Rating';
const ProductScreen = ({match}) => {
	const product=products.find(p => p.id == match.params.id);

  return (
    <>
    <Link className="btn btn-light my-3" to="/">Go Back</Link>
    
  <Row>
	<Col md={6}>
	   <Image src={product.image} alt={product.name} fluid/>
         </Col>
        <Col md={3}><ListGroup variant="flush">
	    <ListGroup.Item>
			   <h3> {product.name} </h3>
			
	     </ListGroup.Item>
	     <ListGroup.Item>
	             <Rating value={product.rating}numReviews={product.numReviews}/>
	     </ListGroup.Item>
	     <ListGroup.Item>
		   price:$ {product.price}
	     </ListGroup.Item>
	     <ListGroup.Item>
		   Description: {product.description}
	     </ListGroup.Item>
	     </ListGroup>
		
       </Col>
	   
       <Col md={3}>
	       <card>
		       <ListGroup varient="flush">
		         <ListGroup.Item >
			 <Row >
			   <Col >
			       Price:
			   </Col>
			   
			   <Col>
			     <strong> $ {product.price} </strong>

			   </Col>	 
			 </Row>      
		         </ListGroup.Item>
                                          
                                    <ListGroup.Item >
			 <Row >
			   <Col >
			       Status:
			   </Col>
			   
			   <Col>
			     <strong> $ {product.countInStock} </strong>

			   </Col>	 
			 </Row>      
		         </ListGroup.Item>
                        
                        <ListGroupItem className="text-center">
				<Button className="btn-block" type="button" disabled={product.countInStock==0}>Add to Cart</Button>
			</ListGroupItem>

		       </ListGroup>  

		 

	       </card>
       </Col>


    </Row>
    </>
  );
};

export default ProductScreen
