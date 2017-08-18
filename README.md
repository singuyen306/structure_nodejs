# Ngôn ngữ sử dụng:
  1. nodejs 6.11.1
  2. Express 4.x
  3. ReactJS 15.6.1

# Requirement
   N/A

# Cấu trúc folder dự án
- controllers:
    + backend: folder chứa controller trang quản trị
    + frontend: folder chứa controller trang frontend
    + components: các components dùng chung cho cả backend & frontend
    + index.js : chỉ để làm nhiệm vụ điều hướng, hỗ trợ routers

- models:
    + entity: viết logic của ứng dụng ở trong này. gọi đến table models để truy xuất dữ liệu và trả ra cho + controller
    + tables: chứa các file models truy xuất dữ liệu, validation dữ liệu
    + behaviors: các hàm dùng chung sẽ được viết ở đây

- modules: mục đích là để phân chia module cho rõ ràng. source hiện tại chưa dùng đến.

- routers: kết hợp với file index.js trong controller để điều hướng.

- views:
    + backend: chứa view backend
    + frontend: chứa view frontend
    + element: chứa các đoạn code dùng chung được trong các view
    + helpers: khai báo các hàm dùng chung khi hiển thị dữ liệu ở views
    + layouts: thư mục chứa layout. (sử dụng ejs-mate để config)

- common: folder chứa các file dùng chung, như kết nối tới database ...

- config: Khai báo hằng số để sử dụng trong ứng dụng. (tham khảo file path.js trong folder này)
      + default.json: file này là mặc định sẽ có vì sử dụng module config của nodejs.

- public: folder chứa các file js, css, images,...
    + react:
        + components: chứa các components sẽ được viết bằng reactjs

- tests: folder dùng để viết unit test, intergration test, ...

- app.js: file server của ứng dụng (chạy: node app)
