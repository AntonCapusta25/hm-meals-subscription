const fs = require('fs');

const posts = [
    {
        title: "أفضل طاهٍ منزلي في لاهاي: أناقة الطهي وخصوصية المطاعم الفاخرة",
        slug: "best-home-chef-delivery-den-haag",
        excerpt: "اكتشف لماذا يتخلى السكان والمغتربون في لاهاي عن المطاعم المزدحمة لصالح الفخامة والخصوصية التي يوفرها طاهٍ خاص يطبخ في المنزل.",
        contentHtml: `
<div dir="rtl" class="text-right font-arabic">
    <h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">المعيار الجديد في لاهاي: طاهٍ خاص في منزلك</h2>
    <p class="mb-4">باعتبارها القلب السياسي لهولندا ومركزاً دولياً رائداً، تتباهى لاهاي (Den Haag) بمشهد طهي مذهل. ومع ذلك، فإن صعوبة حجز طاولة في منطقة "Hofkwartier" المزدحمة، وتحديات العثور على موقف للسيارات، يمكن أن تفسد متعة تناول وجبة جيدة. لهذا السبب، يتجه المزيد من السكان نحو رفاهية مطلقة: <strong><a href="/ar/den-haag" class="text-[#D97757] font-semibold hover:underline">توظيف طاهٍ خاص في لاهاي</a></strong>.</p>
    <p class="mb-6">سواء كان لديك شقة تطل على البحر في "سخيفيننغن" أو منزل كلاسيكي في "ستاتينكوارتير"، يُحوّل الطاهي المنزلي غرفة طعامك إلى أرقى مطعم خاص ومغلق في المدينة.</p>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">طهاة محترفون: لماذا تفضل الطاهي المنزلي في لاهاي؟</h3>
    <ul class="list-disc pr-6 mb-6 space-y-2">
        <li><strong>خصوصية دبلوماسية تامة:</strong> ناقش أعمالك، أو احتفل بمناسباتك الخاصة، أو استرخِ بكل بساطة بعيداً عن ضوضاء الحانات والمطاعم المزدحمة.</li>
        <li><strong>قوائم طعام دولية مخصصة:</strong> من خلال الاعتماد على أسواق لاهاي المتنوعة مثل "Haagse Markt"، يمكن لطهاتنا إعداد أي شيء: من كلاسيكيات المطبخ الفرنسي إلى ولائم الأرز الإندونيسية الفاخرة.</li>
        <li><strong>الاسترخاء التام بدون مهام لوجستية:</strong> لا قيادة، ولا رسوم انتظار بالقرب من ساحة "Het Plein"، والأهم: لا تنظيف. يصل الطاهي حاملاً أروع المكونات، يطبخ، يُقدِّم الطعام بأسلوب راقٍ، ويترك مطبخك لامعاً ونظيفاً تماماً.</li>
    </ul>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">تجربة عشاء بنمط ميشلان في قلب منزلك</h3>
    <p class="mb-4">تخيّل العودة إلى منزلك بعد يوم طويل وشاق. ستجد طاهياً محترفاً ينتظرك في مطبخك، يجهّز تحفة فنية متعددة الأطباق. الطاولة مُعدّة بأدوات المائدة الفضية الأنيقة، ما عليك سوى الترحيب بضيوفك والجلوس. يُقدّم لك الطاهي طبقاً تلو الآخر، مع شرح وافٍ وفني عن المكونات الطازجة والمحلية.</p>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">الأسئلة الشائعة</h3>
    <div itemscope itemtype="https://schema.org/FAQPage" class="mt-8 space-y-6">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E6E1]">
            <h4 itemprop="name" class="font-bold text-[#1A4D2E] text-lg mb-2">هل يستطيع الطاهي تلبية متطلبات النظام الغذائي المختلفة في لاهاي؟</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text" class="text-gray-700">بالتأكيد. بما أن كل شيء يُطبخ من الصفر داخل مطبخك، يستطيع الطاهي تلبية طلبات الضيوف النباتيين، أو من يحتاجون إلى أطعمة خالية من الغلوتين، أو من لديهم حساسية خاصة في نفس الوقت وبكل سهولة.</p>
            </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E6E1]">
            <h4 itemprop="name" class="font-bold text-[#1A4D2E] text-lg mb-2">هل أحتاج إلى مطبخ ضخم لكي يعمل الطاهي براحة؟</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text" class="text-gray-700">على الإطلاق. طهاتنا لديهم خبرة واسعة في العمل في المطابخ الهولندية ذات التصميم المدني القياسي. إنهم يتكيفون مع مساحتك ويحضرون أي معدات احترافية إضافية قد يحتاجونها.</p>
            </div>
        </div>
    </div>
</div>
        `,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2669&auto=format&fit=crop",
        author: {
            name: "Alexander Filippov",
            role: "المدير الفني للطهي",
            avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2568&auto=format&fit=crop"
        }
    },
    {
        title: "الدليل الشامل لتجربة طاهٍ خاص لحفلات أعياد الميلاد",
        slug: "private-chef-birthday-party",
        excerpt: "احتفل بعيد ميلادك بأناقة لا مثيل لها. تخلى عن المطاعم المزعجة واستعن بطاهٍ خاص لتنظيم تجربة طهي شخصية لا تُنسى في منزلك.",
        contentHtml: `
<div dir="rtl" class="text-right font-arabic">
    <h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">ارتقِ باحتفال عيد ميلادك بأسلوب استثنائي مع طاهٍ خاص</h2>
    <p class="mb-4">تعتبر أعياد الميلاد محطات هامة في حياتنا، ويفضل دائماً الاحتفال بها وسط الأحباء بصحبة حوارات ممتعة وطعام مذهل. ومع ذلك، فإن تنسيق حفل عشاء في مطعم نادراً ما يخلو من التوتر الناجم عن تقسيم الفواتير والصخب العام. الحل الحديث والفاخر؟ <strong>توظيف طاهٍ خاص لحفلة عيد ميلادك</strong>.</p>
    <p class="mb-6">تخيل إقامة حفل عشاء حصري بدون أن تضطر للدخول إلى المطبخ إطلاقاً. لا توجد ضغوط للطبخ، ولا تفكير في وقت نضج اللحوم، والأروع من ذلك، لن تواجه جبالاً من الأطباق المتسخة بعد مغادرة ضيوفك.</p>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">لماذا يعتبر الطاهي الخاص أفضل بكثير من المطاعم المزدحمة؟</h3>
    <ul class="list-disc pr-6 mb-6 space-y-2">
        <li><strong>قائمة مخصصة بالكامل:</strong> إنه يومك الخاص! هل ترغب بقائمة تذوق إيطالية مكونة من خمسة أطباق، أم ليلة إسبانية تقليدية غير رسمية؟ يتمحور تصميم القائمة بالكامل حول ذوقك المفضل وحسب.</li>
        <li><strong>أجواء حميمة وتواصل أعمق:</strong> غالباً ما تكون المطاعم صاخبة وتعج بالحركة المزعجة. في المنزل، يمكنك الاسترخاء تماماً، والضحك بصوت عالٍ، بل وإلقاء الكلمات الاحتفالية براحة وخصوصية مطلقة مع إمكانية التمديد في السهر كما يحلو لك.</li>
        <li><strong>ترفيه تفاعلي:</strong> الطاهي المنزلي هنا ليس مجرد شخص يطهو؛ إنه جزء مهم من التجربة. يستمتع الضيوف جداً بمشاهدة براعة تقديم الأطباق وتزيينها.</li>
    </ul>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">كيف تسير هذه الليلة الاستثنائية؟</h3>
    <p class="mb-4">يصل الطاهي قبل ساعات قليلة من موعد الضيوف حاملاً أروع المكونات الفاخرة والطازجة. بينما تقوم أنت بتجهيز نفسك واختيار قائمة موسيقية هادئة، يمتلئ مطبخك بروائح عطرية زكية تفتح الشهية. وعند بدء توافد الضيوف تقدم لهم أطباقاً صغيرة أنيقة للترحيب. وبعد آخر نخب، يترك الطاهي المطبخ نظيفاً ومبهجاً، وينسحب بهدوء تام لتستكمل أنت بقية سهرتك.</p>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">الأسئلة الشائعة</h3>
    <div itemscope itemtype="https://schema.org/FAQPage" class="mt-8 space-y-6">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E6E1]">
            <h4 itemprop="name" class="font-bold text-[#1A4D2E] text-lg mb-2">هل يمكن للطاهي خبز كعكة عيد ميلاد بتصميم خاص؟</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text" class="text-gray-700">يتمتع العديد من طهاتنا بمهارات هائلة في صنع الحلويات والمخبوزات، ويمكنهم ببراعة صنع كعكة عيد ميلاد مصممة خصيصاً لك أو دورة حلويات مبهرة في نهاية العشاء. يرجى ذكر طلبك ببساطة عند الحجز.</p>
            </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E6E1]">
            <h4 itemprop="name" class="font-bold text-[#1A4D2E] text-lg mb-2">ماذا بخصوص أدوات المائدة والأطباق الفخمة؟</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text" class="text-gray-700">في الحالات العادية، يستخدم الطاهي أطباقكم وأدوات المائدة الخاصة بكم. أما إذا كنتم تستضيفون مجموعة كبيرة جداً ولا تملكون ما يكفي، يمكن لنا دائماً ترتيب استئجار أرقى أدوات المائدة والأواني الفاخرة بسهولة.</p>
            </div>
        </div>
    </div>
</div>
        `,
        image: "https://images.unsplash.com/photo-1530103862676-de8892b07439?q=80&w=2670&auto=format&fit=crop",
        author: {
            name: "Alexander Filippov",
            role: "المدير الفني للطهي",
            avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2568&auto=format&fit=crop"
        }
    },
    {
        title: "تجربة المطاعم الفاخرة مع طاهٍ خاص في هارلم",
        slug: "best-home-chef-delivery-haarlem",
        excerpt: "تشتهر هارلم بأنها مدينة الذواقة ومحبي الطهي الفاخر. اكتشف سحر جلب أفضل التجارب الكلاسيكية الحديثة في هارلم للطهي مباشرة إلى غرفة طعامك الشخصية.",
        contentHtml: `
<div dir="rtl" class="text-right font-arabic">
    <h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">سر هارلم الاستثنائي: فخامة الطاهي الخاص</h2>
    <p class="mb-4">تنفرد هارلم بشوارعها التاريخية المرصوفة بالحصى وسمعتها كمدينة ساحرة ورائدة لفن التذوق، وتمتلك بالفعل مجموعة متنوعة من أرقى المطاعم. لكن الحصول على طاولة في ليلة عطلة نهاية الأسبوع في محيط ساحة "الجروتي ماركت" قد يكون بمثابة تحدٍ صعب. لذلك بدأ الذواقة ومحبو الطعام الفاخر في هارلم باكتشاف البديل الأرقى والأكثر حصرية: <strong><a href="/ar/haarlem" class="text-[#D97757] font-semibold hover:underline">حجز طاهٍ خاص لطهي وحضور العشاء في المنزل</a></strong>.</p>
    <p class="mb-6">سواء كنت تعيش في منزل كلاسيكي رائع في "Vijfhoek" أو في شقة عصرية راقية تطل على نهر "Spaarne"، فإن تواجد خبير طهي محترف في منزلك سيتيح لك خوض غمار تجربة استثنائية دون الحاجة إلى وضع خطوة واحدة خارج باب منزلك.</p>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">مزايا متفوقة للاحتفال وتناول الطعام بأناقة داخل منزلك</h3>
    <ul class="list-disc pr-6 mb-6 space-y-2">
        <li><strong>راحة غير مسبوقة:</strong> استرخِ بملابسك الأنيقة أو المريحة، واختر أفضل الموسيقى التي تلائم ذوقك، واستمتع بطعام فاخر بعيداً تماماً عن كل قيود الملابس الرسمية أو قيود الإغلاق للمطاعم.</li>
        <li><strong>مكونات محلية فخمة:</strong> يحرص طهاتنا المتمركزون في هارلم على اقتناء منتجاتهم ومكوناتهم مباشرةً من أسواق المزارعين المميزة والمزارع العضوية في مقاطعة شمال هولندا لضمان نكهات لا يمكن مضاهاتها.</li>
        <li><strong>توازن ساحر ومثالي للعائلات:</strong> أن كنت تمتلك أطفالاً صغاراً، فلا شك أن البحث عن جليسة أطفال من أجل الاستمتاع بعشاء راقٍ هو مجرد عبء متزايد ومرهق. الطاهي الخاص يحلّ تلك المعادلة بتجهيزات راقية لك في الطابق السفلي بينما يستغرق أبناؤكم في نومهم الآمن بالمستوى العلوي!</li>
    </ul>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">رحلة استثنائية من التسوق للطهي وصولاً للنظافة المثالية</h3>
    <p class="mb-6">يكمن الجمال والروعة في شبكة "HomeMade" في إيمانها القاطع برفاهية الخدمة الشاملة. الطاهي المحترف سيأخذ على عاتقه مهمة شراء أفضل الخيارات الموسمية من الأسواق، ويأتي لتبدأ مرحلة إعداد الأطباق بدقة قبل وصول المدعوين. يشرح لكم بحب مهاراته العميقة المذهلة وتقنياته الفريدة مع كل طبق جديد يضعه أمامكم. وأخيراً والأهم، ستجدون المطبخ يلمع بالنظافة قبل مغادرته.</p>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">الأسئلة الشائعة</h3>
    <div itemscope itemtype="https://schema.org/FAQPage" class="mt-8 space-y-6">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E6E1]">
            <h4 itemprop="name" class="font-bold text-[#1A4D2E] text-lg mb-2">إلى متى يتعين عليّ الحجز المسبق في هارلم للتأكد من الموعد؟</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text" class="text-gray-700">نوصي دائماً بحجز موعد من أسبوعين إلى ثلاثة أسابيع مقدمًا؛ وبشكل خاص إذا كنت تفكر بإعداد عشاء في ليالي نهاية الأسبوع أو بمواسم العطلات الشهيرة حيث تنفد تواريخ أمهر الطهاة سريعاً.</p>
            </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E6E1]">
            <h4 itemprop="name" class="font-bold text-[#1A4D2E] text-lg mb-2">هل يمكن للطاهي تقديم تشكيلة مقترحة من النبيذ الراقي؟</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text" class="text-gray-700">نعم، بالـتأكيد. الكثير من طهاتنا الخبراء يتمتعون بخبرة رائعة وشركات وتجار وتجار نبيذ في هارلم لاقتراح وتناسق الأفضل لكم والملائم بشكل طبيعي وجذري لأصناف الأطباق بالقائمة المنتقاة.</p>
            </div>
        </div>
    </div>
</div>
        `,
        image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=2574&auto=format&fit=crop",
        author: {
            name: "Alexander Filippov",
            role: "المدير الفني للطهي",
            avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2568&auto=format&fit=crop"
        }
    },
    {
        title: "أفضل طاهٍ خاص في هينجيلو: كرم ضيافة منطقة تفينتي الكلاسيكية",
        slug: "best-home-chef-delivery-hengelo",
        excerpt: "اختبر أقصى درجات الضيافة الرائعة والتراث الزراعي الغني لمنطقة تفينتي مباشرةً إلى طاولة العشاء الأنيقة بمنزلك مع طاهٍ محترف ومتألق في هينجيلو.",
        contentHtml: `
<div dir="rtl" class="text-right font-arabic">
    <h2 class="text-3xl font-bold font-serif mb-6 text-[#1A4D2E]">الروعة والخصوصية في طعام هينجيلو: تجربة مستوحاة من تفينتي العريقة</h2>
    <p class="mb-4">من المعروف تاريخياً وكلاسيكياً مدى الدفء الأسطوري للضيافة في هينجيلو وعموم منطقة تفينتي وجذورها الزراعية الأصيلة. وعلى الرغم من حضور المتاجر والمطاعم المجاورة بشعبية واهتمام هائل إلا أن روعة تنظيم ليلة حفل عشاء غنية وتجمع خاص في حرم السكن تفوق توقعات التصور الاعتيادي. من خلال <strong><a href="/ar/hengelo" class="text-[#D97757] font-semibold hover:underline">حجز موعد مع طاهٍ خاص ذو إبداع استثنائي في هينجيلو</a></strong>، تصبح قادراً تماماً على جلب متعة وتألق الفخامة المطلقة والأمان المتناغم في منزلك الخاص.</p>
    <p class="mb-6">ليس من المُهم إن كنت تحتفل بتاريخ ذكرى زواجك المميز، أو تود استضافة عدد من المديرين التنفيذيين الهامين في اجتماع حاسم، أو ترغب في إعداد طاولة لعائلتك المجتمعة من جديد.. سيقوم الطبّاخ في منزلك بكل شيء!</p>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">ترسيخ الاهتمام والجودة: إظهار سحر المنتجات الطبيعية في تفينتي</h3>
    <ul class="list-disc pr-6 mb-6 space-y-2">
        <li><strong>من عراقة المزرعة، لإبداعات الطاولة:</strong> طهاتنا يتباهون غالباً ومباشرة بجودة ورونق الاهتمام في اختيار كل شيء بدقة شديدة بدءاً من الخضروات الفائقة الموسمية لأفضل أجبان المقاطعة المحلية بالذات.</li>
        <li><strong>وحي مستدام ومرحلة القوائم الموسمية المتباينة:</strong> تكتسي أطباق القائمة المقترحة بكل ديناميكية وإيجابية استجابة لكل جديد محلي وفي أوانه، مما سينعكس تلقائياً بقوة وثبات هائل على كافة الأطباق التي تتذوقها بالليل الممتع.</li>
        <li><strong>الانسجام والإلهام التفاعلي المتناغم والمتأصل:</strong> كنْ متاحاً واستكشف تاريخ وسرد قصص ومصدر الإلهام وكونك جزءاً من صناعة أطباقك المقدمة خطوة بخطوة بالاستماع من الطاهي الونيس خلال ترتيبها الاستثنائي.</li>
    </ul>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">بلا ضغوط تُذكر.. ستحصد أفضل الذكريات الدافئة الممتلئة</h3>
    <p class="mb-6">عند استضافة حفل عشاء أو سهرة تجمع منزلي فهذا عادة ما يلازمه اختفاءك بالمطبخ وتفويتك للأجزاء الطريفة لأحاديث الضيوف. مع باقات وخدمات شبكتنا "HomeMade" لطهاة التميز، فإنك لن تكون أكثر من نزيل مميز ومدلل في مناسبتك البيتية ومسكنك الخاص؛ والروعة الأكثر جراءة هي قدرة الطاهي الخاص ومهارته في سحب كل مظاهر التعب والفوضى وغسل جميع الأواني بلا ترك أدنى أثر للفوضى المعقدة بعد أبهى ليلة.</p>

    <h3 class="text-2xl font-bold font-serif mb-4 text-[#1A4D2E]">الأسئلة الشائعة</h3>
    <div itemscope itemtype="https://schema.org/FAQPage" class="mt-8 space-y-6">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E6E1]">
            <h4 itemprop="name" class="font-bold text-[#1A4D2E] text-lg mb-2">هل تشمل التسعيرة القابلة للعرض توفر الأغراض الطازجة والمواد الضرورية للتحضير؟</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text" class="text-gray-700">بالتأكيد. المبالغ والميزانيات المدرجة في التكاليف والتنسيق القوائم النقدية للخدمة القياسية تتكفل برحلة الشراء والتبضع، وجميع السلع والمكونات عالية المستوى التي يقتنيها الطباخ ويتأكد من إرساء طزاجتها العلى في مطبخك تمامًا.</p>
            </div>
        </div>
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-[#FDFBF7] p-6 rounded-xl border border-[#E8E6E1]">
            <h4 itemprop="name" class="font-bold text-[#1A4D2E] text-lg mb-2">هل أستطيع أن استأجر أو أنفذ فكرة حجز الطاهي لإجراء اجتماع أو مأدبة شركات فاخرة راقية بالمدينة؟</h4>
            <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text" class="text-gray-700">بالتأكيد وبلا تردد. الخصوصية المطلقة والسكون المُهيب يضمان لك فضاء دافئ وموثوقاً وراشد تمامًا؛ يضع قمة الثراء والثقة لزملاء الشركة وعملائك التجاريين والممولين بكل وضوح وتجرد وانسياب بلا تدخل أو إزعاج المتلصصين المعتاد في أوساط قاعات المطاعم النشطة الحية.</p>
            </div>
        </div>
    </div>
</div>
        `,
        image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2670&auto=format&fit=crop",
        author: {
            name: "Alexander Filippov",
            role: "المدير الفني للطهي",
            avatar: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2568&auto=format&fit=crop"
        }
    }
];

fs.writeFileSync('arabic_batch_1.json', JSON.stringify(posts, null, 2));
console.log('Arabic Batch 1 complete');
