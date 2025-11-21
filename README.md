# GK88 AMP Static Site

Dự án Eleventy tạo trang AMP với HTML/CSS được minify tự động.

## Cài đặt

Chạy trong **CMD** (không phải PowerShell):

```cmd
npm install
```

## Chạy local

```cmd
npm start
```

Truy cập: http://localhost:8080

## Build production

```cmd
npm run build
```

HTML sẽ được minify tự động (xóa khoảng trắng, comment, làm khó đọc).

## Deploy

Push code lên GitHub, Vercel sẽ tự động build và deploy.

```cmd
git add .
git commit -m "Update content"
git push origin main
```

## Tính năng Minify

- ✅ Xóa tất cả khoảng trắng thừa
- ✅ Xóa comments
- ✅ Minify CSS inline
- ✅ Minify JS inline
- ✅ Làm code khó đọc

## Cấu trúc thư mục

```
├── src/
│   ├── _data/
│   │   └── posts.json       # Dữ liệu bài viết
│   ├── images/              # Hình ảnh
│   └── pages.njk            # Template AMP
├── _site/                   # Output (đã minify)
├── .eleventy.js             # Config Eleventy + Minify
└── package.json
```

## Thêm bài viết mới

Chỉnh sửa `src/_data/posts.json`, thêm object mới với các trường:
- slug
- title
- description
- content (HTML)
- ...

Sau đó push lên GitHub.
