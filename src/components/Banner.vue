<template functional>
  <div
    :class="props.classes"
    class="column full-width banner-height items-center justify-center">
    <h1 class="text-h2 text-grey-1 q-ma-none text-weight-bold text-center">{{ props.title }}</h1>
    <h4 class="text-h5 text-grey-1 q-ma-none text-center">{{ props.subTitle }}</h4>
  </div>
</template>

<style lang="scss">
.banner-height {
  height: 350px;
  background-size: cover;
  position: relative;

  > h1, h4 {
    z-index: 2;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 350px;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
}

.index-page {
  background-image: url(~assets/main-banner.jpg);
  background-position: 25% 25%;
}
.find-cexpert-page {
  background-image: url(~assets/cexperts.jpg);
  background-position: 30% 30%;
}

.program-benefits-page {
  background-image: url(~assets/benefits.jpg);
  background-position: 30% 30%;
}
</style>
