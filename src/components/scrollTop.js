let scrollTopList = document.getElementsByClassName('scroll-top');
for(let i = 0; i<scrollTopList.length; i++)
  scrollTopList[i].addEventListener('click', ()=> window.scrollTo(0, 0));