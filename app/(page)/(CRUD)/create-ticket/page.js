import MainLayout from "../../../Components/Layouts/mainLayout";

export default function CreateTicket() {
    return (
        <>
            <MainLayout>
                <div className="px-6 pt-5 pb-7 rounded-2xl max-w-[600px] mx-auto border border-slate-300 bg-slate-100">

                    <div>
                        <h2 className="p-0 mt-0 text-xl font-medium mb-5 text-left">Create Ticket</h2>
                    </div>


                    <div>
                        <form className="flex flex-col gap-4">
                            <input placeholder="Enter concern" className="rounded-[10px] w-full px-5 py-3 border border-slate-300" />

                            <textarea placeholder="Explain your concern" className="rounded-[10px] w-full px-5 py-3 border border-slate-300" rows={4} />


                            <button className="rounded-2xl text-center  block bg-slate-800 text-white py-4 px-10 text-base border-0"
                            >Submit</button>
                        </form>
                    </div>

                </div>

            </MainLayout>

        </>
    )
}