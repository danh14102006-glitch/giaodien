// Đồng hồ độ cao: cuộn xuống = leo lên (0 → 3.143 m, bằng đỉnh Fansipan)
(function () {
    var MAX = 3143;
    var altitude = document.getElementById('altitude');
    var fill = document.getElementById('gaugeFill');
    if (!altitude || !fill) return;

    function update() {
        var total = document.documentElement.scrollHeight - window.innerHeight;
        var p = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
        altitude.textContent = Math.round(p * MAX).toLocaleString('vi-VN');
        fill.style.height = (p * 100).toFixed(1) + '%';
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
})();
