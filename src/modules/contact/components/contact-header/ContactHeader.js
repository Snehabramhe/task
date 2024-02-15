import React from 'react'

const ContactHeader = (props) => {
  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <p className={`h3 ${props.color}`}>{props.heading}</p>
                <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, iste! Nemo, repellendus laborum, illo aperiam est molestiae vero iusto consequatur corrupti assumenda provident reprehenderit doloremque eligendi asperiores officiis molestias laudantium.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactHeader
