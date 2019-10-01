<template>
  <q-page class="column items-center">
    <banner
      classes="index-page"
      title="Communup"
      sub-title="Impulsionando Comunidades de Tecnologia" />
    <div class="column col-6 q-pa-md">
      <h4 class="text-h5 text-grey-8 q-mb-none text-weight-bold">Metorias e feedbacks 1-1</h4>
      <p class="text-body1 text-grey-7 q-mt-none q-mb-xl text-weight-medium">
        Aprenda como fazer a sua comunidade crescer.
      </p>

      <div class="row justify-center">
        <avatar
          class="q-my-md"
          v-for="cexpert in cexperts"
          :key="cexpert.name"
          :photo-url="cexpert.photoUrl"
          :name="cexpert.name"
          :short-description="cexpert.shortDescription"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import Banner from '../components/Banner';
import Avatar from '../components/Avatar';
import cexperts from '../content/cexperts';

export default {
  name: 'Home',
  components: { Banner, Avatar },
  data: () => ({
    cexperts,
  }),
};
</script>
