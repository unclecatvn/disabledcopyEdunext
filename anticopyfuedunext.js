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
