import { Metadata } from "next";
import NavBar from "./NavBar"

export const metadata: Metadata = {
    title: 'Registry Total',
    description: 'Welcome to Registry Total',
    icons: { icon: '/favicon.ico' }
};

export default function Home() {
    return (
        <div className="w-full h-full min-h-screen max-w-full bg-white">
            <NavBar />
            {/* for screen smaller than 768px */}
            <div className="container lg:hidden 
                mx-auto h-[80vh] mt-10 text-center 
                flex flex-col gap-5">
                <div className="text-primary uppercase">
                    <div className="font-extrabold
                        md:text-7xl md:my-5
                        sm:text-6xl sm:my-4
                        max-sm:text-5xl max-sm:my-3"
                    >Hệ thống</div>
                    <div className="font-bold
                        md:text-4xl md:my-3
                        sm:text-3xl sm:my-2
                        max-sm:text-2xl max-sm:my-1
                        ">quản lý đăng kiểm</div>
                </div>
                <div className="description w-[80%] justify-center mx-auto">
                    <div>
                        <span className="font-semibold text-accent">RegistryTotal</span> là ứng dụng web được phát triển nhằm hỗ trợ
                        <span className="font-semibold text-primary"> Cục đăng kiểm</span> và các <span className="text-primary font-semibold"> Trung tâm đăng kiểm </span>
                        trên toàn quốc quản lý đăng kiểm đối với xe ô tô.
                    </div>
                </div>
                <div className="container w-full bg-car min-h-[50vh] bg-no-repeat bg-contain bg-center">
                </div>
            </div>
            {/* for screen larger than 768px */}
            <div className="container max-lg:hidden max-w-[90%]
                mx-auto h-[70vh] my-auto flex flex-row gap-10 2xl:mx-14">
                <div className="basis-3/6 pr-10 mb-16 self-center flex flex-col gap-5">
                    <div className="text-primary uppercase">
                        <div className="font-extrabold
                        xl:text-7xl xl:my-5
                        lg:text-6xl lg:my-4"
                        >Hệ thống</div>
                        <div className="font-bold
                        xl:text-4xl xl:my-2
                        lg:text-3xl lg:my-1"
                        >quản lý đăng kiểm</div>
                    </div>
                    <div className="description w-[90%] text-justify">
                        <div>
                            <span className="font-semibold text-accent">RegistryTotal</span> là ứng dụng web được phát triển nhằm hỗ trợ
                            <span className="font-semibold text-primary"> Cục đăng kiểm</span> và các <span className="text-primary font-semibold"> Trung tâm đăng kiểm </span>
                            trên toàn quốc quản lý đăng kiểm đối với xe ô tô.
                        </div>
                    </div>
                </div>
                <div className="container basis-3/6 h-full mt-16 bg-car bg-no-repeat bg-contain bg-right"></div>
            </div>
        </div>
    )
}