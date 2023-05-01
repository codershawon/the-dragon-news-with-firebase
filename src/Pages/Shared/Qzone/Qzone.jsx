import React from 'react';
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"
const Qzone = () => {
    return (
        <div style={{background:"#f3f3f3",padding:"7px",borderRadius:"8px"}} className='mt-3'>
            <h4 className='mb-3'>Q-zone</h4>
            <img style={{width:"100%"}} src={qzone1} alt="" />
            <img style={{width:"100%"}} src={qzone2} alt="" />
            <img style={{width:"100%"}} src={qzone3} alt="" />
        </div>
    );
};

export default Qzone;