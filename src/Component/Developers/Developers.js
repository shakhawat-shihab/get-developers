import React from 'react';
import './Developers.css';

const Developers = (props) => {
    const { name, picture, age, company, role, salary } = props.data;
    return (
        <div className='col'>
            <div className='card h-100 p-2 mb-2 shadow rounded bg-card'>
                <div className='text-center'>
                    <img src={picture} alt="" width='100%' height='370px' className='rounded' />
                </div>
                <div className='py-3 px-2 card-body' >
                    <h4 className='fw-bold text-primary '>{name}</h4>
                    <h5>Age:  <span className='fw-bold text-info'> {age}</span></h5>
                    <h6 className=' text-info'> <i className="fas fa-briefcase"></i> Working at:  {company}  </h6>
                    <h6>Role: {role}</h6>
                    <h5>Current Salary : {salary}</h5>
                </div>
                <div className=''>
                    <button className='btn btn-dark mb-2' onClick={() => { props.eventHandler(props.data) }}>Add to Selected<i className="fas fa-check-circle ps-2 text-success fs-5"></i></button>
                </div>
            </div>
        </div >
    );
};

export default Developers;