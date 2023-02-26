window.addEventListener('DOMContentLoaded', () => {
  const [menuBtn, menubar] = document.querySelectorAll('.menuBtnContainer button, .menubar');
  const shareBtn = document.querySelector('.shareBtn');
  const themeBtn = document.querySelector('.themeBtn');
  let menuActive;
  
    const handleObserve = (entry) => {
        entry.forEach(entry => {
            entry.isIntersecting && (entry.target.style = 'animation: fadeIn 1s 1 forwards;');
        })
    }
    const observer = new IntersectionObserver(handleObserve, {'threshold': .5});
    
    const faders = document.querySelectorAll('.fader');
    faders.forEach(fader => observer.observe(fader));
    
    menuBtn.onclick = () => {
      const menuIcon = menuBtn.querySelector('i');
      if (menubar.style.opacity == '1') {
        menubar.style = 'opacity: 0; right: -200px';
        menuIcon.className = 'fas fa-bars';
    
      } else {
        menubar.style = 'opacity: 1; right: 4px;';
        menuIcon.className = 'fas fa-arrow-right';
      }
    }
    
    window.onscroll =  () => {
      if (menubar.style.opacity == '1') {
        menubar.style = 'opacity: 0; right: -200px';
        menuBtn.querySelector('i').className = 'fas fa-bars';
      }}
    
    if('share' in navigator) {
      shareBtn.onclick = () => {
        const share = navigator.share('https://adhhamdev.netlify.app');
        console.log(share)
      }
    } else {
      shareBtn.disabled = true;
    }
    
    themeBtn.onclick = () => {
      if(document.body.classList.contains('dark')){
        document.body.className = '';
        themeBtn.style = 'background-color: transparent';
        } else {
          themeBtn.style = 'background-color: #0ea';
          document.body.className = 'dark';
        }
    }
});