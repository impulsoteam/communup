<template>
  <q-page class="column items-center">
    <banner
      classes="find-cexpert-page"
      title="Encontre um C-EXPERT"
      sub-title="Veja quem é expert em liderança de comunidades" />
    <div class="row justify-center full-width q-mt-xl">
      <div class="col-md-6 col-12 q-px-md">
        <q-input
          v-model="search"
          debounce="500"
          filled
          placeholder="Pesquisar">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>

    <div class="row q-my-xl">
      <avatar
        v-for="cexpert in cexpertsFiltered"
        :key="cexpert.name"
        :photo-url="cexpert.photoUrl"
        :name="cexpert.name"
        :short-description="cexpert.shortDescription" />
    </div>
  </q-page>
</template>

<script>
import Banner from '../components/Banner';
import Avatar from '../components/Avatar';
import cexperts from '../content/cexperts';

export default {
  name: 'FindCExpert',
  components: { Banner, Avatar },
  data: () => ({
    search: '',
    cexperts,
  }),
  computed: {
    cexpertsFiltered() {
      const term = new RegExp(this.search, 'ig');
      return this.cexperts.filter(experts => term.test(experts.name));
    },
  },
};
</script>
