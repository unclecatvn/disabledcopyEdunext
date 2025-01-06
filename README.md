# Bỏ Chặn Ctrl+V trên fu-edunext.fpt.edu.vn

## Mô Tả

Đây là một **User Script** dành cho **Tampermonkey** giúp bỏ chặn phím tắt **Ctrl+V** (dán nội dung) trên trang web [fu-edunext.fpt.edu.vn](https://fu-edunext.fpt.edu.vn/). Một số trang web có thể hạn chế việc dán nội dung vào các trường nhập liệu để bảo vệ dữ liệu hoặc ngăn chặn việc sao chép thông tin. Với script này, bạn có thể dễ dàng vượt qua các hạn chế đó và sử dụng chức năng dán như bình thường.

## Tính Năng

- **Bỏ Chặn Ctrl+V:** Ngăn chặn các sự kiện JavaScript của trang web nhằm hạn chế việc sử dụng phím tắt Ctrl+V.
- **Hỗ Trợ Nội Dung Động:** Sử dụng `MutationObserver` để đảm bảo script hoạt động hiệu quả ngay cả khi trang web tải nội dung động sau khi trang đã được tải.
- **Dễ Dàng Cài Đặt:** Chỉ cần cài đặt Tampermonkey và thêm script vào để bắt đầu sử dụng.

## Yêu Cầu

- **Trình Duyệt Web:** Google Chrome, Mozilla Firefox, Microsoft Edge hoặc các trình duyệt hỗ trợ Tampermonkey.
- **Tiện Ích Mở Rộng:** [Tampermonkey](https://www.tampermonkey.net/) hoặc các tiện ích mở rộng quản lý user script tương tự.

## Cài Đặt

### Bước 1: Cài Đặt Tampermonkey

1. **Trên Google Chrome:**
   - Truy cập [Chrome Web Store - Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
   - Nhấn **"Thêm vào Chrome"** và sau đó nhấn **"Thêm tiện ích"** để cài đặt.

2. **Trên Mozilla Firefox:**
   - Truy cập [Firefox Add-ons - Tampermonkey](https://addons.mozilla.org/firefox/addon/tampermonkey/).
   - Nhấn **"Thêm vào Firefox"** và làm theo hướng dẫn để cài đặt.

3. **Trên Microsoft Edge:**
   - Truy cập [Edge Add-ons - Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo).
   - Nhấn **"Nhận"** để cài đặt.

### Bước 2: Thêm Script Vào Tampermonkey

1. **Mở Tampermonkey:**
   - Nhấp vào biểu tượng **Tampermonkey** trên thanh công cụ trình duyệt.
   - Chọn **"Create a new script"** (Tạo script mới).

2. **Dán Đoạn Mã Script:**
   - Xóa nội dung mặc định trong trình soạn thảo và dán đoạn mã sau vào:

     ```javascript
     // ==UserScript==
     // @name         Bỏ chặn Ctrl+V trên fu-edunext.fpt.edu.vn - Cải tiến
     // @namespace    http://tampermonkey.net/
     // @version      1.1
     // @description  Bỏ chặn phím Ctrl+V trên trang fu-edunext.fpt.edu.vn bằng cách ngăn chặn các sự kiện trước khi chúng được xử lý bởi trang web
     // @author       unclecat
     // @match        https://fu-edunext.fpt.edu.vn/*
     // @grant        none
     // ==/UserScript==
     
     (function() {
         'use strict';
     
         // Hàm ngăn chặn việc chặn Ctrl+V
         function enablePaste() {
             // Bắt sự kiện keydown trong giai đoạn capture để ngăn chặn việc chặn
             window.addEventListener('keydown', function(e) {
                 if (e.ctrlKey && (e.key === 'v' || e.key === 'V')) {
                     e.stopPropagation();
                 }
             }, true);
     
             // Bắt sự kiện paste trong giai đoạn capture để cho phép paste
             window.addEventListener('paste', function(e) {
                 e.stopPropagation();
             }, true);
     
             console.log("Đã bỏ chặn Ctrl+V trên fu-edunext.fpt.edu.vn.");
         }
     
         // Chạy hàm khi trang đã tải xong
         window.addEventListener('load', enablePaste);
     
         // Sử dụng MutationObserver để đảm bảo script hoạt động trên nội dung động
         const observer = new MutationObserver(function(mutations) {
             mutations.forEach(function(mutation) {
                 enablePaste();
             });
         });
     
         observer.observe(document, { childList: true, subtree: true });
     })();
     ```

3. **Lưu Script:**
   - Nhấn **"File"** > **"Save"** hoặc nhấn `Ctrl+S` để lưu script.
   - Đảm bảo rằng script đã được **kích hoạt** (có dấu tích màu xanh lá cây).

### Bước 3: Áp Dụng Script

- **Tải Lại Trang Web:**
  - Truy cập lại [fu-edunext.fpt.edu.vn](https://fu-edunext.fpt.edu.vn/) hoặc tải lại trang (nhấn `F5` hoặc `Ctrl+R`) để áp dụng script mới.

## Sử Dụng

Sau khi cài đặt và kích hoạt script, bạn có thể sử dụng phím tắt **Ctrl+V** (hoặc **Cmd+V** trên macOS) để dán nội dung vào các trường nhập liệu trên trang [fu-edunext.fpt.edu.vn](https://fu-edunext.fpt.edu.vn/) mà không bị chặn.

## Giải Thích Đoạn Mã

- **@match:** Xác định trang web mà script sẽ áp dụng, trong trường hợp này là tất cả các trang con của `https://fu-edunext.fpt.edu.vn/`.
  
- **enablePaste():** 
  - **keydown Event Listener:** Bắt sự kiện `keydown` trong giai đoạn **capture** (trước khi sự kiện được xử lý bởi các listener khác). Nếu phím kết hợp là **Ctrl+V**, script sẽ ngăn chặn sự kiện này lan truyền tới các listener khác bằng cách sử dụng `e.stopPropagation()`.
  
  - **paste Event Listener:** Tương tự, script bắt sự kiện `paste` trong giai đoạn **capture** và ngăn chặn sự lan truyền của nó.
  
- **MutationObserver:** Theo dõi các thay đổi trong DOM để đảm bảo rằng các biện pháp chặn mới được loại bỏ ngay cả khi trang web thêm nội dung động sau khi tải xong.

## Hỗ Trợ

Nếu bạn gặp bất kỳ vấn đề nào khi sử dụng script này hoặc có ý kiến đóng góp, vui lòng [tạo issue]([https://github.com/disabledcopyEdunext/issues](https://github.com/unclecatvn/disabledcopyEdunext/issues)) trên GitHub.

## Cảm Ơn

Cảm ơn bạn đã sử dụng script này! Nếu nó giúp ích cho bạn, hãy chia sẻ nó với bạn bè hoặc góp phần cải thiện nó thông qua các đóng góp.

---
*Được phát triển với ❤️ bởi [UncleCat](https://github.com/unclecatvn)*
