// SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI
<!-- SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI -->
<!DOCTYPE html>
<html lang="en">
<head>
    <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&family=Roboto:wght@300;400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2196f3;
  overflow: hidden;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  width: 300px;
  height: 400px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  filter: blur(1px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: self-start;
}

.swiper-slide-active {
  filter: blur(0px);
}

.swiper-pagination-bullet,
.swiper-pagination-bullet-active {
  background: #fff;
}

.swiper-slide span {
  text-transform: uppercase;
  color: #fff;
  background: #1b7402;
  padding: 7px 18px 7px 25px;
  display: inline-block;
  border-radius: 0 20px 20px 0px;
  letter-spacing: 2px;
  font-size: 0.8rem;
  font-family: "Open Sans", sans-serif;
}

.swiper-slide--one span {
  background: #62667f;
}

.swiper-slide--two span {
  background: #087ac4;
}

.swiper-slide--three span {
  background: #b45205;
}

.swiper-slide--four span {
  background: #087ac4;
}

.swiper-slide h2 {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.4;
  margin-bottom: 15px;
  padding: 25px 45px 0 25px;
}

.swiper-slide p {
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: flex;
  align-items: center;
  padding: 0 25px 35px 25px;
}

.swiper-slide svg {
  color: #fff;
  width: 22px;
  height: 22px;
  margin-right: 7px;
}

.swiper-slide--one {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url(https://images.unsplash.com/photo-1556206079-747a7a424d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)
      no-repeat 50% 50% / cover;
}

.swiper-slide--two {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://images.unsplash.com/photo-1571900670723-a317a66e3fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80")
      no-repeat 50% 50% / cover;
}

.swiper-slide--three {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")
      no-repeat 50% 50% / cover;
}

.swiper-slide--four {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://images.unsplash.com/photo-1650367310179-e1b5b8e453c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")
      no-repeat 50% 50% / cover;
}

.swiper-slide--five {
  background: linear-gradient(to top, #0f2027, #203a4300, #2c536400),
    url("https://images.unsplash.com/photo-1596521864207-13d46b1a0c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")
      no-repeat 50% 50% / cover;
}

.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right {
  background-image: none;
}

    </style>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas Kai:wght@400&display=swap" />
  <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.0/jquery.fancybox.min.css" rel="stylesheet" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.0/jquery.fancybox.min.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.0/jquery.fancybox.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Freehand&family=Montserrat:wght@300&display=swap" rel="stylesheet">

<script>var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  </script>
</head>
<body>
    <h1>SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI</h1>
  <marquee style="font-family:Montserrat;color:white; background-color:black;"> Global Institute for Language & Personality </marquee>

  <header class="text-gray-600 body-font">
    <di class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg width="227" height="128" viewBox="0 0 227 128" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect x="0.197266" y="0.528076" width="226.056" height="127.284" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_1_16" transform="scale(0.0015015 0.00266667)" />
            </pattern>
            <image id="image0_1_16" width="666" height="375" xlink:href="data:image/png;base64,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" />
          </defs>
        </svg>
          
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900" href="SATNAM SHRI WAHEGURU JI SATNAM SHRI WAHEGURU JI.html" >Home</a>
        <a class="mr-5 hover:text-gray-900" href="about.html" >About us</a>
        <a class="mr-5 hover:text-gray-900" href="courses.html" >Courses</a>
        <a class="mr-5 hover:text-gray-900" href="cta.html" >Contact us</a>
      </nav>
      <button class="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base mt-4 md:mt-0 text-white" style="background-color: #24986C;">Get Prospectus</button>
      <svg fill="green" stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
      </button>
    </di>
  </header>
  <section>
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide--one">
          <span>domestic</span>
          <div>
            <h2>Enjoy the exotic of sunny Hawaii</h2>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Maui, Hawaii
            </p>
          </div>
        </div>
        <div class="swiper-slide swiper-slide--two">
          <span>subtropical</span>
          <div>
            <h2>The Island of Eternal Spring</h2>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Lanzarote, Spanien
            </p>
          </div>
        </div>
  
        <div class="swiper-slide swiper-slide--three">
          <span>history</span>
          <div>
            <h2>Awesome Eiffel Tower</h2>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Paris, France
            </p>
          </div>
        </div>
  
        <div class="swiper-slide swiper-slide--four">
          <span>Mayans</span>
          <div>
            <h2>One of the safest states in Mexico</h2>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              The Yucatan, Mexico
            </p>
          </div>
        </div>
  
        <div class="swiper-slide swiper-slide--five">
          <span>native</span>
          <div>
            <h2>The most popular yachting destination</h2>
            <p>
  
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Whitsunday Islands, Australia
            </p>
          </div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </section>


</body>
</html>