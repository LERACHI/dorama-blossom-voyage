export interface Drama {
  id: string;
  title: string;
  country: string;
  genre: string[];
  synopsis: string;
  image: string;
  year: number;
  episodes: number;
  cast: {
    name: string;
    role: string;
  }[];
  platforms: {
    name: string;
    url: string;
  }[];
  trailerUrl: string;
  featured?: boolean;
  recent?: boolean;
}

export const dramas: Drama[] = [
  {
    id: "amor-sob-a-lua",
    title: "Amor sob a Lua",
    country: "Coreia do Sul",
    genre: ["Romance", "Fantasia", "Histórico"],
    synopsis: "Uma história encantadora que atravessa o tempo, onde um príncipe do século XVIII e uma jovem do presente se encontram sob a luz da lua cheia. Entre portais mágicos e destinos entrelaçados, eles descobrem que o amor verdadeiro não conhece fronteiras temporais. Com reviravoltas emocionantes e uma química irresistível, esta série conquistou corações em todo o mundo.",
    image: "/src/assets/drama-amor-lua.jpg",
    year: 2023,
    episodes: 16,
    cast: [
      { name: "Kim Soo-hyun", role: "Príncipe Lee Hwon" },
      { name: "IU", role: "Park Ji-yeon" },
      { name: "Park Bo-gum", role: "General Kang" }
    ],
    platforms: [
      { name: "Netflix", url: "https://netflix.com" },
      { name: "Viki", url: "https://viki.com" }
    ],
    trailerUrl: "https://youtube.com",
    featured: true,
    recent: true
  },
  {
    id: "flores-do-destino",
    title: "Flores do Destino",
    country: "Japão",
    genre: ["Romance", "Drama", "Slice of Life"],
    synopsis: "Na pacata cidade de Kyoto, uma florista talentosa e um fotógrafo solitário se conhecem durante a temporada das cerejeiras. Enquanto as pétalas caem, eles aprendem sobre perdas, esperanças e segundas chances. Uma narrativa delicada sobre como a beleza efêmera da vida pode nos ensinar a valorizar cada momento ao lado de quem amamos.",
    image: "/src/assets/drama-flores-destino.jpg",
    year: 2024,
    episodes: 10,
    cast: [
      { name: "Takeru Satoh", role: "Haruto Tanaka" },
      { name: "Kasumi Arimura", role: "Sakura Yamamoto" },
      { name: "Kento Yamazaki", role: "Kenji" }
    ],
    platforms: [
      { name: "Netflix", url: "https://netflix.com" },
      { name: "Viki", url: "https://viki.com" }
    ],
    trailerUrl: "https://youtube.com",
    featured: true
  },
  {
    id: "o-som-do-coracao",
    title: "O Som do Coração",
    country: "China",
    genre: ["Romance", "Música", "Drama"],
    synopsis: "Uma pianista prodígio que perdeu a audição em um acidente encontra um jovem compositor determinado a ajudá-la a redescobrir a música através de outros sentidos. Juntos, eles criam uma sinfonia única que transcende as barreiras físicas e emocionais. Uma jornada sobre superação, paixão e o poder transformador da música.",
    image: "/src/assets/drama-som-coracao.jpg",
    year: 2023,
    episodes: 24,
    cast: [
      { name: "Yang Yang", role: "Chen Wei" },
      { name: "Dilraba Dilmurat", role: "Li Xin" },
      { name: "Deng Lun", role: "Professor Wang" }
    ],
    platforms: [
      { name: "WeTV", url: "https://wetv.vip" },
      { name: "Viki", url: "https://viki.com" }
    ],
    trailerUrl: "https://youtube.com",
    recent: true
  },
  {
    id: "mar-de-emocoes",
    title: "Mar de Emoções",
    country: "Tailândia",
    genre: ["Romance", "Drama", "Aventura"],
    synopsis: "Nas praias paradisíacas da Tailândia, uma bióloga marinha e um pescador local se veem unidos por um segredo que pode mudar suas vidas para sempre. Entre ondas e pores do sol deslumbrantes, eles navegam por sentimentos intensos enquanto lutam para proteger o oceano que tanto amam. Uma história refrescante sobre amor, natureza e compromisso.",
    image: "/src/assets/drama-mar-emocoes.jpg",
    year: 2024,
    episodes: 14,
    cast: [
      { name: "Mario Maurer", role: "Akara" },
      { name: "Yaya Urassaya", role: "Maya" },
      { name: "Nadech Kugimiya", role: "Tawan" }
    ],
    platforms: [
      { name: "Netflix", url: "https://netflix.com" },
      { name: "iQIYI", url: "https://iqiyi.com" }
    ],
    trailerUrl: "https://youtube.com",
    featured: true
  },
  {
    id: "luzes-de-inverno",
    title: "Luzes de Inverno",
    country: "Coreia do Sul",
    genre: ["Romance", "Drama", "Comédia"],
    synopsis: "Durante o inverno mais rigoroso de Seul, uma chef de pastelaria e um crítico gastronômico severo se encontram em uma confeitaria à beira da falência. Entre receitas secretas, neve e chocolate quente, eles descobrem que os ingredientes perfeitos para a felicidade são mais simples do que imaginavam. Uma comédia romântica aquecedora que derrete qualquer coração.",
    image: "/src/assets/drama-luzes-inverno.jpg",
    year: 2023,
    episodes: 16,
    cast: [
      { name: "Park Seo-joon", role: "Han Ji-wook" },
      { name: "Park Min-young", role: "Lee Soo-jin" },
      { name: "Song Joong-ki", role: "Kim Tae-ho" }
    ],
    platforms: [
      { name: "Netflix", url: "https://netflix.com" },
      { name: "Prime Video", url: "https://primevideo.com" }
    ],
    trailerUrl: "https://youtube.com",
    recent: true
  },
  {
    id: "cartas-do-amanha",
    title: "Cartas do Amanhã",
    country: "Japão",
    genre: ["Romance", "Drama", "Fantasia"],
    synopsis: "Uma jovem escritora descobre cartas misteriosas que parecem vir do futuro, escritas por alguém que afirma ser seu grande amor. Intrigada, ela embarca em uma jornada para desvendar esse mistério, enquanto aprende lições valiosas sobre o tempo, escolhas e destino. Uma narrativa tocante que explora os laços invisíveis que conectam as pessoas.",
    image: "/src/assets/drama-cartas-amanha.jpg",
    year: 2024,
    episodes: 12,
    cast: [
      { name: "Haruma Miura", role: "Yuki Matsuda" },
      { name: "Suzu Hirose", role: "Emi Nakamura" },
      { name: "Masaki Suda", role: "Daichi" }
    ],
    platforms: [
      { name: "Netflix", url: "https://netflix.com" },
      { name: "Viki", url: "https://viki.com" }
    ],
    trailerUrl: "https://youtube.com",
    featured: true
  }
];

export const countries = ["Coreia do Sul", "Japão", "China", "Tailândia"];

export const genres = [
  "Romance",
  "Drama",
  "Comédia",
  "Fantasia",
  "Histórico",
  "Música",
  "Aventura",
  "Slice of Life"
];
