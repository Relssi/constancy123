
import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Bell, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Calendar, 
  Smartphone,
  MessageCircle,
  Target,
  BarChart3
} from 'lucide-react';
import { Benefit, FAQItem, Testimonial, Ingredient } from './types';

export const BENEFITS: Benefit[] = [
  {
    title: "Evita recaídas",
    description: "Ingredientes que ajudam a reduzir impulsos fora de hora e evitar saídas da rotina.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Suporta foco e energia",
    description: "Dias mais produtivos com energia estável, sem picos nem quedas.",
    icon: <Zap className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Te lembra do compromisso",
    description: "Mesmo quando a motivação falha, você tem um sistema te apoiando.",
    icon: <Bell className="w-6 h-6 text-blue-500" />
  }
];

export const COMPARISON_NO = [
  "Não é emagrecedor",
  "Não substitui alimentação equilibrada",
  "Não promete disciplina automática",
  "Não gera resultado sem consistência"
];

export const COMPARISON_YES = [
  "Um suplemento funcional de uso diário",
  "Um apoio para manter sua rotina alimentar por mais tempo",
  "Um recurso para reduzir distrações e desvios frequentes",
  "Um reforço leve quando a fome e o impulso costumam quebrar a sua decisão",
  "Um apoio funcional para ajudar a controlar impulsos alimentares fora de hora"
];

export const USAGE_STEPS = [
  {
    num: "01",
    title: "Tome 2 cápsulas por dia, pela manhã",
    desc: "Uso preferencial pela manhã, com água, após a primeira refeição. A constância diária é o principal. Especialmente nos horários em que você costuma sentir fome mesmo sem necessidade real.",
    psych: "Estabelece um marco físico no início do dia para lembrar do seu compromisso.",
    func: "Ajuda a reduzir impulsos alimentares fora de hora ao longo do dia."
  },
  {
    num: "02",
    title: "Siga sua rotina alimentar habitual",
    desc: "Você continua com seu próprio plano. CONSTANCY atua em paralelo, como reforço para manter a prática.",
    psych: "Reduz a sensação de sobrecarga ao repetir decisões e escolhas.",
    func: "Dá suporte aos níveis de energia durante o dia."
  },
  {
    num: "03",
    title: "Use o app gratuito como suporte leve",
    desc: "Ferramenta opcional para registrar metas, acompanhar o uso e observar padrões.",
    psych: "Ajuda a manter organização mínima sem exigir controle rígido.",
    func: "Gera clareza visual sobre seu progresso real."
  }
];

export const INGREDIENTS: Ingredient[] = [
  { name: "Cromo", benefit: "Auxilia o metabolismo" },
  { name: "Cafeína", benefit: "Contribui para foco e energia" },
  { name: "Guaraná", benefit: "Estímulo natural ao longo do dia" },
  { name: "Extrato de Laranja Moro", benefit: "Fonte de antioxidantes" },
  { name: "Vitaminas A, C e E", benefit: "Suporte antioxidante e metabólico" }
];

export const FAQS: FAQItem[] = [
  {
    question: "Como devo tomar?",
    answer: "Recomendamos a ingestão de 2 cápsulas por dia, preferencialmente pela manhã após a primeira refeição para melhor absorção dos nutrientes e suporte ao longo de todo o dia."
  },
  {
    question: "Quanto tempo até perceber diferença?",
    answer: "Embora os resultados variem, a maioria dos usuários relata uma sensação de maior controle sobre impulsos e energia mais estável já na primeira semana de uso contínuo."
  },
  {
    question: "Funciona sem dieta?",
    answer: "CONSTANCY é um suporte para manter sua rotina. Ele funciona melhor quando integrado a um estilo de vida saudável, servindo como a ferramenta que ajuda você a não desviar do seu plano alimentar."
  },
  {
    question: "Tem efeitos colaterais?",
    answer: "CONSTANCY é composto por ingredientes seguros e aprovados pela ANVISA. No entanto, por conter cafeína e guaraná, pessoas sensíveis a estimulantes devem consultar um médico."
  },
  {
    question: "Como funciona o app?",
    answer: "O app é uma ferramenta de apoio onde você pode registrar suas tomadas diárias, receber lembretes inteligentes e acompanhar sua evolução visualmente para manter a motivação alta."
  },
  {
    question: "Quanto tempo dura um pote?",
    answer: "Cada pote contém 60 cápsulas, o que corresponde ao suprimento para 30 dias de uso contínuo (2 cápsulas por dia)."
  },
  {
    question: "O produto tem contraindicação?",
    answer: "Não é recomendado para gestantes, lactantes e crianças. Pessoas com condições médicas pré-existentes devem sempre consultar um médico ou nutricionista antes do uso."
  },
  {
    question: "Como recebo o suplemento?",
    answer: "Enviamos para todo o Brasil com entrega rastreada. O prazo varia conforme sua região, mas geralmente a postagem ocorre em até 24h após a confirmação do pagamento."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Comecei a tomar sem muita expectativa, mas me ajudou a manter o ritmo.",
    author: "Lucas",
    age: "31 anos"
  },
  {
    text: "O app me fez perceber quantos dias eu já estava mantendo. Isso dá força.",
    author: "Ana Paula",
    age: "34 anos"
  },
  {
    text: "Duas cápsulas, pronto. Menos coisa para pensar, mais fácil de sustentar.",
    author: "Fernanda",
    age: "29 anos"
  }
];