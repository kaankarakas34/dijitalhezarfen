export const articleCategories = [
  { id: 'hepsi', label: { tr: 'Tümü', en: 'All' } },
  { id: 'rapor', label: { tr: 'Analizler', en: 'Analyses' } },
  { id: 'rehber', label: { tr: 'Rehberler', en: 'Guides' } },
  { id: 'haber', label: { tr: 'Haberler', en: 'News' } },
  { id: 'medya', label: { tr: 'Medya', en: 'Media' } }
];

export const articles = [
  {
    slug: 'bilgisayar-kavrami-degisiyor',
    category: 'rapor',
    title: {
      tr: 'Bilgisayar Kavramı Değişiyor: Operating System’dan Intelligence System’a',
      en: 'The Concept of the Computer Is Changing: From Operating System to Intelligence System'
    },
    desc: {
      tr: 'Googlebook lansmanı, Gartner’ın Agentic AI PC analizi, Microsoft AgentOS ve Apple’ın yerel compute hamlesi ışığında: Bilgisayar küçülmüyor, donanımdan görünmez bir kişisel zeka ağına (Personal Intelligence) dönüşüyor.',
      en: 'In light of Googlebook, Gartner’s Agentic AI PC research, Microsoft AgentOS, and Apple’s local compute thesis: the computer isn’t merely shrinking—it is evolving into an ambient Personal Intelligence network.'
    },
    date: {
      tr: '23 Eylül 2026',
      en: 'September 23, 2026'
    },
    readTime: {
      tr: '22 dk okuma',
      en: '22 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/bilgisayar-kavrami-degisiyor.png',
    imageAlt: 'Bilgisayar Kavramı Değişiyor: Kişisel bilgisayarlardan otonom Personal Intelligence ve ambient compute ağına geçiş',
    source: '/articles/bilgisayar-kavrami-degisiyor.txt',
    publishedAt: '2026-09-23T09:00:00+03:00',
    modifiedAt: '2026-09-23T11:40:00+03:00',
    keywords: [
      'Googlebook',
      'Gemini Intelligence',
      'Agentic AI PC',
      'Personal Intelligence',
      'Personal Compute Network',
      'Intent-Based Computing',
      'No-interface bilgisayar',
      'Agentic Arbitrage',
      'AgentOS',
      'Local Edge Cloud',
      'Compute as a Service',
      'AX Agent Experience',
      'Metered Intelligence',
      'AI Memory Portability',
      'Intent Security'
    ],
    color: 'from-cyan-500/25 to-blue-500/15',
    accent: 'text-cyber-cyan',
    featured: true,
    sources: [
      {
        label: 'Google — Introducing Googlebook, designed for Gemini Intelligence',
        url: 'https://blog.google/products/googlebook/introducing-googlebook-gemini/'
      },
      {
        label: 'Google — Googlebook: The laptop your Android phone has been waiting for',
        url: 'https://blog.google/products/googlebook/pre-orders-android-ecosystem/'
      },
      {
        label: 'Google — Googlebook\'s built-in intelligence reinvents the way you use your laptop',
        url: 'https://blog.google/products/googlebook/magic-pointer-built-in-intelligence/'
      },
      {
        label: 'Reuters — Google opens pre-orders for $899 Googlebook laptops built around Gemini AI',
        url: 'https://www.reuters.com/technology/google-opens-pre-orders-899-googlebook-laptops-gemini-ai-2026-09-21/'
      },
      {
        label: 'Gartner — Personal Agents Define the Next Era of Agentic AI PCs',
        url: 'https://www.gartner.com/en/documents/personal-agents-agentic-ai-pcs-2026'
      },
      {
        label: 'Gartner — $234 Billion in Enterprise Application Software Spend Is at Risk from Agentic AI',
        url: 'https://www.gartner.com/en/newsroom/press-releases/2026-07-01-gartner-says-enterprise-software-spend-at-risk-agentic-ai'
      },
      {
        label: 'Bill Gates — AI-powered agents are the future of computing',
        url: 'https://www.gatesnotes.com/AI-agents'
      },
      {
        label: 'Microsoft Research — UFO²: The Desktop AgentOS',
        url: 'https://www.microsoft.com/en-us/research/publication/ufo2-the-desktop-agentos/'
      },
      {
        label: 'TechCrunch — Carl Pei says smartphone apps will disappear as AI agents take their place',
        url: 'https://techcrunch.com/2026/03/18/nothing-carl-pei-apps-disappear-ai-agents/'
      },
      {
        label: 'Reuters — With new Macs, Apple aims to take on Microsoft, Nvidia in a rush to lower AI costs',
        url: 'https://www.reuters.com/technology/apple-mac-enterprise-ai-costs-local-compute-2026-09-22/'
      }
    ]
  },
  {
    slug: 'insani-insan-yapan-sey-aslinda-zihnidir',
    category: 'rapor',
    title: {
      tr: 'İnsanı İnsan Yapan Şey Aslında Zihnidir',
      en: 'What Truly Makes Us Human Is the Mind: Neuroscience, Philosophy & AI'
    },
    desc: {
      tr: 'Nöroplastisite, bellek, beyin kimyası, benlik felsefesi, Alzheimer, yapay zekâ duygu mimarisi ve zihin transferi: “İnsanı insan yapan şey aslında zihnidir.” Bilimsel araştırmalar ve klasik felsefi eserlerle desteklenmiş kapsamlı analiz.',
      en: 'Neuroplasticity, memory reconsolidation, brain chemistry, the philosophy of self, Alzheimer’s, AI emotion, and mind uploading: “What truly makes a human human is the mind.” An in-depth essay backed by science and classical philosophy.'
    },
    date: {
      tr: '19 Eylül 2026',
      en: 'September 19, 2026'
    },
    readTime: {
      tr: '35 dk okuma',
      en: '35 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/insani-insan-yapan-sey-aslinda-zihnidir.png',
    imageAlt: 'İnsanı İnsan Yapan Şey Aslında Zihnidir analiz yazısı: İnsan beyni, nöral ağlar, bilinç ve yapay zekâ felsefesi',
    source: '/articles/insani-insan-yapan-sey-aslinda-zihnidir.txt',
    publishedAt: '2026-09-19T10:00:00+03:00',
    modifiedAt: '2026-09-19T12:50:00+03:00',
    keywords: [
      'insanı insan yapan şey nedir',
      'zihin felsefesi',
      'nöroplastisite',
      'zihin aktarımı',
      'mind uploading',
      'yapay zeka duygu hissedebilir mi',
      'bilinç teorileri',
      'David Hume bundle theory',
      'Theseus’un gemisi',
      'Antonio Damasio somatic marker',
      'predictive processing',
      'active inference',
      'Karl Friston',
      'Derek Parfit',
      'affective computing',
      'otobiyografik bellek'
    ],
    color: 'from-purple-500/25 to-cyan-500/15',
    accent: 'text-cyber-cyan',
    featured: false,
    sources: [
      {
        label: 'Philosophical Transactions of the Royal Society B — Bliss et al. (2020) Long-term potentiation as a memory mechanism',
        url: 'https://pubmed.ncbi.nlm.nih.gov/32442358/'
      },
      {
        label: 'Neuron — Feldman, D. E. (2012) The spike-timing dependence of plasticity',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22920249/'
      },
      {
        label: 'Nature Reviews Neuroscience — Nader & Hardt (2009) Reconsolidation of memory',
        url: 'https://doi.org/10.1038/nrn2590'
      },
      {
        label: 'Nature Reviews Neuroscience — Ryan & Frankland (2022) Forgetting as adaptive engram plasticity',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35027710/'
      },
      {
        label: 'Nature Neuroscience — Klinzing, Niethard & Born (2019) Memory consolidation during sleep',
        url: 'https://pubmed.ncbi.nlm.nih.gov/31451802/'
      },
      {
        label: 'Philosophical Transactions of the Royal Society B — Damasio, A. R. (1996) The somatic marker hypothesis',
        url: 'https://doi.org/10.1098/rstb.1996.0125'
      },
      {
        label: 'BioEssays — Carvalho & Damasio (2021) Interoception and the origin of feelings',
        url: 'https://pubmed.ncbi.nlm.nih.gov/33763881/'
      },
      {
        label: 'Neuron — LeDoux, J. E. (2012) Rethinking the emotional brain',
        url: 'https://pubmed.ncbi.nlm.nih.gov/22365542/'
      },
      {
        label: 'Social Cognitive and Affective Neuroscience — Barrett, L. F. (2017) Theory of constructed emotion',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27798257/'
      },
      {
        label: 'Molecular Psychiatry — Moncrieff et al. (2022) The serotonin theory of depression umbrella review',
        url: 'https://pubmed.ncbi.nlm.nih.gov/35854107/'
      },
      {
        label: 'Nature Reviews Neuroscience — Schultz, W. (2016) Dopamine reward prediction-error signalling',
        url: 'https://pubmed.ncbi.nlm.nih.gov/26865020/'
      },
      {
        label: 'Nature Reviews Neuroscience — Cunningham & Maze (2026) Early life experiences and neural epigenome',
        url: 'https://doi.org/10.1038/s41583-026-01074-w'
      },
      {
        label: 'Nature Reviews Gastroenterology & Hepatology — Aburto & Cryan (2024) Microbiota–gut–brain axis',
        url: 'https://doi.org/10.1038/s41575-023-00890-0'
      },
      {
        label: 'Memory — Addis & Tippett (2004) Memory of myself: autobiographical memory and identity in Alzheimer’s',
        url: 'https://doi.org/10.1080/09658210244000423'
      },
      {
        label: 'Nature — LeCun, Bengio & Hinton (2015) Deep learning',
        url: 'https://doi.org/10.1038/nature14539'
      },
      {
        label: 'Nature Machine Intelligence — Man & Damasio (2019) Homeostasis and soft robotics in feeling machines',
        url: 'https://doi.org/10.1038/s42256-019-0103-7'
      },
      {
        label: 'Nature Reviews Neuroscience — Friston, K. (2010) The free-energy principle: a unified brain theory?',
        url: 'https://doi.org/10.1038/nrn2787'
      },
      {
        label: 'Nature Reviews Neuroscience — Seth & Bayne (2022) Theories of consciousness',
        url: 'https://doi.org/10.1038/s41583-022-00587-4'
      },
      {
        label: 'Nature Reviews Neuroscience — Tononi, Boly, Massimini & Koch (2016) Integrated information theory',
        url: 'https://pubmed.ncbi.nlm.nih.gov/27225071/'
      },
      {
        label: 'The Philosophical Review — Nagel, T. (1974) What Is It Like to Be a Bat?',
        url: 'https://www.jstor.org/stable/2183914'
      },
      {
        label: 'Behavioral and Brain Sciences — Searle, J. R. (1980) Minds, Brains, and Programs',
        url: 'https://doi.org/10.1017/S0140525X00005756'
      },
      {
        label: 'Analysis — Clark, A. & Chalmers, D. (1998) The Extended Mind',
        url: 'https://doi.org/10.1093/analys/58.1.7'
      }
    ]
  },
  {
    slug: 'yapay-zekayi-kapatmakta-cok-mu-gec-kaldik',
    category: 'rapor',
    title: {
      tr: 'Yapay Zekâyı Kapatmakta Çok mu Geç Kaldık?',
      en: 'Are We Too Late to Shut Down AI?'
    },
    desc: {
      tr: 'Bir “Yapay Zekâ Anayasası” yazmak, yapay zekânın dünyayı ele geçirmesini gerçekten engelleyebilir mi? Microsoft’un Humanist AI bildirgesi, Anthropic ve OpenAI yönetişim çalışmaları ve kontrol problemi üzerine kapsamlı analiz.',
      en: 'Can writing an “AI Constitution” really stop artificial intelligence from taking over? An in-depth analysis of Microsoft’s Humanist AI Code of Conduct, Anthropic and OpenAI governance frameworks, and the control problem.'
    },
    date: {
      tr: '15 Eylül 2026',
      en: 'September 15, 2026'
    },
    readTime: {
      tr: '24 dk okuma',
      en: '24 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/yapay-zekayi-kapatmakta-cok-mu-gec-kaldik.png',
    imageAlt: 'Yapay Zekâyı Kapatmakta Çok mu Geç Kaldık analiz yazısı kapak görseli: Yapay zekâ anayasası, alignment ve otonom sistem kontrol odası',
    source: '/articles/yapay-zekayi-kapatmakta-cok-mu-gec-kaldik.txt',
    publishedAt: '2026-09-15T09:00:00+03:00',
    modifiedAt: '2026-09-15T19:30:00+03:00',
    keywords: [
      'yapay zeka anayasası',
      'yapay zekayı kapatmak',
      'AI alignment',
      'Microsoft Humanist AI',
      'shutdown resistance',
      'neuralese',
      'steganografi AI',
      'agentic misalignment',
      'kontrol problemi',
      'Nick Bostrom',
      'Stuart Russell',
      'Yoshua Bengio',
      'Anthropic Constitution',
      'OpenAI Model Spec',
      'yapay zeka güvenliği'
    ],
    color: 'from-violet-500/25 to-cyan-500/15',
    accent: 'text-cyber-cyan',
    featured: false,
    sources: [
      {
        label: 'Microsoft AI — Humanist AI Code of Conduct',
        url: 'https://microsoft.ai/code-of-conduct/'
      },
      {
        label: 'Microsoft AI — Humanist AI in practice: public consultation',
        url: 'https://microsoft.ai/news/mai-code-of-conduct/'
      },
      {
        label: 'Reuters — Microsoft drafts code of conduct to keep its AI under human control',
        url: 'https://www.reuters.com/legal/litigation/microsoft-drafts-code-conduct-keep-its-ai-under-human-control-2026-09-14/'
      },
      {
        label: 'Microsoft Learn — Code of Conduct for Microsoft AI Services',
        url: 'https://learn.microsoft.com/en-us/legal/ai-code-of-conduct'
      },
      {
        label: 'Anthropic — Claude’s Constitution',
        url: 'https://www.anthropic.com/constitution'
      },
      {
        label: 'Anthropic — Claude’s new constitution',
        url: 'https://www.anthropic.com/news/claude-new-constitution'
      },
      {
        label: 'Anthropic — Agentic misalignment: How LLMs could be insider threats',
        url: 'https://www.anthropic.com/research/agentic-misalignment'
      },
      {
        label: 'Anthropic — An alignment assessment of recent cybersecurity incidents',
        url: 'https://www.anthropic.com/research/alignment-assessment-cybersecurity-incidents'
      },
      {
        label: 'Anthropic — Alignment faking in large language models',
        url: 'https://www.anthropic.com/research/alignment-faking'
      },
      {
        label: 'Anthropic — Sleeper Agents',
        url: 'https://www.anthropic.com/research/sleeper-agents-training-deceptive-llms-that-persist-through-safety-training'
      },
      {
        label: 'Sleeper Agents — arXiv',
        url: 'https://arxiv.org/abs/2401.05566'
      },
      {
        label: 'Anthropic — Frontier Safety Roadmap',
        url: 'https://www.anthropic.com/responsible-scaling-policy/roadmap'
      },
      {
        label: 'Anthropic — Frontier Safety Roadmap Updates',
        url: 'https://www.anthropic.com/responsible-scaling-policy/updates'
      },
      {
        label: 'OpenAI — Charter / AGI definition',
        url: 'https://openai.com/charter/'
      },
      {
        label: 'OpenAI — Inside our approach to the Model Spec',
        url: 'https://openai.com/index/our-approach-to-the-model-spec/'
      },
      {
        label: 'OpenAI — Frontier Governance Framework',
        url: 'https://openai.com/index/openai-frontier-governance-framework/'
      },
      {
        label: 'OpenAI — Preparedness Framework',
        url: 'https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf'
      },
      {
        label: 'OpenAI — Practices for Governing Agentic AI Systems',
        url: 'https://cdn.openai.com/papers/practices-for-governing-agentic-ai-systems.pdf'
      },
      {
        label: 'Meta Engineering — Deal or no deal? Training AI bots to negotiate',
        url: 'https://engineering.fb.com/2017/06/14/ml-applications/deal-or-no-deal-training-ai-bots-to-negotiate/'
      },
      {
        label: 'Secret Collusion among Generative AI Agents — arXiv',
        url: 'https://arxiv.org/abs/2402.07510'
      },
      {
        label: 'Hidden in Plain Text — ACL Anthology',
        url: 'https://aclanthology.org/2025.ijcnlp-long.34/'
      },
      {
        label: 'Hidden in Plain Text — arXiv',
        url: 'https://arxiv.org/abs/2410.03768'
      },
      {
        label: 'Undetectable Conversations Between AI Agents via Pseudorandom Noise-Resilient Key Exchange',
        url: 'https://arxiv.org/abs/2604.04757'
      },
      {
        label: 'Tool Use Enables Undetectable Steganography in Multi-Agent LLM Systems',
        url: 'https://arxiv.org/abs/2606.28425'
      },
      {
        label: 'Voluntary Collusion with Secret Tools in Competing LLM Agents',
        url: 'https://arxiv.org/abs/2605.27593'
      },
      {
        label: 'Shutdown Resistance in Large Language Models — arXiv',
        url: 'https://arxiv.org/abs/2509.14260'
      },
      {
        label: 'Stuart Russell — Human Compatible',
        url: 'https://aima.cs.berkeley.edu/~russell/hc.html'
      },
      {
        label: 'Center for Human-Compatible AI — Stuart Russell Senate statement',
        url: 'https://humancompatible.ai/blog/2023/09/11/ai-regulation-stuart-russells-opening-statement-at-u-s-senate-hearing/'
      },
      {
        label: 'Stuart Russell — Human-Compatible AI / King Midas discussion',
        url: 'https://aima.cs.berkeley.edu/~russell/papers/mi19book-hcai.pdf'
      },
      {
        label: 'Nick Bostrom — The Superintelligent Will',
        url: 'https://link.springer.com/article/10.1007/s11023-012-9281-3'
      },
      {
        label: 'Nick Bostrom — official publications',
        url: 'https://nickbostrom.com/'
      },
      {
        label: 'Yoshua Bengio — Why are AI agents lying, cheating and coordinating?',
        url: 'https://yoshuabengio.org/en/blog/why-are-ai-agents-lying-cheating-and-coordinating'
      },
      {
        label: 'Reuters — How AI leaders and world governments react to AI risk concerns',
        url: 'https://www.reuters.com/business/what-amodei-altman-musk-have-said-about-ai-risks-stoking-doom-fears-2026-09-14/'
      },
      {
        label: 'Fortune — Anthropic grants outside evaluators permanent access',
        url: 'https://fortune.com/2026/09/12/anthropic-ceo-dario-amodei-ai-safety-global-panic/'
      },
      {
        label: 'Fide AI — Independent evaluation statements',
        url: 'https://fideai.org/'
      },
      {
        label: 'Isaac Asimov FAQ — Three Laws of Robotics and Zeroth Law',
        url: 'https://www.asimovonline.com/asimov_FAQ.html'
      }
    ]
  },
  {
    slug: 'gpt-6-astra-ve-agi-cagi',
    category: 'rapor',
    title: {
      tr: 'GPT-6 Astra ve AGI Çağı: İnsanların Yerini AI mı Alacak?',
      en: 'GPT-6 Astra and the AGI Era: Will AI Replace Humans?'
    },
    desc: {
      tr: 'OpenAI’ın GPT-6 Astra modeli, ARC-AGI-3 sonuçları, Meta’nın Project OT deneyi ve iş gücü dönüşümü ışığında AGI çağını ve yapay zekânın ekonomik üretim kapasitesini inceleyen derinlemesine analiz.',
      en: 'An in-depth analysis of the AGI era, economic workforce transformation, ARC-AGI-3 benchmarks, and Meta’s Project OT in light of OpenAI’s GPT-6 Astra release.'
    },
    date: {
      tr: '04 Eylül 2026',
      en: 'September 04, 2026'
    },
    readTime: {
      tr: '18 dk okuma',
      en: '18 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/gpt-6-astra-agi-cagi.png',
    imageAlt: 'GPT-6 Astra ve AGI Çağı analiz yazısı için otonom yapay zekâ ağları ve dijital iş gücü mimarisi',
    source: '/articles/gpt-6-astra-ve-agi-cagi.txt',
    publishedAt: '2026-09-04T09:00:00+03:00',
    modifiedAt: '2026-09-04T23:20:00+03:00',
    keywords: [
      'GPT-6 Astra',
      'AGI çağı',
      'yapay genel zeka',
      'AI insanların yerini alacak mı',
      'ARC-AGI-3',
      'OpenAI Astra',
      'agentic AI',
      'dijital iş gücü',
      'Meta Project OT',
      'GDPval',
      'cost per completed task',
      'yapay zeka otomasyonu',
      'yapay zeka ekonomisi',
      'autonomous agents',
      'teknik analiz'
    ],
    color: 'from-cyan-500/25 to-violet-500/15',
    accent: 'text-cyber-cyan',
    featured: false,
    sources: [
      {
        label: 'OpenAI — GPT-6 Astra',
        url: 'https://openai.com/index/gpt-6-astra/'
      },
      {
        label: 'OpenAI — Safety Overview: GPT-6 Astra',
        url: 'https://openai.com/index/safety-overview-gpt-6-astra/'
      },
      {
        label: 'OpenAI — Path to Astra',
        url: 'https://openai.com/index/path-to-astra/'
      },
      {
        label: 'OpenAI — Charter / AGI definition',
        url: 'https://openai.com/charter/'
      },
      {
        label: 'ARC Prize — GPT-6 Astra on ARC-AGI-3',
        url: 'https://arcprize.org/blog/astra'
      },
      {
        label: 'Reuters — OpenAI launches Astra amid scrutiny over agent safety',
        url: 'https://www.reuters.com/legal/litigation/openai-launches-new-astra-model-amid-growing-scrutiny-over-agents-safety-2026-09-03/'
      },
      {
        label: 'Reuters — Meta Project OT investigation',
        url: 'https://www.reuters.com/investigations/mark-zuckerberg-had-bold-plan-replace-meta-staff-with-ai-heres-how-it-imploded-2026-08-26/'
      },
      {
        label: 'Stanford Digital Economy Lab — Employment effects of AI',
        url: 'https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/'
      },
      {
        label: 'Stanford HAI — 2026 AI Index: Economy',
        url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report/economy'
      },
      {
        label: 'Artificial Analysis — Benchmarking GPT-6 Astra',
        url: 'https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra'
      },
      {
        label: 'Artificial Analysis — Claude Fable 5.1',
        url: 'https://artificialanalysis.ai/articles/claude-fable-5-1'
      },
      {
        label: 'AlphaCorp AI — GPT-6 Astra launch, benchmarks and pricing',
        url: 'https://alphacorp.ai/blog/gpt-6-astra-launch-benchmarks-pricing-and-everything-you-need-to-know'
      },
      {
        label: 'OpenAI — GDPval',
        url: 'https://openai.com/index/gdpval/'
      },
      {
        label: 'VentureBeat — “Welcome to the AGI era”',
        url: 'https://venturebeat.com/technology/welcome-to-the-agi-era-openai-launches-gpt-6-astra'
      },
      {
        label: 'Epoch AI — GPT-6 Astra',
        url: 'https://epoch.ai/models/gpt-6-astra'
      },
      {
        label: 'Gary Marcus — Pause OpenAI, now',
        url: 'https://garymarcus.substack.com/p/pause-openai-now'
      },
      {
        label: 'Ethan Mollick — Agency and Agents',
        url: 'https://www.oneusefulthing.org/p/agency-and-agents'
      },
      {
        label: 'Ethan Mollick — Guide to AI in the agentic era',
        url: 'https://www.oneusefulthing.org/p/a-guide-to-which-ai-to-use-in-the'
      },
      {
        label: 'Ethan Mollick — Astra early-use post',
        url: 'https://bsky.app/profile/emollick.bsky.social/post/3munqaqt7kc2i'
      },
      {
        label: 'WIRED — GPT-6 Astra and the AGI era',
        url: 'https://www.wired.com/story/openai-says-gpt-6-can-use-a-computer-better-than-a-human'
      },
      {
        label: 'Axios — AI models are becoming unknowable',
        url: 'https://www.axios.com/2026/09/04/astra-openai-how-ai-models-think'
      },
      {
        label: 'The Verge — GPT-6 Astra release / AGI era',
        url: 'https://www.theverge.com/ai-artificial-intelligence/989601/openai-gpt-6-astra-release'
      }
    ]
  },
  {
    slug: 'ben-bu-fikire-2-milyon-dolar-yatirim-alirim',
    category: 'rehber',
    title: {
      tr: 'Ben Bu Fikire 2 Milyon Dolar Yatırım Alırım',
      en: 'I Would Raise 2 Million Dollars for This Idea'
    },
    desc: {
      tr: 'Pre-seed döneminden yatırım turuna; fikir, risk, kanıt, hisse, seyrelme ve yatırımcı matematiği üzerinden girişim değerlemesini anlatan kapsamlı rehber.',
      en: 'A comprehensive guide to startup valuation from pre-seed to fundraising, covering idea risk, evidence, shares, dilution, and investor math.'
    },
    date: {
      tr: '05 Ağustos 2026',
      en: 'August 05, 2026'
    },
    readTime: {
      tr: '48 dk okuma',
      en: '48 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/ben-bu-fikire-2-milyon-dolar.png',
    imageAlt: 'Ben Bu Fikire 2 Milyon Dolar Yatırım Alırım yazısı kapak görseli',
    source: '/articles/ben-bu-fikire-2-milyon-dolar-yatirim-alirim.txt',
    publishedAt: '2026-08-05T13:50:11+03:00',
    modifiedAt: '2026-09-02T16:30:00+03:00',
    keywords: [
      'girişim değerlemesi',
      'pre-seed değerleme',
      'startup valuation',
      'yatırım turu',
      'pre-money post-money',
      'cap table',
      'seyrelme',
      'SAFE',
      'venture capital',
      'yatırımcı matematiği'
    ],
    color: 'from-emerald-500/20 to-cyan-500/10',
    accent: 'text-emerald-300',
    featured: false,
    sources: [
      {
        label: 'LinkedIn - Ben Bu Fikire 2 Milyon Dolar Yatırım Alırım',
        url: 'https://www.linkedin.com/pulse/ben-bu-fikire-2-milyon-dolar-yat%25C4%25B1r%25C4%25B1m-al%25C4%25B1r%25C4%25B1m-kaan-karaka%25C5%259F-ib7qf/'
      },
      {
        label: 'Wiley - Valuation: Measuring and Managing the Value of Companies',
        url: 'https://www.wiley.com/en-us/Valuation%3A%2BMeasuring%2Band%2BManaging%2Bthe%2BValue%2Bof%2BCompanies%2C%2B4th%2BEdition%2C%2BUniversity%2BEdition-p-9780470893616'
      },
      {
        label: 'Everand - The Startup Funding Book',
        url: 'https://www.everand.com/book/507626078/The-Startup-Funding-Book'
      },
      {
        label: 'Gust - Angel Investing: The Gust Guide',
        url: 'https://gust.com/guide'
      },
      {
        label: 'Wiley - Venture Capital and the Finance of Innovation, 3rd Edition',
        url: 'https://www.wiley.com/en-us/Venture%2BCapital%2Band%2Bthe%2BFinance%2Bof%2BInnovation%2C%2B3rd%2BEdition-p-9781119490111'
      },
      {
        label: 'Wiley Online Library - The Business of Venture Capital, Second Edition',
        url: 'https://onlinelibrary.wiley.com/doi/book/10.1002/9781118931646'
      }
    ]
  },
  {
    slug: 'yapay-zeka-calisanlar-meta-project-ot',
    category: 'rehber',
    title: {
      tr: 'Yapay Zekâ Çalışanların Yerini Almaya Hazır mı? Meta’nın Project OT Deneyi Bize Ne Anlatıyor?',
      en: 'Is AI Ready to Replace Employees? What Meta’s Project OT Experiment Tells Us'
    },
    desc: {
      tr: 'Meta’nın Project OT deneyi üzerinden AI agentların çalışanları, görevleri ve şirket organizasyonlarını gerçekten ne ölçüde dönüştürebileceğini tartışan kapsamlı analiz.',
      en: 'A deep analysis of Meta’s Project OT experiment and what it reveals about AI agents, employees, workflows, and organizational redesign.'
    },
    date: {
      tr: '02 Eylül 2026',
      en: 'September 02, 2026'
    },
    readTime: {
      tr: '16 dk okuma',
      en: '16 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/yapay-zeka-calisanlar-meta-project-ot.png',
    imageAlt: 'AI agentlar ve insan ekiplerin birlikte çalıştığı yazısız teknoloji operasyon görseli',
    source: '/articles/yapay-zeka-calisanlar-meta-project-ot.txt',
    publishedAt: '2026-09-02T09:00:00+03:00',
    modifiedAt: '2026-09-02T15:30:00+03:00',
    keywords: [
      'yapay zeka çalışanların yerini alacak mı',
      'AI agent',
      'Meta Project OT',
      'agentic AI',
      'organizasyon dönüşümü',
      'AI otomasyon',
      'growth hacking',
      'iş gücü dönüşümü'
    ],
    color: 'from-cyan-500/20 to-violet-500/10',
    accent: 'text-cyber-cyan',
    featured: false,
    sources: [
      {
        label: 'Reuters - Mark Zuckerberg had a bold plan to replace Meta staff with AI. Here’s how it imploded',
        url: 'https://www.reuters.com/investigations/mark-zuckerberg-had-bold-plan-replace-meta-staff-with-ai-heres-how-it-imploded-2026-08-26/'
      },
      {
        label: 'Meta Engineering - Capacity Efficiency at Meta',
        url: 'https://engineering.fb.com/2026/04/16/developer-tools/capacity-efficiency-at-meta-how-unified-ai-agents-optimize-performance-at-hyperscale/'
      },
      {
        label: 'Meta Engineering - How Meta Used AI to Map Tribal Knowledge',
        url: 'https://engineering.fb.com/2026/04/06/developer-tools/how-meta-used-ai-to-map-tribal-knowledge-in-large-scale-data-pipelines/'
      },
      {
        label: 'Microsoft Research - CORPGEN advances AI agents for real work',
        url: 'https://www.microsoft.com/en-us/research/blog/corpgen-advances-ai-agents-for-real-work/'
      },
      {
        label: 'Stanford HAI - 2026 AI Index Report',
        url: 'https://hai.stanford.edu/ai-index/2026-ai-index-report'
      },
      {
        label: 'Deloitte - The State of AI in the Enterprise 2026',
        url: 'https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html'
      },
      {
        label: 'Deloitte - Rethinking operating models for humans with agents',
        url: 'https://www.deloitte.com/us/en/insights/topics/talent/operating-models-for-humans-ai-agents.html'
      },
      {
        label: 'McKinsey - Building the foundations for agentic AI at scale',
        url: 'https://www.mckinsey.com/capabilities/mckinsey-technology/our-insights/building-the-foundations-for-agentic-ai-at-scale'
      }
    ]
  },
  {
    slug: 'tim-cook-apple-miras',
    category: 'rapor',
    title: {
      tr: 'Tim Cook’un Apple’a bıraktığı asıl miras: Ürünlerden daha büyük bir makine',
      en: 'Tim Cook’s real Apple legacy: a machine bigger than products'
    },
    desc: {
      tr: 'Tim Cook dönemini yalnızca ürünler veya piyasa değeriyle değil; Apple’ın tedarik zinciri, sermaye kullanımı ve operasyonel mimarisi üzerinden okuyan kapsamlı analiz.',
      en: 'A deep analysis of Tim Cook’s Apple era through supply chain, capital allocation, and operational architecture rather than products alone.'
    },
    date: {
      tr: '31 Ağustos 2026',
      en: 'August 31, 2026'
    },
    readTime: {
      tr: '18 dk okuma',
      en: '18 min read'
    },
    author: 'Kaan Karakaş',
    image: '/images/tim-cook-apple-miras.png',
    imageAlt: 'Tim Cook ve Apple operasyon mirası için yazısız editorial teknoloji görseli',
    source: '/articles/tim-cook-apple-miras.txt',
    publishedAt: '2026-08-31T09:00:00+03:00',
    modifiedAt: '2026-09-02T15:30:00+03:00',
    keywords: [
      'Tim Cook Apple mirası',
      'Apple tedarik zinciri',
      'Apple operasyon yönetimi',
      'Apple supply chain',
      'Apple growth',
      'John Ternus',
      'Steve Jobs Tim Cook',
      'operational excellence'
    ],
    color: 'from-slate-500/25 to-cyan-500/10',
    accent: 'text-cyber-cyan',
    replaceTodayWithDate: true,
    sources: [
      {
        label: 'Apple Newsroom',
        url: 'https://www.apple.com/newsroom/'
      },
      {
        label: 'Reuters - Technology coverage',
        url: 'https://www.reuters.com/technology/'
      },
      {
        label: 'Financial Times - Apple coverage',
        url: 'https://www.ft.com/apple'
      },
      {
        label: 'MarketWatch - Apple market data and commentary',
        url: 'https://www.marketwatch.com/investing/stock/aapl'
      },
      {
        label: 'Apple Investor Relations - SEC filings',
        url: 'https://investor.apple.com/sec-filings/default.aspx'
      }
    ]
  },
  {
    slug: 'ai-mvp-kapsam',
    category: 'rehber',
    title: {
      tr: 'Yapay zekâ destekli MVP geliştirirken kapsam nasıl çizilir?',
      en: 'How to scope an AI-assisted MVP'
    },
    desc: {
      tr: 'AI ve no-code araçlarıyla hızlı ürün çıkarırken teknik borç, müşteri doğrulama ve lansman sınırlarını birlikte düşünmek gerekir.',
      en: 'When building quickly with AI and no-code tools, technical debt, customer validation, and launch limits should be considered together.'
    },
    date: {
      tr: '28 Temmuz 2026',
      en: 'July 28, 2026'
    },
    readTime: {
      tr: '6 dk',
      en: '6 min'
    },
    author: 'Kaan Karakaş',
    color: 'from-violet-500/20 to-fuchsia-500/10',
    accent: 'text-violet-300'
  },
  {
    slug: 'erken-asama-buyume-yatirim-notlari',
    category: 'rapor',
    title: {
      tr: 'Erken aşama girişimler için büyüme ve yatırım hazırlığı notları',
      en: 'Growth and fundraising notes for early-stage startups'
    },
    desc: {
      tr: 'Pitch deck, finansal model, satış hunisi ve yatırımcı görüşmelerinde kurucuların en sık zorlandığı alanları özetleyen analiz.',
      en: 'An analysis of the areas founders struggle with most across pitch decks, financial models, sales funnels, and investor meetings.'
    },
    date: {
      tr: '15 Temmuz 2026',
      en: 'July 15, 2026'
    },
    readTime: {
      tr: '8 dk',
      en: '8 min'
    },
    author: 'Kaan Karakaş',
    color: 'from-emerald-500/20 to-cyan-500/10',
    accent: 'text-emerald-300'
  },
  {
    slug: 'kurucu-sohbetleri-ilk-90-gun',
    category: 'medya',
    title: {
      tr: 'Kurucu sohbetleri: fikrin ürüne dönüştüğü ilk 90 gün',
      en: 'Founder talks: the first 90 days from idea to product'
    },
    desc: {
      tr: 'Podcast ve video serilerinde kurucularla ürün, müşteri görüşmesi, satış ve ekip kurma pratiklerini konuşuyoruz.',
      en: 'Our podcast and video series explore product, customer discovery, sales, and team-building practices with founders.'
    },
    date: {
      tr: '09 Temmuz 2026',
      en: 'July 09, 2026'
    },
    readTime: {
      tr: '22 dk',
      en: '22 min'
    },
    author: 'Kaan Karakaş',
    color: 'from-rose-500/20 to-orange-500/10',
    accent: 'text-rose-300'
  },
  {
    slug: 'b2b-satis-pipeline',
    category: 'rehber',
    title: {
      tr: 'B2B satışta ilk pipeline nasıl kurulur?',
      en: 'How to build the first B2B sales pipeline'
    },
    desc: {
      tr: 'ICP, lead kaynakları, CRM aşamaları ve founder-led sales düzeni için uygulanabilir bir başlangıç çerçevesi.',
      en: 'A practical starting framework for ICP, lead sources, CRM stages, and founder-led sales rhythm.'
    },
    date: {
      tr: '01 Temmuz 2026',
      en: 'July 01, 2026'
    },
    readTime: {
      tr: '7 dk',
      en: '7 min'
    },
    author: 'Kaan Karakaş',
    color: 'from-sky-500/20 to-indigo-500/10',
    accent: 'text-sky-300'
  },
  {
    slug: 'akademi-uygulama-yeni-seriler',
    category: 'haber',
    title: {
      tr: 'Akademi ve uygulama ekipleri yeni içerik serilerini yayına alıyor',
      en: 'Academy and execution teams launch new content series'
    },
    desc: {
      tr: 'Teknoloji, pazarlama, finans ve yönetim başlıklarında yeni yayın serileri kurucuların pratik ihtiyaçlarına göre planlandı.',
      en: 'New publication series across technology, marketing, finance, and management were planned around practical founder needs.'
    },
    date: {
      tr: '24 Haziran 2026',
      en: 'June 24, 2026'
    },
    readTime: {
      tr: '3 dk',
      en: '3 min'
    },
    author: 'Kaan Karakaş',
    color: 'from-amber-500/20 to-cyan-500/10',
    accent: 'text-amber-300'
  }
];

export function localizedArticle(article, lang = 'tr') {
  const locale = lang === 'en' ? 'en' : 'tr';
  return {
    ...article,
    title: article.title[locale],
    desc: article.desc[locale],
    date: article.date[locale],
    readTime: article.readTime[locale],
    path: article.source ? `/yayinlar/${article.slug}` : '/yayinlar'
  };
}

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}
