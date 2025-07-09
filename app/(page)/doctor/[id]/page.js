"use client"

import Link from "next/link";
import { doctorData } from "../../../Components/ulti/doctorData"
import { useRouter, useParams } from 'next/navigation';


export default function DetailPage() {
    const router = useRouter()
    const params = useParams();
    const id = params?.id;

    console.log(params);


    const doctor = doctorData.find((d) => d.id.toString() === id);

    if (!doctor) return <div className="p-8">Doctor not found.</div>;

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6 flex flex-col items-center justify-center">
                {/* <button className="text-left ml-4 mb-3 w-full max-w-5xl" onClick={() => router.back()}>
                    <span className=" border-b w-full
                     ">
                        Go back
                    </span>
                </button> */}
                <div className="w-full max-w-5xl bg-white/70 backdrop-blur-md border border-slate-300 rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-8">
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-300 shadow-md"
                        />

                        <div className="flex-1 space-y-2">
                            <h1 className="text-3xl font-bold text-slate-800">{doctor.name}</h1>
                            <p className="text-lg text-slate-600">
                                {doctor.position} – <span className="font-medium">{doctor.specialize}</span>
                            </p>
                            <p className="text-slate-500">{doctor.location}</p>

                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Experience</h3>
                                    <p className="text-slate-700">{doctor.experience} years</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Languages</h3>
                                    <p className="text-slate-700">{doctor.languages.join(', ')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-xl font-semibold text-slate-700 mb-2">About</h2>
                        <p className="text-slate-600 leading-relaxed">{doctor.description}</p>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-slate-700 mb-4">Patient Reviews</h2>
                        <div className="space-y-4">
                            {doctor.reviews.map((review, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm"
                                >
                                    <p className="text-slate-800 font-medium">{review.name}</p>
                                    <p className="text-sm text-slate-500">{review.date}</p>
                                    <p className="mt-1 text-slate-600">{review.feedback}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex gap-8 w-full items-center'>

                        <Link href={`${doctor.skype}`}  className="w-full border-slate-800 rounded-2xl text-center mt-10 mb-16 flex justify-center gap-2 mx-auto bg-slate-800 text-white py-4 px-10 text-base cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                            </svg>
                            Video Call</Link>

                        <Link href={`mailto: ${doctor.messageLink}`} className="rounded-2xl text-center mt-10 mb-16 mx-auto bg-transparent border-slate-800 text-slate-800 py-4 px-10 text-base w-full border flex justify-center gap-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            Chat</Link>
                    </div>
                </div>
            </div>
        </>
    )
}