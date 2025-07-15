import Link from "next/link";
import Header from "../../Components/Header/Header";
import MainLayout from "../../Components/Layouts/mainLayout";

export default function RaisedTicket(params) {
    return (
        <>

            <MainLayout>

                <div className="bg-background rounded-3xl flex flex-row-reverse items-center justify-center gap-20 lg:gap-40 w-full mx-auto px-10">
                    <div className="mt-14">
                        <h1 className="text-3xl font-bold">Raise concern here</h1>
                        <p className="subText text-lg text-slate-600">Having issues related to medical, operational or emergency raised your concern here</p>

                        <Link href="/create-ticket" target="_blank" className="w-fit rounded-2xl text-center mt-6  block bg-slate-800 text-white py-4 px-10 text-base border-0"
                        >Raised Here</Link>
                    </div>

                    <div>
                        <img className="max-w-[460px] h-auto" src="/static/img/drs-team.png" alt="Doctors Team" />
                    </div>
                </div>


                {/* ticket Board is here */}
                <div className="flex flex-col gap-4 mt-10">

                    <div className="rounded-2xl border border-slate-300 bg-slate-50 text-slate-700 px-10 py-6">
                        <h4 className="text-3xl font-semibold mb-3">Ticket Subject is here</h4>
                        <div className="flex items-start justify-between gap-3 w-full mt-5">
                            <p className="text-base w-full">Description or explnation of the ticket will be here</p>

                            <div className="flex items-center gap-4">
                                <Link href="/edit-ticket" className="bg-green-100 rounded-md text-green-700 px-6 py-3">
                                    Edit
                                </Link>

                                <button className="bg-red-100 text-red-700 font-medium text-base rounded-md px-4 py-2">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </MainLayout>

        </>
    )
}