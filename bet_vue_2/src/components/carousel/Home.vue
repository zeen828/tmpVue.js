<template>
  <div id="component-carousel-home" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-interval="2000">
          <img src="https://share.jonbotech.com/racing/static/images/banner/banner.jpg" class="d-block w-100" alt="1">
      </div>
      <div class="carousel-item" data-interval="2000">
        <img src="https://share.jonbotech.com/racing/static/images/banner/banner.jpg" class="d-block w-100" alt="2">
      </div>
      <div class="carousel-item" data-interval="2000">
        <img src="https://share.jonbotech.com/racing/static/images/banner/banner.jpg" class="d-block w-100" alt="3">
      </div>
    </div>
    <a class="carousel-control-prev" href="#component-carousel-home" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#component-carousel-home" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
// 輪播-首頁
export default {
  name: 'Component-Carousel-Home'
}
</script>
