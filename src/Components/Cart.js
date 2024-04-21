import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Table } from 'reactstrap';
import './cart.css'

const Cart = () => {
    const { cart, remove, updateQty } = useContext(AppContext)
    return (
        <div>
            <Table
            >
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            control
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => (
                            (
                                <tr>
                                    <th scope="row">
                                        1
                                    </th>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        <button onClick={() => updateQty(item.id, -1)}>-</button>
                                        {item.qty}
                                        <button onClick={() => updateQty(item.id, 1)}>+</button>
                                    </td>
                                    <td>
                                        <span onClick={() => remove(item.id)}>X</span>
                                    </td>
                                </tr>
                            )
                        ))
                    }
                </tbody>
            </Table>
            <h3>tổng:{ cart.reduce((tong,item)=>item.qty*item.price+tong,0)} USD</h3>
        </div>
    );
}

export default Cart;

