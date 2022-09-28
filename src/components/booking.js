import React, { useState, useRef, useEffect } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import Modal from './booking-modal';


const Booking = () => {
    const [bookDate, setBookDate] = useState('');
    const [bookTime, setBookTime] = useState('');
    const [leaveDate, setLeaveDate] = useState('');
    const [leaveTime, setLeaveTime] = useState('');

    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const emptyFieldRef = useRef();

    const navigate = useNavigate();

    const modalTitle = "Successful";
    const modalDesc = "Your booking has been made.";
    const modalBtnTitle = "Proceed";

    useEffect(() => {
        document.title = "Book a time";
    }, []);

    console.log(isBookingModalOpen);

    // const handleButtonClick = () => {
    //     setIsBookingModalOpen(!isBookingModalOpen);
    //     navigate('/hotel-list');

    //     // setTimeout(() => { 
    //     //     navigate('/hotel-list')
    //     // }, 2000);
    //     // navigate('/hotel-list');
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bookDate || !bookTime || !leaveDate || !leaveTime) {
            console.log('Please fill in all the fields.');
            emptyFieldRef.current.style.display = "block";
        } else {
            // alert('Successful')
            emptyFieldRef.current.style.display = "none";
            writeUserData();
            setIsBookingModalOpen(true);
            // handleButtonClick();
            // navigate('/hotel-list');
        }

        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'data/'), {
            book_date: bookDate,
            book_time: bookTime,
            leave_date: leaveDate,
            leave_time: leaveTime,
            });
        } 

    }

  return (
    <>
        <div className='bg-slate-700 min-h-screen flex justify-center items-center'>
            <div className='h-fit bg-white rounded-lg p-8 max-w-[27rem]'>
                <h2 className='text-3xl mb-7'>Book now</h2>
                <div ref={emptyFieldRef} className='text-red-400 px-5 py-2 mb-6 rounded-sm border-red-500 border hidden'>
                    <p className='text-red-600'>Please fill all in the fields</p>
                </div>
                <div className='border-2 rounded-lg px-8 py-4'>
                    <form onSubmit={handleSubmit}>
                        <h4 className='text-base mb-4'>Date & Time you would like to stay</h4>
                        <input value={bookDate} onChange={(e) => setBookDate(e.target.value)} className='border rounded-md w-full p-3 mb-4' type="date"/> <br/>
                        <input value={bookTime} onChange={(e) => setBookTime(e.target.value)} className='border rounded-md w-full p-3' type="time"/> <br/>
                        <h4 className='text-base my-4'>Date & Time you would like to leave</h4>
                        <input value={leaveDate} onChange={(e) => setLeaveDate(e.target.value)} className='border rounded-md w-full p-3 mb-4' type="date"/> <br/>
                        <input value={leaveTime} onChange={(e) => setLeaveTime(e.target.value)} className='border rounded-md w-full p-3' type="time"/> <br/>
                        <button type='submit' className='bg-slate-600 hover:bg-slate-500 px-3 py-2 w-24 text-white rounded-md mt-5'>Book</button>
                    </form>
                </div>
            </div>
            {isBookingModalOpen === true && <Modal isOpen={isBookingModalOpen} setIsOpen={setIsBookingModalOpen} modalTitle={modalTitle} modalDesc={modalDesc} modalBtnTitle={modalBtnTitle}/>
}
        </div>
    </>
  )
}

export default Booking;