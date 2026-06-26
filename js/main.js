// ===== Derek: PASTE YOUR GOOGLE DRIVE FILE IDs HERE =====
// After uploading your PPTX files to Google Drive:
//   1. Right-click each file → "Get link"
//   2. The link looks like: https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing
//   3. Copy just the FILE_ID_HERE part and paste it below
const DRIVE_IDS = {
  folder:   "1Gsr0ReCePBtqN3V3EBXsx8ToDA4Hx3ru",  // ← Already set from your folder link!
  lesson1:  "137bYXmQgqZiPHsOTXMRpUXD6HRKQHn8V",              // Lesson 1 - How Computers Learn.pptx
  lesson2:  "1bVN7wsc7w8SbQk7hRumJEKTe-4o5NsEd",              // Lesson 2 - How Does AI See.pptx
  lesson3:  "151wo6MoVYE5kPBKje-UF6ra1MNYNoNYT",              // Lesson 3 - AI Meets Scratch.pptx
  lesson4:  "PASTE_YOUR_FILE_ID_HERE",              // Lesson 4 - Smart Sorting (Decision Trees).pptx
  lesson5:  "10cHFohPv-wtYoFXMzkAQUpQTGRB530y2",              // Lesson 5 - Words Have Power.pptx
  lesson6:  "1ZO6siNKQpYRxk0NlRdvr48CqTPGeeSHC",              // Lesson 6 - Training Like a Pro.pptx
  lesson7:  "1j5j28z2g-Rlu0vz62a50FZSDOfF7IFE4",              // Lesson 7 - AI That Recommends.pptx
  lesson8:  "1m7zBNrKvf1pt08MGOe6ZTlcgfD9TZOlI",              // Lesson 8 - AI That Creates.pptx
  lesson9:  "1OYCSGsUmziqW7YeLY8GIt56uwI8dLRtC",              // Lesson 9 - When AI Gets It Wrong.pptx
  lesson10: "1n4Yp1jeGBwyirGyZJmOf_NJdcrLvXjEy",              // Lesson 10 - Build a Chatbot.pptx
  lesson11: "PASTE_YOUR_FILE_ID_HERE",              // Lesson 11 - Showcase Day.pptx
  facilitatorGuide: "PASTE_YOUR_FILE_ID_HERE",      // Facilitator_Guide.pdf (if you have one)
};
// ===== END CONFIG — no need to edit anything below this line =====

function driveDownloadUrl(id) {
  if (!id || id === "PASTE_YOUR_FILE_ID_HERE") return null;
  return "https://docs.google.com/presentation/d/" + id + "/export/pptx";
}

function driveFolderUrl(id) {
  return "https://drive.google.com/drive/folders/" + id + "?usp=sharing";
}

var LESSON_ACCENT_COLORS = [
  "#1E2761", // 1  Navy
  "#0D9488", // 2  Teal
  "#D97706", // 3  Gold
  "#7C3AED", // 4  Purple
  "#059669", // 5  Green
  "#DC2626", // 6  Red
  "#2563EB", // 7  Blue
  "#DB2777", // 8  Pink
  "#EA580C", // 9  Orange
  "#4338CA", // 10 Indigo
  "#0E7490", // 11 Cyan
];

var LESSONS = [
  {
    num: 1,
    title: "How Does a Computer Learn?",
    desc: "Students discover that AI learns from examples, not rules, through an interactive \"Zorb\" creature classification game and hands-on training of a real image classifier.",
    concepts: ["Machine learning basics", "Training data", "Pattern recognition"],
    tools: ["Google Teachable Machine"],
    duration: "~40 min",
    key: "lesson1",
  },
  {
    num: 2,
    title: "How Does AI “See”?",
    desc: "Through pixelated image reveals and a pixel-by-pixel grid activity, students learn that computers see numbers, not pictures — and that more data means better recognition.",
    concepts: ["Pixels", "Image resolution", "Feature detection"],
    tools: ["Google Quick, Draw!"],
    duration: "~40 min",
    key: "lesson2",
  },
  {
    num: 3,
    title: "AI Meets Scratch!",
    desc: "The breakthrough lesson — students train a real text classifier on ML4Kids and connect it to a Scratch project that reacts to emotions in typed text.",
    concepts: ["Text classification", "ML + Scratch integration", "NLP basics"],
    tools: ["ML4Kids", "Scratch 3"],
    duration: "~40 min",
    key: "lesson3",
  },
  {
    num: 4,
    title: "Smart Sorting — Decision Trees",
    desc: "Starting with a class game of 20 Questions, students learn how AI makes decisions by asking yes/no questions, then build an animal classifier.",
    concepts: ["Decision trees", "Feature selection", "Classification"],
    tools: ["ML4Kids", "Scratch 3"],
    duration: "~40 min",
    key: "lesson4",
  },
  {
    num: 5,
    title: "Words Have Power — AI and Language",
    desc: "Students vote on tricky customer reviews (sarcasm! double negatives!) then build a sentiment-detecting \"Restaurant Rating Machine\" in Scratch.",
    concepts: ["NLP", "Sentiment analysis", "Ambiguity in language"],
    tools: ["ML4Kids", "Scratch 3"],
    duration: "~40 min",
    key: "lesson5",
  },
  {
    num: 6,
    title: "Training Like a Pro",
    desc: "Students deliberately sabotage their own AI with biased and insufficient data, then fix it — learning overfitting, bias, and data quality firsthand.",
    concepts: ["Bias", "Overfitting", "Test data", "Data diversity"],
    tools: ["ML4Kids"],
    duration: "~40 min",
    key: "lesson6",
  },
  {
    num: 7,
    title: "AI That Recommends",
    desc: "Through live \"this or that\" preference polls, students learn how recommendation engines work, then build a recommendation quiz in Scratch.",
    concepts: ["Recommendation systems", "Collaborative filtering", "Personalization"],
    tools: ["Scratch 3"],
    duration: "~40 min",
    key: "lesson7",
  },
  {
    num: 8,
    title: "AI That Creates",
    desc: "Students explore generative AI through \"Real or AI?\" guessing games, pattern-completion activities, AutoDraw, and a live AI image generation demo.",
    concepts: ["Generative AI", "Pattern learning", "AI-generated content", "Ethics"],
    tools: ["AutoDraw", "Craiyon"],
    duration: "~40 min",
    key: "lesson8",
  },
  {
    num: 9,
    title: "When AI Gets It Wrong — Fairness & Ethics",
    desc: "The Zorb game returns — rigged with biased data. Students experience bias firsthand, then find and fix bias in an ML4Kids project.",
    concepts: ["AI bias", "Fairness", "Ethics", "Real-world consequences"],
    tools: ["ML4Kids"],
    duration: "~40 min",
    key: "lesson9",
  },
  {
    num: 10,
    title: "Let’s Build a Chatbot!",
    desc: "Students design, train, and build a working AI chatbot in Scratch that detects customer intents and responds with appropriate answers and animations.",
    concepts: ["Chatbots", "Intent recognition", "NLP", "Conversation design"],
    tools: ["ML4Kids", "Scratch 3"],
    duration: "~40 min",
    key: "lesson10",
  },
  {
    num: 11,
    title: "Your AI Project — Showcase Day!",
    desc: "Students choose from 5 project templates (or invent their own), build an AI-powered Scratch project, and present it to the class.",
    concepts: ["Project design", "Independent building", "Presentation skills"],
    tools: ["ML4Kids", "Scratch 3"],
    duration: "~40 min",
    key: "lesson11",
  },
];

function buildLessonCards() {
  var grid = document.getElementById("lessons-grid");
  if (!grid) return;

  LESSONS.forEach(function(lesson, i) {
    var color = LESSON_ACCENT_COLORS[i];
    var downloadUrl = driveDownloadUrl(DRIVE_IDS[lesson.key]);

    var conceptTags = lesson.concepts.map(function(c) {
      return '<span class="tag">' + c + '</span>';
    }).join("");

    var toolTags = lesson.tools.map(function(t) {
      return '<span class="tag tag-tool">' + t + '</span>';
    }).join("");

    var downloadBtn = downloadUrl
      ? '<a href="' + downloadUrl + '" class="btn btn-teal" target="_blank" rel="noopener noreferrer" aria-label="Download Lesson ' + lesson.num + '">↓ Download</a>'
      : '<a href="' + driveFolderUrl(DRIVE_IDS.folder) + '" class="btn btn-teal" target="_blank" rel="noopener noreferrer" aria-label="Open Google Drive folder">↓ Get Lesson</a>';

    var html = '<article class="lesson-card" style="border-left-color:' + color + ';">'
      + '<div class="lesson-card-header">'
      + '<span class="lesson-num" style="background:' + color + ';">Lesson ' + lesson.num + '</span>'
      + '<h3 class="lesson-title">' + lesson.title + '</h3>'
      + '</div>'
      + '<p class="lesson-desc">' + lesson.desc + '</p>'
      + '<div class="lesson-meta">' + conceptTags + '</div>'
      + '<div class="lesson-meta">' + toolTags + '</div>'
      + '<div class="lesson-footer">'
      + '<span class="lesson-duration">🕐 ' + lesson.duration + '</span>'
      + downloadBtn
      + '</div>'
      + '</article>';

    grid.insertAdjacentHTML("beforeend", html);
  });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener("click", function(e) {
      var target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function setupScrollHighlight() {
  var navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  if (!navLinks.length) return;

  var sections = Array.from(navLinks).map(function(a) {
    return document.querySelector(a.getAttribute("href"));
  }).filter(Boolean);

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function(a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(function(s) { observer.observe(s); });
}

document.addEventListener("DOMContentLoaded", function() {
  buildLessonCards();
  setupSmoothScroll();
  setupScrollHighlight();
});
