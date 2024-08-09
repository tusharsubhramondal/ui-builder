import React from 'react'

function Toolbar() {
    return (
        <div className='row toolbar'>
            <div className="col d-flex">
                <span className='faIcon'><i className="fa fa-square-o" aria-hidden="true"></i></span>
                <span className='faIcon'><i className="fa fa-code" aria-hidden="true"></i></span>
                <span className='faIcon'><i className="fa-solid fa-brackets-curly"></i></span>
                <span className='faIcon'><i className="fa fa-arrow-circle-up" aria-hidden="true"></i></span>
            </div>
            <div className="col d-flex justify-content-center">
                <span className='faIcon'><i className="fa fa-desktop" aria-hidden="true"></i></span>
                <span className='faIcon'><i className="fa fa-tablet" aria-hidden="true"></i></span>
                <span className='faIcon'><i className="fa fa-mobile" aria-hidden="true"></i></span>
            </div>
            <div className="col d-flex justify-content-end">
                <span className='faIcon'>
                    <svg style={{ maxWidth: "24px", height: "auto" }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,16L19.36,10.27L21,9L12,2L3,9L4.63,10.27M12,18.54L4.62,12.81L3,14.07L12,21.07L21,14.07L19.37,12.8L12,18.54Z"></path>
                    </svg>
                </span>
                <span className='faIcon'>
                    <svg style={{ maxWidth: "24px", height: "auto" }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20.71,4.63L19.37,3.29C19,2.9 18.35,2.9 17.96,3.29L9,12.25L11.75,15L20.71,6.04C21.1,5.65 21.1,5 20.71,4.63M7,14A3,3 0 0,0 4,17C4,18.31 2.84,19 2,19C2.92,20.22 4.5,21 6,21A4,4 0 0,0 10,17A3,3 0 0,0 7,14Z"></path>
                    </svg>
                </span>
                <span className='faIcon'>
                    <svg style={{ maxWidth: "24px", height: "auto" }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z"></path>
                    </svg>
                </span>
                <span className='faIcon'>
                    <svg style={{ maxWidth: "24px", height: "auto" }} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"></path>
                    </svg>
                </span>
                <span className='faIcon'>
                    <svg style={{ maxWidth: "24px", height: "auto" }} viewBox="0 0 24 24"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"></path></svg>
                </span>
            </div>
        </div>
    )
}

export default Toolbar