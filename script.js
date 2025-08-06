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

// ハンバーガーメニューの機能
const navLine = document.querySelector('.nav-line');
const navList = document.querySelector('.nav-list');

// ハンバーガーメニューのクリックイベント
navLine.addEventListener('click', () => {
    navLine.classList.toggle('active');
    navList.classList.toggle('active');
});

// メニュー項目をクリックしたときにメニューを閉じる
const navItems = document.querySelectorAll('.nav-list ul li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLine.classList.remove('active');
        navList.classList.remove('active');
    });
});

// 画面外をクリックしたときにメニューを閉じる
document.addEventListener('click', (e) => {
    if (!navLine.contains(e.target) && !navList.contains(e.target)) {
        navLine.classList.remove('active');
        navList.classList.remove('active');
    }
});

// 画面サイズが変更されたときの処理
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLine.classList.remove('active');
        navList.classList.remove('active');
    }
});