import React from 'react';
import './Selected.css'

const Selected = (props) => {
    const selectedDevArray = props.data;
    const totalSalary = selectedDevArray.reduce((prv, crnt) => {
        return prv = prv + crnt.salary;
    }, 0);
    //console.log(totalSalary);
    return (
        <div>
            <h3 className='text-center fw-bold pt-4 ' >Selected Developers</h3>
            <div className='w-85 mx-auto my-4 '>
                <table className='w-100' >
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td className='fs-5 fw-bold'>Developer Added:  </td>
                            <td className='fs-5 text-right'>{selectedDevArray.length}</td>
                        </tr>
                        <tr>
                            <td className='fs-6 fw-bold'>Total Estimated Cost:  </td>
                            <td className='fs-5 text-right'>{totalSalary} ৳</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
            <hr className='m-0' />
            {
                selectedDevArray.map(dvlpr => {
                    const { name, picture, role, salary, _id } = dvlpr;
                    return (
                        <div className='row g-0 py-2 border-bottom px-md-3 px-2' key={_id}>
                            <div className='col-md-3'>
                                <img src={picture} alt="developer" className='rounded' width='100%' />
                            </div>
                            <div className='col-md-6 ps-2'>
                                <h5>{name}</h5>
                                <h6><small>{role}</small></h6>
                                <h6><small>{salary} ৳</small></h6>
                            </div>
                            <div className='col-md-3 ps-2 d-flex align-items-center'>
                                <button className='btn btn-dark' onClick={() => { props.eventHandler(dvlpr) }}>
                                    <i className="fas fa-times-circle text-danger fs-5"></i>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='text-center pt-4'>
                <button className='btn btn-dark w-50 '>
                    Hire Now
                    <i className="fas fa-cart-arrow-down ps-2 text-warning fs-6"></i>
                </button>
            </div>


        </div>
    );
};

export default Selected;