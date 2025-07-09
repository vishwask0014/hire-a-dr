import Link from "next/link";
import IconLibrary from "../ulti/IconLibrary";

export default function Header() {
    return (<>
        <div className="topBar px-4 lg:px-6 py-4">
            <div className='logoContainer'>
                <IconLibrary name='logo' />
                <span>
                    HealtCare
                </span>
            </div>

            {/* menu */}
            <div className="menus">
                <Link href={"#"} target="_blank">Medicos</Link>

                <Link href={"#"} target="_blank">Doctor</Link>

                <Link href={"#"} target="_blank">Contact Us</Link>
            </div>

        </div>
    </>)
}