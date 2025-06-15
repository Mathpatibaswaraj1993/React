import React from 'react'

function Product() {
  const products = [
    {
      productId: 1,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 899,
      inStock: true
    },
    {
      productId: 2,
      name: "Bluetooth Speaker",
      category: "Electronics",
      price: 1499,
      inStock: true
    },
    {
      productId: 3,
      name: "Water Bottle",
      category: "Home & Kitchen",
      price: 299,
      inStock: false
    },
    {
      productId: 4,
      name: "Notebook",
      category: "Stationery",
      price: 99,
      inStock: true
    },
    {
      productId: 5,
      name: "Smart Watch",
      category: "Electronics",
      price: 2499,
      inStock: false
    },
    {
      productId: 6,
      name: "Backpack",
      category: "Accessories",
      price: 799,
      inStock: true
    }
  ];
  
  return (
<>
    <div className='container'>
                <div className='text-center text-danger'>MapFilterExample
                    <h2 className='text-primary mt-5'>Show Product Info using Map</h2>
                    <table class="table table-striped w-70 p-4 m-auto">
                        <thead>
                            <tr>
                                <th scope="col">Product Id  </th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">InStock</th>

                            </tr>
                        </thead>
                        <tbody>
    
                            {
                                products.map((e) => {
                                    return (
                                            <tr>
                                                <td>{e.productId}</td>
                                                <td>{e.name}</td>
                                                <td>{e.category}</td>
                                                <td>{e.price}</td>
                                                <td>{e.inStock}</td>

                                            </tr>
                                    )
                                })
    
                            }
                        </tbody>
                    </table>
        </div>
        </div>
    </>
  )
}

export default Product