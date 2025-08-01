const IconLibrary = ({ name }) => {
    switch (name) {
        case 'logo': return (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0H16V12.0632C15.9663 14.2434 14.1885 16 12.0005 16H0V24H8.68629C10.808 24 12.8429 23.1571 14.3431 21.6569L21.6569 14.3431C23.1571 12.8429 24 10.808 24 8.68629V0Z" fill="url(#paint0_linear_7697_8782)"></path>
                <path d="M16 40H24V27.9368C24.0337 25.7566 25.8115 24 27.9995 24H40V16H31.3137C29.192 16 27.1571 16.8429 25.6569 18.3431L18.3431 25.6569C16.8429 27.1571 16 29.192 16 31.3137V40Z" fill="url(#paint1_linear_7697_8782)"></path>
                <defs>
                    <linearGradient id="paint0_linear_7697_8782" x1="20" y1="-0.997096" x2="20" y2="33.7931" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#75D8FC"></stop>
                        <stop offset="1" stopColor="#0072E5"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_7697_8782" x1="20" y1="-0.997096" x2="20" y2="33.7931" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#75D8FC"></stop>
                        <stop offset="1" stopColor="#0072E5"></stop>
                    </linearGradient>
                </defs>
            </svg>
        )


        default:
            <></>;
    }
}


export default IconLibrary