export default function About() {
    return (
        <div className="h-screen container w-full mx-auto py-10 bg-white text-black">
            <div className="container mx-auto my-auto flex flex-col gap-16 px-20">
                <div className="navbar xl:px-10">
                    <h1 className="navbar-start text-4xl font-extrabold text-primary uppercase min-w-max">
                        Giới thiệu dự án
                    </h1>
                    <div className="navbar-end flex flex-row gap-2">
                        <div className="bg-vnu w-10 h-10 bg-contain bg-no-repeat"></div>
                        <div className="bg-uet w-10 h-10 bg-contain bg-no-repeat"></div>
                        <div className="bg-fit w-10 h-10 bg-contain bg-no-repeat"></div>
                    </div>
                </div>

                {/* Lop mon hoc, giang vien */} 
                <div className="flex flex-row w-full mx-auto gap-10 px-10">
                    <div className="flex flex-col basis-1/3 text-center gap-1 self-start">
                        <div className="font-bold text-3xl text-accent">INT3306 20</div>
                        <div className="font-semibold text-lg">Phát triển ứng dụng Web</div>

                    </div>
                    <div className="flex flex-col basis-1/3 text-center gap-1 self-center">
                        <div className="font-bold text-3xl text-accent">Giảng viên</div>
                        <div className="font-semibold text-lg"><a href="mailto:thanhld@vnu.edu.vn" target="_blank">TS. Lê Đình Thanh</a></div>
                    </div>
                    <div className="flex flex-col basis-1/3 text-center gap-1 self-end">
                        <div className="font-bold text-3xl text-accent">Giảng viên</div>
                        <div className="font-semibold text-lg"><a href="mailto:trangngtt@vnu.edu.vn" target="_blank">CN. Nguyễn Thị Thu Trang</a></div>

                    </div>
                </div>

                {/* Thanh vien */}
                <div className="flex flex-row gap-10 lg:ml-10 lg:gap-12 xl:gap-20 2xl:gap-28 mx-auto">
                    <div className="text-3xl text-accent font-bold self-center basis-1/6 text-center">Thành viên</div>
                    <div className="card lg:card-side shadow-xl basis-1/3 self-center">
                        <figure className="lg:pl-4"><img src="http://localhost:3000/ava0.png" alt="ava" /></figure>
                        <div className="card-body max-lg:items-center">
                            <div className="card-title font-bold text-primary lg:w-max">Lê Hoàng Minh Hà</div>
                            <div className="font-semibold">21020621</div>
                            <a href="https://github.com/minhha-lehoang" target="_blank" className="font-medium flex flex-row gap-0.5">
                                <svg aria-hidden="true" className="octicon octicon-mark-github" height="20" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                                <span>minhha-lehoang</span>
                            </a>
                        </div>
                    </div>
                    <div className="card lg:card-side shadow-xl self-end basis-1/3">
                        <figure className="lg:pl-4"><img src="http://localhost:3000/ava1.png" alt="ava" /></figure>
                        <div className="card-body max-lg:items-center">
                            <div className="card-title font-bold text-primary lg:w-max">Hoàng Thị Thu Hà</div>
                            <div className="font-semibold">21020189</div>
                            <a href="https://github.com/thrillim" target="_blank" className="font-medium flex flex-row gap-0.5">
                                <svg aria-hidden="true" className="octicon octicon-mark-github" height="20" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                </svg>
                                <span>thrillim</span>
                            </a>
                        </div>

                    </div>

                </div>

                {/* Cong nghe */}
                <div className="flex flex-row mb-5 text-center
                    max-sm:hidden
                    sm:h-7 sm:gap-4 
                    md:h-8 md:gap-4
                    lg:h-10 lg:gap-6
                    2xl:gap-10 2xl:mt-16
                    mx-auto">
                    <a href="https://nextjs.org/" target="_blank" className="selft-start">
                        <img src="http://localhost:3000/next.svg" alt="next.js"
                            className="object-contain h-full" />
                    </a>
                    <a href="https://next-auth.js.org/" target="_blank">
                        <img src="http://localhost:3000/auth.png" alt="next-auth.js" className="object-contain h-full" />
                    </a>
                    <a href="https://www.typescriptlang.org/" target="_blank">
                        <img src="http://localhost:3000/ts.svg" alt="typescript" className="object-contain h-full" />
                    </a>
                    <a href="https://tailwindcss.com/" target="_blank">
                        <img src="http://localhost:3000/tailwind.svg" alt="tailwindcss" className="object-contain h-full" />
                    </a>
                    <a href="https://www.prisma.io/" target="_blank">
                        <img src="http://localhost:3000/prisma.svg" alt="prisma" className="object-contain h-full" />
                    </a>
                    <a href="https://www.mysql.com/" target="_blank" className="self-end">
                        <img src="http://localhost:3000/mysql.svg" alt="mysql" className="object-contain h-full" />
                    </a>
                </div>
            </div>
        </div>
    )
}