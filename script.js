window.addEventListener('DOMContentLoaded', () => {
    const handleObserve = (entry) => {
        entry.forEach(entry => {
            entry.isIntersecting && (entry.target.style = 'animation: fadeIn 1s 1 forwards;');
        })
    }
    const observer = new IntersectionObserver(handleObserve, {'threshold': .5});
    const faders = document.querySelectorAll('.fader');
    faders.forEach(fader => observer.observe(fader));
    const [menuBtn, menubar] = document.querySelectorAll('.menuBtnContainer button, .menubar');
    
    let menuActive;
    menuBtn.addEventListener('click', () => {
      if (menubar.style.opacity == '1') {
        menubar.style = 'opacity: 0; top: -400px';
        menuBtn.querySelector('i').className = 'fas fa-bars';
    
      } else {
        menubar.style = 'opacity: 1; top: 55px;';
        menuBtn.querySelector('i').className = 'fas fa-arrow-up';
      }
    });
    
    window.addEventListener('scroll', () => {
      if (menubar.style.opacity == '1') {
        menubar.style = 'opacity: 0; top: -400px';
        menuBtn.querySelector('i').className = 'fas fa-bars';
      }
    });
});