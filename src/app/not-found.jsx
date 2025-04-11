import React from 'react'

function NotFound() {
    return (
        <div className='min-h-[57vh] flex flex-col justify-center items-center text-[#810446]'>
            <h1 className='text-center font-bold text-2xl py-8 '>
                🕵️‍♂️ 404 - Page Not Found !!

            </h1>
            <p className='max-w-[50vw] text-center'>
                We searched high and low, behind the fridge and under the bed... but couldn’t find this page.

                Maybe it moved, maybe it never existed - or maybe it just ghosted us 👻.
            </p>
        </div>
    )
}

export default NotFound