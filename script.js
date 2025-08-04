const scrollToTopBtn = document.querySelector('.scroll-to-top');

// スクロールイベントを監視
window.addEventListener('scroll', () => {
    // 200px以上スクロールしたらボタンを表示
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});