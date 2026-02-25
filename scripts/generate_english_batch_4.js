const fs = require('fs');
const path = require('path');

const posts = [
    {
        title: "Best Catering in Amsterdam for Large Parties",
        slug: "beste-catering-amsterdam-grote-feesten",
        excerpt: "Organizing a large party in Amsterdam? Discover how our professional catering makes your birthday or anniversary unforgettable with perfect service and delicious food.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">The Best Choice for Large Parties in Amsterdam</h2>
<p class="mb-4">Organizing a large party in Amsterdam can be quite stressful. Whether it's a 50th birthday, a large family dinner, or a special anniversary in your own home. The food has to be perfect and there has to be enough for everyone. That is why <strong><a href="/en/catering-feest-thuis" class="text-[#D97757] font-semibold hover:underline">catering in Amsterdam</a></strong> for large groups is the ideal solution.</p>
<p class="mb-6">When you choose our catering service, you don't have to worry about anything. A team of professional chefs takes all tasks off your hands, from cooking to the final cleanup.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">What Makes Our Amsterdam Catering Special?</h3>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>Custom menus:</strong> We build the menu around your wishes. From a luxury walking buffet to an exclusive 5-course dinner at the large dining table.</li>
    <li><strong>All-inclusive:</strong> We don't just bring the food. If needed, we also arrange plates, cutlery, and glasses, so you don't have to rent or wash anything.</li>
    <li><strong>Experienced home cooks:</strong> Our chefs are used to working in Amsterdam kitchens, even if the space sometimes feels a bit tight.</li>
</ul>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
        "@type": "Question",
        "name": "Can you cater large parties in an Amsterdam apartment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we regularly cater large parties and drinks in Amsterdam apartments. We adapt our menu and our working method to the available space."
        }
    },
    {
        "@type": "Question",
        "name": "Does the catering clean up everything after the party?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Certainly. We ensure that your kitchen and buffet area are completely neat and clean again afterwards."
        }
    }
  ]
}
</script>
        `
    },
    {
        title: "Luxury Corporate Catering Zuidas Amsterdam",
        slug: "luxe-zakelijke-catering-zuidas-amsterdam",
        excerpt: "Impress your biggest clients with exclusive corporate catering at the Zuidas. We offer healthy lunches and high-end board room dinners.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Luxury Corporate Catering at the Zuidas in Amsterdam</h2>
<p class="mb-4">If you do business at the Zuidas, you know that quality comes first. Standard sandwiches are not always the right choice when you receive the CEO of a large company or an important international client. Choose instead <strong><a href="/en/zakelijke-catering-amsterdam" class="text-[#D97757] font-semibold hover:underline">luxury corporate catering</a></strong> where a culinary chef provides a fresh lunch or an impressive dinner, right in your own meeting room.</p>
<p class="mb-6">Catering in the business heart of Amsterdam is all about discretion, punctuality, and absolutely perfect food. That is exactly what we deliver.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Our Options for the Zuidas</h3>
<p class="mb-4">Every office and every event is different. Therefore, we offer different packages:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>The Board Room Lunch:</strong> A healthy, light and fresh multi-course lunch that keeps you sharp. Beautifully arranged plates with fresh fish, salads and warm elements.</li>
    <li><strong>Exclusive Business Dinner:</strong> Do not close an important deal in a noisy restaurant, but in the privacy of your own board room with a private chef.</li>
    <li><strong>Friday Afternoon Drinks Catering:</strong> Luxury snacks, oysters, and exclusive finger food to perfectly end the week with your team.</li>
</ul>

<p class="mb-6">Book a chef for your office at the Zuidas today and immediately lift your business meetings to a much higher culinary level.</p>
        `
    },
    {
        title: "Wedding and Event Catering in Amsterdam",
        slug: "catering-bruiloften-evenementen-amsterdam",
        excerpt: "Experience the perfect day with our Amsterdam wedding catering. From a delicious walking dinner to luxury snacks at your unique event location.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Unforgettable Catering for Weddings in Amsterdam</h2>
<p class="mb-4">Your wedding day is one of the most important days of your life. Good food plays a huge role in this. Are you planning to get married in Amsterdam? Whether you celebrate it in a beautiful church location, a trendy warehouse, or intimate in your own garden: our <strong><a href="/en/catering-feest-thuis" class="text-[#D97757] font-semibold hover:underline">wedding catering</a></strong> makes it culinarily unforgettable.</p>
<p class="mb-6">We take all the care for the food out of your hands, and work with the best seasonal and local ingredients to put together your wedding menu exactly as you wish.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Walking Dinners and Sit-Down Dinners</h3>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>Shared Dining:</strong> Large, lavish boards full of delicacies in the middle of the table, perfect for an informal and very atmospheric wedding.</li>
    <li><strong>Classic Multi-Course Dinner:</strong> An elegant 4- or 5-course sit-down meal, where every guest is served at fantastically set tables.</li>
    <li><strong>Walking Dinner:</strong> Does your location have few seats? We serve luxury warm and cold dishes by hand. Guests can just keep standing and chatting!</li>
</ul>

<p class="mb-6">Contact our team to discuss the perfect catering for your unique event or wedding in Amsterdam.</p>
        `
    },
    {
        title: "Exclusive Drinks and Finger Food Catering Amsterdam",
        slug: "exclusieve-borrelhapjes-catering-amsterdam",
        excerpt: "Complete your Amsterdam drinks with our luxury finger food catering. Delicious, freshly made snacks for company parties and networking events.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Top Class Snacks for your Amsterdam Event</h2>
<p class="mb-4">The Dutch 'borrel' is world famous. In Amsterdam we love to borrel! But forget the standard cheese cubes with a flag or the greasy bitterballen. Nowadays your guests expect more. We offer <strong><a href="/en/menus/2" class="text-[#D97757] font-semibold hover:underline">luxury snacks and finger food catering</a></strong> that guarantee surprise and taste.</p>
<p class="mb-6">Imagine a chic networking event, a gallery opening, or your own birthday party with beautifully presented, edible works of art. The snacks are prepared on site by our private chefs and served directly warm and fresh.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">What is Luxury Finger Food?</h3>
<p class="mb-4">With luxury finger food you should think of dishes such as:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li>Blinis with smoked salmon and crème fraîche.</li>
    <li>Crispy gyozas with fresh truffle dip.</li>
    <li>Mini beef tataki with a soy glaze.</li>
    <li>Vegetarian bruschetta with roasted tomato and burrata.</li>
</ul>

<p class="mb-6">With perfect finger food catering you ensure that guests keep talking about the amazing atmosphere and quality of your event in Amsterdam.</p>
        `
    },
    {
        title: "Luxury Boat Catering Amsterdam Canals",
        slug: "luxe-boot-catering-amsterdamse-grachten",
        excerpt: "Sail through Amsterdam while enjoying a private chef on board. Discover the ultimate luxury boat catering on the canals for small events.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Catering on Board: Dining on the Amsterdam Canals</h2>
<p class="mb-4">Nothing is more iconic in Amsterdam than sailing over the beautiful historic canal belt. And what makes this even more unforgettable is an impressive dinner or fresh lunch right on board. With special <strong><a href="/en/thuiskok-amsterdam" class="text-[#D97757] font-semibold hover:underline">luxury boat catering</a></strong> you hire a private chef who trades the pancakes and bitterballen for a high-end fine dining experience on the water.</p>
<p class="mb-6">Our home cooks are very flexible. We have experience with preparing luxury meals in the compact galleys (kitchenettes) of Amsterdam saloon boats and canal boats.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Why Catering on a Boat?</h3>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>A changing scenery:</strong> Enjoy your starter and main course while monumental buildings and bridges slowly glide by.</li>
    <li><strong>Ultimate privacy:</strong> You are not bothered by other restaurant tables next to you. It is ideal for closing deals or intimate family outings.</li>
    <li><strong>Freshly prepared:</strong> We don't just bring pre-packaged meals on board. The food is served à la minute and fresh by your private chef.</li>
</ul>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
        "@type": "Question",
        "name": "Does a private chef and the catering fit on a small sloop in Amsterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For open sloops we offer perfectly prepared exclusive picnics and cold finger food boards. For a truly cooked dinner we advise a saloon boat with at least a small kitchen and electricity."
        }
    }
  ]
}
</script>
        `
    },
    {
        title: "Vegetarian and Vegan Catering in Amsterdam",
        slug: "vegetarische-vegan-catering-amsterdam",
        excerpt: "Discover the very best purely plant-based and vegetarian catering in Amsterdam. Be surprised by a luxury dinner full of flavor, without meat.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Top Quality Plant-Based and Vegetarian Catering in Amsterdam</h2>
<p class="mb-4">Amsterdam is a city that leads the way when it comes to sustainable and plant-based food. Many people consciously choose dishes without meat more often. But vegetarian and vegan food definitely shouldn't be boring. Our special <strong><a href="/en/menus/5" class="text-[#D97757] font-semibold hover:underline">vegan catering in Amsterdam</a></strong> is all about explosive flavors, creativity and culinary delights.</p>
<p class="mb-6">Our private chefs transform celeriac, beetroot, and mushrooms into exclusive dishes that even avid meat eaters often find sounding tastier.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Why Choose Vegan Catering at Home?</h3>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>Healthy and light:</strong> Plant-based multi-course dinners often lie less heavy on the stomach. You feel energetic, even after four courses.</li>
    <li><strong>Very colorful:</strong> Vegan dishes work a lot with fresh bright herbs and vegetables. Plates look like paintings.</li>
    <li><strong>Inclusive for everyone:</strong> If you receive a large party at home in Amsterdam, a completely surprising vegetarian menu is the safest and tastiest way to satisfy everyone.</li>
</ul>

<p class="mb-6">Surprise yourself and your guests with our next-level vegetarian and vegan chef at home.</p>
        `
    },
    {
        title: "Catering for Birthdays and Family Parties in Amsterdam",
        slug: "catering-verjaardagen-familiefeesten-amsterdam",
        excerpt: "Celebrate the milestones of your life with family and enjoy perfect catering at home in Amsterdam. No groceries, no mess, just connection with your loved ones.",
        contentHtml: `
<h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">Carefree Catering for Family Parties in Amsterdam</h2>
<p class="mb-4">Is grandma turning 80? Has your child finally graduated, or are you celebrating an important family anniversary? Family parties are the most beautiful moments. Yet organizing them, especially in a sometimes hectic household in Amsterdam, can be exhausting. By choosing reliable <strong><a href="/en/catering-feest-thuis" class="text-[#D97757] font-semibold hover:underline">home catering</a></strong> you not only guarantee great food, but you also give yourself the greatest gift: time.</p>
<p class="mb-6">A private chef or full-service catering team comes to your home, sets everything up and ensures that no one in the family has to stir pots for hours.</p>

<h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">Focus on Time with the Family</h3>
<p class="mb-4">Our Amsterdam family catering is very versatile:</p>
<ul class="list-disc pl-6 mb-6 space-y-2 text-[#0F1E19]">
    <li><strong>A cheerful family buffet:</strong> Richly filled platters, salads and roasts where everyone can serve themselves (and as often as they like). Ideal for larger groups with varying ages.</li>
    <li><strong>A stately sit-down family dinner:</strong> Do you have something very special to celebrate? Then we cook and serve a beautiful three- or four-course menu at your festively set table.</li>
</ul>

<p class="mb-6">The tastiest food and the least stress. That is the secret of the best family parties in Amsterdam.</p>
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
        readTime: "4 min read",
        publishedAt: "Feb 26, 2026",
        excerpt: p.excerpt,
        image: imageMap[idx],
        author: {
            name: "Chef David",
            role: "Catering Specialist"
        },
        contentHtml: p.contentHtml
    };
});

const outPath = path.join(__dirname, '../english_batch_4.json');
fs.writeFileSync(outPath, JSON.stringify(finalPosts, null, 2));
console.log('English Batch 4 Output saved to: ' + outPath);
