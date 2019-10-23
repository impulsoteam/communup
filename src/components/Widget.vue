<template>
  <div class="column col-6 q-pa-md" style="max-width: 932px">
    <h4 class="text-h4 text-grey-8 q-mb-none text-weight-bold">{{ title }}</h4>
    <p class="text-body1 text-grey-7 q-mt-none q-mb-md text-weight-medium">
      {{ subTitle }}
      <slot name="subTitle" />
    </p>

    <slot />
  </div>
</template>

<script>
export default {
  name: 'Widget',
  props: {
    title: { type: String, required: true },
    subTitle: { type: String, default: '' },
  },
};
</script>
