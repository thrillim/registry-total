# Thư mục app
Thư mục chứa các file chính của ứng dụng

## Cấu trúc thư mục:
### Thư mục `api`: 
- Chứa các file `route.tsx`.
- Các file bên trong `app/api` được map tới `/app/*` và được coi như một API endpoint phía server.

### Thư mục `components`
- Chứa các file tạo nên các components của ứng dụng.
- Việc tạo dựng và sử dụng lại component giúp tối ưu hóa code, giảm trùng lặp code không cần thiết, giúp bảo trì và sửa lỗi dễ dàng hơn.
- Các component có thể thừa kế component khác, tạo nên cấu trúc lập trình hướng đối tượng, giúp quá trình phát triển thuận tiện và dễ dàng.

### Thư mục `Center`
Chứa các file tạo nên giao diện sử dụng các trang mà Trung tâm đăng kiểm có thể truy cập tới (account, dashboard, registry), component sử dụng để tạo nên giao diện đó, cung cấp các tính năng mà đối tượng sử dụng là Trung tâm đăng kiểm có thể sử dụng.

### Thư mục `Register`
Chứa các file tạo nên giao diện sử dụng các trang mà Cục đăng kiểm có thể truy cập tới (dashboard), các component sử dụng để tạo nên giao diện đó, cung cấp các tính năng mà đối tượng sử dụng là Cục đăng kiểm có thể sử dụng.

### File `client.ts`

### File `globals.css`
File chứa định dạng CSS cho toàn ứng dụng. Bên cạnh định dạng mức component, **Next.js** cũng cung cấp tính năng định dạng cho mọi `page` với `global.css`.

### File `layout.tsx`
Định dạng bố cục chung

### File `page.tsx`
- File tạo giao diện mặc định của ứng dụng khi truy cập vào đường dẫn (ví dụ: "https://localhost:3000").
- Là file Homepage của dự án RegistryTotal


### File `Provider.tsx`:

### File `favicon.ico`: favicon của ứng dụng
