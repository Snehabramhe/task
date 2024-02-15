import React, { useEffect, useState } from 'react'
import ContactHeader from '../../components/contact-header/ContactHeader'
import { Link, json, useParams } from 'react-router-dom'
import { ContactService } from '../../services/ContactService';
import Spinner from '../../../../components/Spinner';
import { GroupService } from '../../services/GroupService';
import axios from "axios"

const ViewContact = (props) => {

  let { contactId } = useParams();

  let [state, setState] = useState({
    loading: false,
    errorMessage: "",
    contact: {},
    group: {}
  })

  useEffect(() => {
    const getServerData = async () => {
      try {
        setState({ ...state, loading: true });
        if (contactId) {
          let contactResponse = await ContactService.getContact(contactId);
          console.log(contactResponse, 'contactResponse');
          let groupResponse = await GroupService.getGroup(contactResponse.data.groupId);
          setState({
            ...state,
            loading: false,
            contact: contactResponse.data,
            group: groupResponse.data
          })
        }
      } catch (error) {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message
        })
      }
    }
    getServerData()

  }, [contactId])

  const getContactObject = async (contactId) => {
    return ContactService.getContact(contactId);
  }

  let { loading, errorMessage, contact, group } = state;



  return (
    <>


      {
        loading && Object.keys(contact).length === 0 && Object.keys(group).length === 0 && <Spinner />
      }

      <ContactHeader heading={'View Contact'} color={'text-warning'} />

      {
        !loading && Object.keys(contact).length > 0 && Object.keys(group).length > 0 &&
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-sm-3">
              <img src={contact.imageUrl} alt='' className='img-fluid rounded-circle shadow-lg' />
            </div>
            <div className="col-sm-6">
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
                <li className='list-group-item'>
                  Company : <span className='fw-bold'>{contact.company}</span>
                </li>
                <li className='list-group-item'>
                  Title : <span className='fw-bold'>{contact.title}</span>
                </li>
                <li className='list-group-item'>
                  Group Name : <span className='fw-bold'>{group.name}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className="col">
              <Link to={'/contacts/admin'} className='btn btn-warning'>
                <i className='bi bi-arrow-left-circle-fill m-1'></i>Back</Link>
            </div>
          </div>
        </div>
      }


    </>

  )
}

export default ViewContact
