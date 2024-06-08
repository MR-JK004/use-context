import React, { useContext } from 'react';
import ProductCard from './component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { ProductProvider, ProductContext } from './context/ProductContext';

const App = () => {
  const { products, subtotal, total } = useContext(ProductContext);

  return (
    <Container className="App">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      <div className="product-summary">
        <Row>
          <Col md={6}></Col>
          <Col md={3} className="text-right">
            <p>SUBTOTAL :</p>
            <p>SHIPPING :</p>
          </Col>
          <Col md={3} className="text-right">
            <p>${subtotal.toFixed(2)}</p>
            <p>FREE</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}></Col>
          <Col md={3} className="text-right total">
            <h5>TOTAL :</h5>
          </Col>
          <Col md={3} className="text-right">
            <h5>${total.toFixed(2)}</h5>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-right">
            <p className="daily-cash">Get Daily Cash With Nespola Card</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

const AppWrapper = () => (
  <ProductProvider>
    <App />
  </ProductProvider>
);

export default AppWrapper;