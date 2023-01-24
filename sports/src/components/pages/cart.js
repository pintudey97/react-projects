import React from "react";
import { Container, Table } from "reactstrap";
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";
import ImagePath from "../../imgPath";



const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal
  } = useCart();

  // if (isEmpty) return <p>Your cart is empty</p>;

    return (
        <React.Fragment>
          <div className="layout_padding">
            <div className="heading_container heading_center"><h2>Your Cart List</h2></div>
            <Container>
            {isEmpty ? 
            <p className="text-center mt-5 text-info">Your cart is empty</p> : 
            <Table className="mt-5">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Qnty</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={ImagePath[item.imgUrl]} alt={item.name} width='50' />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn-sm red-btn-sm mr-1"> - </button>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn-sm green-btn-sm mr-1"> + </button>
                    <button onClick={() => removeItem(item.id)} className="btn-sm red-btn-sm"><FontAwesomeIcon icon={faTrash} /></button>
                  </td>
                </tr>
                
              ))}
              <tr>
                <th colSpan={3}>Unique Items {totalUniqueItems}</th>
                <th colSpan={2}>Total {cartTotal}</th>
              </tr>
              </tbody>
            </Table>
            }
            </Container>
            </div>
        </React.Fragment>
    );
}
 
export default Cart;