'use client';
import useSWR  from 'swr';

const fetcher = (url: RequestInfo | URL) => fetch(url).then((res) => res.json());

export default function RegisterSummary() {
    const { data: overview, error, isLoading } = useSWR(
        'http://localhost:3000/api/overview',
        fetcher
    );
    if (error) return 'An error has occurred.';
    if (isLoading) return 'Loading overview...';
    return (<>
        <div className="card w-full shadow-lg text-black p-4 mt-7 card-bordered">
            <h2 className="text-3xl font-bold text-accent mx-auto card-title">Tổng quan về số lượng xe đăng kiểm</h2>
            <div className="container flex flex-row w-full gap-5 card-body">
                <div className="w-1/3 card card-bordered flex flex-col py-5 border-4">
                    <div className="text-2xl font-bold text-center">Tháng trước</div>
                    <div className="divider my-2"></div>
                    <div className="text-center text-5xl font-extrabold text-green-700">{overview.previousMonth}</div>
                </div>
                <div className="w-1/3 card card-bordered flex flex-col py-5 border-4">
                    <div className="text-2xl font-bold text-center">Quý trước</div>
                    <div className="divider my-2"></div>
                    <div className="text-center text-5xl font-extrabold text-green-700">{overview.previousQuarter}</div>
                </div>
                <div className="w-1/3 card card-bordered flex flex-col py-5 border-4">
                    <div className="text-2xl font-bold text-center">Từ đầu năm</div>
                    <div className="divider my-2"></div>
                    <div className="text-center text-5xl font-extrabold text-red-700">{overview.currentYear}</div>
                </div>
            </div>
        </div>
    </>)
}