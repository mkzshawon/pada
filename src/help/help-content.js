// PADA Help: every topic has a title and a text in Bangla (bn) and English (en).
// "keywords" are extra words (both languages) that the search also looks at.
// To add or change a topic, edit this file; keep each text in plain language.
window.PADA_HELP = [
  {
    title: { bn: "PADA কিভাবে শুরু করবেন", en: "Getting started" },
    keywords: "শুরু start intro প্রথম first",
    body: {
      bn:
        "PADA একটি ক্যানভাস (whiteboard)। নিচের Toolbar থেকে টুল বেছে নিন, তারপর ক্যানভাসে mouse দিয়ে আঁকুন বা লিখুন।\n\n" +
        "১. Toolbar-এর আইকনে ক্লিক করে টুল বাছুন।\n" +
        "২. ক্যানভাসে চাপ দিয়ে টেনে আঁকুন।\n" +
        "৩. কোনো কিছু বদলাতে আগে সেটি নির্বাচন করুন (Select টুল)।\n" +
        "৪. ওপরের Ribbon-এ File থেকে সংরক্ষণ বা খোলা।",
      en:
        "PADA is a whiteboard (canvas). Pick a tool from the Toolbar at the bottom, then draw or write on the canvas with the mouse.\n\n" +
        "1. Click a tool icon in the Toolbar.\n" +
        "2. Press on the canvas and drag to draw.\n" +
        "3. To change something, select it first (Select tool).\n" +
        "4. Use File in the Ribbon at the top to open or save.",
    },
  },
  {
    title: { bn: "Ribbon: উপরের সারি (Logo, File, Edit, Insert, Help)", en: "Ribbon: top row (Logo, File, Edit, Insert, Help)" },
    keywords: "ribbon menu file edit insert help মেনু",
    body: {
      bn:
        "উপরের প্রথম সারিতে PADA-র Logo ও মেনু আছে:\n\n" +
        "File: Open File (Board, PDF, Image, Word, Video, PowerPoint), Save As (PDF, Image, Board .pada), Rename, Duplicate, Close। এগুলো নির্বাচিত tab-এ কাজ করে।\n" +
        "Edit: Tab BG (রং বদলানো) ও Grid (গ্রিড ধরন)। নির্বাচিত tab-এ কাজ করে।\n" +
        "Insert: Table ও Clip Art।\n" +
        "Help: এই সহায়িকা।\n\n" +
        "মেনুতে ক্লিক করলে তালিকা খোলে। বাইরে ক্লিক করলে বন্ধ হয়।",
      en:
        "The top row has the PADA logo and the menus:\n\n" +
        "File: Open File (Board, PDF, Image, Word, Video, PowerPoint), Save As (PDF, Image, Board .pada), Rename, Duplicate, Close. These work on the selected tab.\n" +
        "Edit: Tab BG (background colour) and Grid (grid style). These work on the selected tab.\n" +
        "Insert: Table and Clip Art.\n" +
        "Help: this guide.\n\n" +
        "Click a menu to open its list. Click outside to close it.",
    },
  },
  {
    title: { bn: "Ribbon: Tab ও তার (x)", en: "Ribbon: tabs and the (x)" },
    keywords: "tab ট্যাব close বন্ধ x নতুন add",
    body: {
      bn:
        "দ্বিতীয় সারিতে Tab 01, Tab 02 ইত্যাদি থাকে। একটি Tab এক একটি আলাদা বোর্ড।\n\n" +
        "Tab-এ ক্লিক করলে সেটি খোলে।\n" +
        "সক্রিয় Tab-এর পাশে (x) সবসময় দেখা যায়। অন্য Tab-এর ওপর মাউস নিলে (x) দেখা যায়।\n" +
        "(x) চাপলে Tab বন্ধ হবে, তবে আগে জিজ্ঞাসা করবে কিভাবে সংরক্ষণ করবেন।\n\n" +
        "Ribbon-এর ডান প্রান্তে: minimise (ছোট করা), resize (window ছোট/বড়), close (PADA বন্ধ)।",
      en:
        "The second row has Tab 01, Tab 02 and so on. Each tab is a separate board.\n\n" +
        "Click a tab to open it.\n" +
        "The (x) is always visible on the active tab. On other tabs it appears when the mouse is over them.\n" +
        "Clicking (x) closes the tab, but first it asks how to save it.\n\n" +
        "At the right end of the Ribbon: minimise (send to the taskbar), resize (make the window smaller or full size), close (close PADA).",
    },
  },
  {
    title: { bn: "Ribbon: খালি জায়গা দিয়ে window সরানো", en: "Ribbon: moving the window" },
    keywords: "drag move window সরানো ribbon",
    body: {
      bn:
        "Resize করা অবস্থায় Ribbon বা Tab-এর খালি জায়গায় mouse চেপে টানলে পুরো PADA window সরবে। বোতাম, Tab বা মেনুতে চাপলে এটি হবে না।",
      en:
        "When the window is resized (not full screen), press the mouse on an empty part of the Ribbon or the tab row and drag to move the whole PADA window. Pressing a button, a tab or a menu does not move it.",
    },
  },
  {
    title: { bn: "Toolbar: টুল ও তাদের শর্টকাট", en: "Toolbar: tools and shortcut keys" },
    keywords: "toolbar টুল shortcut key কী",
    body: {
      bn:
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
      en:
        "Toolbar tools (with keyboard shortcuts):\n\n" +
        "V  Select: select shapes, move them, change their size.\n" +
        "H  Hand: move the canvas by dragging (you can also hold Space).\n" +
        "R  Rect: rectangle.\n" +
        "D  Diamond: diamond shape.\n" +
        "G  Triangle: triangle.\n" +
        "O  Ellipse: circle or ellipse.\n" +
        "A  Arrow: line with an arrow head.\n" +
        "L  Line: straight line.\n" +
        "P  Pencil: freehand drawing.\n" +
        "M  Polyline: curved line through several points.\n" +
        "T  Text: text.\n" +
        "N  Note: note box.\n" +
        "E  Eraser: erase drawings.\n" +
        "B  Magnifier: show part of the board enlarged.",
    },
  },
  {
    title: { bn: "Select: শেপ নির্বাচন, সরানো ও আকার বদলানো", en: "Select: choose, move and resize" },
    keywords: "select নির্বাচন move সরানো resize আকার handle",
    body: {
      bn:
        "V চাপুন বা Select বাছুন।\n\n" +
        "একটি শেপে ক্লিক করলে সেটি নির্বাচিত হবে।\n" +
        "একাধিক শেপ নির্বাচন: Shift চেপে ক্লিক করুন, অথবা ফাঁকা জায়গা থেকে টেনে বাক্স আঁকুন।\n" +
        "সরাতে: নির্বাচিত শেপ ধরে টানুন।\n" +
        "আকার বদলাতে: কোণের ছোট বিন্দু ধরে টানুন।\n" +
        "তীর কী দিয়ে ১ একক সরবে, Shift + তীর দিয়ে ১০ একক।\n" +
        "Delete চাপলে মুছবে।",
      en:
        "Press V or choose Select.\n\n" +
        "Click a shape to select it.\n" +
        "Several shapes: hold Shift and click, or drag a box from an empty place.\n" +
        "To move: drag the selected shape.\n" +
        "To resize: drag one of the small handles at the corners.\n" +
        "Arrow keys move the selection by 1 unit; Shift + arrow keys by 10.\n" +
        "Delete removes it.",
    },
  },
  {
    title: { bn: "শেপ: আয়তক্ষেত্র, হীরা, ত্রিভুজ, বৃত্ত", en: "Shapes: rectangle, diamond, triangle, ellipse" },
    keywords: "rect diamond triangle ellipse শেপ shape আয়তক্ষেত্র বৃত্ত",
    body: {
      bn:
        "R, D, G, O টুল দিয়ে শেপ আঁকুন। চাপ দিয়ে টানুন, ছেড়ে দিলে শেপ তৈরি হবে।\n\n" +
        "শেপ নির্বাচিত থাকলে উপরে Style Panel-এ রং, লাইনের মোটা ও স্বচ্ছতা বদলানো যায়।",
      en:
        "Use R, D, G or O to draw a shape. Press and drag; release the mouse to finish.\n\n" +
        "While a shape is selected, the Style Panel lets you change its colour, line thickness and transparency.",
    },
  },
  {
    title: { bn: "Line ও Arrow: রেখা ও তীর", en: "Line and Arrow" },
    keywords: "line arrow রেখা তীর শুরু শেষ",
    body: {
      bn:
        "L (Line) বা A (Arrow) বেছে যেখানে চাপবেন সেখান থেকে শুরু হবে, এবং যেখানে ছাড়বেন সেখানেই শেষ হবে।\n\n" +
        "শুরু বা শেষ যেকোনো image, শেপ, পাতা বা PDF-এর ওপরও হতে পারে; রেখা বর্ডারে আটকায় না।",
      en:
        "With L (Line) or A (Arrow), the line starts where you press and ends exactly where you release the mouse.\n\n" +
        "The start or end can be on any image, shape, page or PDF; the line does not stick to borders.",
    },
  },
  {
    title: { bn: "Pencil ও Polyline: হাতে আঁকা ও বাঁকা রেখা", en: "Pencil and Polyline" },
    keywords: "pencil polyline হাতে আঁকা বাঁকা draw",
    body: {
      bn:
        "P (Pencil): হাতের মতো আঁকুন, mouse ছাড়লে আঁকা শেষ।\n" +
        "M (Polyline): বিন্দুর পর বিন্দু ক্লিক করে বাঁকা রেখা। শেষ করতে double-click বা Enter।",
      en:
        "P (Pencil): draw freehand; release the mouse to finish.\n" +
        "M (Polyline): click point after point to make a curved line. To finish, double-click or press Enter.",
    },
  },
  {
    title: { bn: "Text ও Note: লেখা", en: "Text and Note" },
    keywords: "text note লেখা নোট type",
    body: {
      bn:
        "T (Text): ক্যানভাসে ক্লিক করে লিখুন। লেখার আকার Style Panel থেকে বদলানো যায়।\n" +
        "N (Note): লেখার জন্য একটি বাক্স। বড় লেখার জন্য ভালো।",
      en:
        "T (Text): click on the canvas and type. The text size can be changed from the Style Panel.\n" +
        "N (Note): a box for writing. Good for longer text.",
    },
  },
  {
    title: { bn: "Eraser: মোছা", en: "Eraser" },
    keywords: "eraser মোছা delete erase",
    body: {
      bn: "E বা Eraser বেছে যেখানে টানবেন সেখানের আঁকা মুছে যাবে। মোছা শেষ হলে Select বাছুন।",
      en: "Press E or choose Eraser, then drag over what you want to remove. When finished, choose Select.",
    },
  },
  {
    title: { bn: "Laser ও Spot Light ও Reveal (Z মেনু)", en: "Laser, Spot Light and Reveal (Z menu)" },
    keywords: "laser spot light reveal z মেনু পর্দা হাইলাইট",
    body: {
      bn:
        "Z চাপলে বা Z-তে ক্লিক করলে তিনটি বিকল্প আসে:\n\n" +
        "Laser ▸: Red, Blue বা Green বেছে নিন। Laser দিয়ে আঁকলে রেখাটি কিছুক্ষণ পরে নিজে থেকে মুছে যায়। এটি বোর্ডে সেভ হয় না, শুধু দেখানোর জন্য।\n\n" +
        "Spot Light: ক্যানভাসে একটি এলাকা টেনে নিন। বাকি অংশ কালো পর্দায় ঢেকে যাবে, নির্বাচিত অংশ উজ্জ্বল থাকবে। Esc চাপলে বা খালি জায়গায় ক্লিক করলে সরবে।\n\n" +
        "Reveal: ক্যানভাসে টেনে সাদা পর্দা আঁকুন, যা নিচের লেখা ঢেকে রাখে। Select-এ ফিরে → (ডান তীর) চাপলে একটি একটি করে পর্দা সরবে। ← (বাম তীর) চাপলে শেষটি আবার ঢাকবে। Ctrl + Shift + R চাপলে সব পর্দা ফিরবে।\n\n" +
        "Esc চাপলে Spot Light বা Reveal থেকে বের হয়ে Select-এ ফিরবেন।",
      en:
        "Press Z, or click Z, to get three choices:\n\n" +
        "Laser ▸: choose Red, Blue or Green. A laser line fades away by itself after a moment. It is not saved on the board; it is only for showing.\n\n" +
        "Spot Light: drag a box on the canvas. The rest of the board is covered by a dark veil and the chosen part stays bright. Press Esc or click an empty place to remove it.\n\n" +
        "Reveal: drag on the canvas to draw a white cover that hides what is under it. Go back to Select and press → (right arrow) to uncover one cover at a time. ← (left arrow) covers the last one again. Ctrl + Shift + R shows all covers again.\n\n" +
        "Press Esc to leave Spot Light or Reveal and return to Select.",
    },
  },
  {
    title: { bn: "Magnifier: অংশ বড় করে দেখা", en: "Magnifier: enlarge part of the board" },
    keywords: "magnifier বড় zoom লেন্স B",
    body: {
      bn:
        "B চাপুন। ক্যানভাসের একটি অংশ টেনে নিন, সেটি বড় হয়ে একটি আলাদা জানালায় দেখা যাবে। জানালার কোণে ধরে আকার বদলান। x চিহ্নে বন্ধ হবে।",
      en:
        "Press B. Drag a box over part of the canvas; that part appears enlarged in its own window. Drag the corner to change its size. Click x to close it.",
    },
  },
  {
    title: { bn: "Calculator ও Camera", en: "Calculator and Camera" },
    keywords: "calculator camera ক্যালকুলেটর ক্যামেরা",
    body: {
      bn:
        "Calculator: টুলবারের Calculator আইকনে ক্লিক করে হিসাব করুন। ইতিহাসে শেষ ১০টি হিসাব থাকে।\n\n" +
        "Camera: Camera ▸ থেকে Rectangle, Circular বা Hexagon আকারের ক্যামেরা-জানালা বাছুন। Camera Off দিয়ে বন্ধ করুন।",
      en:
        "Calculator: click the Calculator icon in the Toolbar and calculate. The last 10 calculations are kept in the history.\n\n" +
        "Camera: from Camera ▸ choose a Rectangle, Circular or Hexagon camera window. Use Camera Off to close it.",
    },
  },
  {
    title: { bn: "Screen Shot: ক্যানভাসের ছবি বা লেখা", en: "Screen Shot: picture or text from the canvas" },
    keywords: "screen shot ছবি লেখা ocr capture",
    body: {
      bn:
        "Camera ▸ → Screen Shot ▸ বেছে নিন:\n\n" +
        "As Image: একটি এলাকা টেনে OK (বা Ctrl+C) দিন। তারপর যেখানে mouse, সেখানে Ctrl+V দিয়ে ছবিটি বসান।\n\n" +
        "As Plain Text: এলাকা টেনে OK দিন। লেখা পড়া হবে (ছবি, ভিডিও, PDF পাতা থেকেও), তারপর Ctrl+V দিয়ে Text বসান।",
      en:
        "Choose Camera ▸ → Screen Shot ▸:\n\n" +
        "As Image: drag an area, then press OK (or Ctrl+C). Move the mouse to where you want it and press Ctrl+V to place the picture.\n\n" +
        "As Plain Text: drag an area and press OK. The text is read (also from pictures, videos and PDF pages), then press Ctrl+V to place it as Text.",
    },
  },
  {
    title: { bn: "Clip Art: তৈরি ছবি ঢোকানো", en: "Clip Art: insert ready-made pictures" },
    keywords: "clip art insert ছবি icon electrical mechanical civil computer chemistry physics",
    body: {
      bn:
        "Insert → Clip Art বেছে বিষয় (Electrical, Mechanical, Civil, Computer, Chemistry, Physics ইত্যাদি) ও তারপর ছবি বাছুন। ছবিটি ক্যানভাসে বসবে, সেটি সরানো ও আকার বদলানো যাবে।",
      en:
        "Choose Insert → Clip Art, then a subject (Electrical, Mechanical, Civil, Computer, Chemistry, Physics and so on), then a picture. It is placed on the canvas and can be moved and resized.",
    },
  },
  {
    title: { bn: "Table: টেবিল", en: "Table" },
    keywords: "table টেবিল ঘর cell",
    body: {
      bn:
        "Insert → Table থেকে টেবিল যোগ করুন। ঘরে ক্লিক করে লিখুন, Enter দিয়ে পরের লাইনে যান। কলামের সীমারেখা টেনে চওড়া বা সরু করা যায়।",
      en:
        "Add a table from Insert → Table. Click a cell and type; press Enter to go to the next line. Drag a column border to make the column wider or narrower.",
    },
  },
  {
    title: { bn: "Word ও PDF ফাইল খোলা", en: "Opening Word and PDF files" },
    keywords: "word pdf open file খোলা পাতা document",
    body: {
      bn:
        "File → Open File → Word বা PDF বেছে ফাইলটি খুলুন। প্রতিটি পাতা আলাদা ছবি হয়ে নিচে নিচে সাজানো থাকে।\n\n" +
        "Word পাতার বর্ডার সবুজ, PDF পাতার বর্ডার নীল।\n" +
        "যেকোনো একটি পাতায় ক্লিক করে টানলে পুরো document একসাথে সরবে।\n" +
        "একটি পাতা নির্বাচন করে Delete দিলে শুধু সেটি মুছবে, বাকি পাতা উপরে উঠবে।\n" +
        "Word খুলতে LibreOffice লাগে (desktop অ্যাপে)।",
      en:
        "Choose File → Open File → Word or PDF. Each page appears as its own picture, one below the other.\n\n" +
        "Word pages have a green border; PDF pages have a blue border.\n" +
        "Drag any page and the whole document moves together.\n" +
        "Select one page and press Delete to remove only that page; the other pages move up.\n" +
        "Opening Word needs LibreOffice (in the desktop app).",
    },
  },
  {
    title: { bn: "Tab Background ও Grid", en: "Tab background and grid" },
    keywords: "tab background grid rng রং গ্রিড transparent",
    body: {
      bn:
        "Edit → Tab BG: নির্বাচিত tab-এর রং। Transparent বাছলে পেছনের window দেখা যাবে।\n" +
        "Edit → Grid: Corner dots (ডিফল্ট), Dots grid, Line grid বা No grid।",
      en:
        "Edit → Tab BG: the background colour of the selected tab. Choosing Transparent lets you see the windows behind PADA.\n" +
        "Edit → Grid: Corner dots (default), Dots grid, Line grid or No grid.",
    },
  },
  {
    title: { bn: "Save ও Open: ফাইলের ধরন", en: "Save and Open: file types" },
    keywords: "save open pada pdf image board সংরক্ষণ খোলা",
    body: {
      bn:
        "Save Board (.pada): বোর্ড PADA-র নিজের ফাইলে সংরক্ষণ হয়। পরে এটি খুলে আবার সম্পাদনা করা যায়।\n" +
        "Save As PDF বা Image: বর্তমান বোর্ড PDF বা ছবি হিসেবে সংরক্ষণ হয়। এগুলো আর সম্পাদনা করা যায় না।\n" +
        "Open Board (.pada): আগে সংরক্ষিত বোর্ড খুলুন।",
      en:
        "Save Board (.pada): the board is saved in PADA's own file; you can open it later and keep editing.\n" +
        "Save As PDF or Image: the current board is saved as a PDF or a picture. These cannot be edited again in PADA.\n" +
        "Open Board (.pada): open a board saved earlier.",
    },
  },
  {
    title: { bn: "Toolbar ছোট করা ও সরানো", en: "Minimise and move the Toolbar" },
    keywords: "toolbar minimise expand handle সরানো dock",
    body: {
      bn:
        "Toolbar-এর বাম প্রান্তের আইকনে ক্লিক করলে সব টুল ভেতরে গুটিয়ে যাবে; আবার ক্লিক করলে খুলবে।\n" +
        "আইকনটি টেনে ক্যানভাসের যেকোনো প্রান্তে নিয়ে ছাড়ুন। Toolbar সেই প্রান্তের কাছে বসবে: ডান/বাম কোণে সারি, উপর/নিচে কলাম।\n" +
        "Style Panel সবসময় Toolbar-এর পাশে থাকে।",
      en:
        "Click the icon at the left end of the Toolbar to fold all tools into it; click again to open them.\n" +
        "Drag this icon to any edge of the canvas and release. The Toolbar docks near that edge: a row in the bottom-left or bottom-right corner, or a column at the top or bottom edge.\n" +
        "The Style Panel always stays beside the Toolbar.",
    },
  },
  {
    title: { bn: "Style Panel: রং, মোটা, স্বচ্ছতা", en: "Style Panel: colour, thickness, transparency" },
    keywords: "style panel রং color stroke font size স্বচ্ছতা",
    body: {
      bn:
        "কোনো শেপ, লেখা বা রেখা নির্বাচিত থাকলে Style Panel-এ দেখা যায়:\n" +
        "রং, লাইনের মোটা, স্বচ্ছতা, লেখার আকার ও ধরন।\n" +
        "ক্যানভাসের খালি জায়গায় ক্লিক করলে Panel লুকায়।",
      en:
        "When a shape, text or line is selected, the Style Panel shows:\n" +
        "its colour, line thickness, transparency, text size and font.\n" +
        "A click on an empty part of the canvas hides the panel.",
    },
  },
  {
    title: { bn: "Presentation: ক্লাসে দেখানো", en: "Presentation: showing in a class" },
    keywords: "presentation প্রেজেন্টেশন ক্লাস দেখানো full screen",
    body: {
      bn:
        "Reveal (পর্দা) ও Spot Light (হাইলাইট) ক্লাসে দেখানোর জন্য ভালো। Laser দিয়ে বোর্ডের দিকে নির্দেশ করা যায়। Ribbon-এর minimise দিয়ে অন্য window-র সাথে কাজ করুন।",
      en:
        "Reveal (covers) and Spot Light (highlight) are good for teaching. Use the Laser to point at the board. Use the Ribbon's minimise to switch to other windows.",
    },
  },
  {
    title: { bn: "সমস্যা হলে", en: "If something does not work" },
    keywords: "problem error সমস্যা কাজ করছে না help",
    body: {
      bn:
        "কোনো কিছু কাজ না করলে:\n" +
        "১. Tool বাছা আছে কিনা দেখুন (Select বা নির্দিষ্ট টুল)।\n" +
        "২. Esc চেপে বের হয়ে আবার চেষ্টা করুন।\n" +
        "৩. Word খুলতে সমস্যা হলে LibreOffice আছে কিনা দেখুন।\n" +
        "৪. Video ব্রাউজারের window-র ওপর পরিষ্কার না দেখালেও এটি স্বাভাবিক।",
      en:
        "If something does not work:\n" +
        "1. Check that the right tool is chosen (Select or the tool you need).\n" +
        "2. Press Esc to leave the current mode and try again.\n" +
        "3. If Word does not open, check that LibreOffice is installed.\n" +
        "4. A video in another window may not show clearly over PADA; this is expected.",
    },
  },
];
