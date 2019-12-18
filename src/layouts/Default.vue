<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-6">
        <q-btn
          flat
          dense
          round
          @click="toggleDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      behavior="mobile"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item @click.native="goFor('Index')" class="cursor-pointer">
          <q-item-section>
            <h1 class="text-h4 text-grey-9 text-uppercase text-weight-bold text-center">
              Communup
            </h1>
          </q-item-section>
        </q-item>
        <q-item clickable @click="goFor('FindCExpert')">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section class="text-uppercase text-grey-9">
            Encontre um cExpert
          </q-item-section>
        </q-item>
        <q-item clickable @click="goFor('ProgramBenefits')">
          <q-item-section avatar>
            <q-icon name="star" />
          </q-item-section>
          <q-item-section class="text-uppercase text-grey-9">
            Benefícios do C-EXPERT
          </q-item-section>
        </q-item>
        <q-item clickable @click="requestMentoring">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section class="text-uppercase text-grey-9">
            Solicite uma mentoria
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <custom-footer />
  </q-layout>
</template>

<script>
import Footer from '../components/Footer';

export default {
  name: 'DefaultLayout',
  components: { CustomFooter: Footer },
  data: () => ({
    leftDrawerOpen: false,
  }),
  methods: {
    toggleDrawerOpen() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
    goFor(where) {
      this.$router.push({ name: where });
      this.leftDrawerOpen = false;
    },
    requestMentoring() {
    window.open('https://impulso.link/communup', '_blank')
    },
  },
};
</script>
