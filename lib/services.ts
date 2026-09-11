import type { IconName } from "./icons";

export type Service = {
  name: string;
  category: string;
  icon: IconName;
  description: string;
};

export const CATEGORIES = [
  "Todos",
  "Veículos",
  "Residencial e Imobiliário",
  "Empresas",
  "Eletrônicos",
  "Viagem e Lazer",
  "Saúde e Bem-estar",
  "Crédito",
  "Consórcios",
] as const;

export const SERVICES: Service[] = [
  { name: "Auto", category: "Veículos", icon: "car", description: "Cobertura completa para o seu carro: colisão, roubo, furto, incêndio, terceiros, carro reserva e assistência 24 horas. Comparamos as principais seguradoras para equilibrar preço e cobertura." },
  { name: "Auto Jovem", category: "Veículos", icon: "carYoung", description: "Condições pensadas para condutores jovens e recém-habilitados, com franquias e coberturas ajustadas ao perfil e telemetria opcional para reduzir o prêmio." },
  { name: "Carros Seminovos", category: "Veículos", icon: "carTag", description: "Proteção para veículos seminovos e usados, incluindo opções de cobertura parcial (roubo, furto e incêndio) para quem busca custo reduzido." },
  { name: "Bike", category: "Veículos", icon: "bike", description: "Seguro para bicicletas e e-bikes contra roubo, furto qualificado, danos acidentais e responsabilidade civil, válido também em competições e viagens." },
  { name: "Transportes", category: "Veículos", icon: "truck", description: "Seguro de cargas (RCTR-C, RCF-DC) para transportadoras e embarcadores, com cobertura de avarias, desvios e operações intermodais." },
  { name: "Concessionárias", category: "Veículos", icon: "dealer", description: "Proteção para o estoque de veículos, pátio, test-drive e responsabilidade civil de concessionárias e revendas." },
  { name: "Imobiliária", category: "Residencial e Imobiliário", icon: "house", description: "Seguro residencial e predial para imóveis próprios, alugados ou administrados: incêndio, danos elétricos, vendaval, roubo e assistência 24h." },
  { name: "Fiança Locatícia", category: "Residencial e Imobiliário", icon: "key", description: "Alternativa ao fiador e ao depósito caução. Garante aluguel, encargos e danos ao imóvel, agilizando a aprovação da locação." },
  { name: "Seguro Empresa", category: "Empresas", icon: "building", description: "Proteção patrimonial completa para a sua operação: incêndio, vendaval, danos elétricos, roubo, lucros cessantes e responsabilidade civil." },
  { name: "Garantia", category: "Empresas", icon: "shield", description: "Seguro garantia para licitações, contratos públicos e privados, garantia judicial e performance bond, liberando capital de giro." },
  { name: "Perfumarias", category: "Empresas", icon: "bottle", description: "Cobertura específica para lojas de perfumaria e cosméticos: estoque, vitrine, quebra, roubo e responsabilidade civil do estabelecimento." },
  { name: "Transportes / Frotas", category: "Empresas", icon: "truck", description: "Gestão de seguro para frotas com apólice única, condições negociadas por volume e acompanhamento de sinistralidade." },
  { name: "Notebook", category: "Eletrônicos", icon: "laptop", description: "Proteção para notebooks contra roubo, furto qualificado, queda, líquidos e danos elétricos, com cobertura dentro e fora do país." },
  { name: "Celular e Tablet", category: "Eletrônicos", icon: "phone", description: "Seguro para smartphones e tablets cobrindo tela quebrada, danos acidentais, roubo e furto, com reparo ou reposição rápida." },
  { name: "Viagem", category: "Viagem e Lazer", icon: "plane", description: "Assistência médica internacional, bagagem extraviada, cancelamento de viagem e cobertura exigida pelo Tratado de Schengen." },
  { name: "Seguro Saúde", category: "Saúde e Bem-estar", icon: "health", description: "Planos de saúde individuais, familiares e empresariais. Comparamos redes credenciadas, carências e reembolsos para encontrar o plano com a melhor relação entre cobertura e mensalidade." },
  { name: "Saúde Ocupacional", category: "Saúde e Bem-estar", icon: "shield", description: "Gestão de saúde ocupacional para empresas: exames admissionais e periódicos, PCMSO e PGR em conformidade com as normas regulamentadoras." },
  { name: "Petlove Saúde", category: "Saúde e Bem-estar", icon: "paw", description: "Plano de saúde para cães e gatos com consultas, exames, vacinas, internações e cirurgias em uma rede credenciada de clínicas." },
  { name: "Consignado", category: "Crédito", icon: "wallet", description: "Crédito consignado para servidores, aposentados e pensionistas, com as menores taxas do mercado e desconto direto em folha." },
  { name: "Consórcio", category: "Consórcios", icon: "cycle", description: "Consórcio de automóveis, imóveis, motos e serviços. Sem juros, com parcelas planejadas e possibilidade de lance para antecipar a contemplação." },
];

export function findService(name: string): Service | undefined {
  return SERVICES.find((s) => s.name === name);
}
