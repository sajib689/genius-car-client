import time from '../../../assets/icons/timetable.png'
import call from '../../../assets/icons/Group 34.png'
import location from '../../../assets/icons/Group 35.png'

const Details = () => {
    return (
        <div className="mt-20 flex items-center justify-evenly container mx-auto bg-[#151515] rounded-lg h-[250px]">
            <div className='text-white flex items-center '>
                <div>
                <img src={time} alt="" />
                </div>
                <div className='ps-3'>
                <h6 className='text-[16px] '>We are open monday-friday</h6>
                <h1 className='text-[25px]'>7:00 am- 9:00 pm</h1>
                </div>
            </div>
            <div className='text-white flex items-center'>
                <div>
                <img src={call} alt="" />
                </div>
                <div className='ps-3'>
                <h6 className='text-[16px] '>Have a question?</h6>
                <h1 className='text-[25px]'>+2546 251 2658</h1>
                </div>
            </div>
            <div className='text-white flex items-center'>
                <div>
                <img src={location} alt="" />
                </div>
                <div className='ps-3'>
                <h6 className='text-[16px] '>Need a repair? our address</h6>
                <h1 className='text-[25px]'>Liza Street, New York</h1>
                </div>
            </div>
        </div>
    );
};

export default Details;