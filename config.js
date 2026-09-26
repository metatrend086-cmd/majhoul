/* =========================================================
   Celia Oasis — الإعدادات ديال صفحة الهبوط
   هادا هو الملف الوحيد اللي خاصك تبدل فيه فالعادة.
   ========================================================= */
window.CELIA = {
  // 1) الرابط ديال Google Apps Script (كيسالي ب /exec) — شوف README.md
  SHEET_URL: "https://script.google.com/macros/s/AKfycbz-ZVGgiKoQ9okWF995fAkcWBzIFrblOuoP1Hah_uYtDiyjpm5lan8QMzrykNh2yg1i/exec",

  // 2) البيكسلات (اختياري) — خليهم خاويين إلا ما عندكش
  META_PIXEL_ID: "",
  TIKTOK_PIXEL_ID: "",

  CURRENCY: "MAD",
  DELIVERY_MAX: 50,

  // 3) الباقات — بدل الثمن ولا السمية هنا وكتبدل فالصفحة كاملة
  //    الصور جاية من Google Drive (خاص كل صورة تكون "Anyone with the link").
  //    إلا بغيتي تحط صور فـ GitHub بلاصتهم: img: "images/q1.jpg"
  PRODUCTS: [
    { id: "q1", name: "الجودة الأولى", tag: "أعلى جودة", price: 100, weight: "2 كيلو", img: "https://lh3.googleusercontent.com/d/1KwEWpw8QrPvz-NtY0gAAEjuGKNoXzRJb=w600" },
    { id: "q2", name: "الجودة الثانية", price: 80, weight: "2 كيلو", img: "https://lh3.googleusercontent.com/d/1CfcqWFouKt0c5wCXOM_TuprkRJv7MPmC=w600" },
    { id: "q3", name: "الجودة الثالثة", price: 60, weight: "2 كيلو", img: "https://lh3.googleusercontent.com/d/1v1eMgbxVK3ZyuFM0c2BpW5dwQGsjZsz2=w600" }
  ],
  DEFAULT_PRODUCT: "q2",

  // 5) صور باقي الأقسام (من الدوسي ديال الدرايف — بدل الـID باش تبدل الصورة)
  IMAGES: {
    origin: "https://lh3.googleusercontent.com/d/1ENqpoXq3bJy9ToX4T4V1tWivLCQzlkA9=w900",
    split:  "https://lh3.googleusercontent.com/d/15BcAJxN0AIc-0SNBKAcWWbCeV_qQ5HwQ=w900",
    final:  "https://lh3.googleusercontent.com/d/1FwRJmUKVArVL8A1z8LViVltthSHiPITC=w900"
  },
  // صور "شوف التمر ديالنا" (كتدوز بالعرض)
  GALLERY: [
    "https://lh3.googleusercontent.com/d/1eWjaQQpzl9NJ5mAhFVQAdwc_XkFns9JS=w700",
    "https://lh3.googleusercontent.com/d/1nkgEDsLZtBZo2rmHSD0Ng8dFeXAJp7iw=w700",
    "https://lh3.googleusercontent.com/d/1hzRoI5eBVYF9lgwAiNPV0sk4f-PLLB9y=w700",
    "https://lh3.googleusercontent.com/d/14QbRFmAP0PTEXUEN-vy-Uckguuu7IaUv=w700",
    "https://lh3.googleusercontent.com/d/1w9v5h_ZboCfoKPXmAKNmF9LXFFpF1Y8A=w700",
    "https://lh3.googleusercontent.com/d/1fmMtCyFrcRr3z0n33LZu3z4iN2P55vUJ=w700",
    "https://lh3.googleusercontent.com/d/1cJDct7QBePYZGL0a9Gbzh5n0ionDSpAY=w700",
    "https://lh3.googleusercontent.com/d/1V-5zqoDzpM4zGF_HTlwSSXGnrxrqCZFg=w700"
  ],

  // 4) الزوايا — كل إعلان كيدخل ب ?a=<الزاوية>
  //    كونسيبت جديد بزاوية جديدة = زيد بلوك هنا (انسخ واحد وبدلو)
  //    order: ترتيب البلوكات ديال "علاش المجهول ديالنا" (benefits / natural / origin)
  DEFAULT_ANGLE: "sehha",
  ANGLES: {
    sehha: {
      concepts: ["M9-W4-celiaoasis-01"],
      h1: "ما تحرمش راسك من الحلو... بدّلو بالحلوى اللي صاوباتها الطبيعة",
      sub: "حبة وحدة فيها تقريباً 66 كالوري، بمذاق الكراميل، وعامرة بالألياف والبوتاسيوم.",
      heroImg: "https://lh3.googleusercontent.com/d/1_K6yn7Q6vMVKWfzM3GQqm6bnDrDdtrmw=w1000",
      heroAlt: "تمرة مجهول مقسومة واللحم ديالها كيتمطط",
      videoTitle: "علاش المجهول أحسن من الحلويات؟",
      video: "videos/sehha.mp4",
      order: ["benefits", "natural", "origin"]
    },
    lbour: {
      concepts: ["M9-W4-celiaoasis-02"],
      h1: "تمرة ما زدنا ليها والو: من البور لباب دارك",
      sub: "المكونات: تمر. بلا سكر مضاف، بلا مواد حافظة، بلا تلميع. غير الشمس ديال الصحرا، التراب ديال الواحة، والوقت.",
      heroImg: "https://lh3.googleusercontent.com/d/1diAoo0cEdYiVb-bSGsDYwgvbeDpKk7ji=w1000",
      heroAlt: "النخل فالبور فالرشيدية",
      videoTitle: "منين جا التمر اللي كتاكل؟",
      video: "videos/lbour.mp4",
      order: ["origin", "natural", "benefits"]
    }
  }
};
