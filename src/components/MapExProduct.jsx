import React from 'react'

function MapExProduct() {


    const product = [
        { "pid": 1, "pname": "Wireless Mouse", "price": 25.99, "quantity": 50 },
        { "pid": 2, "pname": "Gaming Keyboard", "price": 59.99, "quantity": 30 },
        { "pid": 3, "pname": "HD Monitor", "price": 149.99, "quantity": 20 },
        { "pid": 4, "pname": "USB-C Hub", "price": 29.99, "quantity": 100 },
        { "pid": 5, "pname": "Webcam 1080p", "price": 39.99, "quantity": 40 },
        { "pid": 6, "pname": "Laptop Stand", "price": 34.99, "quantity": 25 },
        { "pid": 7, "pname": "Portable SSD", "price": 89.99, "quantity": 15 },
        { "pid": 8, "pname": "Bluetooth Speaker", "price": 45.99, "quantity": 60 },
        { "pid": 9, "pname": "Noise Cancelling Headphones", "price": 129.99, "quantity": 10 },
        { "pid": 10, "pname": "Smart LED Light", "price": 19.99, "quantity": 75 }
    ]

    return (
        <div className='text-center text-primary'>MapExample
            <h2 style={{ backgroundColor: 'green' }} className='text-danger'>Show Product Info using Map</h2>
            <table style={{ backgroundColor: 'pink' }} class="table table-striped w-50 p-4 m-auto  table-hover rounded border overflow-hidden shadow p-3 mb-5  rounded">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Product Id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        product.map((e) => {
                            return (
                                <>
                                    <tr>
                                        <td>{e.pid}</td>
                                        <td>{e.pname}</td>
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

    )
}

export default MapExProduct