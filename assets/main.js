function setYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}
setYear();

// ---------- Language toggle (EN / বাংলা) ----------
const translations = {
  en: {
    _title: 'Dr. Mozib Newborn Foundation | Rescue. Care. Home.',
    brand_text: 'Dr. Mozib<br><em>Newborn Foundation</em>',
    nav_about: 'About',
    nav_programs: 'Programs',
    nav_journey: 'The Journey',
    nav_gallery: 'Gallery',
    nav_press: 'Media',
    nav_contact: 'Contact',
    nav_donate: 'Donate',
    hero_h1: 'Abandoned at birth.<br><em>Never abandoned by us.</em>',
    hero_lede: "Dr. Mozib Newborn Foundation finds abandoned newborns across Bangladesh, rushes them into critical medical care, and gives every one of them something a hospital can't: a family to grow up in.",
    hero_cta_donate: 'Support a rescue',
    hero_cta_about: 'Our story',
    hero_note: 'Every case begins the same way — a phone call, and someone willing to go.',
    stat_1_label: 'Newborns rescued',
    stat_2_label: 'Foster families placed',
    stat_3_label: 'Hospital &amp; NICU partners',
    stat_4_label: 'Emergency response line',
    programs_eyebrow: 'What we do',
    programs_title: 'Three commitments, made the moment we get the call.',
    card1_title: 'Medical care',
    card1_p: 'Immediate NICU admission and the critical treatments a rescued newborn needs in the first, most fragile days — regardless of ability to pay.',
    card2_title: 'Foster placement',
    card2_p: 'Vetted, loving foster homes and legal support to place each recovered child in a family — with follow-up care as they grow.',
    card3_title: 'International support',
    card3_p: 'Building partnerships abroad — funding, equipment and expertise — to widen how many newborns we can reach and treat.',
    about_eyebrow: 'Our story',
    about_title: 'Founded on one idea: no child is disposable.',
    about_p1: "Dr. Mozib Newborn Foundation was formed by physicians and volunteers in Narayanganj who kept encountering the same emergency — a newborn left at a hospital gate, a bus stand, a riverbank — with no one coordinating what happened next.",
    about_p2: "We built that coordination: a rescue line, a standing relationship with NICUs willing to treat on trust, and a vetted network of families ready to foster. What started as one ward's informal effort is now a standing response system other hospitals and, increasingly, government partners call on directly.",
    journey_eyebrow: 'From rescue to home',
    journey_title: 'Every child follows the same line — until it leads somewhere permanent.',
    step1_title: 'Rescue',
    step1_p: 'A call comes in. A team is dispatched within the hour, day or night.',
    step2_title: 'NICU care',
    step2_p: 'Immediate admission to a partner hospital for critical stabilisation.',
    step3_title: 'Recovery',
    step3_p: 'Ongoing medical monitoring until the child is strong enough to leave care.',
    step4_title: 'A home',
    step4_p: 'Placement with a vetted foster family, with our follow-up support after.',
    gallery_eyebrow: 'Gallery',
    gallery_title: 'Moments from the ward, the handovers, and the homes after.',
    gallery_cap1: 'Handover ceremony with hospital &amp; government partners',
    gallery_cap2: 'NICU care, first week',
    gallery_cap3: 'Foster family, first day home',
    gallery_cap4: 'Volunteers on a rescue call',
    gallery_cap5: 'Partner hospital ward visit',
    gallery_cap6: 'One year later — a check-in visit',
    press_eyebrow: 'Media coverage',
    press_title: 'In the news.',
    press1_title: '"Foundation reunites abandoned newborn with foster family" — Outlet name',
    press1_link: 'Read →',
    press2_title: "Television segment on the foundation's NICU partnership",
    press2_link: 'Watch →',
    press3_title: 'State Minister of Health visits handover ceremony',
    press3_link: 'Read →',
    donate_eyebrow: 'Get involved',
    donate_title: 'Fund the next rescue.',
    donate_copy: "A NICU admission, a foster placement, a follow-up visit — every one of these has a real cost, and every taka reaches a specific child. Choose how you'd like to help.",
    donate_card1_title: 'Bank transfer',
    donate_card1_label1: 'Account name:',
    donate_card1_label2: 'Account no.:',
    donate_card1_label3: 'Bank &amp; branch:',
    donate_card2_title: 'bKash / Mobile banking',
    donate_card2_label1: 'Merchant number:',
    donate_card2_ref: 'Reference: "Donation"',
    donate_card3_title: 'Volunteer or foster',
    donate_card3_p: 'Want to join a rescue team or become a foster family? <a href="#contact">Contact us</a> and we\'ll walk you through vetting.',
    contact_eyebrow: 'Contact us',
    contact_title: 'Reach the rescue line, or just say hello.',
    contact_dt_address: 'Address',
    contact_dt_phone: 'Phone',
    contact_dt_email: 'Email',
    contact_dd_address: 'House #E-206/1, Signboard Mor, Narayanganj, Bangladesh',
    footer_brand: 'Dr. Mozib Newborn Foundation',
    footer_copy: '© <span id="year"></span> Dr. Mozib Newborn Foundation. All rights reserved.'
  },
  bn: {
    _title: 'ডা. মোজিব নবজাতক ফাউন্ডেশন | উদ্ধার। সেবা। ঘর।',
    brand_text: 'ডা. মোজিব<br><em>নবজাতক ফাউন্ডেশন</em>',
    nav_about: 'আমাদের সম্পর্কে',
    nav_programs: 'কার্যক্রম',
    nav_journey: 'যাত্রা',
    nav_gallery: 'গ্যালারি',
    nav_press: 'মিডিয়া',
    nav_contact: 'যোগাযোগ',
    nav_donate: 'দান করুন',
    hero_h1: 'জন্মের সময় পরিত্যক্ত।<br><em>আমাদের কাছে কখনো নয়।</em>',
    hero_lede: 'ডা. মোজিব নবজাতক ফাউন্ডেশন বাংলাদেশজুড়ে পরিত্যক্ত নবজাতকদের খুঁজে বের করে, দ্রুত জরুরি চিকিৎসা সেবার ব্যবস্থা করে, এবং প্রতিটি শিশুকে এমন কিছু দেয় যা একটি হাসপাতাল দিতে পারে না — বেড়ে ওঠার জন্য একটি পরিবার।',
    hero_cta_donate: 'একটি উদ্ধারে সহায়তা করুন',
    hero_cta_about: 'আমাদের গল্প',
    hero_note: 'প্রতিটি ঘটনা একইভাবে শুরু হয় — একটি ফোন কল, এবং একজন মানুষ যিনি ছুটে যেতে প্রস্তুত।',
    stat_1_label: 'উদ্ধারকৃত নবজাতক',
    stat_2_label: 'পালক পরিবারে হস্তান্তরিত',
    stat_3_label: 'হাসপাতাল ও এনআইসিইউ অংশীদার',
    stat_4_label: 'জরুরি সাড়াদান লাইন',
    programs_eyebrow: 'আমরা যা করি',
    programs_title: 'কল পাওয়ার মুহূর্তেই আমরা তিনটি প্রতিশ্রুতি রাখি।',
    card1_title: 'চিকিৎসা সেবা',
    card1_p: 'উদ্ধার হওয়া নবজাতকের জন্য তাৎক্ষণিক এনআইসিইউ ভর্তি এবং জীবনের প্রথম, সবচেয়ে ঝুঁকিপূর্ণ দিনগুলোতে প্রয়োজনীয় সংকটকালীন চিকিৎসা — সামর্থ্য থাকুক বা না থাকুক।',
    card2_title: 'পালক পরিবারে হস্তান্তর',
    card2_p: 'সুস্থ হয়ে ওঠা প্রতিটি শিশুকে যাচাইকৃত, স্নেহময় পালক পরিবারে হস্তান্তরের জন্য আইনি সহায়তা — এবং বেড়ে ওঠার সময় পরবর্তী পর্যবেক্ষণ ও সহায়তা।',
    card3_title: 'আন্তর্জাতিক সহযোগিতা',
    card3_p: 'বিদেশে অংশীদারিত্ব গড়ে তোলা — তহবিল, সরঞ্জাম ও বিশেষজ্ঞ সহায়তা — যাতে আরও বেশি নবজাতকের কাছে পৌঁছে তাদের চিকিৎসা করা যায়।',
    about_eyebrow: 'আমাদের গল্প',
    about_title: 'একটি বিশ্বাস থেকে প্রতিষ্ঠিত: কোনো শিশুই ফেলনা নয়।',
    about_p1: 'ডা. মোজিব নবজাতক ফাউন্ডেশন গড়ে তুলেছেন নারায়ণগঞ্জের কিছু চিকিৎসক ও স্বেচ্ছাসেবক, যারা বারবার একই জরুরি পরিস্থিতির মুখোমুখি হচ্ছিলেন — হাসপাতালের গেটে, বাস স্ট্যান্ডে বা নদীর পাড়ে ফেলে রাখা একটি নবজাতক — অথচ এরপর কী হবে তা সমন্বয় করার কেউ ছিল না।',
    about_p2: 'আমরা সেই সমন্বয়ের কাঠামো তৈরি করেছি: একটি উদ্ধার লাইন, বিশ্বাসের ভিত্তিতে চিকিৎসা দিতে রাজি এনআইসিইউগুলোর সঙ্গে স্থায়ী সম্পর্ক, এবং পালক হতে ইচ্ছুক যাচাইকৃত পরিবারের একটি নেটওয়ার্ক। যা শুরু হয়েছিল একটি ওয়ার্ডের অনানুষ্ঠানিক উদ্যোগ হিসেবে, তা এখন একটি স্থায়ী সাড়াদান ব্যবস্থা, যাকে অন্যান্য হাসপাতাল এবং ক্রমবর্ধমানভাবে সরকারি অংশীদাররাও সরাসরি ডেকে থাকেন।',
    journey_eyebrow: 'উদ্ধার থেকে ঘর পর্যন্ত',
    journey_title: 'প্রতিটি শিশু একই পথ ধরে এগোয় — যতক্ষণ না তা কোনো স্থায়ী ঠিকানায় পৌঁছায়।',
    step1_title: 'উদ্ধার',
    step1_p: 'একটি কল আসে। দিন হোক বা রাত, এক ঘণ্টার মধ্যেই একটি দল পাঠানো হয়।',
    step2_title: 'এনআইসিইউ সেবা',
    step2_p: 'সংকটাপন্ন অবস্থা স্থিতিশীল করতে অংশীদার হাসপাতালে তাৎক্ষণিক ভর্তি।',
    step3_title: 'সুস্থতা লাভ',
    step3_p: 'শিশুটি সেবা ছেড়ে যাওয়ার মতো সুস্থ না হওয়া পর্যন্ত চলমান চিকিৎসা পর্যবেক্ষণ।',
    step4_title: 'একটি ঘর',
    step4_p: 'যাচাইকৃত পালক পরিবারে হস্তান্তর, এবং পরবর্তীতে আমাদের নিয়মিত সহায়তা।',
    gallery_eyebrow: 'গ্যালারি',
    gallery_title: 'ওয়ার্ড, হস্তান্তর অনুষ্ঠান এবং পরবর্তী নতুন ঘরের মুহূর্তগুলো।',
    gallery_cap1: 'হাসপাতাল ও সরকারি অংশীদারদের সঙ্গে হস্তান্তর অনুষ্ঠান',
    gallery_cap2: 'এনআইসিইউ সেবা, প্রথম সপ্তাহ',
    gallery_cap3: 'পালক পরিবার, ঘরে প্রথম দিন',
    gallery_cap4: 'উদ্ধার অভিযানে স্বেচ্ছাসেবকরা',
    gallery_cap5: 'অংশীদার হাসপাতাল ওয়ার্ড পরিদর্শন',
    gallery_cap6: 'এক বছর পর — একটি খোঁজখবর নেওয়ার সফর',
    press_eyebrow: 'গণমাধ্যমে',
    press_title: 'সংবাদে আমরা।',
    press1_title: '"ফাউন্ডেশন পরিত্যক্ত নবজাতককে পালক পরিবারের সঙ্গে পুনর্মিলিত করল" — গণমাধ্যমের নাম',
    press1_link: 'পড়ুন →',
    press2_title: 'ফাউন্ডেশনের এনআইসিইউ অংশীদারিত্ব নিয়ে টেলিভিশন প্রতিবেদন',
    press2_link: 'দেখুন →',
    press3_title: 'হস্তান্তর অনুষ্ঠানে স্বাস্থ্য প্রতিমন্ত্রীর উপস্থিতি',
    press3_link: 'পড়ুন →',
    donate_eyebrow: 'যুক্ত হোন',
    donate_title: 'পরবর্তী উদ্ধার অভিযানে সহায়তা করুন।',
    donate_copy: 'একটি এনআইসিইউ ভর্তি, একটি পালক পরিবারে হস্তান্তর, একটি ফলো-আপ সফর — এর প্রতিটির পেছনে বাস্তব খরচ আছে, এবং প্রতিটি টাকা পৌঁছায় একটি নির্দিষ্ট শিশুর কাছে। আপনি কীভাবে সাহায্য করতে চান, বেছে নিন।',
    donate_card1_title: 'ব্যাংক ট্রান্সফার',
    donate_card1_label1: 'অ্যাকাউন্টের নাম:',
    donate_card1_label2: 'অ্যাকাউন্ট নম্বর:',
    donate_card1_label3: 'ব্যাংক ও শাখা:',
    donate_card2_title: 'বিকাশ / মোবাইল ব্যাংকিং',
    donate_card2_label1: 'মার্চেন্ট নম্বর:',
    donate_card2_ref: 'রেফারেন্স: "Donation"',
    donate_card3_title: 'স্বেচ্ছাসেবক বা পালক অভিভাবক হোন',
    donate_card3_p: 'উদ্ধার দলে যুক্ত হতে চান বা পালক পরিবার হতে চান? <a href="#contact">আমাদের সাথে যোগাযোগ করুন</a>, আমরা পুরো যাচাই প্রক্রিয়া বুঝিয়ে দেব।',
    contact_eyebrow: 'যোগাযোগ করুন',
    contact_title: 'উদ্ধার লাইনে যোগাযোগ করুন, অথবা শুধু জানান দিন।',
    contact_dt_address: 'ঠিকানা',
    contact_dt_phone: 'ফোন',
    contact_dt_email: 'ইমেইল',
    contact_dd_address: 'বাড়ি #ই-২০৬/১, সাইনবোর্ড মোড়, নারায়ণগঞ্জ, বাংলাদেশ',
    footer_brand: 'ডা. মোজিব নবজাতক ফাউন্ডেশন',
    footer_copy: '© <span id="year"></span> ডা. মোজিব নবজাতক ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।'
  }
};

const langButtons = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
  if (!translations[lang]) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });
  langButtons.forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  if (translations[lang]._title) document.title = translations[lang]._title;
  setYear();
  try { localStorage.setItem('drmnf-lang', lang); } catch (e) { /* private mode, ignore */ }
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

let initialLang = 'en';
try { initialLang = localStorage.getItem('drmnf-lang') || 'en'; } catch (e) { /* ignore */ }
setLanguage(initialLang);

// Mobile nav toggle
const header = document.querySelector('.site-header');
const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Draw the "rescue to home" line once it scrolls into view
const rail = document.getElementById('journeyRail');
if (rail && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        rail.classList.add('is-visible');
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  observer.observe(rail);
} else if (rail) {
  rail.classList.add('is-visible');
}
