# Bài tập lớn môn Phát triển ứng dụng Web
Link [Github](https://github.com/thrillim/registry-total): https://github.com/thrillim/registry-total

![Giới thiệu dự án](https://github.com/thrillim/registry-total/assets/40814521/d513b029-dbb5-4d57-b57a-9bafaddeb31f)

## Lớp môn học: INT3306 20
- Giảng viên lý thuyết: **TS. Lê Đình Thanh**
- Giảng viên thực hành: **CN. Nguyễn Thị Thu Trang**

## Thành viên:
1. **Lê Hoàng Minh Hà** - 21020621: front-end developing
- Thiết kế giao diện, bố cục cho ứng dụng web với Figma.
- Phát triển giao diện ứng dụng web cùng Tailwindcss và DaisyUI.
- Tạo giao diện responsive cho ứng dụng web, giúp người dùng tương tác với ứng dụng qua giao diện.
- Xử lí input từ người dùng: tạo các ràng buộc từ input của người dùng.
2. **Hoàng Thị Thu Hà** - 21020189: back-end developing
- Tìm tài liệu liên quan đến công tác đăng kiểm thực tế và các yêu cầu cần có với hệ thống đăng kiểm.
- Dựng cấu trúc cơ sở dữ liệu bằng hệ quản trị cơ sở dữ liệu quan hệ (mySQL).
- Sử dụng ORM Prisma để độc lập cơ sở dữ liệu.
- Sinh dữ liệu để sử dụng trong quá trình phát triển với số lượng lớn.
- Tạo API, xử lý các request gửi về server với quan niệm không tin bất cứ thông tin gì gửi đến server.
- Xử lý phân quyền người dùng dựa trên vai trò.



## Về dự án Registry Total
![Homepage của dự án](https://github.com/thrillim/registry-total/assets/40814521/7c7e492d-71a8-4096-a61b-f53d5a89a342)
**Registry Total** là ứng dụng web được phát triển nhằm hỗ trợ Cục đăng kiểm và các Trung tâm đăng kiểm trên toàn quốc quản lý đăng kiểm đối với xe ô tô.

## Công nghệ sử dụng trong dự án:
### [Next.js](https://nextjs.org/)
**Next.js** là một framework phát triển ứng dụng web phía máy chủ (server-side) được xây dựng trên nền tảng **JavaScript** và **React**. **Next.js** hỗ trợ cấu hình dễ dàng và tích hợp với **TypeScript**, **CSS modules**, và **data fetching** từ các nguồn bên ngoài bằng API.

### [NextAuth.js](https://next-auth.js.org/)
**NextAuth.js** là một thư viện xác thực (authentication) phía máy chủ cho ứng dụng **Next.js**, hỗ trợ nhiều phương pháp xác thực như OAuth, JWT, hệ thống tài khoản email/mật khẩu,... **NextAuth.js** tích hợp dễ dàng với các nhà cung cấp xác thực phổ biến như Google, Facebook, GitHub,... giúp xây dựng một hệ thống xác thực hoạt động hiệu quả một cách nhanh chóng và dễ dàng.

### [Typescript](https://www.typescriptlang.org/)
Sử dụng **Next.js** với **TypeScript** cung cấp cho nhà phát triển những lợi ích lớn
- Cải thiện chất lượng code và bảo trì.
- Trải nghiệm tốt: kiểu dữ liệu tĩnh (static types) của **TypeScript** và những tính năng built-in của **Next.js** như *hot reloading* và *automatic routing* kết hợp mượt mà với nhau, cung cấp cho nhà phát triển một môi trường thuận tiện để phát triển các tính năng.
- Khả năng mở rộng tốt: **TypeScript** và **Next.js** giúp quản lý và phát triển mức độ phức tạp của mã nguồn, nhờ vào những tính năng có sẵn như *enforced data structure* của **TypeScript** và *automatic code-splitting and server-side rendering* của **Next.js** đảm bảo rằng ứng dụng hoạt động hiệu quả và có thể bảo trì được.

### [Tailwind CSS](https://tailwindcss.com/)
Là một framework CSS ưu tiên tiện ích, giúp cài đặt định dạng qua tên lớp của đối tượng HTML. Tailwind CSS giúp tiết kiệm thời gian và chi phí để phát triển ứng dụng, cân bằng giữa các nguyên lý thiết kế cũng như khả năng tùy chỉnh, phù hợp với các framework hiện đại.

### [Prisma](https://www.prisma.io/)
Prisma là bộ công cụ cơ sở dữ liệu nguồn mở được sử dụng để xây dựng và truy cập cơ sở dữ liệu. Nó cung cấp một bộ công cụ và thư viện giúp đơn giản hóa các tương tác cơ sở dữ liệu và giúp các nhà phát triển làm việc hiệu quả hơn với cơ sở dữ liệu trong ứng dụng của họ.

### [MySQL](https://www.mysql.com/)
MySQL là một hệ quản trị cơ sở dữ liệu quan hệ nguồn mở được sử dụng rộng rãi để lưu trữ và quản lý dữ liệu có cấu trúc. Đây là một trong những cơ sở dữ liệu phổ biến nhất trên thế giới và được biết đến với hiệu suất, khả năng mở rộng và dễ sử dụng.

## [Định tuyến và cấu trúc thư mục](https://nextjs.org/docs/app/building-your-application/routing)
### Nguyên tắc cơ bản về định tuyến trong Next.js
![image](https://github.com/thrillim/registry-total/assets/40814521/6de76ee7-ff23-44a4-8d93-45d877437c4a)
![image](https://github.com/thrillim/registry-total/assets/40814521/8b2c8464-23a3-48aa-8829-437b331609b5)
### Định tuyến `app`
- Bộ định tuyến `app` hoạt động trong thư mục `app`, hỗ trợ chia sẻ giao diện chung, định tuyến lồng, tải trạng thái, xử lý lỗi,...
- Các components bên trong `app` mặc định là [React Server Components](https://nextjs.org/docs/getting-started/react-essentials#server-components).
### Chức năng của thư mục và tệp
- Thư mục: được sử dụng để định nghĩa route. Một route là một đường dẫn đơn lẻ tới thư mục lồng nhau, tuân theo cấu trúc phân cấp file-system từ thư mục gốc (root folder) tới thư mục lá cuối (final leaf folder) có bao gồm một file `page.js` (hoặc `page.tsx`.
- Tệp: được sử dụng để tạo giao diện người dùng cho một route segment.
![image](https://github.com/thrillim/registry-total/assets/40814521/e1d573ed-d290-4f0d-8908-9a672e1d20d1)
### Cấu trúc Phân cấp Component:
![image](https://github.com/thrillim/registry-total/assets/40814521/1587a470-dace-4b71-854d-98cfb05dd44e)
![image](https://github.com/thrillim/registry-total/assets/40814521/5aceab5a-ad4a-4e3d-8987-5aca2d00c3e6)
Bên cạnh đó, chỉ có nội dung được trả về từ `page.js` (`page.tsx`) và `route.js` (`route.tsx`) sẽ được định tuyến:
![image](https://github.com/thrillim/registry-total/assets/40814521/dbefbcc7-ef3f-4f21-8b73-7e67e64f4c60)
### Parital Rendering
![image](https://github.com/thrillim/registry-total/assets/40814521/e3cf77ca-c29a-4722-9569-6e6d81eb98b5)

### Tính năng đã cài đặt
#### Đối với cục Đăng kiểm
- Tạo lập CSDL về xe ô tô đã qua đăng ký (cấp biển số). Cho phép upload từ file danh sách các xe ô tô đã qua đăng ký
![image](https://github.com/thrillim/registry-total/assets/40814521/bcad4c77-d019-4746-aaf1-08bf5a8788e6)
- Theo dõi, thống kê trung tâm đăng kiểm, tạo trung tâm đăng kiểm mới và cấp tài khoản sử dụng cho các trung tâm đăng kiểm
![image](https://github.com/thrillim/registry-total/assets/40814521/4d628491-8c96-4efd-b083-cb156512d383)
![image](https://github.com/thrillim/registry-total/assets/40814521/d42371ed-948d-4854-be24-8fb08629c1a8)
![image](https://github.com/thrillim/registry-total/assets/40814521/e30c42af-81d2-44ab-97f4-4537d92cb2b6)


https://github.com/thrillim/registry-total/assets/40814521/f8752f70-cff8-4aae-9691-f66696f64d6c


- Theo dõi và thống kê số lượng, danh sách xe đã được đăng kiểm hàng tháng, quý, năm ở từng trung tâm đăng kiểm, hay trên toàn quốc
![image](https://github.com/thrillim/registry-total/assets/40814521/c759ba62-cee9-47d5-98bf-07ece4580486)

- Theo dõi và thống kê số lượng, danh sách xe sắp hết hạn đăng kiểm hàng tháng. Dự báo số lượng xe sẽ đăng kiểm mới và đăng kiểm lại hàng tháng ở từng trung tâm đăng kiểm, hay trên toàn quốc
![image](https://github.com/thrillim/registry-total/assets/40814521/63047cb8-54e5-4384-9048-34dbfc5cab82)
#### Đối với Trung tâm đăng kiểm
- Ghi nhận kết quả đăng kiểm và cấp giấy chứng nhận đăng kiểm.
![image](https://github.com/thrillim/registry-total/assets/40814521/85bfbd20-7542-4b4c-9555-768953779c9f)
  Mẫu giấy chứng nhận đăng kiểm: [Certificate.pdf](https://github.com/thrillim/registry-total/files/11787370/Certificate.pdf)
- Theo dõi và thống kê số lượng, danh sách xe đã được đăng kiểm hàng tháng, quý, năm.
![image](https://github.com/thrillim/registry-total/assets/40814521/fe9517f3-fb1d-4e65-94f8-d24dd98c9092)
- Theo dõi và thống kê số lượng, danh sách xe sắp hết hạn đăng kiểm hàng tháng. Dự báo số lượng xe sẽ đăng kiểm mới và đăng kiểm lại hàng tháng ở trung tâm.
![image](https://github.com/thrillim/registry-total/assets/40814521/18f574e6-e1c1-4204-9c01-75d3acab4222)

### Thiết kế giao diện
- Theme và UI Components: [daisyUI](https://daisyui.com/), [shadcnUI](https://ui.shadcn.com/docs)

### Hiệu năng

### Phong cách lập trình
- Tạo, sử dụng, tái sử dụng các components: giúp lập trình phong cách hướng đối tượng, dễ quản lý các thành phần trong code, tiết kiệm thời gian.
- Mã giao diện được đặt trong:
  + `app/components`: các components được sử dụng nhiều lần trong toàn dự án.
  + `app/Center`: các components tạo nên giao diện mà người dùng là Trung tâm đăng kiểm tương tác để sử dụng hệ thống.
  + `app/Register`: các components tạo nên giao diện mà người dùng là Cục đăng kiểm tương tác để sử dụng hệ thống.
  + `app/signIn`: giao diện trong Đăng nhập vào hệ thống.
- Mã xử lý nghiệp vụ được đặt trong `app/api`.
### Xử lý nhập liệu


https://github.com/thrillim/registry-total/assets/40814521/55a49c86-0447-44e8-a053-0070ede1ae11



https://github.com/thrillim/registry-total/assets/40814521/5ef36c5f-6236-445d-b333-3eb1499529b5




### An ninh
#### Xác thực
Người dùng sau khi đăng nhập với tên tài khoản, mật khẩu mới có thể truy cập các trang chứa thông tin bảo mật. Cài đặt sử dụng NextAuth.
#### Quản lý phiên
Token được lưu ở cookie và gửi về server ở từng request. Cài đặt bằng JSON Web Token kết hợp NextAuth.
#### Điều khiển truy cập
Tài khoản khác nhau truy cập vào các trang khác nhau dựa trên quyền của mình. Nếu truy cập không hợp lệ sẽ được điều hướng sang trang khác (ví dụ trang chủ).


https://github.com/thrillim/registry-total/assets/40814521/795c4362-773e-4ac0-ba26-e615ebfcd023


#### Mã hoá
Mật khẩu được mã hoá bằng bcrypt trước khi lưu vào database.
### Viết lại và/hoặc định tuyến URL
- Sử dụng định tuyến `app` của **Next.js**: `http://localhost:3000` là cổng mặc định của server **Next.js**
  + Đường dẫn tới trang chủ (homepage) của hệ thống có dạng: `{http://localhost:3000}/`
  ![image](https://github.com/thrillim/registry-total/assets/40814521/aabaa169-4ce8-43eb-bf4b-8d828236f967)

  + Đường dẫn tới trang dashboard của Cục đăng kiểm: `/Register/dashboard`
  ![image](https://github.com/thrillim/registry-total/assets/40814521/d34a449a-1a7b-4d77-a728-1085a60c39e1)

  + Đường dẫn tới trang dashboard của Trung tâm đăng kiểm: `Center/{centerID}/dashboard`

  + Đường dẫn tới trang thông tin tài khoản của Trung tâm đăng kiểm: `Center/{centerID}/account`
    ![image](https://github.com/thrillim/registry-total/assets/40814521/432f4a52-4e59-4498-9d75-c7a9780bacf6)

  + Đường dẫn tới trang đăng kiểm ô tô của Trung tâm đăng kiểm: `Center/{centerID}/registry`
  ![image](https://github.com/thrillim/registry-total/assets/40814521/9b25a6a0-637b-4d1d-8b9c-9ee8e9bde750)
- Định tuyến URL dùng redirect từ next/navigation. Người dùng được tự động chuyển trang khi không có quyền truy cập trang đó (kiểm tra bằng session).
### Thao tác CSDL theo lập trình hướng đối và độc lập CSDL
- Sử dụng Prisma (Next-generation Node.js and TypeScript ORM) để tạo lược đồ cơ sở dữ liệu ngay trong thư mục code. Thao tác với cơ sở dữ liệu theo lập trình hướng đối tượng thông qua lược đồ này giúp độc lập cơ sở dữ liệu, phù hợp với cả lược đồ quan hệ và không quan hệ.



