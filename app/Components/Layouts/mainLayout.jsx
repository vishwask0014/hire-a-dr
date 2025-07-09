import css from "styled-jsx/css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MainLayout({ children }) {
    return (<>

        <div className='mainLayout'>
            <Header />
            <div className="layoutContainer">
                {children}
            </div>
        </div>
        {/* <Footer /> */}
    </>)
}