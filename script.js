const frame = document.querySelector('.frame');
const images = [
    "url('https://as2.ftcdn.net/v2/jpg/07/08/47/75/1000_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.jpg')",
    "url('https://as1.ftcdn.net/v2/jpg/05/40/08/54/1000_F_540085480_WN26Tz5VOFRwdPsLmK73JXNuSYsi2luw.jpg')",
    "url('https://as1.ftcdn.net/v2/jpg/06/99/65/18/1000_F_699651831_oyUjSe3cR2O6Vjpe4wZWMBrPPZZl6dUf.jpg')",
    "url('https://as2.ftcdn.net/v2/jpg/07/67/58/31/1000_F_767583199_WkDvXPjVg0X4HoYzQ2eSiTLjvD9MHQoN.jpg')",
    "url('https://as1.ftcdn.net/v2/jpg/07/31/66/26/1000_F_731662602_vbi8sGZ7GJa0hD72FNbjFo7BkMmA1Qwu.jpg')",
    "url('https://as1.ftcdn.net/v2/jpg/08/58/97/00/1000_F_858970014_fNgCoQhA8FY1V41xSUVLHTHNs1nolBGc.jpg')"
];
let currentIndex = 0;

document.getElementById('forward').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    frame.style.backgroundImage = images[currentIndex];
});

document.getElementById('backward').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    frame.style.backgroundImage = images[currentIndex];
});
