# Getting Started with Vite React TS App

This project was bootstrapped with [Vite React TS](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## Installation

### `clone project`
### `yarn install`
### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

**(*) Open [http://localhost:3000/test](http://localhost:3000/test) to view some UI utilities demo and examples.**

## Cấu trúc thư mục

- `assets`: Chứa ảnh, icon, fonts và các style dùng cho toàn app

- `configs`: Chứa các thông tin cài đặt cho toàn app

- `consts`: Chứa các giá trị tĩnh sử dụng chung cho toàn app 

- `modules`: Chứa các thành phần phân theo nhóm chức năng. Trong 1 module có chứa screens, containers riêng cho từng module. UI giao tiếp với service bắt buộc phải thông qua store

- `routes`: Chứa các route của app. Cung cấp đối tượng history để điều hướng trong app

- `services`: Chứa các logic giao tiếp với môi trường bên ngoài (API request, LocalStorage, Firebase, ...)

- `shared`: Chứa các thành phần UI (containers và components) dùng chung. UI giao tiếp với service bắt buộc phải thông qua store

- `stores`: Chứa các Mobx store dùng cho toàn app (User store, UI store, ...). Chỉ có screen và container được phép sử dụng store. Các store chỉ chứa logic riêng cho từng thành phần (không dùng chung được cho thành phần khác) sẽ chuyển vào bên trong thư mục của thành phần đó

- `types`: Khai báo kiểu dữ liệu dùng chung cho toàn app

- `utils`: Chứa các hàm tiện ích (format ngày, giờ, convert dữ liệu, sinh uuid, ...)

## Các yêu cầu về kiến trúc

### Style
- Sử dụng css module cùng với sass (đuôi file là .scss)

### UI Component: modules và shared
- Modules chia ra thành 2 thành phần: screens và containers. Không chia nhỏ đến mức component (chỉ tách component dùng chung được và chuyển vào thư mục shared/components)
- Shared chứa các container và component dùng chung. Việc thêm / sửa / xóa các thành phần trong shared có thể gây ra ảnh hưởng lớn đến app nên cần phân tích kỹ trước khi làm và yêu cầu người review phải review thật kỹ.
- Nếu như có các store cục bộ chỉ chứa riêng logic cho 1 module, 1 màn hình hoặc 1 contaner thì sẽ đặt vào thư mục cùng cấp với thành phần đó (module thì đặt trong module, screen đặt trong screen, container đặt trong container). Điều này sẽ giúp từng thành phần độc lập, dễ bảo trì hoặc thay thế.

## Libraries

> Typescript

> Axios

> Mobx

> React bootstrap

> React hook form