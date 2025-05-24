import { useState } from 'react';
import HeroHeader from '@/components/common/HeroHeader'
import CustomButton from '@/components/common/CustomButton'
import CustomInputField from '@/components/common/CustomInputField'

const AboutUsReachOut = () => {

    const [loading, setLoading] = useState(false);

    const handleToggle =()=>{
        setLoading(!loading)
    }
    
    return (
        <div className="container w-full pt-10 py-20">
            <HeroHeader title='MESSAGE' heading='Send Messeges To Us' />
            <div className='mt-10 max-w-3xl mx-auto'>
                <div className='space-y-2'>
                    <CustomInputField
                        label='Name'
                        placeholder='Enter your name...'
                    />
                    <CustomInputField
                        label='Email'
                        placeholder='Enter your email...'
                    />
                    <CustomInputField
                        label='Password'
                        type='password'
                        placeholder='Enter your password...'
                    />
                </div>
                <CustomButton
                    loading={loading}
                    variant='filled'
                    onClick={handleToggle}
                    className='mt-6 w-full md:text-lg font-normal font-secondary'
                >
                    SEND
                </CustomButton>
            </div>
        </div>
    )
}

export default AboutUsReachOut
