<template>
  <shinhan-navigation-bar></shinhan-navigation-bar>
    <div>
    <div>
        <p>
        <span class="title" style="margin-top:50px; text-align: center; position: relative; width: 100%;">친환경 걷기</span><br />
        <span class="sub" style="margin-top: 0px; text-align: center; position: relative; width:100%;">만 걸음 걷기 달성한 날을 확인할 수 있습니다.</span>
        </p>
        </div>
    <div class="img"
        style="margin-top: 40px; text-align: center; position: relative;">
        <div v-if="type === 'coin'"></div>
        <img
          src="../assets/calendar/coin.png"
          width="100"
          height="90"
          alt=""/>
        <div style="margin-top: 20px; text-align: center; position: relative;">
        <div v-if="type === 'calendar'"></div>
        <img
          src="../assets/calendar/calendar.png"
          width="420"
          height="370"
          alt=""/>
    </div>
  </div>

  <div style="position: absolute; top: 729px; left: 0px;width: 373px; height: 50px; background-color: white"></div>
  <div style="position: absolute; top: 441px; right: 0px;width: 373px; height: 17px; background-color: white"></div>
  </div>
</template>

<script>
 import GreenBar from "../components/GreenBar.vue";
 import ShinhanNavigationBar from "../components/ShinhanNavigationBar.vue";
    export default {
        components: { GreenBar, ShinhanNavigationBar }
    };
</script>
<style scoped>

.title {
  display: inline-block;
  font-weight: bold;
  font-size: 32px;
  position: center;
}
.sub {
  display: inline-block;
  font-weight: light;
  font-size: 15px;
  position: center;
}

</style>