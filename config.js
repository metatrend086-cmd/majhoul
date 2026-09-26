/* =========================================================
   Celia Oasis — الإعدادات ديال صفحة الهبوط
   هادا هو الملف الوحيد اللي خاصك تبدل فيه فالعادة.
   ========================================================= */
window.CELIA = {
  // 1) الرابط ديال Google Apps Script (كيسالي ب /exec) — شوف README.md
  SHEET_URL: "",

  // 2) البيكسلات (اختياري) — خليهم خاويين إلا ما عندكش
  META_PIXEL_ID: "",
  TIKTOK_PIXEL_ID: "",

  CURRENCY: "MAD",
  DELIVERY_MAX: 50,

  // 3) الباقات — بدل الثمن ولا السمية هنا وكتبدل فالصفحة كاملة
  PRODUCTS: [
    { id: "q1", name: "الجودة الأولى", price: 100, weight: "2 كيلو", img: "images/q1.jpg" },
    { id: "q2", name: "الجودة الثانية", price: 80, weight: "2 كيلو", img: "images/q2.jpg" },
    { id: "q3", name: "الجودة الثالثة", price: 60, weight: "2 كيلو", img: "images/q3.jpg" }
  ],
  DEFAULT_PRODUCT: "q2",

  // 4) الزوايا — كل إعلان كيدخل ب ?a=<الزاوية>
  //    كونسيبت جديد بزاوية جديدة = زيد بلوك هنا (انسخ واحد وبدلو)
  //    order: ترتيب البلوكات ديال "علاش المجهول ديالنا" (benefits / natural / origin)
  DEFAULT_ANGLE: "sehha",
  ANGLES: {
    sehha: {
      concepts: ["M9-W4-celiaoasis-01"],
      h1: "ما تحرمش راسك من الحلو... بدّلو بالحلوى اللي صاوباتها الطبيعة",
      sub: "حبة وحدة فيها تقريباً 66 كالوري، بمذاق الكراميل، وعامرة بالألياف والبوتاسيوم.",
      heroImg: "images/hero-sehha.jpg",
      heroAlt: "تمرة مجهول مقسومة واللحم ديالها كيتمطط",
      videoTitle: "علاش المجهول أحسن من الحلويات؟",
      video: "videos/sehha.mp4",
      order: ["benefits", "natural", "origin"]
    },
    lbour: {
      concepts: ["M9-W4-celiaoasis-02"],
      h1: "تمرة ما زدنا ليها والو: من البور لباب دارك",
      sub: "المكونات: تمر. بلا سكر مضاف، بلا مواد حافظة، بلا تلميع. غير الشمس ديال الصحرا، التراب ديال الواحة، والوقت.",
      heroImg: "images/hero-lbour.jpg",
      heroAlt: "النخل فالبور فالرشيدية",
      videoTitle: "منين جا التمر اللي كتاكل؟",
      video: "videos/lbour.mp4",
      order: ["origin", "natural", "benefits"]
    }
  }
};
