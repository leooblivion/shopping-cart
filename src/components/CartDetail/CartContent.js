import React, { Fragment, useContext } from 'react';
import { Table, Form, Button, FormGroup } from 'reactstrap';
import { CartContext } from '../../contexts/Cart';
import './CartDetail.css';

const CartDetail = props => {
    const { cart, price, total, removeItem } = props;
    const { valueUp, valueDown } = useContext(CartContext)
    return (
        <Fragment>
            <Table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Size</th>
                        <th>Quantiny</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) =>
                            <tr key={index}>
                                <td>
                                    <div className="cart-info">
                                        <img src={item.imageUrl} alt="dsa" />
                                        <div className="cart-text">
                                            <p>T-shirt</p>
                                            <small>Price: ${item.price}</small>
                                            <button onClick={() => removeItem(index)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <FormGroup className="Cart-form">
                                        <div>{item.size}</div>
                                    </FormGroup>
                                </td>

                                <td>
                                    <FormGroup className="form-quantity form-quantity-center">
                                        <span onClick={(e) => valueDown(index, e)}>&#8211;</span>
                                        <div className="quantity">{item.count}</div>
                                        <span onClick={(e) => valueUp(index, e)}>&#43;</span>
                                    </FormGroup>
                                </td>
                                <td>${item.price * item.count}</td>
                            </tr>)
                    }
                </tbody>
            </Table>
            <div className="total-price">
                <table>
                    <tbody>
                        <tr>
                            <td>Sub</td>
                            <td>${price}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$15</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>${total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Form className="cart-check">
                <Button className="check-out">
                    Proceed to checkout &#8594;
                </Button>
            </Form>
        </Fragment >
    );
};


export default CartDetail;