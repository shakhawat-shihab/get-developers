import React from 'react';
import './Developers.css';

const Developers = (props) => {
    const { name, picture, age, company, role, salary, phone, email, address, fbUrl } = props.data;
    return (
        <div className='col'>
            <div className='card h-100 p-2 mb-2 rounded bg-card '>
                <div className='text-center'>
                    <img src={picture} alt="developer" width='100%' height='370px' className='rounded' />
                </div>
                <div className='py-3 px-2 card-body' >
                    <h5 className='fw-bold text-primary '>{name}</h5>
                    <h6>Age:  <span className='fw-bold text-info'> {age}</span></h6>
                    <h6 className='text-dark'> <i className="fas fa-briefcase text-warning pe-2"></i>
                        Working at:  <span className='text-info fw-custom'>{company}</span>   </h6>
                    <h6>Role: <span className='text-info fw-custom fs-5'> {role}</span> </h6>
                    <h6>Current Salary: {salary} Tk.</h6>
                    <div className='pt-3'>
                        <i title={address} className="fas fa-home px-3 fs-4 text-secondary"></i>
                        <i title={phone} className="fas fa-phone px-3 fs-4 text-success"></i>
                        <i title={email} className="fas fa-envelope px-3 fs-4 text-danger"></i>
                        <i title={fbUrl} className="fab fa-facebook-square px-3 fs-4 text-primary"></i>
                    </div>
                </div>
                <div className='ms-auto  me-2'>
                    <button className='btn btn-dark mb-2 ' onClick={() => { props.eventHandler(props.data) }}>Add to Selected<i className="fas fa-check-circle ps-2 text-success fs-5"></i></button>
                </div>
            </div>
        </div >
    );
};

export default Developers;