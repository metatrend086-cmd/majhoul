# صفحة الهبوط ديال Celia Oasis — كيفاش تطلقها

## الملفات
- `index.html` — الصفحة. الزاويتين فنفس الصفحة: `?a=sehha` (إعلان 01) و `?a=lbour` (إعلان 02).
- `merci.html` — صفحة الشكر.
- `config.js` — **الملف الوحيد اللي كتبدل فيه**: رابط الشيت، البيكسلات، الأثمنة، والزوايا.
- `track.js` — البيكسلات. ما تقيسوش.
- `google-apps-script.gs` — الكود اللي كيكتب الطلبات فالشيت. هاد الملف ما كيتلاحش فكيتهاب.
- `images/` — الصور (شوف الخطوة 2).

---

## 1) Google Sheet (10 دقايق)
1. دخل ل sheets.google.com ودير شيت جديد، سميه مثلاً "طلبات سيليا".
2. من الفوق: **Extensions ← Apps Script**.
3. مسح الكود اللي كاين، ولصق الكود كامل ديال `google-apps-script.gs`، ومن بعد **Save**.
4. **Deploy ← New deployment**. من الترس ⚙️ اختار **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. كليكي **Deploy**، وعطيه الإذن (Authorize ← اختار الحساب ← Advanced ← Go to … ← Allow).
6. كوبي **Web app URL**. هاد الرابط كيسالي ب `/exec`.
7. حل `config.js` وحط الرابط بين جوج علامات التنصيص:
   `SHEET_URL: "https://script.google.com/macros/s/XXXX/exec",`

> إلا بدلتي الكود ديال Apps Script من بعد، خاصك دير **Deploy ← Manage deployments ← Edit ← New version**، ولا الرابط غادي يبقى خدام بالكود القديم.

## 2) الصور
حط الصور فالدوسي `images/` بهاد السميات بالضبط (jpg):

| السمية | شنو فيها | من فين |
|---|---|---|
| `q1.jpg` | الجودة الأولى (100 درهم) | دوسي "Madjhoule première qualité" |
| `q2.jpg` | الجودة الثانية (80 درهم) | دوسي "Deuxième qualité Madjhoule" |
| `q3.jpg` | الجودة الثالثة (60 درهم) | دوسي "3 ème qualité Madjhoule" |
| `hero-sehha.jpg` | تمرة مقسومة (ماكرو) | الفوتج 01 |
| `hero-lbour.jpg` | النخل فالبور / الجني | الفوتج 02 |
| `lbour.jpg` | النخل والصحرا فالبور | الفوتج 02 |
| `split.jpg` | يد كتقسم تمرة | الفوتج 01 ولا 02 |

- أي صورة ما حطيتيهاش كتختفي بوحدها، والصفحة كتبقى خدامة.
- صغّر الصور قبل ما ترفعهم: عرض 800 إلى 1000 بكسل، وأقل من 200KB. تقدر تستعمل squoosh.app.
- **الفيديو (اختياري):** دير دوسي `videos/` وحط فيه `sehha.mp4` و `lbour.mp4`، كل واحد 15 حتى 20 ثانية وأقل من 4MB. إلا ما كاينش الفيديو، القسم ديالو كيتحيد بوحدو.

## 3) GitHub Pages (مجاني)
1. دير حساب فـ github.com. السمية ديال الحساب كتدخل فالرابط، مثلاً `celiaoasis`.
2. كليكي **+ ← New repository**:
   - Name: `majhoul` (ولا اللي بغيتي)
   - **Public** (ضروري باش تكون مجانية)
   - ومن بعد **Create repository**.
3. كليكي **uploading an existing file**، وجر جميع الملفات ودوسي `images` (وإلا كان `videos`)، ومن بعد **Commit changes**.
4. **Settings ← Pages**. تحت Source اختار **Deploy from a branch**، ومن بعد Branch: **main** و **/(root)**، و **Save**.
5. تسنى 1 حتى 2 دقايق وعاود حل الصفحة. غادي يبان الرابط:
   **`https://USERNAME.github.io/majhoul/`**

## 4) الروابط النهائية للإعلانات
بدل `USERNAME` و `majhoul` بالسميات ديالك:

**إعلان 01 (بدّل الحلويات)، هوك H1:**
```
https://USERNAME.github.io/majhoul/?a=sehha&utm_source=facebook&utm_campaign=M9-W4&utm_content=celiaoasis-01-H1
```
**إعلان 02 (من البور)، هوك H1:**
```
https://USERNAME.github.io/majhoul/?a=lbour&utm_source=facebook&utm_campaign=M9-W4&utm_content=celiaoasis-02-H1
```
- لكل نسخة من النسخ ديال الهوكات، بدل غير `H1` ب `H2` ولا `H3` ولا `H4`.
- فتيكتوك بدل `utm_source=facebook` ب `utm_source=tiktok`.
- كل طلب كيوصل للشيت ومعاه الزاوية و `utm_content`، وهكا كتعرف أنهي كونسيبت وأنهي هوك جاب الطلب.

## 5) جرّب قبل الإطلاق
1. حل الرابط ديال إعلان 01 فالتيليفون، دير طلب تجريبي، وتأكد بلي وصل للشيت.
2. عاود نفس الحاجة مع إعلان 02، وتأكد بلي العنوان تبدل.
3. من بعد التجربة مسح السطور التجريبية من الشيت.

## 6) البيكسلات (اختياري)
حط الـID فـ `config.js`:
`META_PIXEL_ID: "123456789"` و/أو `TIKTOK_PIXEL_ID: "XXXX"`.
الأحداث اللي كتسجل: `ViewContent` فالصفحة، و `InitiateCheckout` ملي يبدا يعمّر، و `Purchase` فصفحة الشكر مع القيمة.
فتيكتوك، `Purchase` كيتسجل ك `PlaceAnOrder`.

## كونسيبت جديد؟
- **نفس الزاوية:** ما تبدل والو. استعمل نفس الرابط وبدل غير `utm_content`، مثلاً `celiaoasis-03-H1`.
- **زاوية جديدة:** فـ `config.js` نسخ البلوك ديال `sehha`، سميه مثلاً `ramadan`، وبدل فيه العنوان والصورة والترتيب. الرابط غادي يولي `?a=ramadan`.
- **تبديل الثمن ولا الجودة:** فـ `PRODUCTS` فـ `config.js`، وكيتبدل فالصفحة كاملة.

## ملاحظة
الرابط `github.io` كيخدم مزيان باش تبدا. من بعد، إلا بغيتي ثقة أكثر وتحكم أحسن فالبيكسل ديال ميتا، تقدر تشري دومين ديالك (مثلاً celiaoasis.ma) وتربطو بنفس الصفحة فـ Settings ← Pages ← Custom domain.
