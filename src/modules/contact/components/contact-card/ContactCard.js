import React from 'react'
import { Link } from 'react-router-dom'
import { ContactService } from '../../services/ContactService';

const ContactCard = (props) => {
  let { contact, getContacts } = props;

  const deleteContact = async () => {
    try {
      const response = await ContactService.deleteContact(contact.id)
      if (response.status === 200) {
        getContacts()
      }
    } catch (error) {

    }
    ContactService.deleteContact(contact.id).then((response) => {
      console.log(response.data, 'data')
    }).catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <>
      <div className="card shadow-lg mt-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <img src={contact.imageUrl} alt='' className='img-fluid' />
            </div>
            <div className="col-sm-8">
              <ul className='list-group'>
                <li className='list-group-item'>
                  Name : <span className='fw-bold'>{contact.name}</span>
                </li>
                <li className='list-group-item'>
                  Email : <span className='fw-bold'>{contact.email}</span>
                </li>
                <li className='list-group-item'>
                  Mobile : <span className='fw-bold'>{contact.mobile}</span>
                </li>
              </ul>
            </div>
            <div className="col-sm-1 d-flex flex-column align-items-center justify-content-around">
              <Link to={`/contacts/view/${contact.id}`} className='btn btn-warning'>
                <i className='bi bi-eye'></i>
              </Link>

              <Link to={`/contacts/edit/${contact.id}`} className='btn btn-primary mt-1'>
                <i className='bi bi-pencil'></i>
              </Link>


              <button className='btn btn-danger mt-1' onClick={deleteContact}>
                <i className='bi bi-trash'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactCard
