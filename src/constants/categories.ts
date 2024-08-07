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

export const homepageCategories = [
  {
    id: 1,
    title: "Auto-moto",
    description:
      "Pro milovníky rychlosti a adrenalinu nabízíme různé auto-moto zážitky. Vyzkoušejte si jízdu v supersportovních vozech jako Ferrari nebo Lamborghini, které vám poskytnou nezapomenutelný zážitek z rychlosti a výkonu. Pro ty, kteří preferují terénní dobrodružství, máme off-road výlety, kde si můžete vyzkoušet jízdu v náročných podmínkách. Navíc nabízíme kurzy bezpečné jízdy a rally zážitky pro ty, kteří chtějí zlepšit své řidičské dovednosti a zažít adrenalinový zážitek za volantem.",
    link: "/auto-moto-zazitky-v-praze",
  },
  {
    id: 2,
    title: "Sport",
    description:
      "Vyzkoušejte si různé sportovní aktivity v Praze, které vás udrží v kondici a zároveň vás pobaví. Od kolektivních sportů, jako je fotbal, basketbal nebo volejbal, až po individuální výzvy, jako je tenis, squash nebo lezení na umělé stěně. Pro milovníky vody nabízíme plavání, paddleboarding nebo kanoistiku na Vltavě. Pokud hledáte něco klidnějšího, vyzkoušejte jógu nebo pilates v některém z mnoha pražských studií. Sportovní aktivity jsou skvělým způsobem, jak strávit čas s přáteli a zároveň udělat něco pro své zdraví.",
    link: "/sportovni-zazitky-v-praze",
  },
  {
    id: 3,
    title: "Vzduch",
    description:
      "Zažijte nezapomenutelné zážitky ve vzduchu s našimi nabídkami vyhlídkových letů, paraglidingu a balonových letů. Vyhlídkové lety nad Prahou vám poskytnou jedinečný pohled na město z ptačí perspektivy, kde můžete obdivovat krásy historických památek a přírodních scenérií. Pro adrenalinové nadšence nabízíme tandemové seskoky padákem nebo paragliding, které vám umožní zažít volný pád a let nad krajinou. Balonové lety jsou skvělou volbou pro romantický výlet, kde si můžete vychutnat klidný let nad Prahou při východu nebo západu slunce.",
    link: "/zazitky-ve-vzduchu",
  },
  {
    id: 4,
    title: "Únikové hry",
    description:
      "Vyzkoušejte různé únikové hry v Praze a ponořte se do světa záhad a hlavolamů. Únikové hry jsou skvělým způsobem, jak otestovat své logické myšlení, týmovou spolupráci a schopnost řešit problémy pod tlakem. Nabízíme širokou škálu témat od historických dobrodružství, přes sci-fi a hororové příběhy, až po detektivní záhady. Každá hra je pečlivě navržena tak, aby vás vtáhla do svého světa a poskytla vám nezapomenutelný zážitek. Únikové hry jsou ideální aktivitou pro rodiny, přátele i firemní teambuildingy.",
    link: "/unikove-hry-v-praze",
  },
  {
    id: 5,
    title: "Gastronomické zážitky",
    description:
      "Pro milovníky dobrého jídla nabízíme různé gastronomické zážitky v Praze. Navštivte nejlepší restaurace a ochutnejte degustační menu připravené špičkovými šéfkuchaři. Prozkoumejte místní trhy a farmářské trhy, kde můžete ochutnat čerstvé produkty a regionální speciality. Nabízíme také kurzy vaření, kde se můžete naučit připravovat tradiční české pokrmy nebo se zdokonalit v mezinárodní kuchyni. Nezapomeňte navštívit místní kavárny a pekárny, kde si můžete vychutnat vynikající kávu a čerstvé pečivo.",
    link: "/gastronomicke-zazitky-v-praze",
  },
  {
    id: 6,
    title: "Netradiční",
    description:
      "Objevte netradiční zážitky v Praze, které vás překvapí a zanechají nezapomenutelné vzpomínky. Vyzkoušejte například návštěvu pivovaru a ochutnávku různých druhů piva přímo od mistrů sládků. Nabízíme také jízdu historickými tramvajemi, která vás zavede do minulosti a ukáže vám Prahu z jiného úhlu. Pro milovníky umění máme graffiti a street art tour, kde se seznámíte s nejlepšími pražskými umělci a jejich díly. A co třeba noční prohlídka města s průvodcem, který vám ukáže skrytá místa a povypráví vám tajemné příběhy z historie Prahy?",
    link: "/netradicni-zazitky-v-praze",
  },
  {
    id: 7,
    title: "Relax",
    description:
      "Dopřejte si chvíle odpočinku a pohody s našimi relaxačními zážitky v Praze. Nabízíme širokou škálu masáží, wellness a lázeňských procedur, které vám pomohou zrelaxovat tělo i mysl. Navštivte některé z mnoha spa a wellness center, kde si můžete užít sauny, vířivky a bazény. Pro klidné chvíle doporučujeme návštěvu botanických zahrad nebo parků, kde si můžete užít procházky a spojení s přírodou. Yoga a meditace lekce jsou také skvělou volbou pro ty, kteří hledají harmonii a rovnováhu ve svém životě.",
    link: "/relaxacni-zazitky-v-praze",
  },
  {
    id: 8,
    title: "Pobyty",
    description:
      "Prozkoumejte naše tipy na pobyty v Praze a okolí, ať už hledáte luxusní hotely, nebo útulné penziony. Praha nabízí širokou škálu ubytování pro každého cestovatele. Doporučujeme například Hotel Kings Court, který nabízí prvotřídní služby a komfort v centru města. Alchymist Grand Hotel and Spa je skvělou volbou pro romantický pobyt díky svým historickým interiérům a wellness centru. Pro mladší cestovatele a páry máme Mosaic House Design Hotel, který je moderní a ekologicky šetrný. A pokud hledáte něco cenově dostupnějšího, Sophie s Hostel je ideální volbou.",
    link: "/pobyty-v-praze",
  },
  {
    id: 9,
    title: "Adrenalin",
    description:
      "Pro adrenalinové nadšence nabízíme různé extrémní sporty a zážitky, které vám zvýší hladinu adrenalinu. Vyzkoušejte bungee jumping, skydiving nebo ziplining a zažijte pocit volného pádu a rychlosti. Pro ty, kteří mají rádi vodní adrenalin, nabízíme rafting a kayaking na divoké vodě. Můžete si také vyzkoušet horolezectví nebo jízdu na horském kole v náročném terénu. Tyto zážitky jsou ideální pro všechny, kteří hledají vzrušení a nové výzvy.",
    link: "/adrenalinove-zazitky-v-praze",
  },
];

export const categories = [
  {
    type: "Auto-moto",
    headline: "Zážitkové jízdy Praha",
    url: "auto-moto-zazitky-v-praze",
    description:
      "Prozkoumejte širokou škálu auto-moto zážitků v Praze, které vám přinesou adrenalin a vzrušení. Naše nabídka zahrnuje zážitky pro všechny milovníky motorismu. Vyzkoušejte si řízení luxusních sportovních aut, jako jsou Ferrari nebo Tesla, nebo zažijte vzrušení z jízdy na motorce. Pokud hledáte něco opravdu unikátního, doporučujeme netradiční jízdy nebo závodní simulátory, které vám umožní pocítit napětí skutečného závodu. Připravte se na nezapomenutelné chvíle plné rychlosti a krásných výhledů na Prahu, které uspokojí každého motoristického nadšence.",
    subtypes: [
      {
        subtype: "Zážitková jízda",
        headline: "Zážitková jízda v Praze",
        url: "zazitkova-jizda-v-praze",
        description:
          "Zažijte jedinečný adrenalinový zážitek při zážitkové jízdě v Praze. Naše nabídka zahrnuje jízdy v různých vozidlech, od klasických sportovních aut až po nejmodernější elektromobily. Vydejte se na silnice Prahy a vychutnejte si pohled na město z perspektivy, kterou běžně nezažijete. Naše zážitkové jízdy jsou ideální pro ty, kteří hledají vzrušení a chtějí zažít něco nevšedního. Připravte se na nezapomenutelné chvíle plné adrenalinu a vzrušení.",
      },
      {
        subtype: "Tesla",
        headline: "Jízda Teslou v Praze",
        url: "jizda-tesla-v-praze",
        description:
          "Vyzkoušejte si jízdu v moderním elektromobilu Tesla v Praze a zažijte budoucnost dopravy na vlastní kůži. Tesla není jen automobil, je to symbol inovace a technologie. Užijte si tichou a plynulou jízdu, rychlou akceleraci a špičkové technologie, které tento elektromobil nabízí. Jízda Teslou v Praze je nezapomenutelný zážitek, který kombinuje pohodlí, výkon a šetrnost k životnímu prostředí. Přijďte si vyzkoušet, jaké to je řídit vůz, který mění pravidla hry v automobilovém průmyslu.",
      },
      {
        subtype: "Jízda na motorce",
        headline: "Jízda na motorce v Praze",
        url: "jizda-na-motorce-v-praze",
        description:
          "Prožijte vzrušující jízdu na motorce v Praze a objevte krásy města z jiné perspektivy. Jízda na motorce vám nabízí jedinečný pocit svobody a dobrodružství. Proplétejte se ulicemi Prahy, objevujte skryté kouty města a vychutnejte si každý okamžik na dvou kolech. Naše motocyklové zážitky jsou ideální pro ty, kteří hledají nové výzvy a chtějí zažít něco nevšedního. Připravte se na nezapomenutelné chvíle plné adrenalinu, svobody a krásných výhledů na historické i moderní části Prahy.",
      },
      {
        subtype: "Netradiční jízdy",
        headline: "Netradiční jízdy v Praze",
        url: "netradicni-jizdy-v-praze",
        description:
          "Zažijte něco opravdu neobvyklého s našimi netradičními jízdami v Praze, které vám přinesou nezapomenutelné zážitky. Nabízíme širokou škálu netradičních jízd, které uspokojí i ty nejnáročnější dobrodruhy. Od jízd v historických vozidlech až po zážitky v moderních a unikátních vozidlech, které jen tak někde neuvidíte. Naše netradiční jízdy jsou ideální pro ty, kteří hledají nové a vzrušující zážitky. Připravte se na nezapomenutelné chvíle plné překvapení, vzrušení a jedinečných zážitků, které vám Praha může nabídnout.",
      },
      {
        subtype: "Závodní simulátory",
        headline: "Závodní simulátory v Praze",
        url: "zavodni-simulatory-v-praze",
        description:
          "Vyzkoušejte si napětí a vzrušení skutečného závodu v bezpečí našich závodních simulátorů v Praze. Naše simulátory vám umožní zažít realistický závodní zážitek, který vás vtáhne do světa vysokých rychlostí a napětí. Ať už jste začátečník nebo zkušený závodník, naše simulátory jsou navrženy tak, aby vám poskytly co nejautentičtější zážitek. Připravte se na adrenalinový zážitek, který vás dostane na okraj vašich možností a poskytne vám nezapomenutelné chvíle plné vzrušení a napětí.",
      },
      {
        subtype: "Jízda ve Ferrari",
        headline: "Jízda ve Ferrari v Praze",
        url: "jizda-ve-ferrari-v-praze",
        description:
          "Splňte si svůj sen a projděte se Prahou ve Ferrari, jednom z nejluxusnějších a nejvýkonnějších sportovních vozů na světě. Jízda ve Ferrari není jen o rychlosti, je to zážitek, který kombinuje eleganci, sílu a prestiž. Užijte si každý okamžik za volantem tohoto ikonického vozu a prozkoumejte krásy Prahy z pohledu, který vám poskytne jen Ferrari. Připravte se na nezapomenutelné chvíle plné adrenalinu, elegance a jedinečných zážitků, které vám jízda ve Ferrari přinese.",
      },
    ],
  },
  {
    type: "Sport",
    headline: "Sportovní zážitky v Praze",
    url: "sportovni-zazitky-v-praze",
    description:
      "Najděte sportovní aktivity a zážitky v Praze, které vás udrží v kondici a přinesou vám radost. Naše nabídka sportovních zážitků zahrnuje širokou škálu aktivit pro všechny věkové kategorie a úrovně zdatnosti. Ať už hledáte adrenalinové sporty, relaxační aktivity nebo něco mezi tím, máme pro vás tu správnou volbu. Prozkoumejte naše sportovní zážitky a objevte nové způsoby, jak si užít svůj volný čas v Praze a zároveň se udržet v kondici.",
    subtypes: [
      {
        subtype: "Jízda v supersportu",
        headline: "Jízda v supersportu v Praze",
        url: "jizda-v-supersportu-v-praze",
        description:
          "Zažijte rychlost a adrenalin s jízdou v supersportu v Praze. Naše nabídka zahrnuje jízdy v některých z nejrychlejších a nejluxusnějších vozů na světě. Užijte si pocit zrychlení a síly, kterou vám tyto vozy mohou nabídnout. Jízda v supersportu je ideální pro ty, kteří hledají vzrušení a chtějí zažít něco opravdu výjimečného. Připravte se na nezapomenutelné chvíle plné adrenalinu a vzrušení na silnicích Prahy.",
      },
      {
        subtype: "Plavby lodí",
        headline: "Plavby lodí v Praze",
        url: "plavby-lodi-v-praze",
        description:
          "Prožijte romantickou nebo dobrodružnou plavbu lodí po Vltavě v Praze. Naše plavby nabízejí jedinečnou příležitost obdivovat krásy Prahy z vody. Ať už se rozhodnete pro romantickou večeři na lodi, nebo dobrodružnou plavbu s přáteli, naše nabídka má něco pro každého. Užijte si klidnou atmosféru a krásné výhledy na historické památky Prahy, které jen tak někde neuvidíte. Připravte se na nezapomenutelné chvíle plné relaxace a krásných výhledů.",
      },
      {
        subtype: "Střelba",
        headline: "Střelba v Praze",
        url: "strelba-v-praze",
        description:
          "Otestujte svou přesnost a zažijte adrenalin na střelnici v Praze. Naše střelnice nabízí širokou škálu zbraní, od klasických po moderní, a je ideálním místem pro všechny, kteří chtějí vyzkoušet své střelecké schopnosti. Ať už jste začátečník nebo zkušený střelec, naše střelnice vám poskytne nezapomenutelný zážitek plný vzrušení a napětí. Připravte se na adrenalinový zážitek, který vám umožní otestovat svou přesnost a rychlost v bezpečném a kontrolovaném prostředí.",
      },
      {
        subtype: "Souboje supersportů",
        headline: "Souboje supersportů v Praze",
        url: "souboje-supersportu-v-praze",
        description:
          "Soutěžte v jízdě s různými supersporty a zjistěte, kdo je nejrychlejší. Naše souboje supersportů nabízejí jedinečnou příležitost porovnat své dovednosti s ostatními řidiči a zažít adrenalinový závod na vlastní kůži. Ať už jste fanoušek rychlých aut nebo hledáte vzrušení, naše nabídka soubojů supersportů je přesně pro vás. Připravte se na nezapomenutelné chvíle plné rychlosti, adrenalinu a vzrušení na závodní dráze v Praze.",
      },
      {
        subtype: "Sport",
        headline: "Sportovní aktivity v Praze",
        url: "sportovni-aktivity-v-praze",
        description:
          "Objevte širokou škálu sportovních aktivit, které Praha nabízí. Naše nabídka zahrnuje vše od týmových sportů, přes individuální cvičení až po adrenalinové zážitky. Ať už hledáte způsob, jak se udržet v kondici, nebo chcete vyzkoušet něco nového a vzrušujícího, naše sportovní aktivity jsou tu pro vás. Prozkoumejte naši nabídku a najděte si tu správnou aktivitu, která vám přinese radost a udrží vás ve formě.",
      },
      {
        subtype: "Půjčení supersportu",
        headline: "Půjčení supersportu v Praze",
        url: "pujceni-supersportu-v-praze",
        description:
          "Půjčte si supersport v Praze a užijte si jízdu v jednom z nejrychlejších vozů na světě. Naše nabídka zahrnuje půjčení luxusních sportovních vozů, které vám poskytnou nezapomenutelný zážitek plný adrenalinu a vzrušení. Ať už plánujete jízdu po městě nebo výlet do okolí, půjčení supersportu je ideální volbou pro ty, kteří hledají jedinečný zážitek. Připravte se na nezapomenutelné chvíle plné rychlosti, luxusu a krásných výhledů na Prahu.",
      },
      {
        subtype: "Golf",
        headline: "Golf v Praze",
        url: "golf-v-praze",
        description:
          "Zahrajte si golf na jedněch z nejlepších golfových hřišť v Praze. Naše nabídka zahrnuje hřiště pro všechny úrovně zdatnosti, od začátečníků až po zkušené hráče. Užijte si klidnou atmosféru a krásné výhledy na zelené plochy, které vám poskytne jen golf. Ať už hledáte způsob, jak si užít volný čas, nebo chcete zlepšit své golfové dovednosti, naše nabídka golfových zážitků je tu pro vás. Připravte se na nezapomenutelné chvíle plné relaxace a sportu na jednom z našich prestižních hřišť.",
      },
      {
        subtype: "Lezení",
        headline: "Lezení v Praze",
        url: "lezeni-v-praze",
        description:
          "Vyzvěte své schopnosti na lezeckých stěnách a skalách v Praze. Naše nabídka zahrnuje širokou škálu lezeckých aktivit, od umělých stěn až po přírodní skály. Ať už jste začátečník nebo zkušený lezec, naše lezecké zážitky vám poskytnou nezapomenutelné chvíle plné výzev a adrenalinu. Prozkoumejte krásy Prahy z výšky a užijte si každý okamžik strávený lezením. Připravte se na nezapomenutelné chvíle plné vzrušení a výzev na našich lezeckých stěnách a skalách.",
      },
    ],
  },
  {
    type: "Vzduch",
    headline: "Vzdušné zážitky v Praze",
    url: "vzduchne-zazitky-v-praze",
    description:
      "Zažijte vzrušení a adrenalin s našimi vzdušnými zážitky v Praze. Naše nabídka zahrnuje širokou škálu aktivit, které vás dostanou do vzduchu a umožní vám obdivovat krásy Prahy z ptačí perspektivy. Ať už hledáte dobrodružství ve větrném tunelu, vyhlídkové lety nebo chcete zkusit být pilotem, naše vzdušné zážitky jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné vzrušení a jedinečných pohledů na město, které vám poskytne jen vzdušná perspektiva.",
    subtypes: [
      {
        subtype: "Větrný tunel",
        headline: "Větrný tunel v Praze",
        url: "vetrny-tunel-v-praze",
        description:
          "Zažijte pocit volného pádu v bezpečí větrného tunelu v Praze. Naše větrné tunely nabízejí jedinečný zážitek, který simuluje pocit skutečného volného pádu, ale v bezpečném a kontrolovaném prostředí. Ať už jste začátečník nebo zkušený parašutista, naše větrné tunely jsou ideálním místem pro trénink nebo zábavu. Připravte se na adrenalinový zážitek, který vám umožní zažít pocit volného pádu bez nutnosti skákat z letadla.",
      },
      {
        subtype: "Vyhlídkové lety",
        headline: "Vyhlídkové lety v Praze",
        url: "vyhlidkove-lety-v-praze",
        description:
          "Užijte si krásný výhled na Prahu z ptačí perspektivy během vyhlídkového letu. Naše vyhlídkové lety nabízejí jedinečnou příležitost obdivovat historické památky a krásy Prahy z výšky. Ať už hledáte romantický let pro dva, nebo dobrodružnou vyhlídkovou trasu, naše nabídka má něco pro každého. Připravte se na nezapomenutelné chvíle plné krásných výhledů a jedinečných zážitků, které vám poskytne jen let nad Prahou.",
      },
      {
        subtype: "Pilotem na zkoušku",
        headline: "Pilotem na zkoušku v Praze",
        url: "pilotem-na-zkousku-v-praze",
        description:
          "Vyzkoušejte si, jaké to je být pilotem a vezměte na chvíli řízení letadla do svých rukou. Naše nabídka pilotem na zkoušku vám umožní zažít jedinečný zážitek řízení letadla pod dohledem zkušeného instruktora. Ať už jste vždy snili o tom být pilotem, nebo hledáte vzrušující zážitek, naše nabídka je tu pro vás. Připravte se na nezapomenutelné chvíle plné adrenalinu a vzrušení, které vám poskytne jen letadlo ve vašich rukou.",
      },
      {
        subtype: "Letecké simulátory a trenažéry",
        headline: "Letecké simulátory v Praze",
        url: "letecke-simulatory-v-praze",
        description:
          "Zažijte realistický let díky našim leteckým simulátorům a trenažérům v Praze. Naše simulátory vám umožní zažít pocit skutečného letu, aniž byste museli opustit zem. Ať už jste začátečník nebo zkušený pilot, naše simulátory jsou ideálním místem pro trénink nebo zábavu. Připravte se na nezapomenutelné chvíle plné vzrušení a adrenalinu, které vám umožní zažít pocit letu v bezpečném a kontrolovaném prostředí.",
      },
      {
        subtype: "Adrenalin ve vzduchu",
        headline: "Adrenalinové zážitky ve vzduchu v Praze",
        url: "adrenalin-ve-vzduchu-v-praze",
        description:
          "Prožijte adrenalinová dobrodružství ve vzduchu, jako je paragliding nebo skoky padákem. Naše nabídka adrenalinových zážitků ve vzduchu vám umožní zažít vzrušení a dobrodružství, které jen tak někde nezažijete. Ať už hledáte způsob, jak překonat své obavy, nebo chcete zažít něco opravdu výjimečného, naše adrenalinové zážitky ve vzduchu jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné vzrušení a adrenalinu, které vám poskytne jen vzdušná perspektiva.",
      },
    ],
  },
  {
    type: "Únikové hry",
    headline: "Únikové hry v Praze",
    url: "unikove-hry-v-praze",
    description:
      "Vyzkoušejte napínavé únikové hry v Praze a otestujte své schopnosti řešit záhady. Naše nabídka únikových her zahrnuje širokou škálu témat a obtížností, které uspokojí všechny milovníky dobrodružství a záhad. Ať už hledáte způsob, jak si užít volný čas s přáteli, nebo chcete vyzkoušet něco nového a vzrušujícího, naše únikové hry jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné napětí a vzrušení, které vám umožní zažít pocit skutečného dobrodružství.",
    subtypes: [
      {
        subtype: "Únikové hry",
        headline: "Únikové hry v Praze",
        url: "unikove-hry-v-praze",
        description:
          "Zažijte napínavé a zábavné únikové hry v Praze, kde musíte vyřešit záhady a uniknout z místnosti. Naše únikové hry jsou navrženy tak, aby vás vtáhly do světa plného tajemství a výzev, které musíte překonat, abyste unikli. Ať už jste začátečník nebo zkušený hráč, naše únikové hry vám poskytnou nezapomenutelné chvíle plné napětí a vzrušení. Připravte se na jedinečný zážitek, který vás přenese do světa záhad a dobrodružství, kde musíte použít svou logiku a týmovou práci, abyste se dostali ven.",
      },
      {
        subtype: "Venkovní únikové hry",
        headline: "Venkovní únikové hry v Praze",
        url: "venkovni-unikove-hry-v-praze",
        description:
          "Prozkoumejte Prahu a řešte záhady na našich venkovních únikových hrách. Naše venkovní únikové hry vám umožní spojit dobrodružství s objevováním krás Prahy. Ať už hledáte způsob, jak strávit aktivně čas venku, nebo chcete zažít něco nového a vzrušujícího, naše venkovní únikové hry jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné napětí a vzrušení, které vám umožní zažít pocit skutečného dobrodružství pod širým nebem.",
      },
      {
        subtype: "Hororové únikové hry",
        headline: "Hororové únikové hry v Praze",
        url: "hororove-unikove-hry-v-praze",
        description:
          "Zažijte strach a napětí na našich hororových únikových hrách v Praze. Naše hororové únikové hry jsou navrženy tak, aby vás vtáhly do světa plného hrůzy a napětí, kde musíte překonat své obavy a vyřešit záhady, abyste unikli. Ať už jste fanoušek hororů nebo hledáte vzrušení, naše hororové únikové hry vám poskytnou nezapomenutelné chvíle plné strachu a adrenalinu. Připravte se na jedinečný zážitek, který vás přenese do světa temných tajemství a hrůzy, kde musíte použít svou logiku a odvahu, abyste se dostali ven.",
      },
    ],
  },
  {
    type: "Gastronomické zážitky",
    headline: "Gastronomické zážitky v Praze",
    url: "gastronomicke-zazitky-v-praze",
    description:
      "Užijte si jedinečné gastronomické zážitky v Praze, které potěší vaše chuťové pohárky. Naše nabídka gastronomických zážitků zahrnuje širokou škálu aktivit, od degustací vína a alkoholu, přes gurmánské zážitky až po prohlídky s degustací. Ať už jste milovník dobrého jídla, nebo hledáte způsob, jak si užít večer s přáteli, naše gastronomické zážitky jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné chutí a vůní, které vám umožní objevit nové a vzrušující gastronomické zážitky v Praze.",
    subtypes: [
      {
        subtype: "Degustace alkoholu",
        headline: "Degustace alkoholu v Praze",
        url: "degustace-alkoholu-v-praze",
        description:
          "Objevte svět různých druhů alkoholu na našich degustacích v Praze. Naše degustace alkoholu vám umožní vyzkoušet širokou škálu nápojů, od rumů a whisky, přes vína až po další speciality. Ať už jste znalec nebo začátečník, naše degustace jsou navrženy tak, aby vám poskytly jedinečný zážitek plný nových chutí a vůní. Připravte se na nezapomenutelné chvíle plné objevování a poznávání světa alkoholu, které vám umožní rozšířit své znalosti a objevit nové oblíbené nápoje.",
      },
      {
        subtype: "Degustace vína",
        headline: "Degustace vína v Praze",
        url: "degustace-vina-v-praze",
        description:
          "Užijte si výjimečná vína a rozšiřte své znalosti na degustacích vína v Praze. Naše degustace vína vám umožní objevit širokou škálu vín, od místních specialit až po světové značky. Ať už jste milovník vína nebo začátečník, naše degustace jsou navrženy tak, aby vám poskytly jedinečný zážitek plný nových chutí a vůní. Připravte se na nezapomenutelné chvíle plné objevování a poznávání světa vína, které vám umožní rozšířit své znalosti a objevit nové oblíbené vína.",
      },
      {
        subtype: "Prohlídky s degustací",
        headline: "Prohlídky s degustací v Praze",
        url: "prohlidky-s-degustaci-v-praze",
        description:
          "Spojte poznávání Prahy s ochutnáváním místních specialit na našich prohlídkách s degustací. Naše prohlídky s degustací vám umožní objevit krásy Prahy a zároveň si vychutnat místní speciality. Ať už hledáte způsob, jak strávit odpoledne s přáteli, nebo chcete zažít něco nového a vzrušujícího, naše prohlídky s degustací jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné krásných výhledů a lahodných chutí, které vám umožní objevit nové a vzrušující gastronomické zážitky v Praze.",
      },
      {
        subtype: "Pivní zážitky",
        headline: "Pivní zážitky v Praze",
        url: "pivni-zazitky-v-praze",
        description:
          "Objevte nejlepší pivní zážitky v Praze a ochutnejte místní piva. Naše pivní zážitky vám umožní vyzkoušet širokou škálu piv, od místních specialit až po světové značky. Ať už jste milovník piva nebo začátečník, naše pivní zážitky jsou navrženy tak, aby vám poskytly jedinečný zážitek plný nových chutí a vůní. Připravte se na nezapomenutelné chvíle plné objevování a poznávání světa piva, které vám umožní rozšířit své znalosti a objevit nové oblíbené piva.",
      },
      {
        subtype: "Gurmán",
        headline: "Gurmánské zážitky v Praze",
        url: "gurmanske-zazitky-v-praze",
        description:
          "Vydejte se na gurmánské zážitky v Praze a ochutnejte lahodná jídla od nejlepších kuchařů. Naše gurmánské zážitky vám umožní vyzkoušet širokou škálu jídel, od místních specialit až po světové kuchyně. Ať už jste milovník dobrého jídla nebo začátečník, naše gurmánské zážitky jsou navrženy tak, aby vám poskytly jedinečný zážitek plný nových chutí a vůní. Připravte se na nezapomenutelné chvíle plné objevování a poznávání světa gastronomie, které vám umožní rozšířit své znalosti a objevit nové oblíbené pokrmy.",
      },
      {
        subtype: "Víno",
        headline: "Vinné zážitky v Praze",
        url: "vinne-zazitky-v-praze",
        description:
          "Prozkoumejte svět vína na našich vinných zážitcích a ochutnávkách v Praze. Naše vinné zážitky vám umožní vyzkoušet širokou škálu vín, od místních specialit až po světové značky. Ať už jste milovník vína nebo začátečník, naše vinné zážitky jsou navrženy tak, aby vám poskytly jedinečný zážitek plný nových chutí a vůní. Připravte se na nezapomenutelné chvíle plné objevování a poznávání světa vína, které vám umožní rozšířit své znalosti a objevit nové oblíbené vína.",
      },
      {
        subtype: "Prohlídka pivovaru",
        headline: "Prohlídky pivovarů v Praze",
        url: "prohlidky-pivovaru-v-praze",
        description:
          "Nahlédněte do tajemství výroby piva a užijte si prohlídku pivovaru v Praze. Naše prohlídky pivovarů vám umožní objevit, jak se vyrábí vaše oblíbené pivo a ochutnat ho přímo u zdroje. Ať už jste milovník piva nebo začátečník, naše prohlídky pivovarů jsou navrženy tak, aby vám poskytly jedinečný zážitek plný nových chutí a vůní. Připravte se na nezapomenutelné chvíle plné objevování a poznávání světa piva, které vám umožní rozšířit své znalosti a objevit nové oblíbené piva.",
      },
      {
        subtype: "Degustace jídla",
        headline: "Degustace jídla v Praze",
        url: "degustace-jidla-v-praze",
        description:
          "Ochutnejte rozmanité pokrmy a speciality na našich degustacích jídla v Praze. Naše degustace jídla vám umožní vyzkoušet širokou škálu pokrmů, od místních specialit až po světové kuchyně. Ať už jste milovník dobrého jídla nebo začátečník, naše degustace jídla jsou navrženy tak, aby vám poskytly jedinečný zážitek plný nových chutí a vůní. Připravte se na nezapomenutelné chvíle plné objevování a poznávání světa gastronomie, které vám umožní rozšířit své znalosti a objevit nové oblíbené pokrmy.",
      },
      {
        subtype: "Pivo",
        headline: "Pivní zážitky v Praze",
        url: "pivni-zazitky-v-praze",
        description:
          "Užijte si různé druhy piva a pivní zážitky v Praze. Naše pivní zážitky vám umožní vyzkoušet širokou škálu piv, od místních specialit až po světové značky. Ať už jste milovník piva nebo začátečník, naše pivní zážitky jsou navrženy tak, aby vám poskytly jedinečný zážitek plný nových chutí a vůní. Připravte se na nezapomenutelné chvíle plné objevování a poznávání světa piva, které vám umožní rozšířit své znalosti a objevit nové oblíbené piva.",
      },
      {
        subtype: "Degustace ostatních alkoholů",
        headline: "Degustace ostatních alkoholů v Praze",
        url: "degustace-ostatnich-alkoholu-v-praze",
        description:
          "Rozšiřte své znalosti o různé druhy alkoholu na našich degustacích v Praze. Naše degustace alkoholu vám umožní vyzkoušet širokou škálu nápojů, od rumů a whisky, přes vína až po další speciality. Ať už jste znalec nebo začátečník, naše degustace jsou navrženy tak, aby vám poskytly jedinečný zážitek plný nových chutí a vůní. Připravte se na nezapomenutelné chvíle plné objevování a poznávání světa alkoholu, které vám umožní rozšířit své znalosti a objevit nové oblíbené nápoje.",
      },
      {
        subtype: "Degustace rumů",
        headline: "Degustace rumů v Praze",
        url: "degustace-rumu-v-praze",
        description:
          "Užijte si ochutnávku různých druhů rumů a poznejte jejich jedinečné chutě. Naše degustace rumů vám umožní objevit širokou škálu rumů, od tradičních až po moderní varianty. Ať už jste milovník rumu nebo začátečník, naše degustace jsou navrženy tak, aby vám poskytly jedinečný zážitek plný nových chutí a vůní. Připravte se na nezapomenutelné chvíle plné objevování a poznávání světa rumu, které vám umožní rozšířit své znalosti a objevit nové oblíbené rumy.",
      },
    ],
  },
  {
    type: "Netradiční",
    headline: "Netradiční zážitky v Praze",
    url: "netradicni-zazitky-v-praze",
    description:
      "Objevte netradiční zážitky v Praze, které vám nabídnou něco nového a vzrušujícího. Naše nabídka netradičních zážitků zahrnuje širokou škálu aktivit, které uspokojí všechny, kteří hledají něco nevšedního a unikátního. Ať už chcete vyzkoušet nové povolání na zkoušku, nebo hledáte způsob, jak uspořádat nezapomenutelnou rozlučku se svobodou, naše netradiční zážitky jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné nových zkušeností a vzrušení, které vám nabídne jen Praha.",
    subtypes: [
      {
        subtype: "Povolání na zkoušku",
        headline: "Povolání na zkoušku v Praze",
        url: "povolani-na-zkousku-v-praze",
        description:
          "Vyzkoušejte si různé profese a zjistěte, jaké je to pracovat v různých povoláních v Praze. Naše nabídka povolání na zkoušku vám umožní zažít, jaké to je být například hasičem, kuchařem nebo pilotem. Ať už jste vždy snili o tom, že si vyzkoušíte nějaké povolání, nebo hledáte způsob, jak zažít něco nového a vzrušujícího, naše nabídka povolání na zkoušku je tu pro vás. Připravte se na nezapomenutelné chvíle plné nových zkušeností a vzrušení, které vám nabídne jen Praha.",
      },
      {
        subtype: "Netradiční",
        headline: "Netradiční zážitky v Praze",
        url: "netradicni-zazitky-v-praze",
        description:
          "Objevte netradiční zážitky v Praze, které vám přinesou nové a vzrušující zážitky. Naše nabídka netradičních zážitků zahrnuje širokou škálu aktivit, které uspokojí všechny, kteří hledají něco nevšedního a unikátního. Ať už chcete vyzkoušet nové povolání na zkoušku, nebo hledáte způsob, jak uspořádat nezapomenutelnou rozlučku se svobodou, naše netradiční zážitky jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné nových zkušeností a vzrušení, které vám nabídne jen Praha.",
      },
      {
        subtype: "Rozlučka",
        headline: "Rozlučka se svobodou v Praze",
        url: "rozlucka-se-svobodou-v-praze",
        description:
          "Uspořádejte nezapomenutelnou rozlučku se svobodou v Praze s našimi speciálními balíčky. Naše nabídka rozluček se svobodou zahrnuje širokou škálu aktivit, které uspokojí všechny, kteří hledají něco nevšedního a unikátního. Ať už chcete uspořádat divokou párty nebo hledáte způsob, jak si užít poslední dny svobody, naše rozlučky se svobodou jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné nových zkušeností a vzrušení, které vám nabídne jen Praha.",
      },
    ],
  },
  {
    type: "Relax",
    headline: "Relaxační zážitky v Praze",
    url: "relaxacni-zazitky-v-praze",
    description:
      "Najděte si čas na odpočinek a relaxaci s našimi relaxačními zážitky v Praze. Naše nabídka relaxačních zážitků zahrnuje širokou škálu aktivit, které vám pomohou znovu načerpat energii a odpočinout si od každodenního stresu. Ať už hledáte způsob, jak si užít klidné odpoledne s masáží, nebo chcete vyzkoušet něco nového a vzrušujícího, naše relaxační zážitky jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné klidu a pohody, které vám umožní znovu načerpat energii a užít si krásy Prahy.",
    subtypes: [
      {
        subtype: "Masáže",
        headline: "Masáže v Praze",
        url: "masaze-v-praze",
        description:
          "Užijte si relaxační masáže v Praze a dopřejte si zasloužený odpočinek. Naše nabídka masáží zahrnuje širokou škálu technik, od klasických masáží až po exotické a terapeutické procedury. Ať už hledáte způsob, jak si odpočinout po náročném dni, nebo chcete vyzkoušet něco nového a vzrušujícího, naše masáže jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné klidu a pohody, které vám umožní znovu načerpat energii a užít si krásy Prahy.",
      },
      {
        subtype: "Pivní lázně",
        headline: "Pivní lázně v Praze",
        url: "pivni-lazne-v-praze",
        description:
          "Zažijte unikátní relaxaci v pivních lázních v Praze a dopřejte si ošetření pivem. Naše pivní lázně vám umožní vyzkoušet relaxační procedury, které využívají blahodárné účinky piva na tělo a mysl. Ať už hledáte způsob, jak si odpočinout po náročném dni, nebo chcete vyzkoušet něco nového a vzrušujícího, naše pivní lázně jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné klidu a pohody, které vám umožní znovu načerpat energii a užít si krásy Prahy.",
      },
      {
        subtype: "Relaxace a masáže",
        headline: "Relaxace a masáže v Praze",
        url: "relaxace-a-masaze-v-praze",
        description:
          "Najděte si čas na relaxaci a užijte si různé druhy masáží v Praze. Naše nabídka relaxačních procedur zahrnuje širokou škálu technik, od klasických masáží až po exotické a terapeutické procedury. Ať už hledáte způsob, jak si odpočinout po náročném dni, nebo chcete vyzkoušet něco nového a vzrušujícího, naše relaxační a masážní procedury jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné klidu a pohody, které vám umožní znovu načerpat energii a užít si krásy Prahy.",
      },
      {
        subtype: "Tantrické masáže",
        headline: "Tantrické masáže v Praze",
        url: "tantricke-masaze-v-praze",
        description:
          "Objevte hlubokou relaxaci a harmonii s tantrickými masážemi v Praze. Naše tantrické masáže vám umožní zažít jedinečný zážitek, který kombinuje relaxaci těla i mysli. Ať už hledáte způsob, jak si odpočinout po náročném dni, nebo chcete vyzkoušet něco nového a vzrušujícího, naše tantrické masáže jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné klidu a pohody, které vám umožní znovu načerpat energii a užít si krásy Prahy.",
      },
      {
        subtype: "Thajské masáže",
        headline: "Thajské masáže v Praze",
        url: "thajske-masaze-v-praze",
        description:
          "Objevte hlubokou relaxaci a harmonii s tantrickými masážemi v Praze. Naše thajské masáže vám umožní zažít jedinečný zážitek, který kombinuje relaxaci těla i mysli. Ať už hledáte způsob, jak si odpočinout po náročném dni, nebo chcete vyzkoušet něco nového a vzrušujícího, naše thajské masáže jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné klidu a pohody, které vám umožní znovu načerpat energii a užít si krásy Prahy.",
      },
      {
        subtype: "Relaxační masáže",
        headline: "Relaxační masáže v Praze",
        url: "relaxacni-masaze-v-praze",
        description:
          "Dopřejte si odpočinek a uvolnění s našimi relaxačními masážemi v Praze. Naše nabídka relaxačních masáží zahrnuje širokou škálu technik, od klasických masáží až po exotické a terapeutické procedury. Ať už hledáte způsob, jak si odpočinout po náročném dni, nebo chcete vyzkoušet něco nového a vzrušujícího, naše relaxační masáže jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné klidu a pohody, které vám umožní znovu načerpat energii a užít si krásy Prahy.",
      },
    ],
  },
  {
    type: "Pobyty",
    headline: "Pobyty v Praze",
    url: "pobyty-v-praze",
    description:
      "Objevte různé druhy pobytů v Praze, které vám nabídnou pohodlí a zážitky. Naše nabídka pobytů zahrnuje širokou škálu možností, od luxusních wellness pobytů až po zážitkové pobyty, které vám umožní objevovat krásy Prahy. Ať už hledáte způsob, jak si užít romantický víkend, nebo chcete zažít něco nového a vzrušujícího, naše pobyty jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné relaxace a dobrodružství, které vám umožní objevovat krásy Prahy a užívat si pohodlí našich pobytů.",
    subtypes: [
      {
        subtype: "Pobyty",
        headline: "Pobyty v Praze",
        url: "pobyty-v-praze",
        description:
          "Najděte si ideální pobyt v Praze z naší široké nabídky ubytování a zážitků. Naše nabídka pobytů zahrnuje širokou škálu možností, od luxusních wellness pobytů až po zážitkové pobyty, které vám umožní objevovat krásy Prahy. Ať už hledáte způsob, jak si užít romantický víkend, nebo chcete zažít něco nového a vzrušujícího, naše pobyty jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné relaxace a dobrodružství, které vám umožní objevovat krásy Prahy a užívat si pohodlí našich pobytů.",
      },
      {
        subtype: "Wellness pobyty",
        headline: "Wellness pobyty v Praze",
        url: "wellness-pobyty-v-praze",
        description:
          "Relaxujte a obnovte svou energii s našimi wellness pobyty v Praze. Naše nabídka wellness pobytů zahrnuje širokou škálu relaxačních procedur, které vám pomohou znovu načerpat energii a odpočinout si od každodenního stresu. Ať už hledáte způsob, jak si užít klidné odpoledne s masáží, nebo chcete vyzkoušet něco nového a vzrušujícího, naše wellness pobyty jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné klidu a pohody, které vám umožní znovu načerpat energii a užít si krásy Prahy.",
      },
      {
        subtype: "Zážitkové pobyty",
        headline: "Zážitkové pobyty v Praze",
        url: "zazitkove-pobyty-v-praze",
        description:
          "Užijte si nezapomenutelné zážitky s našimi speciálními pobyty v Praze. Naše zážitkové pobyty vám umožní objevovat krásy Prahy a užívat si pohodlí našich ubytování. Ať už hledáte způsob, jak si užít romantický víkend, nebo chcete zažít něco nového a vzrušujícího, naše zážitkové pobyty jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné dobrodružství a relaxace, které vám umožní objevovat krásy Prahy a užívat si pohodlí našich pobytů.",
      },
    ],
  },
  {
    type: "Adrenalin",
    headline: "Adrenalinové zážitky v Praze",
    url: "adrenalinove-zazitky-v-praze",
    description:
      "Prožijte adrenalin a vzrušení s našimi adrenalinovými zážitky v Praze. Naše nabídka adrenalinových zážitků zahrnuje širokou škálu aktivit, které vás dostanou do varu a umožní vám zažít nevšední dobrodružství. Ať už hledáte způsob, jak překonat své obavy, nebo chcete zažít něco opravdu výjimečného, naše adrenalinové zážitky jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné vzrušení a adrenalinu, které vám poskytne jen Praha.",
    subtypes: [
      {
        subtype: "Adrenalin za volantem",
        headline: "Adrenalin za volantem v Praze",
        url: "adrenalin-za-volantem-v-praze",
        description:
          "Prožijte vzrušení a adrenalin při jízdě za volantem různých vozů v Praze. Naše nabídka zahrnuje jízdy v luxusních sportovních vozech, které vám poskytnou nezapomenutelný zážitek plný adrenalinu a vzrušení. Ať už plánujete jízdu po městě nebo výlet do okolí, naše adrenalinové jízdy za volantem jsou ideální volbou pro ty, kteří hledají jedinečný zážitek. Připravte se na nezapomenutelné chvíle plné rychlosti, luxusu a krásných výhledů na Prahu.",
      },
      {
        subtype: "Další adrenalinové zážitky",
        headline: "Adrenalinové zážitky v Praze",
        url: "adrenalinove-zazitky-v-praze",
        description:
          "Najděte širokou nabídku adrenalinových zážitků, které vás dostanou do varu. Naše adrenalinové zážitky zahrnují širokou škálu aktivit, které uspokojí všechny milovníky dobrodružství a vzrušení. Ať už hledáte způsob, jak překonat své obavy, nebo chcete zažít něco opravdu výjimečného, naše adrenalinové zážitky jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné vzrušení a adrenalinu, které vám poskytne jen Praha.",
      },
      {
        subtype: "Bungee jumping",
        headline: "Bungee jumping v Praze",
        url: "bungee-jumping-v-praze",
        description:
          "Zažijte extrémní adrenalinový zážitek s bungee jumpingem v Praze. Naše nabídka bungee jumpingu vám umožní zažít nevšední dobrodružství, které vám poskytne nezapomenutelný zážitek plný adrenalinu a vzrušení. Ať už hledáte způsob, jak překonat své obavy, nebo chcete zažít něco opravdu výjimečného, naše nabídka bungee jumpingu je tu pro vás. Připravte se na nezapomenutelné chvíle plné vzrušení a adrenalinu, které vám poskytne jen Praha.",
      },
    ],
  },
  {
    type: "Ostatní",
    headline: "Zážitky v Praze",
    url: "zazitky-v-praze",
    description:
      "Objevte širokou škálu zážitků v Praze, které vám nabídnou něco nového a vzrušujícího. Naše nabídka zážitků zahrnuje širokou škálu aktivit, které uspokojí všechny, kteří hledají něco nevšedního a unikátního. Ať už chcete vyzkoušet nové povolání na zkoušku, nebo hledáte způsob, jak uspořádat nezapomenutelnou rozlučku se svobodou, naše zážitky jsou tu pro vás. Připravte se na nezapomenutelné chvíle plné nových zkušeností a vzrušení, které vám nabídne jen Praha.",
    subtypes: [],
  },
];
