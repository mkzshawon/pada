// PADA Help: each topic has a title, the text shown, and extra words that help the search find it.
// To add or change a topic, edit this file. Keep the text in plain language.
window.PADA_HELP = [
  {
    title: "PADA কিভাবে শুরু করবেন",
    keywords: "শুরু start intro প্রথম first",
    body:
      "PADA একটি ক্যানভাস (whiteboard)। নিচের Toolbar থেকে টুল বেছে নিন, তারপর ক্যানভাসে mouse দিয়ে আঁকুন বা লিখুন।\n\n" +
      "১. Toolbar-এর আইকনে ক্লিক করে টুল বাছুন।\n" +
      "২. ক্যানভাসে চাপ দিয়ে টেনে আঁকুন।\n" +
      "৩. কোনো কিছু বদলাতে আগে সেটি নির্বাচন করুন (Select টুল)।\n" +
      "৪. ওপরের Ribbon-এ File থেকে সংরক্ষণ বা খোলা।",
  },
  {
    title: "Ribbon: উপরের সারি (Logo, File, Edit, Insert, Help)",
    keywords: "ribbon menu file edit insert help মেনু",
    body:
      "উপরের প্রথম সারিতে PADA-র Logo ও মেনু আছে:\n\n" +
      "File: Open File (Board, PDF, Image, Word, Video, PowerPoint), Save As (PDF, Image, Board .pada), Rename, Duplicate, Close। এগুলো নির্বাচিত tab-এ কাজ করে।\n" +
      "Edit: Tab BG (রং বদলানো) ও Grid (গ্রিড ধরন)। নির্বাচিত tab-এ কাজ করে।\n" +
      "Insert: Table ও Clip Art।\n" +
      "Help: এই সহায়িকা।\n\n" +
      "মেনুতে ক্লিক করলে তালিকা খোলে। বাইরে ক্লিক করলে বন্ধ হয়।",
  },
  {
    title: "Ribbon: Tab ও তার (x)",
    keywords: "tab ট্যাব close বন্ধ x নতুন add",
    body:
      "দ্বিতীয় সারিতে Tab 01, Tab 02 ইত্যাদি থাকে। একটি Tab এক একটি আলাদা বোর্ড।\n\n" +
      "Tab-এ ক্লিক করলে সেটি খোলে।\n" +
      "সক্রিয় Tab-এর পাশে (x) সবসময় দেখা যায়। অন্য Tab-এর ওপর মাউস নিলে (x) দেখা যায়।\n" +
      "(x) চাপলে Tab বন্ধ হবে, তবে আগে জিজ্ঞাসা করবে কিভাবে সংরক্ষণ করবেন।\n\n" +
      "Ribbon-এর ডান প্রান্তে: minimise (ছোট করা), resize (window ছোট/বড়), close (PADA বন্ধ)।",
  },
  {
    title: "Ribbon: খালি জায়গা দিয়ে window সরানো",
    keywords: "drag move window সরানো ribbon",
    body:
      "Resize করা অবস্থায় Ribbon বা Tab-এর খালি জায়গায় mouse চেপে টানলে পুরো PADA window সরবে। বোতাম, Tab বা মেনুতে চাপলে এটি হবে না।",
  },
  {
    title: "Toolbar: টুল ও তাদের শর্টকাট",
    keywords: "toolbar টুল shortcut key কী",
    body:
      "Toolbar-এর টুলগুলো (কী-বোর্ড শর্টকাটসহ):\n\n" +
      "V  Select: শেপ নির্বাচন, সরানো, আকার বদলানো।\n" +
      "H  Hand: ক্যানভাস টেনে সরানো (Space চেপে ধরেও করা যায়)।\n" +
      "R  Rect: আয়তক্ষেত্র।\n" +
      "D  Diamond: হীরা আকৃতি।\n" +
      "G  Triangle: ত্রিভুজ।\n" +
      "O  Ellipse: বৃত্ত বা উপবৃত্ত।\n" +
      "A  Arrow: তীরচিহ্নযুক্ত রেখা।\n" +
      "L  Line: সরল রেখা।\n" +
      "P  Pencil: হাতে আঁকা।\n" +
      "M  Polyline: বাঁকা রেখা (একাধিক বিন্দু দিয়ে)।\n" +
      "T  Text: লেখা।\n" +
      "N  Note: নোট বাক্স।\n" +
      "E  Eraser: মোছা।\n" +
      "B  Magnifier: একটি অংশ বড় করে দেখানো।",
  },
  {
    title: "Select: শেপ নির্বাচন, সরানো ও আকার বদলানো",
    keywords: "select নির্বাচন move সরানো resize আকার handle",
    body:
      "V চাপুন বা Select বাছুন।\n\n" +
      "একটি শেপে ক্লিক করলে সেটি নির্বাচিত হবে।\n" +
      "একাধিক শেপ নির্বাচন: Shift চেপে ক্লিক করুন, অথবা ফাঁকা জায়গা থেকে টেনে বাক্স আঁকুন।\n" +
      "সরাতে: নির্বাচিত শেপ ধরে টানুন।\n" +
      "আকার বদলাতে: কোণের ছোট বিন্দু ধরে টানুন।\n" +
      "তীর কী দিয়ে ১ একক সরবে, Shift + তীর দিয়ে ১০ একক।\n" +
      "Delete চাপলে মুছবে।",
  },
  {
    title: "শেপ: আয়তক্ষেত্র, হীরা, ত্রিভুজ, বৃত্ত",
    keywords: "rect diamond triangle ellipse শেপ shape আয়তক্ষেত্র বৃত্ত",
    body:
      "R, D, G, O টুল দিয়ে শেপ আঁকুন। চাপ দিয়ে টানুন, ছেড়ে দিলে শেপ তৈরি হবে।\n\n" +
      "শেপ নির্বাচিত থাকলে উপরে Style Panel-এ রং, লাইনের মোটা ও স্বচ্ছতা বদলানো যায়।",
  },
  {
    title: "Line ও Arrow: রেখা ও তীর",
    keywords: "line arrow রেখা তীর শুরু শেষ",
    body:
      "L (Line) বা A (Arrow) বেছে যেখানে চাপবেন সেখান থেকে শুরু হবে, এবং যেখানে ছাড়বেন সেখানেই শেষ হবে।\n\n" +
      "শুরু বা শেষ যেকোনো image, শেপ, পাতা বা PDF-এর ওপরও হতে পারে; রেখা বর্ডারে আটকায় না।",
  },
  {
    title: "Pencil ও Polyline: হাতে আঁকা ও বাঁকা রেখা",
    keywords: "pencil polyline হাতে আঁকা বাঁকা draw",
    body:
      "P (Pencil): হাতের মতো আঁকুন, mouse ছাড়লে আঁকা শেষ।\n" +
      "M (Polyline): বিন্দুর পর বিন্দু ক্লিক করে বাঁকা রেখা। শেষ করতে double-click বা Enter।",
  },
  {
    title: "Text ও Note: লেখা",
    keywords: "text note লেখা নোট type",
    body:
      "T (Text): ক্যানভাসে ক্লিক করে লিখুন। লেখার আকার Style Panel থেকে বদলানো যায়।\n" +
      "N (Note): লেখার জন্য একটি বাক্স। বড় লেখার জন্য ভালো।",
  },
  {
    title: "Eraser: মোছা",
    keywords: "eraser মোছা delete erase",
    body:
      "E বা Eraser বেছে যেখানে টানবেন সেখানের আঁকা মুছে যাবে। মোছা শেষ হলে Select বাছুন।",
  },
  {
    title: "Laser ও Spot Light ও Reveal (Z মেনু)",
    keywords: "laser spot light reveal z মেনু পর্দা হাইলাইট",
    body:
      "Z চাপলে বা Z-তে ক্লিক করলে তিনটি বিকল্প আসে:\n\n" +
      "Laser ▸: Red, Blue বা Green বেছে নিন। Laser দিয়ে আঁকলে রেখাটি কিছুক্ষণ পরে নিজে থেকে মুছে যায়। এটি বোর্ডে সেভ হয় না, শুধু দেখানোর জন্য।\n\n" +
      "Spot Light: ক্যানভাসে একটি এলাকা টেনে নিন। বাকি অংশ কালো পর্দায় ঢেকে যাবে, নির্বাচিত অংশ উজ্জ্বল থাকবে। Esc চাপলে বা খালি জায়গায় ক্লিক করলে সরবে।\n\n" +
      "Reveal: ক্যানভাসে টেনে সাদা পর্দা আঁকুন, যা নিচের লেখা ঢেকে রাখে। Select-এ ফিরে → (ডান তীর) চাপলে একটি একটি করে পর্দা সরবে। ← (বাম তীর) চাপলে শেষটি আবার ঢাকবে। Ctrl + Shift + R চাপলে সব পর্দা ফিরবে।\n\n" +
      "Esc চাপলে Spot Light বা Reveal থেকে বের হয়ে Select-এ ফিরবেন।",
  },
  {
    title: "Magnifier: অংশ বড় করে দেখা",
    keywords: "magnifier বড় zoom লেন্স B",
    body:
      "B চাপুন। ক্যানভাসের একটি অংশ টেনে নিন, সেটি বড় হয়ে একটি আলাদা জানালায় দেখা যাবে। জানালার কোণে ধরে আকার বদলান। x চিহ্নে বন্ধ হবে।",
  },
  {
    title: "Calculator ও Camera",
    keywords: "calculator camera ক্যালকুলেটর ক্যামেরা",
    body:
      "Calculator: টুলবারের Calculator আইকনে ক্লিক করে হিসাব করুন। ইতিহাসে শেষ ১০টি হিসাব থাকে।\n\n" +
      "Camera: Camera ▸ থেকে Rectangle, Circular বা Hexagon আকারের ক্যামেরা-জানালা বাছুন। Camera Off দিয়ে বন্ধ করুন।",
  },
  {
    title: "Screen Shot: ক্যানভাসের ছবি বা লেখা",
    keywords: "screen shot ছবি লেখা ocr capture",
    body:
      "Camera ▸ → Screen Shot ▸ বেছে নিন:\n\n" +
      "As Image: একটি এলাকা টেনে OK (বা Ctrl+C) দিন। তারপর যেখানে mouse, সেখানে Ctrl+V দিয়ে ছবিটি বসান।\n\n" +
      "As Plain Text: এলাকা টেনে OK দিন। লেখা পড়া হবে (ছবি, ভিডিও, PDF পাতা থেকেও), তারপর Ctrl+V দিয়ে Text বসান।",
  },
  {
    title: "Clip Art: তৈরি ছবি ঢোকানো",
    keywords: "clip art insert ছবি icon electrical mechanical civil computer chemistry physics",
    body:
      "Insert → Clip Art বেছে বিষয় (Electrical, Mechanical, Civil, Computer, Chemistry, Physics ইত্যাদি) ও তারপর ছবি বাছুন। ছবিটি ক্যানভাসে বসবে, সেটি সরানো ও আকার বদলানো যাবে।",
  },
  {
    title: "Table: টেবিল",
    keywords: "table টেবিল ঘর cell",
    body:
      "Insert → Table থেকে টেবিল যোগ করুন। ঘরে ক্লিক করে লিখুন, Enter দিয়ে পরের লাইনে যান। কলামের সীমারেখা টেনে চওড়া বা সরু করা যায়।",
  },
  {
    title: "Word ও PDF ফাইল খোলা",
    keywords: "word pdf open file খোলা পাতা document",
    body:
      "File → Open File → Word বা PDF বেছে ফাইলটি খুলুন। প্রতিটি পাতা আলাদা ছবি হয়ে নিচে নিচে সাজানো থাকে।\n\n" +
      "Word পাতার বর্ডার সবুজ, PDF পাতার বর্ডার নীল।\n" +
      "যেকোনো একটি পাতায় ক্লিক করে টানলে পুরো document একসাথে সরবে।\n" +
      "একটি পাতা নির্বাচন করে Delete দিলে শুধু সেটি মুছবে, বাকি পাতা উপরে উঠবে।\n" +
      "Word খুলতে LibreOffice লাগে (desktop অ্যাপে)।",
  },
  {
    title: "Tab Background ও Grid",
    keywords: "tab background grid rng রং গ্রিড transparent",
    body:
      "Edit → Tab BG: নির্বাচিত tab-এর রং। Transparent বাছলে পেছনের window দেখা যাবে।\n" +
      "Edit → Grid: Corner dots (ডিফল্ট), Dots grid, Line grid বা No grid।",
  },
  {
    title: "Save ও Open: ফাইলের ধরন",
    keywords: "save open pada pdf image board সংরক্ষণ খোলা",
    body:
      "Save Board (.pada): বোর্ড PADA-র নিজের ফাইলে সংরক্ষণ হয়। পরে এটি খুলে আবার সম্পাদনা করা যায়।\n" +
      "Save As PDF বা Image: বর্তমান বোর্ড PDF বা ছবি হিসেবে সংরক্ষণ হয়। এগুলো আর সম্পাদনা করা যায় না।\n" +
      "Open Board (.pada): আগে সংরক্ষিত বোর্ড খুলুন।",
  },
  {
    title: "Toolbar ছোট করা ও সরানো",
    keywords: "toolbar minimise expand handle সরানো dock",
    body:
      "Toolbar-এর বাম প্রান্তের আইকনে ক্লিক করলে সব টুল ভেতরে গুটিয়ে যাবে; আবার ক্লিক করলে খুলবে।\n" +
      "আইকনটি টেনে ক্যানভাসের যেকোনো প্রান্তে নিয়ে ছাড়ুন। Toolbar সেই প্রান্তের কাছে বসবে: ডান/বাম কোণে সারি, উপর/নিচে কলাম।\n" +
      "Style Panel সবসময় Toolbar-এর পাশে থাকে।",
  },
  {
    title: "Style Panel: রং, মোটা, স্বচ্ছতা",
    keywords: "style panel রং color stroke font size স্বচ্ছতা",
    body:
      "কোনো শেপ, লেখা বা রেখা নির্বাচিত থাকলে Style Panel-এ দেখা যায়:\n" +
      "রং, লাইনের মোটা, স্বচ্ছতা, লেখার আকার ও ধরন।\n" +
      "ক্যানভাসের খালি জায়গায় ক্লিক করলে Panel লুকায়।",
  },
  {
    title: "Presentation: ক্লাসে দেখানো",
    keywords: "presentation প্রেজেন্টেশন ক্লাস দেখানো full screen",
    body:
      "Reveal (পর্দা) ও Spot Light (হাইলাইট) ক্লাসে দেখানোর জন্য ভালো। Laser দিয়ে বোর্ডের দিকে নির্দেশ করা যায়। Ribbon-এর minimise দিয়ে অন্য window-র সাথে কাজ করুন।",
  },
  {
    title: "সমস্যা হলে",
    keywords: "problem error সমস্যা কাজ করছে না help",
    body:
      "কোনো কিছু কাজ না করলে:\n" +
      "১. Tool বাছা আছে কিনা দেখুন (Select বা নির্দিষ্ট টুল)।\n" +
      "২. Esc চেপে বের হয়ে আবার চেষ্টা করুন।\n" +
      "৩. Word খুলতে সমস্যা হলে LibreOffice আছে কিনা দেখুন।\n" +
      "৪. Video ব্রাউজারের window-র ওপর পরিষ্কার না দেখালেও এটি স্বাভাবিক।",
  },
];
