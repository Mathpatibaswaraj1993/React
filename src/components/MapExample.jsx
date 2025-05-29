import React from 'react'

function MapExample() {

    const orders = [
        { orderId: "ORD001", orderName: "Wireless Mouse", price: 25.99, quantity: 2 },
        { orderId: "ORD002", orderName: "Bluetooth Speaker", price: 49.99, quantity: 1 },
        { orderId: "ORD003", orderName: "Gaming Keyboard", price: 89.5, quantity: 1 },
        { orderId: "ORD004", orderName: "Laptop Stand", price: 29.95, quantity: 3 },
        { orderId: "ORD005", orderName: "HD Webcam", price: 45.0, quantity: 2 },
        { orderId: "ORD006", orderName: "USB-C Hub", price: 34.99, quantity: 1 },
        { orderId: "ORD007", orderName: "Noise Cancelling Headphones", price: 120.0, quantity: 1 },
        { orderId: "ORD008", orderName: "Portable SSD", price: 99.99, quantity: 1 },
        { orderId: "ORD009", orderName: "Smartphone Tripod", price: 19.99, quantity: 2 },
        { orderId: "ORD010", orderName: "External Monitor", price: 199.0, quantity: 1 }
    ];


    return (
        <div className=''>
            <div className='text-center text-primary'>MapExample
                <h2 style={{ backgroundColor: 'green' }} className='text-primary'>Show orders Info using Map</h2>
                <table style={{ backgroundColor: 'pink' }} class="table table-striped w-50 p-4 m-auto  table-hover rounded border overflow-hidden">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Order Id</th>
                            <th scope="col">Order Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((e) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{e.orderId}</td>
                                            <td>{e.orderName}</td>
                                            <td>{e.price}</td>
                                            <td>{e.quantity}</td>
                                        </tr>
                                    </>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default MapExample