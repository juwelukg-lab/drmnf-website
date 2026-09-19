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
    nav_home: 'Home',
    nav_about: 'About',
    nav_members: 'Our Members',
    nav_media: 'Media Coverage',
    nav_media_videos: 'Videos',
    nav_media_news: 'News',
    nav_media_photos: 'Photos',
    nav_gallery: 'Gallery',
    nav_contact_us: 'Contact Us',
    nav_donate: 'Donate',
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
    about_eyebrow: 'About us',
    about_title: 'About Us',
    about_lead1: 'Dr. Mozib Newborn Foundation, based in Bangladesh, is dedicated to rescuing abandoned newborns, providing essential medical care, and ensuring safe foster family placements post-recovery.',
    about_lead2: 'Our focus is on safeguarding the most vulnerable lives and creating a nurturing environment for these little ones to thrive.',
    mvg_eyebrow: 'What drives us',
    mvg_title: 'Mission, vision and goal.',
    mission_title: 'Our Mission',
    mission_p1: 'At the Dr. Mozib Newborn Foundation, our mission is to rescue and provide a safe haven for abandoned newborns in Bangladesh.',
    mission_p2: 'We are dedicated to ensuring that every child receives the medical care they urgently need and helping them thrive in a nurturing environment.',
    mission_p3: 'Our commitment extends beyond immediate rescue; we strive to connect these vulnerable infants with loving foster families, offering them the warmth and stability they deserve.',
    vision_title: 'Our Vision',
    vision_p1: 'We believe that every child has the right to life, love, and a chance for a brighter future.',
    vision_p2: 'Through our collaborative efforts with local healthcare providers and foster care networks, we aim to create a compassionate community where each newborn is valued and supported.',
    vision_p3: 'Together, we work to raise awareness about the plight of abandoned babies and mobilize resources that foster hope and healing.',
    goal_title: 'Our Goal',
    goal_p1: 'Dr. Mozib Newborn Foundation champions for social recognition of abandoned newborn babies.',
    goal_p2: 'Ensuring every newborn is valued as an equal member of humanity.',
    goal_p3: "We provide critical medical care, legal aid, and foster placement while advocating for systemic change to integrate these newborns into society's mainstream.",
    goal_p4: "Our mission is to transform neglect into dignity, fostering a world where every newborn's right to safety, love, and belonging is a collective human responsibility.",
    goal_p5: 'By uniting communities and institutions, we strive to erase stigma and ensure no newborn begins life unseen — because every life deserves to thrive at the heart of human compassion and progress.',
    registration_eyebrow: 'Registration',
    registration_title: 'Established with purpose, built on years of quiet work.',
    registration_p: 'The Dr. Mozib Newborn Foundation was officially established in 2025. Professor Dr. Md. Mozibur Rahman has been carrying out its humanitarian work informally since 2015, entirely at his own expense.',
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
    members_eyebrow: 'Who we are',
    members_title: 'Our Members',
    members_lead: "This page is a placeholder — send over your real member list (name, role, and a photo for each) and it'll be swapped in directly, in this same layout.",
    member1_name: 'Full name', member1_role: 'Founder &amp; Chief Physician',
    member2_name: 'Full name', member2_role: 'Program Director',
    member3_name: 'Full name', member3_role: 'Medical Coordinator',
    member4_name: 'Full name', member4_role: 'Volunteer Coordinator',
    media_videos_eyebrow: 'Watch',
    media_videos_title: 'Videos',
    video1_caption: "Television segment on the foundation's NICU partnership",
    video2_caption: 'A rescue, from call to NICU admission',
    video3_caption: 'A foster family shares their story',
    media_news_title: 'News',
    media_photos_eyebrow: 'In the press',
    media_photos_title: 'Photos',
    media_photos_lead: 'A few highlights from press and handover events — see the full gallery for everything.',
    media_photos_link: 'View the full gallery →',
    gallery_eyebrow: 'Gallery',
    gallery_title: 'Moments from the ward, the handovers, and the homes after.',
    gallery_cap1: 'Handover ceremony with hospital &amp; government partners',
    gallery_cap2: 'NICU care, first week',
    gallery_cap3: 'Foster family, first day home',
    gallery_cap4: 'Volunteers on a rescue call',
    gallery_cap5: 'Partner hospital ward visit',
    gallery_cap6: 'One year later — a check-in visit',
    press_eyebrow: 'Media coverage',
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
    donate_card3_p: 'Want to join a rescue team or become a foster family? <a href="contact.html">Contact us</a> and we\'ll walk you through vetting.',
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
    _title: 'ডা: মুজিব নিউবর্ন ফাউন্ডেশন | উদ্ধার। সেবা। ঘর।',
    brand_text: 'ডা: মুজিব<br><em>নিউবর্ন ফাউন্ডেশন</em>',
    nav_home: 'হোম',
    nav_about: 'আমাদের সম্পর্কে',
    nav_members: 'আমাদের সদস্যবৃন্দ',
    nav_media: 'মিডিয়া কভারেজ',
    nav_media_videos: 'ভিডিও',
    nav_media_news: 'সংবাদ',
    nav_media_photos: 'ছবি',
    nav_gallery: 'গ্যালারি',
    nav_contact_us: 'যোগাযোগ করুন',
    nav_donate: 'দান করুন',
    hero_lede: 'ডা: মুজিব নিউবর্ন ফাউন্ডেশন বাংলাদেশজুড়ে পরিত্যক্ত নবজাতকদের খুঁজে বের করে, দ্রুত জরুরি চিকিৎসা সেবার ব্যবস্থা করে, এবং প্রতিটি শিশুকে এমন কিছু দেয় যা একটি হাসপাতাল দিতে পারে না — বেড়ে ওঠার জন্য একটি পরিবার।',
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
    about_eyebrow: 'আমাদের সম্পর্কে',
    about_title: 'আমাদের সম্পর্কে',
    about_lead1: 'বাংলাদেশভিত্তিক ডা: মুজিব নিউবর্ন ফাউন্ডেশন পরিত্যক্ত নবজাতকদের উদ্ধার, প্রয়োজনীয় চিকিৎসা সেবা প্রদান এবং সুস্থ হয়ে ওঠার পর নিরাপদ পালক পরিবারে হস্তান্তর নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।',
    about_lead2: 'আমাদের মনোযোগ সবচেয়ে অসহায় জীবনগুলোকে রক্ষা করা এবং এই ছোট্ট শিশুদের বেড়ে ওঠার জন্য একটি যত্নশীল পরিবেশ গড়ে তোলার দিকে।',
    mvg_eyebrow: 'আমাদের চালিকাশক্তি',
    mvg_title: 'লক্ষ্য, দৃষ্টিভঙ্গি ও উদ্দেশ্য।',
    mission_title: 'আমাদের লক্ষ্য',
    mission_p1: 'ডা: মুজিব নিউবর্ন ফাউন্ডেশনে আমাদের লক্ষ্য হলো বাংলাদেশে পরিত্যক্ত নবজাতকদের উদ্ধার করা এবং তাদের জন্য একটি নিরাপদ আশ্রয় প্রদান করা।',
    mission_p2: 'আমরা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ যে প্রতিটি শিশু জরুরি ভিত্তিতে প্রয়োজনীয় চিকিৎসা সেবা পাবে এবং একটি যত্নশীল পরিবেশে বেড়ে উঠতে সাহায্য পাবে।',
    mission_p3: 'আমাদের প্রতিশ্রুতি শুধু তাৎক্ষণিক উদ্ধারের মধ্যেই সীমাবদ্ধ নয়; আমরা এই অসহায় শিশুদের স্নেহময় পালক পরিবারের সঙ্গে যুক্ত করতে সচেষ্ট, যাতে তারা প্রাপ্য উষ্ণতা ও স্থিতিশীলতা পায়।',
    vision_title: 'আমাদের দৃষ্টিভঙ্গি',
    vision_p1: 'আমরা বিশ্বাস করি, প্রতিটি শিশুর বাঁচার, ভালোবাসা পাওয়ার এবং একটি উজ্জ্বল ভবিষ্যতের সুযোগ পাওয়ার অধিকার আছে।',
    vision_p2: 'স্থানীয় স্বাস্থ্যসেবা প্রদানকারী ও পালক-যত্ন নেটওয়ার্কের সঙ্গে যৌথ প্রচেষ্টার মাধ্যমে আমরা এমন একটি সহানুভূতিশীল সমাজ গড়ে তুলতে চাই, যেখানে প্রতিটি নবজাতক মূল্যায়িত ও সমর্থিত হয়।',
    vision_p3: 'একসঙ্গে আমরা পরিত্যক্ত শিশুদের দুর্দশা সম্পর্কে সচেতনতা বৃদ্ধি এবং আশা ও আরোগ্যের জন্য সম্পদ সংগ্রহে কাজ করি।',
    goal_title: 'আমাদের উদ্দেশ্য',
    goal_p1: 'ডা: মুজিব নিউবর্ন ফাউন্ডেশন পরিত্যক্ত নবজাতক শিশুদের সামাজিক স্বীকৃতির জন্য কাজ করে।',
    goal_p2: 'প্রতিটি নবজাতককে মানবতার একজন সমান সদস্য হিসেবে মূল্যায়ন নিশ্চিত করা।',
    goal_p3: 'আমরা জরুরি চিকিৎসা সেবা, আইনি সহায়তা এবং পালক পরিবারে হস্তান্তরের ব্যবস্থা করি, পাশাপাশি এই নবজাতকদের সমাজের মূলধারায় অন্তর্ভুক্ত করতে ব্যবস্থাগত পরিবর্তনের পক্ষে কথা বলি।',
    goal_p4: 'আমাদের লক্ষ্য হলো অবহেলাকে মর্যাদায় রূপান্তরিত করা, এমন একটি পৃথিবী গড়ে তোলা যেখানে প্রতিটি নবজাতকের নিরাপত্তা, ভালোবাসা ও আপনজন পাওয়ার অধিকার সামষ্টিক মানবিক দায়িত্ব হিসেবে বিবেচিত হয়।',
    goal_p5: 'সমাজ ও প্রতিষ্ঠানগুলোকে ঐক্যবদ্ধ করে আমরা কলঙ্ক মুছে ফেলতে এবং নিশ্চিত করতে সচেষ্ট যে কোনো নবজাতক যেন উপেক্ষিত অবস্থায় জীবন শুরু না করে — কারণ প্রতিটি জীবন মানবিক সহানুভূতি ও অগ্রগতির কেন্দ্রে বিকশিত হওয়ার যোগ্য।',
    registration_eyebrow: 'নিবন্ধন',
    registration_title: 'উদ্দেশ্য নিয়ে প্রতিষ্ঠিত, বছরের পর বছর নীরব পরিশ্রমের ওপর গড়ে ওঠা।',
    registration_p: 'ডা: মুজিব নিউবর্ন ফাউন্ডেশন আনুষ্ঠানিকভাবে ২০২৫ সালে প্রতিষ্ঠিত হয়। অধ্যাপক ডা. মোঃ মুজিবুর রহমান ২০১৫ সাল থেকে সম্পূর্ণ নিজের ব্যয়ে অনানুষ্ঠানিকভাবে এই মানবিক কাজ পরিচালনা করে আসছেন।',
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
    members_eyebrow: 'আমরা যারা',
    members_title: 'আমাদের সদস্যবৃন্দ',
    members_lead: 'এই পৃষ্ঠাটি একটি প্লেসহোল্ডার — আপনার প্রকৃত সদস্য তালিকা (নাম, পদবি এবং প্রত্যেকের একটি ছবি) পাঠিয়ে দিন, একই লেআউটে তা সরাসরি বসিয়ে দেওয়া হবে।',
    member1_name: 'পূর্ণ নাম', member1_role: 'প্রতিষ্ঠাতা ও প্রধান চিকিৎসক',
    member2_name: 'পূর্ণ নাম', member2_role: 'প্রোগ্রাম পরিচালক',
    member3_name: 'পূর্ণ নাম', member3_role: 'মেডিকেল সমন্বয়কারী',
    member4_name: 'পূর্ণ নাম', member4_role: 'স্বেচ্ছাসেবক সমন্বয়কারী',
    media_videos_eyebrow: 'দেখুন',
    media_videos_title: 'ভিডিও',
    video1_caption: 'ফাউন্ডেশনের এনআইসিইউ অংশীদারিত্ব নিয়ে টেলিভিশন প্রতিবেদন',
    video2_caption: 'একটি উদ্ধার অভিযান — কল থেকে এনআইসিইউ ভর্তি পর্যন্ত',
    video3_caption: 'একটি পালক পরিবার তাদের গল্প বলছে',
    media_news_title: 'সংবাদ',
    media_photos_eyebrow: 'সংবাদমাধ্যমে',
    media_photos_title: 'ছবি',
    media_photos_lead: 'সংবাদমাধ্যম ও হস্তান্তর অনুষ্ঠানের কিছু বাছাই করা মুহূর্ত — সম্পূর্ণ গ্যালারি দেখতে নিচে ক্লিক করুন।',
    media_photos_link: 'সম্পূর্ণ গ্যালারি দেখুন →',
    gallery_eyebrow: 'গ্যালারি',
    gallery_title: 'ওয়ার্ড, হস্তান্তর অনুষ্ঠান এবং পরবর্তী নতুন ঘরের মুহূর্তগুলো।',
    gallery_cap1: 'হাসপাতাল ও সরকারি অংশীদারদের সঙ্গে হস্তান্তর অনুষ্ঠান',
    gallery_cap2: 'এনআইসিইউ সেবা, প্রথম সপ্তাহ',
    gallery_cap3: 'পালক পরিবার, ঘরে প্রথম দিন',
    gallery_cap4: 'উদ্ধার অভিযানে স্বেচ্ছাসেবকরা',
    gallery_cap5: 'অংশীদার হাসপাতাল ওয়ার্ড পরিদর্শন',
    gallery_cap6: 'এক বছর পর — একটি খোঁজখবর নেওয়ার সফর',
    press_eyebrow: 'গণমাধ্যমে',
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
    donate_card3_p: 'উদ্ধার দলে যুক্ত হতে চান বা পালক পরিবার হতে চান? <a href="contact.html">আমাদের সাথে যোগাযোগ করুন</a>, আমরা পুরো যাচাই প্রক্রিয়া বুঝিয়ে দেব।',
    contact_eyebrow: 'যোগাযোগ করুন',
    contact_title: 'উদ্ধার লাইনে যোগাযোগ করুন, অথবা শুধু জানান দিন।',
    contact_dt_address: 'ঠিকানা',
    contact_dt_phone: 'ফোন',
    contact_dt_email: 'ইমেইল',
    contact_dd_address: 'বাড়ি #ই-২০৬/১, সাইনবোর্ড মোড়, নারায়ণগঞ্জ, বাংলাদেশ',
    footer_brand: 'ডা: মুজিব নিউবর্ন ফাউন্ডেশন',
    footer_copy: '© <span id="year"></span> ডা: মুজিব নিউবর্ন ফাউন্ডেশন। সর্বস্বত্ব সংরক্ষিত।'
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

// ---------- Lightbox (click any [data-lightbox-src] photo to view it full-size) ----------
(function () {
  const triggers = document.querySelectorAll('[data-lightbox-src]');
  if (!triggers.length) return;

  const modal = document.createElement('div');
  modal.className = 'lightbox-modal';
  modal.hidden = true;
  modal.innerHTML =
    '<button type="button" class="lightbox-close" aria-label="Close">' +
      '<svg viewBox="0 0 24 24" width="20" height="20" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>' +
    '</button>' +
    '<img class="lightbox-modal-img" src="" alt="">';
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('.lightbox-modal-img');
  const closeBtn = modal.querySelector('.lightbox-close');
  let lastFocused = null;

  function openLightbox(src, alt) {
    lastFocused = document.activeElement;
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }
  function closeLightbox() {
    modal.hidden = true;
    modalImg.src = '';
    document.body.style.overflow = '';
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  triggers.forEach((el) => {
    el.addEventListener('click', () => {
      openLightbox(el.getAttribute('data-lightbox-src'), el.getAttribute('data-lightbox-alt'));
    });
  });
  closeBtn.addEventListener('click', closeLightbox);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!modal.hidden && e.key === 'Escape') closeLightbox();
  });
})();
