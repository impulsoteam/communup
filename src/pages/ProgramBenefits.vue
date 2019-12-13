<template>
  <q-page class="column items-center">
    <banner
      classes="program-benefits-page"
      title="Benefícios oferecidos"
      sub-title="O que você ganha por estar no programa" />

    <widget title="Benefícios dos C-EXPERTS" sub-title="Os mimos de um expert ❤️">
      <p class="text-body1 text-grey-7 q-my-none">
        <span>😱</span> Participar do board público de experts em community
        manager ao lado de pessoas incríveis que contribuem para as comunidades.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>💃🏼</span> Reconhecimento nas redes sociais
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>🗣</span> Mentoria de oratória gratuita
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>🍻</span> Possibilidade de se tornarem Network Ambassadors
        (Acesso a Clube de benefícios com descontos que vão desde descontos
        em livros até em passagens de avião, Pluralsight Premium e
        custo de viagens para palestrar cobertos por nós)
      </p>
    </widget>

    <widget
      title="Atribuição dos C-EXPERTS"
      sub-title="Suas responsabilidades como C-EXPERTS">
      <p class="text-body1 text-grey-7 q-my-none">
        <span>📺</span> Ter um ou mais períodos do mês disponibilizados
        para mentorias para outros líderes de comunidade (no mínimo 2h no mês).
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>👍</span> Divulgar ativamente o projeto Communup sempre que possível.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>😘</span> Divulgar outras iniciativas relacionadas como o
        <a href="comunidades.tech">comunidades.tech</a> nas suas redes.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>⚡️</span> Fazer alinhamentos sobre as mentorias conosco
        mensalmente na data e horário que escolher.
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>🔥</span> Seguir os processos e utilizar as ferramentas
        definidas pelo projeto.
      </p>
    </widget>

    <widget
      title="Como se tornar um C-EXPERT"
      sub-title="Como entrar como expert nesse programa maravilhoso">
      <p class="text-body1 text-grey-7 q-my-none">
        <span>👉</span> Indicação de um atual C-Expert
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>🙆‍️</span> Votação pública
      </p>
      <p class="text-body1 text-grey-7 q-my-none">
        <span>💪</span> Submissão direta pelo site
      </p>
      <p class="text-body1 text-grey-9 q-my-none q-mt-md text-weight-medium">
        *Em todos os casos mencionados acima, o candidato preencherá um
        form e posteriormente passará por uma entrevista com um/uma
        atual C-EXPERT antes de fazer parte desse projeto incrível.
      </p>
    </widget>
  </q-page>
</template>

<script>
import Banner from '../components/Banner';
import Widget from '../components/Widget';

export default {
  name: 'ProgramBenefits',
  components: { Banner, Widget },
};
</script>
