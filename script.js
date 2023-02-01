window.addEventListener('DOMContentLoaded', () => {
    const handleObserve = (entry) => {
        entry.forEach(entry => {
            entry.isIntersecting && (entry.target.style = 'animation: fadeIn 1s 1 forwards;');
        })
    }
    const observer = new IntersectionObserver(handleObserve, {'threshold': .5});
    const faders = document.querySelectorAll('.fader');
    faders.forEach(fader => observer.observe(fader));
})