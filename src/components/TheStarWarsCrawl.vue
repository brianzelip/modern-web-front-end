<template>
  <div class="star-wars-intro">
    <!-- Blue Intro Text -->
    <p class="intro-text">A few weeks ago, in an academic health sciences library...</p>

    <!-- All Scrolling Content Goes in here -->
    <div class="main-content">
      <div class="title-content">
        <p class="content-header">Select a data category above</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.star-wars-intro {
  width: 100%;
  height: 100%;
  color: #cb8e14;
  overflow: hidden;
  position: relative;
}

.star-wars-intro p.intro-text {
  position: relative;
  max-width: 16em;
  font-size: 200%;
  font-weight: 400;
  margin: 20% auto;
  color: #4ee;
  opacity: 0;
  z-index: 1;
  text-align: center;
  -webkit-animation: intro 2s ease-out;
  -moz-animation: intro 2s ease-out;
  -ms-animation: intro 2s ease-out;
  -o-animation: intro 2s ease-out;
  animation: intro 2s ease-out;
}

.star-wars-intro .main-content {
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  z-index: 3;
  width: 98%;
  height: 50em;
  bottom: 0;
  font-size: 80px;
  font-weight: bold;
  text-align: justify;
  overflow: hidden;
  transform-origin: 50% 100%;
  transform: perspective(350px) rotateX(25deg);
}

.star-wars-intro .main-content:after {
  position: absolute;
  content: " ";
  top: 0;
  bottom: 60%;
  background-image: linear-gradient(top, rgba(0, 0, 0, 1) 0%, transparent 100%);
  pointer-events: none;
}

.star-wars-intro .title-content {
  position: absolute;
  top: 100%;
  animation: scroll 120s linear 4s forwards;
}

.star-wars-intro .title-content > .content-header {
  text-align: center;
}

@-webkit-keyframes intro {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes intro {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-ms-keyframes intro {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes intro {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes intro {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes logo {
  0% {
    -webkit-transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.1);
    opacity: 0;
  }
}

@-moz-keyframes logo {
  0% {
    -moz-transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    -moz-transform: scale(0.1);
    opacity: 0;
  }
}

@-ms-keyframes logo {
  0% {
    -ms-transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    -ms-transform: scale(0.1);
    opacity: 0;
  }
}

@-o-keyframes logo {
  0% {
    -o-transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    -o-transform: scale(0.1);
    opacity: 0;
  }
}

@keyframes logo {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(0.1);
    opacity: 0;
  }
}

@keyframes scroll {
  0% {
    top: 100%;
  }
  100% {
    top: -170%;
  }
}

@media screen and (max-width: 720px) {
  .star-wars-intro .main-content {
    font-size: 35px;
  }
  .star-wars-intro .title-content {
    position: absolute;
    top: 100%;
    animation: scroll 100s linear 4s forwards;
  }
}
</style>
