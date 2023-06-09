'use client';

export default function RegisterSummary(){
    return (<>
        <div className="card w-full shadow-lg text-black p-4">
            <h2 className="text-3xl font-bold text-accent mx-auto card-title">Tổng quan</h2>
            <div className="container flex flex-row w-full gap-5 m-2 card-body">
            <div className="w-1/3 card card-bordered flex flex-col px-3 py-5 border-4">
                <div className="text-2xl font-bold text-center">Tháng trước</div>
                <div className="divider my-2"></div>
                <div className="text-center text-6xl font-extrabold text-green-700">+20%</div>
            </div>
            <div className="w-1/3">
                <div className="text-center text-xl font-semibold">Quý trước</div>
            </div>
            <div className="w-1/3">
                <div className="text-center text-xl font-semibold">Năm trước</div>
            </div>
                        </div>
        </div>
    </>)
}