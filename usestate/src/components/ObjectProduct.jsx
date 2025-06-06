import React, { useState } from 'react'

function ObjectProduct() {
    const [product, setProduct] = useState({
        pid: "",
        pname: "",
        price: "",
        quantity:""
    })
        const [status, setStatus] = useState(false)
    
    function inputHandler(e)
    {
        setProduct({...product,[e.target.name]:e.target.value})
    }
    
    function clickHandler() {
        setStatus(true)
    }

  return (
      <>
      <div class="container mt-5">
  <h3 class="mb-4">Product Form</h3>
  
  <form>
    <table class="table table-bordered align-middle">
      <thead class="table-light">
        <tr>
          <th>PID</th>
          <th>PNAME</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" class="form-control"  placeholder="Enter PID" name="pid"  onChange={inputHandler} required/>
          </td>
          <td>
            <input type="text" class="form-control"  placeholder="Enter PNAME" name="pname"  onChange={inputHandler} required/>
          </td>
          <td>
            <input type="text" class="form-control"  placeholder="Enter PRICE" name="price" onChange={inputHandler}  required/>
          </td>
          <td>
          <input type="text" class="form-control"  placeholder="Enter QUANTITY" name="quantity" onChange={inputHandler}  required/>
          </td>
                          </tr>
                          <tr>
                              <td colSpan="4" class="text-center"><input  className='btn btn-info' type='button' value="Submit" onClick={clickHandler} />&nbsp;&nbsp;</td>
                          </tr>
      </tbody>
    </table>
            </form>
            {
                status ?<>
            <p>PID:-{product.pid}</p>
            <p>PNAME:-{product.pname}</p>
            <p>PRICE:-{product.price}</p>
            <p>QUANTITY:-{product.quantity}</p></>:"" 
           
        }
    </div>
           
      
      </>

)
}

export default ObjectProduct