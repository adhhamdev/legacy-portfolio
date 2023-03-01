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
    
    if(navigator.share) {
      shareBtn.onclick = () => {
        navigator.share({
          title: 'Share Portfolio',
          text: 'Adhham | Full Stack Web Developer',
          url: 'https://adhhamdev.netlify.app'
        });
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

const filePicker = document.querySelector('#file');
const fileBtn = document.querySelector('.fileBtn');
const filePreview = document.querySelector('.selected-file');

fileBtn.onclick = () => {
  filePicker.click();
}
filePicker.onchange = (ev) => {
  const file = ev.target.files[0];
  let type = file.type;
  let icon;
  if(type.includes('image')) icon = 'image';
  else if(type.includes('video')) icon = 'video';
  else if(type.includes('audio')) icon = 'music';
  else icon = 'file';
  filePreview.innerHTML =
  `<div class='file'><i class="fas fa-${icon}"></i> <p>${file.name}</p></div>`;
}