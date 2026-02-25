const fs = require('fs');
const path = require('path');

const posts = [
    {
        title: "Beste Catering in Amsterdam voor Grote Feesten",
        slug: "beste-catering-amsterdam-grote-feesten",
        excerpt: "Organiseert u een groot feest in Amsterdam? Ontdek hoe onze professionele catering uw verjaardag of jubileum onvergetelijk maakt met perfecte service en heerlijk eten.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">De Beste Keuze voor Grote Feesten in Amsterdam</h2>
<p class="mb-4">Een groot feest organiseren in Amsterdam kan best veel stress geven. Of het nu gaat om een 50ste verjaardag, een groot familiediner of een speciaal jubileum in uw eigen huis. Het eten moet perfect zijn en er moet genoeg zijn voor iedereen. Daarom is <strong><a href="/nl/catering-feest-thuis" class="text-[#D97757] font-semibold hover:underline">catering in Amsterdam</a></strong> voor grote groepen de ideale oplossing.</p>
<p class="mb-6">Wanneer u kiest voor onze catering service, hoeft u zich nergens zorgen over te maken. Een team van professionele chefs neemt alle taken uit handen, van het koken tot de uiteindelijke schoonmaak.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Wat Maakt Onze Amsterdamse Catering Bijzonder?</h3>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>Maatwerk menu's:</strong> Wij bouwen het menu rondom uw wensen. Van een luxe lopend buffet tot een exclusief 5-gangen diner aan de grote eettafel.</li>
    <li><strong>Alles inbegrepen:</strong> Wij brengen niet alleen het eten. Als dat nodig is, regelen we ook borden, bestek en glazen, zodat u niets hoeft te huren of af te wassen.</li>
    <li><strong>Ervaren thuiskoks:</strong> Onze chefs zijn gewend om in Amsterdamse keukens te werken, zelfs als de ruimte soms wat krap aandoet.</li>
</ul>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
        "@type": "Question",
        "name": "Kunt u grote feesten cateren in een Amsterdams appartement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, we cateren regelematig grote feesten en borrels in Amsterdamse appartementen. We passen ons menu en onze werkwijze aan op de beschikbare ruimte."
        }
    },
    {
        "@type": "Question",
        "name": "Ruimt de catering alles weer op na het feest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. We zorgen dat uw keuken en buffetruimte na afloop weer helemaal netjes en schoon zijn."
        }
    }
  ]
}
</script>
        `
    },
    {
        title: "Luxe Zakelijke Catering op de Zuidas Amsterdam",
        slug: "luxe-zakelijke-catering-zuidas-amsterdam",
        excerpt: "Maak indruk op uw grootste klanten met exclusieve zakelijke catering op de Zuidas. Wij bieden gezonde lunches en high-end board room diners.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Luxe Zakelijke Catering op de Zuidas in Amsterdam</h2>
<p class="mb-4">Als u zaken doet op de Zuidas, weet u dat kwaliteit voorop staat. Standaard belegde broodjes zijn niet altijd de juiste keuze wanneer u de CEO van een groot bedrijf of een belangrijke internationale klant ontvangt. Kies in plaats daarvan voor <strong><a href="/nl/zakelijke-catering-amsterdam" class="text-[#D97757] font-semibold hover:underline">luxe zakelijke catering</a></strong> waarbij een culinaire chef een verse lunch of een indrukwekkend diner verzorgt, gewoon in uw eigen vergaderruimte.</p>
<p class="mb-6">Catering in het zakelijke hart van Amsterdam draait om discretie, stiptheid, en absoluut perfect eten. Dat is precies wat wij leveren.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Onze Opties voor de Zuidas</h3>
<p class="mb-4">Elk kantoor en elk event is anders. Daarom bieden we verschillende pakketten aan:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>De Board Room Lunch:</strong> Een gezonde, lichte en verse meergangenlunch die u scherp houdt. Prachtig opgemaakte borden met verse vis, salades en warme elementen.</li>
    <li><strong>Exclusief Zakendiner:</strong> Sluit een belangrijke deal niet af in een luidruchtig restaurant, maar in de privacy van uw eigen board room met een privé kok.</li>
    <li><strong>Vrijdagmiddagborrel Catering:</strong> Luxe hapjes, oesters, en exclusieve finger food om de week perfect met uw team af te sluiten.</li>
</ul>

<p class="mb-6">Boek vandaag nog een chef voor uw kantoor op de Zuidas en til uw zakelijke bijeenkomsten direct naar een veel hoger culinair niveau.</p>
        `
    },
    {
        title: "Bruiloften en Evenementen Catering in Amsterdam",
        slug: "catering-bruiloften-evenementen-amsterdam",
        excerpt: "Beleef de perfecte dag met onze Amsterdamse bruiloftscatering. Van een heerlijk wandelend diner tot luxe hapjes op uw unieke event locatie.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Onvergetelijke Catering voor Bruiloften in Amsterdam</h2>
<p class="mb-4">Uw trouwdag is één van de belangrijkste dagen in uw leven. Goed eten speelt hier een enorme rol in. Bent u van plan om in Amsterdam te trouwen? Of u het nu viert in een prachtige kerkelijke locatie, een hip pakhuis, of intiem in eigen tuin: onze <strong><a href="/nl/catering-feest-thuis" class="text-[#D97757] font-semibold hover:underline">bruiloftscatering</a></strong> maakt het culinair onvergetelijk.</p>
<p class="mb-6">Wij nemen de volledige zorg voor het eten uit handen, en werken met de beste seizoensgebonden en lokale ingrediënten om uw trouwmenu precies naar wens samen te stellen.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Walking Dinners en Sit-Down Diners</h3>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>Shared Dining:</strong> Grote, weelderige planken vol heerlijkheden midden op tafel, perfect voor een informele en zeer sfeervolle bruiloft.</li>
    <li><strong>Klassiek Meergangendiner:</strong> Een elegante 4- of 5-gangen sit-down maaltijd, waarbij elke gast bediend wordt aan fantastisch gedekte tafels.</li>
    <li><strong>Walking Dinner:</strong> Heeft uw locatie weinig zitplaatsen? Wij serveren luxe warme en koude gerechtjes uit de hand. Gasten kunnen gewoon blijven staan en kletsen!</li>
</ul>

<p class="mb-6">Neem contact met ons team op om de perfecte catering voor uw unieke evenement of bruiloft in Amsterdam door te spreken.</p>
        `
    },
    {
        title: "Exclusieve Borrelhapjes en Finger Food Catering in Amsterdam",
        slug: "exclusieve-borrelhapjes-catering-amsterdam",
        excerpt: "Maak uw Amsterdamse borrel compleet met onze luxe finger food catering. Heerlijke, vers gemaakte hapjes voor bedrijfsfeesten en netwerkevents.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Topklasse Borrelhapjes voor uw Amsterdamse Event</h2>
<p class="mb-4">De Nederlandse 'borrel' is wereldberoemd. In Amsterdam borrelen we graag! Maar vergeet de standaard kaasblokjes met een vlaggetje of de vette bitterballen. Tegenwoordig verwachten uw gasten meer. Wij bieden <strong><a href="/nl/menus/2" class="text-[#D97757] font-semibold hover:underline">luxe borrelhapjes en finger food catering</a></strong> die garant staan voor verbazing en smaak.</p>
<p class="mb-6">Stel u een chique netwerkevent, een galerie opening, of uw eigen verjaardagsfeest voor met prachtig gepresenteerde, eetbare kunstwerkjes. De hapjes worden ter plekke bereid door onze privé chefs en direct warm en vers geserveerd.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Wat is Luxe Finger Food?</h3>
<p class="mb-4">Bij luxe finger food moet u denken aan gerechten zoals:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li>Blini's met gerookte zalm en crème fraîche.</li>
    <li>Krokante gyoza's met verse truffel dip.</li>
    <li>Mini-tataki van rund met een soja glazuur.</li>
    <li>Vegetarische bruschetta met gepofte tomaat en burrata.</li>
</ul>

<p class="mb-6">Met perfecte finger food catering zorgt u ervoor dat gasten blijven praten over de geweldige sfeer en kwaliteit van uw event in Amsterdam.</p>
        `
    },
    {
        title: "Luxe Boot Catering op de Amsterdamse Grachten",
        slug: "luxe-boot-catering-amsterdamse-grachten",
        excerpt: "Vaar door Amsterdam terwijl u geniet van een privé chef aan boord. Ontdek de ultieme luxe boot catering op de grachten voor kleine events.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Catering aan Boord: Dineren op de Amsterdamse Grachten</h2>
<p class="mb-4">Niets is meer iconisch in Amsterdam dan varen over de prachtige historische grachtengordel. En wat dit nóg onvergetelijker maakt, is een indrukwekkend diner of verse lunch direct aan boord. Met speciale <strong><a href="/nl/thuiskok-amsterdam" class="text-[#D97757] font-semibold hover:underline">luxe boot catering</a></strong> huurt u een privé chef in die de pannenkoeken en bitterballen verruilt voor een high-end fine dining ervaring op het water.</p>
<p class="mb-6">Onze thuiskoks zijn erg flexibel. We hebben ervaring met het bereiden van luxe maaltijden in de compacte kombuizen (keukentjes) van Amsterdamse salonboten en grachtenboten.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Waarom Catering op een Boot?</h3>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>Een wisselend decor:</strong> Geniet van uw voor- en hoofdgerecht terwijl monumentale panden en bruggen langzaam voorbij glijden.</li>
    <li><strong>Ultieme privacy:</strong> U heeft geen last van andere restauranttafels naast u. Het is ideaal voor het sluiten van deals of intieme familie uitjes.</li>
    <li><strong>Vers bereid:</strong> Wij brengen niet zomaar voorverpakte maaltijden aan boord. Het eten wordt à la minute en vers door uw privé chef opgediend.</li>
</ul>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
        "@type": "Question",
        "name": "Past een privé chef en de catering wel op een kleine sloep in Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor open sloepjes bieden we perfect voorbereide exclusieve picknicks en koude finger food planken. Voor een echt gekookt diner adviseren we een salonboot met minimaal een kleine keuken en stroom."
        }
    }
  ]
}
</script>
        `
    },
    {
        title: "Vegetarische en Vegan Catering in Amsterdam",
        slug: "vegetarische-vegan-catering-amsterdam",
        excerpt: "Ontdek de allerbeste puur plantaardige en vegetarische catering in Amsterdam. Laat u verrassen door een luxe diner vol smaak, zonder vlees.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Topkwaliteit Plantaardige en Vegetarische Catering in Amsterdam</h2>
<p class="mb-4">Amsterdam is een stad die vooroploopt als het gaat om duurzaam en plantaardig eten. Veel mensen kiezen bewust vaker voor gerechten zonder vlees. Maar vegetarisch en vegan eten mag absoluut niet saai zijn. Onze speciale <strong><a href="/nl/menus/5" class="text-[#D97757] font-semibold hover:underline">vegan catering in Amsterdam</a></strong> draait om explosieve smaken, creativiteit en culinaire hoogstandjes.</p>
<p class="mb-6">Onze privé chefs toveren knolselderij, biet, en paddenstoelen om tot exclusieve gerechten die zelfs fervente vleeseters vaak nog lekkerder vinden klinken.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Waarom Kiezen voor Vegan Catering Thuis?</h3>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>Gezond en licht:</strong> Plantaardige meergangendiners liggen vaak minder zwaar op de maag. U voelt zich energiek, zelfs na vier gangen.</li>
    <li><strong>Zeer kleurrijk:</strong> Vegan gerechten werken heel veel met verse felle kruiden en groenten. Borden zien er uit als schilderijen.</li>
    <li><strong>Inclusief voor iedereen:</strong> Als u een groot gezelschap thuis ontvangt in Amsterdam, is een volledig verrassend vegetarisch menu de veiligste en lekkerste manier om iedereen tevreden te stellen.</li>
</ul>

<p class="mb-6">Verras uzelf en uw gasten met onze next-level vegetarische en veganistische chef aan huis.</p>
        `
    },
    {
        title: "Catering voor Verjaardagen en Familiefeesten in Amsterdam",
        slug: "catering-verjaardagen-familiefeesten-amsterdam",
        excerpt: "Vier de mijlpalen van uw leven met familie en geniet van perfecte catering thuis in Amsterdam. Geen boodschappen, geen rommel, enkel verbinding met uw naasten.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Zorgeloze Catering voor Familiefeesten in Amsterdam</h2>
<p class="mb-4">Wordt oma 80 jaar? Heeft uw kind eindelijk zijn diploma, of vieren jullie een belangrijk gezinsjubileum? Familiefeesten zijn de mooiste momenten. Toch kan het organiseren ervan, zeker in een soms hectisch huishouden in Amsterdam, uitputtend zijn. Door te kiezen voor betrouwbare <strong><a href="/nl/catering-feest-thuis" class="text-[#D97757] font-semibold hover:underline">thuis catering</a></strong> garandeert u niet alleen geweldig eten, maar geeft u uzelf ook het allergrootste cadeau: tijd.</p>
<p class="mb-6">Een privékok of full-service catering team komt bij u thuis, zet alles klaar en zorgt ervoor dat niemand van de familie uren in de pannen hoeft te roeren.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Focus op Tijd met de Familie</h3>
<p class="mb-4">Onze Amsterdamse familie catering kan alle kanten op:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>Een vrolijk familie buffet:</strong> Rijkelijk gevulde schalen, salades en braadstukken waar iedereen zelf (en zo vaak hij wil) kan opscheppen. Ideaal voor grotere gezelschappen met wisselende leeftijden.</li>
    <li><strong>Een statig sit-down familie diner:</strong> Heeft u iets heel speciaals te vieren? Dan koken en serveren we een prachtig drie- of viergangenmenu aan uw feestelijk gedekte tafel.</li>
</ul>

<p class="mb-6">Het lekkerste eten en de minste stress. Dat is het geheim van de beste familiefeesten in Amsterdam.</p>
        `
    }
];

// Re-use working Unsplash URLs
const imageMap = [
    "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2669&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=2740&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2670&auto=format&fit=crop"
];

// Combine standard metadata
const finalPosts = posts.map((p, idx) => {
    return {
        title: p.title,
        slug: p.slug,
        category: "Amsterdam Catering",
        readTime: "4 min leestijd",
        publishedAt: "26 Feb, 2026",
        excerpt: p.excerpt,
        image: imageMap[idx],
        author: {
            name: "Chef David",
            role: "Catering Specialist"
        },
        contentHtml: p.contentHtml
    };
});

const outPath = path.join(__dirname, '../dutch_batch_4.json');
fs.writeFileSync(outPath, JSON.stringify(finalPosts, null, 2));
console.log('Dutch Batch 4 Output saved to: ' + outPath);
