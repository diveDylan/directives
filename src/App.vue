<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div v-loading:loading...="divLoading" @click="logText ++" class="direct-wrap">log directives</div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { log, loading } from '@/directives/index'

export default {
  name: 'app',
  directives: {
    log,
    loading
  },
  components: {
    // HelloWorld
  },
  data() {
    return {
      logText: 1,
      divLoading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.divLoading = false
    }, 2000);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(255,255,255, .9);
}
.direct-wrap {
  width: 200px;
  height: 200px;
}
.relative {
  position: relative;
}
.loading-wrap:before, .loading-wrap:after {
  content: '';
  position: absolute;
  left: -3px;
  right: -3px;
  top: -3px;
  bottom: -3px;
  border: 3px solid #70b5e4;
  animation: loading infinite 2s linear;
}
 .loading-wrap:after {
   border: 3px solid #1814f1;
   animation: loading infinite 2s linear reverse;
 }

@keyframes loading {
  0%, 100% {
     clip: rect(0 206px 3px 0px);
  }
  25% {
     clip: rect(0 206px 206px 203px);
  }
  50% {
     clip: rect(203px 206px 206px 0px);
  }
  75% {
    clip: rect(0px 3px 206px 0px);
  }
}
</style>
