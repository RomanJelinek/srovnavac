const allowedTypes = [
  'Auto-moto',
  'Sport',
  'Vzduch',
  'Únikové hry',
  'Gastronomické zážitky',
  'Netradiční',
  'Relax',
  'Pobyty',
  'Adrenalin',
];

export const categories = [
  {
    type: 'Auto-moto',
    headline: 'Auto-moto zážitky v Praze',
    url: 'auto-moto-zazitky-v-praze',
    description:
      'Prozkoumejte širokou škálu auto-moto zážitků v Praze, které vám přinesou adrenalin a vzrušení.',
    subtypes: [
      {
        subtype: 'Zážitková jízda',
        headline: 'Zážitková jízda v Praze',
        url: 'zazitkova-jizda-v-praze',
        description:
          'Zažijte adrenalinovou jízdu v Praze s našimi zážitkovými jízdami v různých vozidlech.',
      },
      {
        subtype: 'Tesla',
        headline: 'Jízda Teslou v Praze',
        url: 'jizda-tesla-v-praze',
        description:
          'Vyzkoušejte si jízdu v moderním elektromobilu Tesla v Praze a zažijte budoucnost dopravy.',
      },
      {
        subtype: 'Jízda na motorce',
        headline: 'Jízda na motorce v Praze',
        url: 'jizda-na-motorce-v-praze',
        description:
          'Prožijte vzrušující jízdu na motorce v Praze a objevte krásy města z jiné perspektivy.',
      },
      {
        subtype: 'Netradiční jízdy',
        headline: 'Netradiční jízdy v Praze',
        url: 'netradicni-jizdy-v-praze',
        description:
          'Zažijte něco neobvyklého s našimi netradičními jízdami v Praze, které vám přinesou nezapomenutelné zážitky.',
      },
      {
        subtype: 'Závodní simulátory',
        headline: 'Závodní simulátory v Praze',
        url: 'zavodni-simulatory-v-praze',
        description:
          'Vyzkoušejte závodní simulátory v Praze a zažijte napětí skutečného závodu v bezpečí simulátoru.',
      },
      {
        subtype: 'Jízda ve Ferrari',
        headline: 'Jízda ve Ferrari v Praze',
        url: 'jizda-ve-ferrari-v-praze',
        description:
          'Splňte si sen a projděte se Prahou ve Ferrari, jednom z nejluxusnějších sportovních vozů.',
      },
    ],
  },
  {
    type: 'Sport',
    headline: 'Sportovní zážitky v Praze',
    url: 'sportovni-zazitky-v-praze',
    description:
      'Najděte sportovní aktivity a zážitky v Praze, které vás udrží v kondici a přinesou vám radost.',
    subtypes: [
      {
        subtype: 'Jízda v supersportu',
        headline: 'Jízda v supersportu v Praze',
        url: 'jizda-v-supersportu-v-praze',
        description:
          'Zažijte rychlost a adrenalin s jízdou v supersportu v Praze.',
      },
      {
        subtype: 'Plavby lodí',
        headline: 'Plavby lodí v Praze',
        url: 'plavby-lodi-v-praze',
        description:
          'Prožijte romantickou nebo dobrodružnou plavbu lodí po Vltavě v Praze.',
      },
      {
        subtype: 'Střelba',
        headline: 'Střelba v Praze',
        url: 'strelba-v-praze',
        description:
          'Otestujte svou přesnost a zažijte adrenalin na střelnici v Praze.',
      },
      {
        subtype: 'Souboje supersportů',
        headline: 'Souboje supersportů v Praze',
        url: 'souboje-supersportu-v-praze',
        description:
          'Soutěžte v jízdě s různými supersporty a zjistěte, kdo je nejrychlejší.',
      },
      {
        subtype: 'Sport',
        headline: 'Sportovní aktivity v Praze',
        url: 'sportovni-aktivity-v-praze',
        description:
          'Objevte širokou škálu sportovních aktivit, které Praha nabízí.',
      },
      {
        subtype: 'Půjčení supersportu',
        headline: 'Půjčení supersportu v Praze',
        url: 'pujceni-supersportu-v-praze',
        description:
          'Půjčte si supersport v Praze a užijte si jízdu v jednom z nejrychlejších vozů na světě.',
      },
      {
        subtype: 'Golf',
        headline: 'Golf v Praze',
        url: 'golf-v-praze',
        description:
          'Zahrajte si golf na jedněch z nejlepších golfových hřišť v Praze.',
      },
      {
        subtype: 'Lezení',
        headline: 'Lezení v Praze',
        url: 'lezeni-v-praze',
        description:
          'Vyzvěte své schopnosti na lezeckých stěnách a skalách v Praze.',
      },
    ],
  },
  {
    type: 'Vzduch',
    headline: 'Vzdušné zážitky v Praze',
    url: 'vzduchne-zazitky-v-praze',
    description:
      'Zažijte vzrušení a adrenalin s našimi vzdušnými zážitky v Praze.',
    subtypes: [
      {
        subtype: 'Větrný tunel',
        headline: 'Větrný tunel v Praze',
        url: 'vetrny-tunel-v-praze',
        description:
          'Zažijte pocit volného pádu v bezpečí větrného tunelu v Praze.',
      },
      {
        subtype: 'Vyhlídkové lety',
        headline: 'Vyhlídkové lety v Praze',
        url: 'vyhlidkove-lety-v-praze',
        description:
          'Užijte si krásný výhled na Prahu z ptačí perspektivy během vyhlídkového letu.',
      },
      {
        subtype: 'Pilotem na zkoušku',
        headline: 'Pilotem na zkoušku v Praze',
        url: 'pilotem-na-zkousku-v-praze',
        description:
          'Vyzkoušejte si, jaké to je být pilotem a vezměte na chvíli řízení letadla do svých rukou.',
      },
      {
        subtype: 'Letecké simulátory a trenažéry',
        headline: 'Letecké simulátory v Praze',
        url: 'letecke-simulatory-v-praze',
        description:
          'Zažijte realistický let díky našim leteckým simulátorům a trenažérům v Praze.',
      },
      {
        subtype: 'Adrenalin ve vzduchu',
        headline: 'Adrenalinové zážitky ve vzduchu v Praze',
        url: 'adrenalin-ve-vzduchu-v-praze',
        description:
          'Prožijte adrenalinová dobrodružství ve vzduchu, jako je paragliding nebo skoky padákem.',
      },
    ],
  },
  {
    type: 'Únikové hry',
    headline: 'Únikové hry v Praze',
    url: 'unikove-hry-v-praze',
    description:
      'Vyzkoušejte napínavé únikové hry v Praze a otestujte své schopnosti řešit záhady.',
    subtypes: [
      {
        subtype: 'Únikové hry',
        headline: 'Únikové hry v Praze',
        url: 'unikove-hry-v-praze',
        description:
          'Zažijte napínavé a zábavné únikové hry v Praze, kde musíte vyřešit záhady a uniknout z místnosti.',
      },
      {
        subtype: 'Venkovní únikové hry',
        headline: 'Venkovní únikové hry v Praze',
        url: 'venkovni-unikove-hry-v-praze',
        description:
          'Prozkoumejte Prahu a řešte záhady na našich venkovních únikových hrách.',
      },
      {
        subtype: 'Hororové únikové hry',
        headline: 'Hororové únikové hry v Praze',
        url: 'hororove-unikove-hry-v-praze',
        description:
          'Zažijte strach a napětí na našich hororových únikových hrách v Praze.',
      },
    ],
  },
  {
    type: 'Gastronomické zážitky',
    headline: 'Gastronomické zážitky v Praze',
    url: 'gastronomicke-zazitky-v-praze',
    description:
      'Užijte si jedinečné gastronomické zážitky v Praze, které potěší vaše chuťové pohárky.',
    subtypes: [
      {
        subtype: 'Degustace alkoholu',
        headline: 'Degustace alkoholu v Praze',
        url: 'degustace-alkoholu-v-praze',
        description:
          'Objevte svět různých druhů alkoholu na našich degustacích v Praze.',
      },
      {
        subtype: 'Degustace vína',
        headline: 'Degustace vína v Praze',
        url: 'degustace-vina-v-praze',
        description:
          'Užijte si výjimečná vína a rozšiřte své znalosti na degustacích vína v Praze.',
      },
      {
        subtype: 'Prohlídky s degustací',
        headline: 'Prohlídky s degustací v Praze',
        url: 'prohlidky-s-degustaci-v-praze',
        description:
          'Spojte poznávání Prahy s ochutnáváním místních specialit na našich prohlídkách s degustací.',
      },
      {
        subtype: 'Pivní zážitky',
        headline: 'Pivní zážitky v Praze',
        url: 'pivni-zazitky-v-praze',
        description:
          'Objevte nejlepší pivní zážitky v Praze a ochutnejte místní piva.',
      },
      {
        subtype: 'Gurmán',
        headline: 'Gurmánské zážitky v Praze',
        url: 'gurmanske-zazitky-v-praze',
        description:
          'Vydejte se na gurmánské zážitky v Praze a ochutnejte lahodná jídla od nejlepších kuchařů.',
      },
      {
        subtype: 'Víno',
        headline: 'Vinné zážitky v Praze',
        url: 'vinne-zazitky-v-praze',
        description:
          'Prozkoumejte svět vína na našich vinných zážitcích a ochutnávkách v Praze.',
      },
      {
        subtype: 'Prohlídka pivovaru',
        headline: 'Prohlídky pivovarů v Praze',
        url: 'prohlidky-pivovaru-v-praze',
        description:
          'Nahlédněte do tajemství výroby piva a užijte si prohlídku pivovaru v Praze.',
      },
      {
        subtype: 'Degustace jídla',
        headline: 'Degustace jídla v Praze',
        url: 'degustace-jidla-v-praze',
        description:
          'Ochutnejte rozmanité pokrmy a speciality na našich degustacích jídla v Praze.',
      },
      {
        subtype: 'Pivo',
        headline: 'Pivní zážitky v Praze',
        url: 'pivni-zazitky-v-praze',
        description: 'Užijte si různé druhy piva a pivní zážitky v Praze.',
      },
      {
        subtype: 'Degustace ostatních alkoholů',
        headline: 'Degustace ostatních alkoholů v Praze',
        url: 'degustace-ostatnich-alkoholu-v-praze',
        description:
          'Rozšiřte své znalosti o různé druhy alkoholu na našich degustacích v Praze.',
      },
      {
        subtype: 'Degustace rumů',
        headline: 'Degustace rumů v Praze',
        url: 'degustace-rumu-v-praze',
        description:
          'Užijte si ochutnávku různých druhů rumů a poznejte jejich jedinečné chutě.',
      },
    ],
  },
  {
    type: 'Netradiční',
    headline: 'Netradiční zážitky v Praze',
    url: 'netradicni-zazitky-v-praze',
    description:
      'Objevte netradiční zážitky v Praze, které vám nabídnou něco nového a vzrušujícího.',
    subtypes: [
      {
        subtype: 'Povolání na zkoušku',
        headline: 'Povolání na zkoušku v Praze',
        url: 'povolani-na-zkousku-v-praze',
        description:
          'Vyzkoušejte si různé profese a zjistěte, jaké je to pracovat v různých povoláních v Praze.',
      },
      {
        subtype: 'Netradiční',
        headline: 'Netradiční zážitky v Praze',
        url: 'netradicni-zazitky-v-praze',
        description:
          'Objevte netradiční zážitky v Praze, které vám přinesou nové a vzrušující zážitky.',
      },
      {
        subtype: 'Rozlučka',
        headline: 'Rozlučka se svobodou v Praze',
        url: 'rozlucka-se-svobodou-v-praze',
        description:
          'Uspořádejte nezapomenutelnou rozlučku se svobodou v Praze s našimi speciálními balíčky.',
      },
    ],
  },
  {
    type: 'Relax',
    headline: 'Relaxační zážitky v Praze',
    url: 'relaxacni-zazitky-v-praze',
    description:
      'Najděte si čas na odpočinek a relaxaci s našimi relaxačními zážitky v Praze.',
    subtypes: [
      {
        subtype: 'Masáže',
        headline: 'Masáže v Praze',
        url: 'masaze-v-praze',
        description:
          'Užijte si relaxační masáže v Praze a dopřejte si zasloužený odpočinek.',
      },
      {
        subtype: 'Pivní lázně',
        headline: 'Pivní lázně v Praze',
        url: 'pivni-lazne-v-praze',
        description:
          'Zažijte unikátní relaxaci v pivních lázních v Praze a dopřejte si ošetření pivem.',
      },
      {
        subtype: 'Relaxace a masáže',
        headline: 'Relaxace a masáže v Praze',
        url: 'relaxace-a-masaze-v-praze',
        description:
          'Najděte si čas na relaxaci a užijte si různé druhy masáží v Praze.',
      },
      {
        subtype: 'Tantrické masáže',
        headline: 'Tantrické masáže v Praze',
        url: 'tantricke-masaze-v-praze',
        description:
          'Objevte hlubokou relaxaci a harmonii s tantrickými masážemi v Praze.',
      },
      {
        subtype: 'Relaxační masáže',
        headline: 'Relaxační masáže v Praze',
        url: 'relaxacni-masaze-v-praze',
        description:
          'Dopřejte si odpočinek a uvolnění s našimi relaxačními masážemi v Praze.',
      },
    ],
  },
  {
    type: 'Pobyty',
    headline: 'Pobyty v Praze',
    url: 'pobyty-v-praze',
    description:
      'Objevte různé druhy pobytů v Praze, které vám nabídnou pohodlí a zážitky.',
    subtypes: [
      {
        subtype: 'Pobyty',
        headline: 'Pobyty v Praze',
        url: 'pobyty-v-praze',
        description:
          'Najděte si ideální pobyt v Praze z naší široké nabídky ubytování a zážitků.',
      },
      {
        subtype: 'Wellness pobyty',
        headline: 'Wellness pobyty v Praze',
        url: 'wellness-pobyty-v-praze',
        description:
          'Relaxujte a obnovte svou energii s našimi wellness pobyty v Praze.',
      },
      {
        subtype: 'Zážitkové pobyty',
        headline: 'Zážitkové pobyty v Praze',
        url: 'zazitkove-pobyty-v-praze',
        description:
          'Užijte si nezapomenutelné zážitky s našimi speciálními pobyty v Praze.',
      },
    ],
  },
  {
    type: 'Adrenalin',
    headline: 'Adrenalinové zážitky v Praze',
    url: 'adrenalinove-zazitky-v-praze',
    description:
      'Prožijte adrenalin a vzrušení s našimi adrenalinovými zážitky v Praze.',
    subtypes: [
      {
        subtype: 'Adrenalin za volantem',
        headline: 'Adrenalin za volantem v Praze',
        url: 'adrenalin-za-volantem-v-praze',
        description:
          'Prožijte vzrušení a adrenalin při jízdě za volantem různých vozů v Praze.',
      },
      {
        subtype: 'Další adrenalinové zážitky',
        headline: 'Adrenalinové zážitky v Praze',
        url: 'adrenalinove-zazitky-v-praze',
        description:
          'Najděte širokou nabídku adrenalinových zážitků, které vás dostanou do varu.',
      },
      {
        subtype: 'Bungee jumping',
        headline: 'Bungee jumping v Praze',
        url: 'bungee-jumping-v-praze',
        description:
          'Zažijte extrémní adrenalinový zážitek s bungee jumpingem v Praze.',
      },
    ],
  },
  {
    type: 'Ostatní',
    headline: 'Zážitky v Praze',
    url: 'zazitky-v-praze',
    description:
      'Zážitky Praze.',
    subtypes: [],
  },
];
