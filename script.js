// ページの読み込み後に実行する処理
document.addEventListener('DOMContentLoaded', () => {
    // セクションのフェードインアニメーション
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 連絡フォームのインタラクティブな処理
    const contactForm = document.getElementById('contact');
    if (contactForm) {
        contactForm.addEventListener('mouseover', () => {
            contactForm.classList.add('shadow-xl', 'transition-shadow', 'duration-300');
        });
        contactForm.addEventListener('mouseout', () => {
            contactForm.classList.remove('shadow-xl', 'transition-shadow', 'duration-300');
        });
    }
});

// レスポンシブデザインの補助
function adjustLayout() {
    const isMobile = window.innerWidth < 768;
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isMobile) {
            section.classList.remove('grid-cols-2');
            section.classList.add('grid-cols-1');
        } else {
            section.classList.add('grid-cols-2');
            section.classList.remove('grid-cols-1');
        }
    });
}

window.addEventListener('resize', adjustLayout);
adjustLayout(); // 初回実行