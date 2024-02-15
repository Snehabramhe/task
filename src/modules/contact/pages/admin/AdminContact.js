import React, { useEffect, useState } from 'react'
import ContactHeader from '../../components/contact-header/ContactHeader'
import { Link } from 'react-router-dom'
import ContactCard from '../../components/contact-card/ContactCard'
import { ContactService } from '../../services/ContactService'
import Spinner from '../../../../components/Spinner'
import ErrorMessage from '../../../ui/error/ErrorMessage'

const AdminContact = () => {

    let [adminState, setAdminState] = useState({
        loading: false,
        errorMessage: "",
        contacts: []
    })

    useEffect(() => {
        setAdminState({ ...adminState, loading: true })
        getContacts()
    }, [])

    const getContacts = async () => {
        ContactService.getALLContacts()?.then((response) => {
            setAdminState({
                ...adminState,
                loading: false,
                contacts: response.data
            })
        }).catch((error) => {
            setAdminState({
                ...adminState,
                loading: false,
                errorMessage: error.message
            })
        });
    }

    let { loading, errorMessage, contacts } = adminState;

    return (
        <>

            {
                loading && contacts.length === 0 && <Spinner />
            }

            <ContactHeader heading={'Contacts Admin'} color={'text-success'} />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <form>
                            <div className='row'>
                                <div className="col">
                                    <Link to={'/contacts/add'} className='btn btn-success'>
                                        <i className='fa fa-plus-circle'></i> Create New
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {
                !loading && errorMessage.length > 0 && <ErrorMessage message={errorMessage} />
            }

            {
                !loading && contacts.length > 0 &&
                <div className="container mt-3">
                    {
                        contacts.map((contact, index) => {
                            return (
                                <div className="row" key={index}>
                                    <div className="col-sm-6">
                                        <ContactCard contact={contact} getContacts={getContacts} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }




        </>
    )
}

export default AdminContact
