<template>
  <div id="app">
    <div class="wrapper">
      <div class="scape"></div>
    </div>
    <div class="mask"></div>
    <img src="./assets/PC.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "XiongRan20220508",
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const httpReq = new XMLHttpRequest();
      httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4 && httpReq.status == 200) {
          const res = httpReq.response;
          console.log("res", res);
        }
      };
      httpReq.open(
        "GET",
        "/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=garena&bk_length=600"
      );
      httpReq.send();
    },
  },
};
</script>

<style>
html,
body {
  padding: 0 !important;
  margin: 0 !important;
}
#app {
  height: 100vh;
}
#app img {
  display: none;
}
.wrapper {
  height: inherit;
  display: none;
}
.scape {
  display: none;
  width: 200px;
  height: 200px;
  background: url(./assets/scape.png) center center no-repeat;
  background-size: auto 100%;
}
.mask {
  height: inherit;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
}

@media (max-width: 768px) and (orientation: portrait) {
  .scape {
    display: block;
    animation: rotateFunc 1s;
    animation-iteration-count: infinite;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes rotateFunc {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .mask {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
  }
}

@media screen and (min-width: 992px) {
  #app {
    width: 100%;
  }
  #app img {
    display: block;
    width: inherit;
    content: url(./assets/PC.jpg);
  }
}

@media screen and (min-width: 769px) and (max-width: 992px) {
  #app {
    width: 100%;
  }
  #app img {
    display: block;
    width: inherit;
    content: url(./assets/ipad.jpg);
  }
}

@media screen and (max-height: 600px) and (orientation: landscape) {
  #app {
    width: 100%;
  }
  #app img {
    display: block;
    width: inherit;
    content: url(./assets/mobile.png);
  }
}
</style>
