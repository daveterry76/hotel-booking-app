import React, { useEffect, useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import Modal from './request-modal';

const HotelList = () => {
    const Hotels = [
        {
            name: "Hotel 1",
            price: "100",
            image: "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },

        {
            name: "Hotel 2",
            price: "200",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Hotel 3",
            price: "300",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            name: "Hotel 4",
            price: "400",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
    ];

    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

    const modalDesc = "Your request has been sent";
    const modalBtnTitle = "OK";

    const handleButtonClick = () => {
        setIsRequestModalOpen(!isRequestModalOpen);
    }

    useEffect(() => {
        document.title = "List of hotels"
    }, []);

    const requestHotel = (index) => {
        console.log(Hotels[index].name, Hotels[index].price, Hotels[index].image);
        writeUserData();
        // setIsRequestModalOpen(true);
        handleButtonClick();
        function writeUserData() {
            const db = getDatabase();
            set(ref(db, 'booking'), {
                hotelName : Hotels[index].name,
                hotelPrice : `$${Hotels[index].price}`,
                hotelImage : Hotels[index].image,
            });            
        }
        // alert('Your request has been sent.');
    }

  return (
    <>
        <div className='bg-slate-700 min-h-screen flex justify-center items-center overflow-y-hidden py-12'>
            <div className='h-fit bg-white rounded-lg p-8 max-w-[25rem]'>
                <h2 className='text-3xl mb-4'>Find the best hotel</h2>
                {Hotels.map((hotel, index) => {
                    return (
                        <>  
                            <div key={index} className='rounded-md shadow-xl mb-4 p-5 cursor-pointer'>
                                <img src={hotel.image} alt={`hotel ${index} img`}/>
                                <h1 className='my-3 text-xl'>{hotel.name}</h1>
                                <h4 className='text-lg italic'>${hotel.price}</h4>
                                <button onClick={() => requestHotel(index)} className='bg-green-500 text-white rounded-md px-4 py-2 my-4'>Request</button>
                            </div>
                        </>
                    )
                })}
            </div>
            {isRequestModalOpen === true && <Modal isOpen={isRequestModalOpen} setIsOpen={setIsRequestModalOpen} modalDesc={modalDesc} modalBtnTitle={modalBtnTitle}/>
}
        </div>
    </>
  )
}

export default HotelList;