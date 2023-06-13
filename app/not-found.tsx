import Link from "next/link"

export default function NotFound() {
    return (
        <div className="container mx-auto text-center h-screen mt-56">
            <h1 className="text-6xl font-extrabold mb-2">404</h1>
            <p>Không tìm thấy trang yêu cầu.</p>
            <p>
                Bấm vào đây để về trang chủ: <Link className="text-accent font-medium" href="/">RegistryTotal</Link>.
            </p>
        </div>
    )
}