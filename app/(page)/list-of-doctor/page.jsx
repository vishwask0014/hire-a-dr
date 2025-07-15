"use client"

import { useState } from "react";
import MainLayout from "../../Components/Layouts/mainLayout";
import { doctorData } from '../../Components/ulti/doctorData';
import Link from "next/link";
import { responseCookiesToRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export default function ListOfDoctor() {
    const [loadMore, setLoadMore] = useState(8);
    const [inputValue, setInputValue] = useState('');
    const [modal, setModal] = useState(false)

    // Load more doctors
    const handleLoad = (value) => {
        setLoadMore(prev => prev + value);
    };

    // Handle search input change
    const handleInputValue = (event) => {
        setInputValue(event.target.value);
    };

    // Filter function: searches in multiple fields
    const filteredDoctors = doctorData.filter((doc) => {
        const search = inputValue.toLowerCase();
        return (
            doc.name.toLowerCase().includes(search) ||
            doc.position.toLowerCase().includes(search) ||
            doc.specialize.toLowerCase().includes(search) ||
            doc.location.toLowerCase().includes(search)
            // doc.languages.toeLowerCase().includes(search)
        );
    });

    // Slice the visible results based on "load more"
    const visibleDoctors = filteredDoctors.slice(0, loadMore);



    const handleAIModal = () => {
        setModal(!modal)
    }

    return (
        <MainLayout>

            <div className="bg-background rounded-3xl flex items-center justify-center gap-20 lg:gap-40 w-full mx-auto px-10">
                <div className="mt-14">
                    <h1 className="text-3xl font-bold">Consult with Top Doctors</h1>
                    <p className="subText text-lg text-slate-600">Connect with world-class medical professionals now.</p>
                </div>

                <div>
                    <img className="max-w-[460px] h-auto" src="/static/img/drs-team.png" alt="Doctors Team" />
                </div>
            </div>

            {/* Search Bar */}
            <div className='relative w-[93%] mx-auto mt-10'>
                <input
                    className="border rounded-2xl w-full bg-slate-50 border-slate-200 placeholder:text-slate-800 py-6 px-6 text-xl focus:outline-0 focus:border-slate-400"
                    placeholder="Search by name, specialty, location..."
                    type="text"
                    value={inputValue}
                    onChange={handleInputValue}
                />
            </div>

            {/* Doctor Cards */}
            <div className='flex flex-wrap gap-6 mt-10 lg:mt-20 justify-center transition-all ease-in-out duration-700'>

                <div className="bg-purpleGradient shadow border-slate-200 overflow-hidden rounded-3xl p-4 lg:p-6 hover:bg-blue-50 max-w-[420px] w-full"
                >
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-4xl font-medium text-white">
                                AI Bot
                            </h2>

                            <p className="mt-3 font-normal text-base text-white" >Got confuse with consulting doctor. Let AI-assitant know what you looking for or just ask the querry.</p>
                        </div>

                        <button onClick={() => handleAIModal()} className="text-2xl font-thin italic  border-white rounded-2xl border outline duration-500 transition-all hover:font-medium hover:bg-white hover:text-purple-500  text-white w-full py-2">Talk to AI</button>
                    </div>
                </div>

                {visibleDoctors.length > 0 ? visibleDoctors.map((i, index) => (
                    <Link
                        href={`/doctor/${i.id}`}
                        key={i.id}
                        target="_self"
                        className="bg-white shadow border-slate-200 overflow-hidden rounded-3xl p-4 lg:p-6 hover:bg-blue-50 max-w-[420px] w-full"
                    >
                        <div className="flex items-center gap-5">
                            <img src={i.image} alt={i.name.slice(0, 4)} className="rounded-full border border-slate-300 w-16 h-16 object-cover" />
                            <div>
                                <h5 className="text-lg font-semibold mb-1.5">{i.name}</h5>
                                <p>{i.position}</p>
                            </div>
                        </div>

                        <div className="mt-4 space-y-2">
                            <div className="grid grid-cols-[30%_70%]">
                                <p className="capitalize text-base text-slate-800">Specialize:</p>
                                <span>{i.specialize}</span>
                            </div>
                            <div className="grid grid-cols-[30%_70%]">
                                <p className="capitalize text-base text-slate-800">Experience:</p>
                                <span>{i.experience} Years</span>
                            </div>
                            <div className="grid grid-cols-[30%_70%]">
                                <p className="capitalize text-base text-slate-800">Location:</p>
                                <span>{i.location}</span>
                            </div>
                            <div className="grid grid-cols-[30%_70%]">
                                <p className="capitalize text-base text-slate-800">Languages:</p>
                                <span>{i.languages.join(', ')}</span>
                            </div>
                        </div>
                    </Link>
                )) : (
                    <p className="text-center text-xl text-slate-600 mt-10">No doctors found for your search.</p>
                )}``
            </div>

            {/* Load More Button */}
            {filteredDoctors.length > loadMore && (
                <button
                    onClick={() => handleLoad(8)}
                    className="rounded-2xl text-center mt-10 mb-16 block mx-auto bg-slate-800 text-white py-4 px-10 text-base border-0"
                >
                    Show More
                </button>
            )}

            {/* <ModalUI /> */}
        </MainLayout>
    );
}



const ModalUI = () => {
    return (
        <>

            handleAIModal
        </>
    )
}