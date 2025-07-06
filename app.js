
    // Initialize Particles
    particlesJS('particles-js',{
        particles:{
          number:{value:90,density:{enable:true,value_area:900}},
          color:{value:['#f7a8d1','#e7519d','#c92f82']},
          shape:{type:'circle'},
          opacity:{value:0.35,random:true},
          size:{value:3,random:true},
          line_linked:{enable:false},
          move:{enable:true,speed:1,direction:'none',out_mode:'out'}
        },
        interactivity:{detect_on:'canvas',events:{resize:true}},
        retina_detect:true
      });
  
      // Reveal animations
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){entry.target.style.animationDelay = entry.target.dataset.delay || '0s';entry.target.setAttribute('data-animate','');}
        });
      },{threshold:0.15});
      document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  
      // Typed effect (optional — kept single string for subtlety)
      new Typed('.role',{
        strings:['Computer & Communications Engineer'],
        typeSpeed:60,
        backSpeed:30,
        backDelay:4000,
        loop:true,
        showCursor:false
      });