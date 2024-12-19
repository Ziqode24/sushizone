import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

function smoothScroll(target) {
    const start = window.scrollY;
    const end = target.offsetTop;
    const distance = end - start;
    const duration = 800; // Scroll duration in milliseconds
    let startTime = null;

    function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const scrollAmount = Math.min(progress / duration, 1) * distance;
        window.scrollTo(0, start + scrollAmount);

        if (progress < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}
