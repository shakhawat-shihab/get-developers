import React, { useEffect, useState } from 'react';
import Developers from '../Developers/Developers';
import Selected from '../Selected/Selected';
import './Hiring.css'
const Hiring = () => {
    const [developers, setDevelopers] = useState([]);
    const [selectedDevelopers, setSelectedDevelopers] = useState([]);
    useEffect(() => {
        fetch('./developers.json')
            .then(resp => resp.json())
            .then(json => setDevelopers(json));
    }, []);
    function addToList(dvlpr) {
        // is exist define if the dvlpr is already exist in  selectedDevelopers
        const isExist = selectedDevelopers.indexOf(dvlpr);
        console.log(isExist);
        if (isExist === -1) {
            setSelectedDevelopers([...selectedDevelopers, dvlpr]);
        }
    }
    function deleteFromList(dvlpr) {
        let newArr = [];
        newArr = selectedDevelopers.filter(x => {
            if (x._id !== dvlpr._id) {
                //this user is not clicked for delete so add them in array
                return true;
            }
            else {
                //this user is clicked for delete so don't them in array
                return false;
            }
        });
        setSelectedDevelopers(newArr);
    }
    return (
        <div>
            <h1 className='text-center text-primary pt-4 pb-4 m-0 bg-light fw-bold'>Select Developers and Hire... </h1>
            <div className='row g-0 border-top'>
                <div className='col-lg-9 col-md-8  col-sm-8 col-7 border-end m-0'>
                    <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 px-md-3 px-2 py-2 g-3'>
                        {
                            developers.map(x => <Developers data={x} key={x._id} eventHandler={addToList}  ></Developers>)
                        }
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-4 col-5'>
                    <div className=''>
                        {/* {
                            selectedDevelopers.map(x => <Selected data={x} key={x._id}   ></Selected>)
                        } */}
                        <Selected data={selectedDevelopers} eventHandler={deleteFromList}  ></Selected>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hiring;