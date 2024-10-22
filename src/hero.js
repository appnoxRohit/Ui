import React from 'react'
import './Hero.css'

import { RadioButton } from 'primereact/radiobutton';


const Hero = () => {
    const img1 = "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D";
    const img2 = "https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsfGVufDB8fDB8fHww";
    const img3 = "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww";
    const img4 = "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fHww";
    const logoHrs = "data:image/png;base64,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";
    return (
        <div>
            <div className='border-[1px] border-grey border-t-0 p-4 ' style={{ display: "flex" }}>
                <div className='conatiner ' style={{ display: "flex", flexDirection: "column", gap: "5px", width: "279px", height: "100px" }}>
                    <img className='large-image h-30 w-45' src={img1}
                        alt="Description of Image1" />


                    <div className='small-images flex flex-row gap-x-4 justify-evenly '>
                        <img className='small-image h-12 w-20 ' src={img2}
                            alt="Description of Image 1" />

                        <img className='small-image h-12 w-20' src={img3}
                            alt="Description of Image 1" />

                        <img className='small-image h-12 w-20' src={img4}
                            alt="Description of Image 1" />
                    </div>


                </div>
                <div className='hotel-info px-5 border-red-50'>
                    <h3 className='text-slate-400'>Hotel Name : </h3>
                    <h2 className='font-medium'>Sandal Suites Operated by Lemon Tree Hotels</h2>
                    <h3 className='text-slate-400'>Hotel Address:</h3>
                    <h2 className='text-slate-500'>Assotech Business Cresterra, Sector 135, Noida Expressway , Noida ,Noida</h2>
                    <h5 className='text-slate-400'>Distances from landmakrs</h5>
                    <span class="material-symbols-outlined align-bottom text-slate-400">search</span> 0.0 Km
                    <span class="material-symbols-outlined align-bottom text-slate-400">apartment</span> 26.0 Km
                    <span class="material-symbols-outlined align-bottom text-slate-400">flight_takeoff</span> 45.0 Km
                    <span class="material-symbols-outlined align-bottom text-slate-400">train</span> 17.0 Km

                </div>
                <div className='rating pl-7' style={{ width: "300px", height: "100px" }} >

                    <img className='h-[80px] w-15' src={logoHrs} alt="logo image" />
                    <p className='pl-[75px]'>Ratings</p>
                    <p className='pl-[75px] '>
                        <span class="material-symbols-outlined">verified</span>
                        <span className='pl-2 align-top'>9.7</span>
                    </p>
                    <p>Stars</p>
                    <span></span>
                </div>
                <span className=' border-[1px] border-grey'></span>
                <div className='feature pl-4'>
                    <h2 className='text-slate-400'>Hotel features</h2>
                    <ul className='pl-5'>
                        <li>1 bottle of mineral water</li>
                        <li>Restaurant</li>
                        <li>No smoking room</li>
                        <li>Internet access room</li>
                        <li>WLAN in room</li>
                        <li>1 mini bar refill</li>
                        <li>Parking</li>
                    </ul>
                    <a className='text-sky-600 ' href=''>+3more..</a>


                </div>

            </div>
            <div className='p-4'>
                <button className='text-center text-sky-400 pl-3'>Room No.1</button>
                <button className='pl-3 pt-2'>Room No.2</button>

            </div>
            <div className='border-[1px] border-grey-300 w-full '>

            </div>


            <div className='flex '>
                <div className='radio-btn px-1'>
                    <span >Room classes:</span><br />


                    <label >
                        <input className='align-middle'
                            type="radio"
                            value="option1"

                        />
                        Standard Room
                    </label>

                    <label className='pl-9'>
                        <input className='align-middle'
                            type="radio"
                            value="option2"

                        />
                        Deluxe Room
                    </label>

                    <label className='pl-9'>
                        <input className='align-middle'
                            type="radio"
                            value="option3"
                        />
                        Suite Room
                    </label>

                </div>
                <div className='  w-[590px] h-[47px]'> </div>
                
                <div className='flex felx-row w-[360] h-[47] gap-4'>
                <div className='fixed-price  flex-row      w-[87px] h-[47]'>Fare Price:
                    <br />$121.45
                </div>
                <div className='flex flex-row gap-4 pt-2  w-[253px] h-[32px] '>
                    <button className='w-[253px] h-[32px] border-[1px] border-grey text-xs rounded-md'>Add More Details</button>
                    <button className='w-[94px] h-[32px] text-xs ' style={{ backgroundColor: '#ADD8E6', borderRadius: '5px' }}>Add Room</button>
                </div>
                </div>

                
            </div>
            <div className='w-[1276px] h-[93px] border-2 border-black '>
                <span>A Standard Room consist of a room with shower/toilet or bathtub/toilet</span> 
                <span> </span> </div>
        </div>



    )
}

export default Hero;