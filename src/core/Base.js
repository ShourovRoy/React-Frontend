import React from 'react'

const Base = ({
    title='My Title',
    description= 'my description',
    className = 'bg-dark text-white p-4',
    children
}) => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='jubbotorn bg-dark text-white text-center'>
                    <h2 className='display-4'>{title}</h2>
                    <p className='lead'>{description}</p>     
                </div>
                <div className={className}>
                    {children}
                </div>
                <footer className='footer bg-dark at-auto py-3'>
                    <div className='container-fluid bg-success text-white text-center py-3'>
                        <h4>If you got any question reach me out facebook</h4>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Base
