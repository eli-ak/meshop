import React from 'react'
import {Card} from 'react-bootstrap';
import PropTypes from 'prop-types'
import Rating from '../Rating/Rating';
import {Link} from 'react-router-dom';

const Product = ({info}) => {
  return (
    <Card className="my-3 p-3">
      <Link to={`product/${info._id}`}>
      <Card.Img src={info.image} variant="top"/>
      </Link>
      <Card.Body>
      <Card.Title as="h5">{info.name}</Card.Title>
        <Card.Text as="div" className="my-2">{`${info.rating} from ${info.numReviews}`}</Card.Text>
	<Rating value={info.rating} numReviews={info.numReviews}/>
      <Card.Text as="h4">$ {info.price}</Card.Text>
       
      </Card.Body>
    </Card>
  )
}
Product.propTypes = {
  info:PropTypes.object.isRequired, 
}
export default Product;

