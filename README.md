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
![image](https://github.com/thrillim/registry-total/assets/40814521/6f6f9e17-d5ad-4776-9c10-df8501df50f2)

- Theo dõi và thống kê số lượng, danh sách xe sắp hết hạn đăng kiểm hàng tháng. Dự báo số lượng xe sẽ đăng kiểm mới và đăng kiểm lại hàng tháng ở từng trung tâm đăng kiểm, hay trên toàn quốc
![image](https://github.com/thrillim/registry-total/assets/40814521/63047cb8-54e5-4384-9048-34dbfc5cab82)
#### Đối với Trung tâm đăng kiểm
- Ghi nhận kết quả đăng kiểm và cấp giấy chứng nhận đăng kiểm.
![image](https://github.com/thrillim/registry-total/assets/40814521/85bfbd20-7542-4b4c-9555-768953779c9f)
  Mẫu giấy chứng nhận đăng kiểm: [Certificate.pdf](https://github.com/thrillim/registry-total/files/11787370/Certificate.pdf)
- Theo dõi và thống kê số lượng, danh sách xe đã được đăng kiểm hàng tháng, quý, năm.
  ![image](https://github.com/thrillim/registry-total/assets/40814521/0089abbc-a9bb-425d-b4d5-09daf405601a)
- Theo dõi và thống kê số lượng, danh sách xe sắp hết hạn đăng kiểm hàng tháng. Dự báo số lượng xe sẽ đăng kiểm mới và đăng kiểm lại hàng tháng ở trung tâm.
![image](https://github.com/thrillim/registry-total/assets/40814521/18f574e6-e1c1-4204-9c01-75d3acab4222)

### Thiết kế giao diện

### Hiệu năng

### Phong cách lập trình


### Xử lý nhập liệu


https://github.com/thrillim/registry-total/assets/40814521/55a49c86-0447-44e8-a053-0070ede1ae11



https://github.com/thrillim/registry-total/assets/40814521/5ef36c5f-6236-445d-b333-3eb1499529b5




### An ninh


### Viết lại và/hoặc định tuyến URL


### Thao tác CSDL theo lập trình hướng đối và độc lập CSDL



