import React, { useEffect, useState } from 'react';
import Developers from '../Developers/Developers';
import Selected from '../Selected/Selected';

const Hiring = () => {
    const [developers, setDevelopers] = useState([]);
    const [selectedDevelopers, setSelectedDevelopers] = useState([]);
    useEffect(() => {
        fetch('./developers.json')
            .then(resp => resp.json())
            .then(json => setDevelopers(json));
    }, []);
    function addToList(dvlpr) {
        console.log(dvlpr);
        let flag = 1;
        developers.forEach(element => {
            if (element._id === dvlpr._id) {
                //this person is already chosen, so no more add
                //flag=0 means this person will not be added
                flag = 0;
            }
            if (flag === 1) {
                setSelectedDevelopers([...selectedDevelopers, dvlpr]);
            }
        });

    }
    return (
        <div>
            <div className='row g-0'>
                <div className='col-lg-9 col-md-8  col-sm-8 col-7 border-end m-0'>
                    <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1 px-md-3 px-2 py-2 g-3'>
                        {
                            developers.map(x => <Developers data={x} key={x._id} eventHandler={addToList}  ></Developers>)
                        }
                    </div>
                </div>
                <div className='col-lg-3 col-md-4 col-sm-4 col-5'>
                    <h3>Selected Person</h3>
                    <div className='mx-md-3 mx-2'>
                        {
                            selectedDevelopers.map(x => <Selected data={x} key={x._id}   ></Selected>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hiring;