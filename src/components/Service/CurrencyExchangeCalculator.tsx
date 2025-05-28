import { useState } from 'react';
import HeroHeader from '../common/HeroHeader'
import { FaExchangeAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import CustomButton from '../common/CustomButton';


const CurrencyExchangeCalculator = () => {

    const [value, setValue] = useState(1500);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value));
    };

    return (
        <div className="container w-full flex flex-col items-center py-5 md:py-10 lg:py-14">
            <HeroHeader title='EXCHANGE POLICY' heading='Exchange Your CryptoMoney Easily with Creptex' />
            <div className="w-fit md:w-full mt-5 md:mt-10 
            bg-gradient-to-b from-[#33353F] to-[#01051C] p-8 md:p-16 rounded-xl">
                <div className='w-full flex flex-col md:flex-row 
            justify-between items-center gap-5 md:gap:10 lg:gap-24'>

                    <div className='md:w-[80%] h-full flex flex-col gap-2 md:gap-4'>
                        <h1 className='text-white text-xl md:text-5xl font-secondary font-bold'>Give</h1>
                        <div className='w-full h-[50px] md:h-[80px] rounded-lg md:rounded-2xl bg-[#01051C] flex items-center p-3 md:px-6'>
                            <input
                                value={value}
                                onChange={handleOnChange}
                                className='w-full h-full font-semibold 
                                text-white md:text-3xl focus:outline-none bg-transparent'
                            />
                        </div>
                        <p className='text-xs md:text-md text-white/60'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus quis
                        </p>
                        <div className='space-y-4 text-white font-secondary my-3'>
                            <h1 className='font-semibold text-sm'>Type of Currency</h1>
                            <div className='w-full h-[50px] md:h-[60px] bg-white rounded-lg
                            bg-gradient-to-r from-[#DCF1F4] to-[#666666] p-[1px] cursor-pointer'>
                                <div className='w-full h-full bg-[#101527] rounded-lg 
                                flex justify-between items-center px-4'>
                                    <h1 className='font-medium text-sm md:text-base'>Crypto</h1>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            <div className='w-full h-[50px] md:h-[60px] bg-white rounded-lg
                            bg-gradient-to-r from-[#DCF1F4] to-[#666666] p-[1px] cursor-pointer'>
                                <div className='w-full h-full bg-[#101527] rounded-lg 
                                flex justify-between items-center px-4'>
                                    <h1 className='font-medium text-sm md:text-base'>Bitcoin</h1>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <FaExchangeAlt className='text-xl md:text-4xl text-white' />
                    </div>
                    <div className='md:w-[80%] h-full flex flex-col gap-2 md:gap-4'>
                        <h1 className='text-white text-xl md:text-5xl font-secondary font-bold'>Get</h1>
                        <div className='w-full h-[50px] md:h-[80px] rounded-lg md:rounded-2xl bg-[#01051C] flex items-center p-3 md:px-6'>
                            <input
                                value={value * 2}
                                className='w-full h-full font-semibold 
                                text-white md:text-3xl focus:outline-none bg-transparent'
                            />
                        </div>
                        <p className='text-xs md:text-md text-white/60'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis tellus quis
                        </p>
                        <div className='space-y-4 text-white font-secondary my-3'>
                            <h1 className='font-semibold text-sm'>Type of Mode</h1>
                            <div className='w-full h-[50px] md:h-[60px] bg-white rounded-lg
                            bg-gradient-to-r from-[#DCF1F4] to-[#666666] p-[1px] cursor-pointer'>
                                <div className='w-full h-full bg-[#101527] rounded-lg 
                                flex justify-between items-center px-4'>
                                    <h1 className='font-medium text-sm md:text-base'>Cash</h1>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                            <div className='w-full h-[50px] md:h-[60px] bg-white rounded-lg
                            bg-gradient-to-r from-[#DCF1F4] to-[#666666] p-[1px] cursor-pointer'>
                                <div className='w-full h-full bg-[#101527] rounded-lg 
                                flex justify-between items-center px-4'>
                                    <h1 className='font-medium text-sm md:text-base'>USD</h1>
                                    <IoIosArrowDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-3 md:mt-8'>
                    <CustomButton variant='filled' 
                    className="w-full md:w-[400px] !py-4 lg:text-xl">
                        Convert
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default CurrencyExchangeCalculator
