<template>
  <div class="column items-center avatar-width">
    <q-avatar size="100px">
      <a :href="scheduledOnceUrl" target="_blank"><img :src="photoUrl" :alt="name"></a>
    </q-avatar>
    <h1 class="text-h5 text-grey-8 q-ma-none q-mt-md text-center text-weight-bold">{{ name }}</h1>
    <p class="text-body2 text-grey-7 q-ma-none text-center">{{ shortDescription }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    photoUrl: { type: String, required: true },
    shortDescription: { type: String, required: true },
    scheduledOnceUrl: { type: String, required: true },
    links: { type: Array, default: () => [] },
  },
};
</script>

<style lang="scss">
.avatar-width {
  max-width: 300px;
}
</style>
