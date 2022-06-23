var typed = new Typed('.typing', {
  strings:["Motivated " , "Capable" ,"Inventive", "Cooperative "],
  typeSpeed:100,
  backSpeed:80,
  loop:true
})

const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length,
      sectionList = document.querySelectorAll('.section') ,
      totalSectionList = sectionList.length;
      console.log(sectionList)
      for (let i=0; i < totalNavList; i++) {
        const a = navList[i].querySelector('a')
        a.addEventListener('click', function () {
          for(let j=0 ; j <totalNavList; j++){
            navList[j].querySelector('a').classList.remove('active')
          }
          a.classList.add('active')
        })
      }

    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector('.aside');
    navTogglerBtn.addEventListener('click', ()=>{
      asideSectionTogglerBtn()
    } )
    function asideSectionTogglerBtn() {
      aside.classList.toggle('open')
      navTogglerBtn.classList.toggle('open')
      for(let i=0 ; i<totalSectionList; i++){
        sectionList[i].classList.toggle('open')
      }
    }