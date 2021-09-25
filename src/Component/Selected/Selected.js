import React from 'react';

const Selected = (props) => {
    const { name, picture, role, salary } = props.data;
    return (
        <div className='row g-0 py-2 border-bottom'>
            <div className='col-md-3'>
                <img src={picture} alt="" className='rounded' width='100%' height='100px' />
            </div>
            <div className='col-md-6 ps-2'>
                <h5>{name}</h5>
                <h6><small>{role}</small></h6>
                <h6><small>{salary} /-</small></h6>
            </div>
            <div className='col-md-3 ps-2 d-flex align-items-center'>
                <button className='btn btn-dark '><i className="fas fa-times-circle text-danger fs-2"></i></button>
            </div>
        </div>
    );
};

export default Selected;