import React, { useEffect, useState } from 'react'
import ContactHeader from '../../components/contact-header/ContactHeader'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { GroupService } from '../../services/GroupService';
import Spinner from '../../../../components/Spinner';
import { ContactService } from '../../services/ContactService';

const AddContact = ({edit}) => {

  const navigate = useNavigate();
  const param = useParams();

  const [loading, setLoading] = useState(false)

  let [contact, setContact] = useState({
      name: "",
      imageUrl: "",
      mobile: "",
      email: "",
      company: "",
      title: "",
      groupId: ""
  });

  let [groups, setGroups] = useState({
    name: "",
    imageUrl: "",
    mobile: "",
    email: "",
    company: "",
    title: "",
    groupId: ""
});

  useEffect(() => {
    setLoading(true)
    if (edit) {
      const getContact = async () => {
        const response = await ContactService.getContact(param.contactId)
        setContact(response.data)
      }
      getContact()
    }

    const getALLGroups = async () => {
      try {
        let response = await GroupService.getALLGroups();
        setGroups(response.data)
      }
      catch (error) {
        console.log(error.message)
      }
    }
    getALLGroups();
    setLoading(false)
  },[])


  let checkForEmptyField = () => {
   for (let key of Object.keys(contact)){
      if (contact[key] === ""){
        return true;
      }
   }
   return false;
  }

  const updateUserInput = (event) => {
    setContact({
      ...contact,
        [event.target.name]: event.target.value
    })
  }

  const submitCreateContact = (event) => {
    event.preventDefault();
    if (edit) {
      console.log(param.contactId, 'dasdsa');
      ContactService.updateContact(contact, param.contactId).then((response) => {
        navigate('/contacts/admin');
      }).catch((error)=> {
          console.log(error);
      });
    } else{
      ContactService.createContact(contact).then((response) => {
        navigate('/contacts/admin');
      }).catch((error)=> {
          console.log(error);
          navigate('/contacts/add');
      });
    }
  }

  return (
    <>
  
      {
        loading && groups.length === 0 && <Spinner />
      }

      {
        !loading && groups.length > 0 && <>
          <ContactHeader heading={edit ? 'Edit Contact' :  'Add Contact'} color={'text-success'} />
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <form onSubmit={e => submitCreateContact(e)}>
                  <div className="m-2">
                    <input
                      value={contact.name}
                      name={'name'}
                      onChange={e => updateUserInput(e)}
                      type='text' className='form-control' placeholder='Name' />
                  </div>

                  <div className="m-2">
                    <input
                      value={contact.imageUrl}
                      name={'imageUrl'}
                      onChange={e => updateUserInput(e)}
                      type='text' className='form-control' placeholder='Photo Url' />
                  </div>

                  <div className="m-2">
                    <input
                      value={contact.mobile}
                      name={'mobile'}
                      onChange={e => updateUserInput(e)}
                      type='number' className='form-control' placeholder='Mobile' />
                  </div>

                  <div className="m-2">
                    <input
                      value={contact.email}
                      name={'email'}
                      onChange={e => updateUserInput(e)}
                      type='email' className='form-control' placeholder='Email' />
                  </div>

                  <div className="m-2">
                    <input
                      value={contact.company}
                      name={'company'}
                      onChange={e => updateUserInput(e)}
                      type='text' className='form-control' placeholder='Company' />
                  </div>

                  <div className="m-2">
                    <input
                      value={contact.title}
                      name={'title'}
                      onChange={e => updateUserInput(e)}
                      type='text' className='form-control' placeholder='Title' />
                  </div>

                  <div className="m-2">
                    <select
                      value={contact.groupId}
                      name={'groupId'}
                      onChange={e => updateUserInput(e)}
                      className='form-control'>  
                      <option value="">Select Group</option>    
                      {
                        groups.map((group, index) => {
                          return (
                            <option key={index} value={group.id}>{group.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <div className="m-2">
                    <input
                    disabled={checkForEmptyField()}
                     type='submit' className='btn btn-success' value={edit ? "Update" : "Create"} />
                    <Link to={'/contacts/admin'} className='btn btn-dark ms-2'>Cancel</Link>
                  </div>

                </form>
              </div>
              <div className="col-sm-3"> 
               <img src={contact.imageUrl} alt='' className='img-fluid rounded-circle shadow-lg'/>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default AddContact
