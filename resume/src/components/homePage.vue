<template>
  <div class="hello">
    <!--music-->
    <div class="music" :class='{move:move}' @click="rotate">
      <audio ref="audio" :src="audioUrl" preload="none" loop></audio>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'homePage',
  data () {
    return {
      move:false,
      audioUrl:'../static/audio/1.m4a'
    }

  },
  methods:{
    rotate(){
      this.move=!this.move
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        return;
      }
      this.$refs.audio.pause();

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
