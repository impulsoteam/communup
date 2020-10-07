<template>
  <q-page class="column items-center">
    <banner
      classes="index-page"
      title="Communup"
      sub-title="Impulsionando Comunidades de Tecnologia" />

    <widget title="O que é" sub-title="Como surgiu tudo isso?">
      <p class="text-body1 text-grey-7 q-my-none">
        Communup é um projeto da comunidade para a própria comunidade visando
        acelerar o crescimento desses grupos de tecnologia que incrivelmente
        potencializam seus ecossistemas e disseminam conhecimento ('no bullshit'),
        sem distinção de público, propagando a igualdade (em diversos aspectos).
        <br>
        <br>
        O projeto oferece aos que precisam de auxílio na criação/organização
        de comunidades (presenciais ou remotas) acesso a mentoria com
        referências no assunto, que colocam a mão na massa há anos,
        carinhosamente denominados de C-EXPERTS (Community Experts)
        e que poderão compartilhar com você suas experiências e conhecimentos.
        <br>
        <br>
        A partir dessa mentoria, sua comunidade pode ser beneficiada com
        muitos auxílios que podem ir de ajuda financeira para coffee,
        contato de palestrantes próximo de você, criação de artes de divulgação
        para sua comunidade, até equipamento para transmissão de meetups online
        (e muito mais, dependendo da sua necessidade).
      </p>
    </widget>

    <widget
      title="Mentorias e feedbacks 1-1"
      sub-title="Aprenda como fazer a sua comunidade crescer.">
      <div class="row justify-center">
        <avatar
          class="q-my-md"
          v-for="cexpert in randomCExperts"
          :key="cexpert.name"
          :photo-url="cexpert.photoUrl"
          :name="cexpert.name"
          :scheduled-once-url="cexpert.scheduledOnceUrl"
          :short-description="cexpert.shortDescription"/>
      </div>
    </widget>

    <widget
      title="Plano de apoio"
      sub-title="O que você como comunidade ganha">
      <h5 class="text-h5 text-grey-8 text-weight-medium q-mb-sm">Garantido gratuitamente</h5>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>🗣</span> Mentorias/Orientação com C-EXPERTS.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>🎯</span> Link de referral para a comunidade
        (retorno financeiro para conversões através de indicações).
      </p>
      <q-space />
      <h5 class="text-h5 text-grey-8 text-weight-medium q-mb-sm">
        Após análise das necessidades, podemos contribuir gratuitamente com
      </h5>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>⚽️</span> Patrocínios.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>🏓</span> Brindes: Canecas, bottons, adesivos, cordões, camisetas, etc
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>😎</span> Divulgação de Streams em nossas redes e para a
        nossa comunidade com mais de 39k profissionais de tech.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>🕺</span> Divulgação de eventos presenciais segmentada
        (por localização) para a nossa comunidade.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>🎥</span> Equipamento para Stream de meetups.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>💻</span> Auxílio com criação de artes e identidade
        visual para eventos.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>🥈</span> 1 mês de acesso ao clube de benefícios prata.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>⚡️</span> Contato com palestrantes.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>💬</span> Canal exclusivo no Rocket.chat para sua comunidade.
      </p>
    </widget>

    <div class="column col-6 q-pa-md" style="max-width: 932px">
      <q-btn color="white" text-color="black" type="a" href="https://impulso.link/communup" target="_blank" label="Solicite uma mentoria" />
    </div>
  </q-page>
</template>

<script>
import Banner from '../components/Banner';
import Avatar from '../components/Avatar';
import Widget from '../components/Widget';
import cexperts from '../content/cexperts';

export default {
  name: 'Home',
  components: { Banner, Avatar, Widget },
  data: () => ({
    cexperts,
  }),
  computed: {
    randomCExperts() {
      const sortedExperts = [];

      while (sortedExperts.length < 3) {
        const randomNumber = (Math.random() * (cexperts.length - 1)).toFixed(0);
        const cexpert = cexperts[randomNumber];
        if (!sortedExperts.find(sex => sex.name === cexpert.name)) {
          sortedExperts.push(cexperts[randomNumber]);
        }
      }

      return sortedExperts;
    },
  },
};
</script>
