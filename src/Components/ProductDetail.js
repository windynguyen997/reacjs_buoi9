import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import { AppContext } from '../AppContext';


const ProductDetail = () => {
    const url = 'https://66124e8c95fdb62f24ee62fe.mockapi.io/product'
    const [data, setData] = useState(null)
    const getData = () => {
        axios.get(url).then(res => {
            setData(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        getData()
    }, [])
    const { addCart } = useContext(AppContext)
    return (
        <div>
            <h1>danh sach san pham</h1>
            <Container>
                <Row>
                    {
                        data && data.map((item, index) => (
                            <Col sm={3}>
                                <Link to={`/product/${item.id}`} key={index}>
                                    <Card>
                                        <CardBody>
                                            <CardTitle>
                                                {item.name}
                                            </CardTitle>
                                            <CardText>

                                            </CardText>
                                            <Button onClick={() => addCart(item.id)}>
                                                buy
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
}

export default ProductDetail;
