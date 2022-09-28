import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Booking from './booking';

const Modal = ({ modalTitle, modalDesc, modalBtnTitle, isBookingModalOpen, setIsBookingModalOpen }) => {
    const navigate = useNavigate();
    const modalAppearance = useRef();

    if (isBookingModalOpen) {
        return null;
    }

    const handleNavigation = () => {
        navigate('/hotel-list');
        modalAppearance.current.style.display = "none";
        setIsBookingModalOpen(!isBookingModalOpen);
    }

    <Booking handleNavigation={handleNavigation}/>
    return ReactDOM.createPortal(
        <>
            <div ref={modalAppearance} className='block'>
                {/* Overlay */}
                <div className='fixed top-0 left-0 right-0 bottom-0 bg-[#63636354] z-[1000]'/>
            
                {/* Modal */}
                <div className='fixed top-1/2 left-1/2 p-10 z-[1000]' style={{transform: 'translate(-50%, -50%)'}}>
                    <div className='w-[28rem] h-[12rem] bg-white flex flex-col justify-center items-center'>
                        <h3 className='text-2xl leading-[2.5rem] text-center font-medium text-[#000000A6]'>{modalTitle}</h3>
                        <p className='font-normal text-base leading-5 text-center text-[#0000008A] mt-2'>{modalDesc}</p>
                        <button onClick={handleNavigation} className='bg-green-500 text-white rounded-md px-4 py-2 mt-8'>{modalBtnTitle}</button>
                    </div>
                </div>
            </div>
            
        </>, document.getElementById('portal')
      ) 
}

export default Modal;