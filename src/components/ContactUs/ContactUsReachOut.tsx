import { useState } from 'react';
import HeroHeader from '@/components/common/HeroHeader'
import CustomButton from '@/components/common/CustomButton'
import CustomInputField from '@/components/common/CustomInputField'

const ContactUsReachOut = () => {

    const [loading, setLoading] = useState(false);

    const handleToggle =()=>{
        setLoading(!loading)
    }
    
    return (
        <div className="container w-full py-10 md:py-20 md:pt-10">
            <HeroHeader title='MESSAGE' heading='Send Messeges To Us' />
            <div className='mt-10 max-w-xl mx-auto'>
                <div className='space-y-2'>
                    <CustomInputField
                        label='Name'
                        placeholder='Enter your name...'
                        className='h-[45px]'
                    />
                    <CustomInputField
                        label='Email'
                        placeholder='Enter your email...'
                        className='h-[45px]'
                    />
                    <CustomInputField
                        label='Password'
                        type='password'
                        placeholder='Enter your password...'
                        className='h-[45px]'
                    />
                </div>
                <CustomButton
                    loading={loading}
                    variant='filled'
                    onClick={handleToggle}
                    className='mt-6 w-full md:text-lg font-normal font-secondary h-[45px] md:h-[60px]'
                >
                    SEND
                </CustomButton>
            </div>
        </div>
    )
}

export default ContactUsReachOut
