<template>
  <div>
    <div>
      <AppSectionNewsIndividual
        v-for="(item, index) in newsArr"
        :key="index"
        :news-name-image="item.nameImage"
        :news-title="item.title"
        :news-content="item.content"
        :news-date="item.date"
        :news-color="item.color"
        :news-segmento="segmentoFormated(item.segmento)"
      />
    </div>
  </div>
</template>

<script>
import AppSectionNewsIndividual from "./AppSectionNewsIndividual";

export default {
  data() {
    return {
      newsArr: [
        {
          nameImage: "🚀",
          title:
            "Foguete Starship da SpaceX Realiza Pouso Suave no Oceano Índico",
          content:
            "A SpaceX realizou com sucesso o quarto teste de voo do Starship, o maior foguete já construído. Pela primeira vez, tanto o propulsor Super Heavy quanto a nave Starship executaram pousos controlados no oceano. O teste marca avanço crucial no desenvolvimento do sistema de transporte reutilizável destinado a futuras missões lunares e marcianas da NASA. O voo incluiu testes de reentrada atmosférica e demonstração de transferência de propelente em órbita, tecnologias essenciais para missões de longa duração.",
          date: new Date("2024-06-06T16:30:00"),
          color: "bg-gray-800",
          segmento: "Tecnologia Espacial",
        },
        {
          nameImage: "🏥",
          title:
            "OMS Anuncia Vacina Universal Contra Gripe com 97% de Eficácia em Testes",
          content:
            "Cientistas desenvolvem vacina mRNA que protege contra todos os 20 subtipos conhecidos de influenza. Pesquisa publicada na Science mostra resposta imunológica robusta em modelos animais, abrindo caminho para ensaios clínicos em humanos. A nova tecnologia poderia eliminar a necessidade de vacinação anual e prevenir futuras pandemias de gripe. A abordagem utiliza nanopartículas lipídicas semelhantes às das vacinas COVID-19.",
          date: new Date("2024-05-22T09:45:00"),
          color: "bg-blue-600",
          segmento: "Saúde",
        },
        {
          nameImage: "💻",
          title: "Apple Anuncia Apple Intelligence com Integração de ChatGPT",
          content:
            "Durante a WWDC 2024, Apple revelou seu sistema de IA integrado ao iOS 18, macOS Sequoia e iPadOS 18. A parceria com a OpenAI trará o ChatGPT ao Siri e a aplicativos de produtividade. Recursos incluem reescrita de textos, geração de imagens e processamento contextual em tempo real. A empresa enfatizou privacidade com processamento local no dispositivo e Private Cloud Compute para tarefas mais complexas.",
          date: new Date("2024-06-10T14:20:00"),
          color: "bg-gradient-to-r from-gray-700 to-gray-900",
          segmento: "Inteligência Artificial",
        },
        {
          nameImage: "🌍",
          title:
            "Acordo Global para Reduzir Poluição Plástica é Aprovado por 175 Países",
          content:
            "Na UNEA-6 em Nairobi, nações adotaram resolução histórica para desenvolver tratado juridicamente vinculante até 2025. O acordo incluirá metas de redução de produção de plástico virgem, incentivos à economia circular e controle de produtos químicos tóxicos. Micropartículas plásticas serão regulamentadas pela primeira vez. O tratado afetará indústrias de embalagens, têxtil e automotiva globalmente.",
          date: new Date("2024-03-02T11:15:00"),
          color: "bg-green-600",
          segmento: "Meio Ambiente",
        },
        {
          nameImage: "💸",
          title:
            "BC e FED Mantêm Juros Altos para Conter Inflação Persistentemente Elevada",
          content:
            "Banco Central brasileiro mantém Selic em 10,50% enquanto Federal Reserve americano segue com taxa entre 5,25-5,50%. Decisões refletem preocupação com núcleo inflacionário resistente e demanda aquecida. Mercados ajustam expectativas de cortes para 2025 em meio a sinais de resiliência econômica global. Especialistas alertam para impactos no crédito imobiliário e no custo das dívidas governamentais.",
          date: new Date("2024-06-12T16:00:00"),
          color: "bg-yellow-600",
          segmento: "Economia",
        },
        {
          nameImage: "⚽",
          title:
            "Copa América 2024: Brasil e Argentina Favoritos em Grupo Diferentes",
          content:
            "O torneio continental começa em 20 de junho nos EUA com formato revisado. Brasil, sem Neymar, conta com jovens talentos como Endrick e Vini Jr. Argentina busca bicampeonato com Messi em provável despedida. Equipes concorrentes incluirão Uruguai, Colômbia e EUA como anfitrião. Novas regras de arbitragem com VAR aprimorado serão implementadas.",
          date: new Date("2024-06-01T10:30:00"),
          color: "bg-gradient-to-r from-green-700 to-yellow-500",
          segmento: "Esportes",
        },
        {
          nameImage: "🎬",
          title: "Furiosa: Uma Saga Mad Max Domina Bilheterias Globais",
          content:
            "Prequela da franquia Mad Max arrecadou US$ 160 milhões em estreia mundial. Com direção de George Miller, filme estrelado por Anya Taylor-Joy e Chris Hemsworth recebeu aclamação crítica por coreografias de ação e worldbuilding. A produção australiana utilizou 200 veículos customizados e efeitos práticos em 80% das cenas. Já é considerado forte candidato ao Oscar de efeitos visuais.",
          date: new Date("2024-05-24T19:20:00"),
          color: "bg-orange-700",
          segmento: "Entretenimento",
        },
        {
          nameImage: "📱",
          title: "Samsung Anuncia Dobráveis com IA e Tela Anti-Reflexo",
          content:
            "A linha Galaxy Z Fold 6 e Flip 6 traz processadores Snapdragon 8 Gen 3 e integração profunda com Galaxy AI. Nova camada Ultra-Thin Glass reduz vincos visíveis, enquanto revestimento anti-reflexo aumenta visibilidade em ambientes externos. Preços começam em US$ 999 com garantia estendida para dobramento. A Samsung projeta crescimento de 30% no mercado de dobráveis em 2024.",
          date: new Date("2024-07-10T13:00:00"),
          color: "bg-indigo-700",
          segmento: "Tecnologia Móvel",
        },
      ],
    };
  },
  components: {
    AppSectionNewsIndividual,
  },
  methods: {
    segmentoFormated(value) {
      return value.toLowerCase().replace(" ", "-");
    },
  },
  props: {
    newsFilter: String,
  },
  created() {
    const segmentos = [
      ...new Set(this.newsArr.map((noticia) => noticia.segmento)),
    ];
    
    this.$emit("array-segmento", segmentos);
  
  },
};
</script>
<style scoped>
</style>