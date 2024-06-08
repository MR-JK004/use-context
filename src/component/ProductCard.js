import React, { useState } from 'react';
import { Row, Col, Button,  Carousel } from 'react-bootstrap';

const ProductCard = ({ product, onQuantityChange ,onRemove}) => {
  const [quantity, setQuantity] = useState(1);

  const handleDelete = () => {
      onRemove(product.id);
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(product.id, newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(product.id, newQuantity);
    }
  };

  return (
    <div className="product-card">
      <Row>
        <Col md={3}>
          <Carousel fade>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 product-image"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <div className="product-details">
            <h5>{product.title}</h5>
            <div className="product-subdetails">
              <p><strong>Details & Core</strong></p>
              <p>{product.description}</p>
              <p><strong>Sustainability</strong></p>
            </div>
          </div>
        </Col>
        <Col md={3} className="text-right">
          <div className="product-price">
            <div className="quantity-control">
              <Button variant="outline-secondary" onClick={handleDecrease} disabled={quantity <= 1}>-</Button>
              <span className="quantity-display">{quantity}</span>
              <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
            </div>
            <h4>${product.price.toFixed(2)}</h4>
            <p onClick={()=>handleDelete(product.id)} className="remove-button">REMOVE</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductCard;
