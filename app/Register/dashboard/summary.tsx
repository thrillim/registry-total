'use client';

export default function RegisterSummary() {
    return (<>
        <div className="card w-full shadow-lg text-black p-4 mt-7 card-bordered">
            <h2 className="text-3xl font-bold text-accent mx-auto card-title">Tổng quan</h2>
            <div className="container flex flex-row w-full gap-5 card-body">
                <div className="w-1/3 card card-bordered flex flex-col py-5 border-4">
                    <div className="text-2xl font-bold text-center">Tháng trước</div>
                    <div className="divider my-2"></div>
                    <div className="text-center text-5xl font-extrabold text-green-700">+20%</div>
                </div>
                <div className="w-1/3 card card-bordered flex flex-col py-5 border-4">
                    <div className="text-2xl font-bold text-center">Quý trước</div>
                    <div className="divider my-2"></div>
                    <div className="text-center text-5xl font-extrabold text-green-700">+12%</div>
                </div>
                <div className="w-1/3 card card-bordered flex flex-col py-5 border-4">
                    <div className="text-2xl font-bold text-center">Năm trước</div>
                    <div className="divider my-2"></div>
                    <div className="text-center text-5xl font-extrabold text-red-700">-3.4%</div>
                </div>
            </div>
        </div>
    </>)
}