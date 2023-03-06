<template>
  <div class="carousel flex item">
    <div class="carousel-inner">
      <carousel-indicators v-if="indicators" :total="slides.length" :current-index="currentSlide"
        @switch="switchSlide($event)"></carousel-indicators>
      <carousel-item v-for="(slide, index) in slides" :slide="slide" :key="`item-${index}`" :current-slide="currentSlide"
        :index="index" :direction="direction"></carousel-item>
      <carousel-controls v-if="controls" @prev="prev" @next="next"></carousel-controls>
    </div>
  </div>
</template>

<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";


export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
    controls: {
      type: Boolean,
      default: false,
    },
    indicators: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: false,
    },
  },
  components: { CarouselItem, CarouselControls },
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
  }),
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    prev(step = -1) {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";

    },
    _next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurrentSlide(index);
      this.direction = "right";
    },
    next(step = 1) {
      this._next(step);

    },

  },

};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
}

.carousel-inner {
  position: relative;
  width: 830px;
  height: 590px;
  overflow: hidden;
}

@media screen and (max-width:340px) {
  .carousel-inner {
    border: 2px solid red;
    position: relative;
    width: 830px;
    height: 230px;
    overflow: hidden;
  }
}
</style>
