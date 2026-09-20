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
    members_lead: "This page is a template — send over the real committee list (name, foundation role, photo, and any other titles each person holds) and it'll be swapped in one by one, in this same layout.",
    exec_chair_role: 'Founder &amp; President',
    exec_secgen_role: 'Secretary General',
    exec_treasurer_role: 'Treasurer',
    exec_member_role: 'Executive Member',
    exec1_name: 'Prof. Dr. Md. Mozibur Rahman', exec1_title: 'MBBS, DCH, FCPS (Neonatology), FRCP Edin. (CH)',
    exec1_aff1_title: 'Director', exec1_aff1_org: 'Institute of Child and Mother Health (ICMH)',
    exec1_aff2_title: 'Professor and Head of Department (Paediatrics &amp; Neonatology)', exec1_aff2_org: 'ICMH',
    exec1_aff3_title: 'Secretary General', exec1_aff3_org: 'Bangladesh Neonatal Forum',
    exec1_aff4_title: 'Treasurer', exec1_aff4_org: 'Bangladesh Perinatal Society',
    exec1_aff5_title: 'Member Secretary (Paediatrics Department)', exec1_aff5_org: 'Bangladesh College of Physicians &amp; Surgeons (BCPS)',
    exec1_aff6_title: 'Standing Committee Member (Paediatrics Chapter)', exec1_aff6_org: 'Asia-Pacific Health Association',
    exec1_aff7_title: 'Council Member', exec1_aff7_org: 'Asian Society for Paediatric Research (ASPR)',
    exec1_aff8_title: 'Founder &amp; President', exec1_aff8_org: 'Dr. Mozib Newborn Foundation',
    exec1_aff9_title: 'Ex-Cultural Secretary', exec1_aff9_org: 'Bangladesh Paediatric Association (BPA)',
    exec1_aff10_title: 'Patron &amp; Immediate Past Chairperson', exec1_aff10_org: 'Global Newborn Society',
    exec1_aff11_title: 'Co-Ordinator', exec1_aff11_org: "Bangladesh's first religiously compliant Human Milk Storage Center",
    exec2_name: 'Full name', exec2_title: 'Secretary General',
    exec2_aff1_title: 'Professional title', exec2_aff1_org: 'Organization name',
    exec3_name: 'Full name', exec3_title: 'Treasurer',
    exec3_aff1_title: 'Professional title', exec3_aff1_org: 'Organization name',
    exec4_name: 'Full name', exec4_title: 'Executive Member',
    exec4_aff1_title: 'Professional title', exec4_aff1_org: 'Organization name',
    exec5_name: 'Full name', exec5_title: 'Executive Member',
    exec5_aff1_title: 'Professional title', exec5_aff1_org: 'Organization name',
    exec6_name: 'Full name', exec6_title: 'Executive Member',
    exec6_aff1_title: 'Professional title', exec6_aff1_org: 'Organization name',
    exec7_name: 'Full name', exec7_title: 'Executive Member',
    exec7_aff1_title: 'Professional title', exec7_aff1_org: 'Organization name',
    advisors_eyebrow: 'In our corner',
    advisors_title: 'Honorary Advisory Board',
    advisor1_name: 'Full name', advisor1_role: 'Honorary Advisor',
    advisor2_name: 'Full name', advisor2_role: 'Honorary Advisor',
    advisor3_name: 'Full name', advisor3_role: 'Honorary Advisor',
    advisor4_name: 'Full name', advisor4_role: 'Honorary Advisor',
    advisor5_name: 'Full name', advisor5_role: 'Honorary Advisor',
    advisor6_name: 'Full name', advisor6_role: 'Honorary Advisor',
    advisor7_name: 'Full name', advisor7_role: 'Honorary Advisor',
    advisor8_name: 'Full name', advisor8_role: 'Honorary Advisor',
    advisor9_name: 'Full name', advisor9_role: 'Honorary Advisor',
    advisor10_name: 'Full name', advisor10_role: 'Honorary Advisor',
    nav_stories: 'Our Stories',
    stories_eyebrow: 'Real stories, real children',
    stories_title: 'Our Stories',
    stories_lead: "Every case below is a real child, in the order it happened. Not every story ends the way we want it to — some of these children are with loving families today, and some we lost despite everything we tried. We tell all of it, because every one of them deserves to be remembered.",
    story01_date: 'October 2019', story01_name: 'Unnamed newborn', story01_outcome: 'Adopted',
    story01_text: 'In October 2019, an abandoned newborn was found in a paddy field on the outskirts of Dhaka. The child was rescued, given medical care, and placed for adoption through the Department of Social Services.',
    story02_date: 'March 2021', story02_name: 'Samin', story02_outcome: 'Adopted',
    story02_text: 'Baby Samin was rescued from Shyampur, Dhaka in March 2021. He received NICU care at the Institute of Child and Mother Health in Matuail before being placed with a safe family.',
    story03_date: '2021', story03_name: '"Daughter of Sajani"', story03_outcome: 'Adopted',
    story03_text: 'Known as "Daughter of Sajani," this abandoned baby girl received treatment and was placed for adoption in 2021. Then–Prime Minister Tarek Rahman personally supported her medical and legal process.',
    story04_date: 'May 2021', story04_name: 'Unnamed newborn', story04_outcome: 'Adopted',
    story04_text: 'In May 2021, a newborn was rescued from a garbage heap in Jurain after being bitten by stray dogs, and taken to Delta Hospital, Jatrabari for treatment. The child recovered and was placed with an adoptive family.',
    story05_date: 'March 2023', story05_name: 'Jannat', story05_outcome: 'Adopted',
    story05_text: 'Jannat was found in Rupganj, Narayanganj in March 2023 with a serious head injury. She spent 10 days on life support in the NICU before recovering fully and being placed with a loving family.',
    story06_date: 'December 2024', story06_name: 'Mugdho', story06_outcome: 'Adopted',
    story06_text: "Mugdho was rescued after being abandoned in December 2024, then treated at Bangladesh Neonatal Hospital. He spent 3 months on life support in the NICU battling ROP, hypothyroidism and a complex lung condition — an 11-month journey that ended with him fully recovered and placed with a loving family.",
    story07_date: 'January 2025', story07_name: 'Nayla', story07_outcome: 'Adopted',
    story07_text: 'Nayla was rescued from a garbage dump in Sonargaon in January 2025. After treatment, she was placed with a safe, caring family.',
    story08_date: 'June 2025', story08_name: 'Panna &amp; Kader (twins)', story08_outcome: 'Passed away',
    story08_text: 'Panna and Kader, newborn twins abandoned by their parents, were taken in critically ill in June 2025. Despite intensive care, both twins passed away; they were given a full burial according to Islamic rites.',
    story09_date: 'July 2025', story09_name: 'Farishta', story09_outcome: 'Adopted',
    story09_text: "Farishta's mother died during childbirth. As the fourth daughter of the Rumi–Awlad couple, the foundation took full responsibility for her care. Nearly five months of continuous treatment brought her to full health before she was handed over to a loving family.",
    story10_date: 'August 2025', story10_name: 'Falak', story10_outcome: 'Adopted',
    story10_text: 'A newborn girl was found abandoned by the Kanchpur riverside in August 2025. Named Falak, she needed a long period on life support before she was stable enough to be placed with a loving family.',
    story11_date: 'September 2025', story11_name: 'Anabiya', story11_outcome: 'Adopted',
    story11_text: 'A newborn was rescued from a dustbin in the Iliyotganj area of Comilla in September 2025. Severely injured, she was named Anabiya, and after a full course of treatment she was placed with a loving family.',
    story12_date: '21 October 2025', story12_name: 'Minha', story12_outcome: 'Adopted',
    story12_text: 'On 21 October 2025, an abandoned baby girl was rescued late at night in Narsingdi and admitted to the NICU at Bangladesh Neonatal Hospital. Named Minha, she recovered fully after nearly three months of care under Professor Dr. Md. Mozibur Rahman, and has since been placed with a loving family.',
    story13_date: '5 November 2025', story13_name: 'Unnamed baby girl', story13_outcome: 'Passed away',
    story13_text: 'A couple admitted a newborn daughter to Bangladesh Neonatal Hospital at 3:30am on 5 November 2025, then left and could not be reached again. The foundation took full responsibility for her care, but she sadly passed away during treatment and was buried according to Islamic rites.',
    story14_date: '7 November 2025', story14_name: 'Zohran', story14_outcome: 'Adopted',
    story14_text: "On the night of 7 November 2025, a 20-day-old baby was found abandoned in bushes beside a bridge in Kaliakair, cold and injured by insect bites. Rescued and rushed to the NICU, he was named Zohran — his cry that night became, in time, the story of a new life, and he was later placed with a loving family.",
    story15_date: '9 November 2025', story15_name: 'Unnamed baby boy', story15_outcome: 'Passed away',
    story15_text: 'A newborn boy, admitted under the names Rita and Wadud on 9 November 2025, was the child of a mother who was mentally unwell and had been raped; she refused to accept him after birth. The foundation took over his care and arranged transfer to Bangladesh Neonatal Hospital, but after two months of the highest level of treatment, he sadly passed away.',
    story16_date: '20 November 2025', story16_name: '"Baby Rayan"', story16_outcome: 'Passed away',
    story16_text: 'An abandoned newborn boy was found near Kanchan Bridge in Rupganj on the evening of 20 November 2025, diagnosed with severe hydrocephalus. A risky VP shunt operation gave him a chance, but after weeks of slow progress he passed away on 24 December 2025; he was laid to rest as "Baby Rayan."',
    story17_date: 'March 2026', story17_name: 'Unnamed newborn', story17_outcome: 'Recovering',
    story17_text: "On the day of Eid-ul-Fitr, an unidentified person left a sick newborn, about 25–30 days old, at the NICU of Bangladesh Neonatal Hospital and never returned — the phone number and address given led nowhere. Admitted with fever, breathing distress and severe pneumonia, the baby is now slowly recovering under continued care.",
    story18_date: '2 May 2026', story18_name: 'Unnamed baby girl', story18_outcome: 'Passed away',
    story18_text: 'On 2 May 2026, relatives left behind a newborn girl with a serious congenital heart defect. Despite a high-risk heart operation at Bangladesh Shishu Hospital, her condition remained critical, and she passed away in the cardiac ICU on 23 May 2026.',
    story19_date: 'June 2026', story19_name: 'Unnamed newborn', story19_outcome: 'Passed away',
    story19_text: 'In June 2026, after his mother’s death, a newborn was abandoned and neglected by his father. Admitted in critical condition to the NICU, he received four months of tireless care, but passed away in August, having never had the chance to be loved by a family.',
    story20_date: 'June 2026', story20_name: 'Unnamed newborn', story20_outcome: 'Adoption in progress',
    story20_text: 'In June 2026, an extremely low-weight newborn was found abandoned at Delta Hospital, Jatrabari, with no family coming forward for three days. Taken into care, three months of relentless NICU treatment brought the baby back to health — now cheerful and thriving, with the legal process underway to place them with a loving family.',
    story21_date: 'August 2026', story21_name: 'Taiyeba', story21_outcome: 'Ongoing care',
    story21_text: "Taiyeba was found abandoned and helpless in Bamna upazila, Barguna, and first sheltered at the Chotomoni Nibash in Amtali. Prime Minister Tarek Rahman's office arranged for her transfer into the foundation's care at Bangladesh Neonatal Hospital, where she now waits, hopeful, for a new life.",
    story22_date: 'Date not recorded', story22_name: '"Baby of Rupa-Hridoy"', story22_outcome: 'Passed away',
    story22_text: 'Left behind by their parents, this newborn — recorded as "Baby of Rupa-Hridoy" — passed away and was buried in accordance with full legal and Islamic rites.',
    story23_date: 'Date not recorded', story23_name: '"Baby of Tanjila"', story23_outcome: 'Passed away',
    story23_text: 'Left behind by their parents, this newborn — recorded as "Baby of Tanjila" — passed away and was buried in accordance with full legal and Islamic rites.',
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
    members_lead: 'এই পৃষ্ঠাটি একটি টেমপ্লেট — প্রকৃত কমিটির তালিকা (নাম, ফাউন্ডেশনে পদবি, ছবি এবং প্রত্যেকের অন্যান্য পদবি) পাঠিয়ে দিন, একই লেআউটে একে একে তা বসিয়ে দেওয়া হবে।',
    exec_chair_role: 'প্রতিষ্ঠাতা ও সভাপতি',
    exec_secgen_role: 'মহাসচিব',
    exec_treasurer_role: 'কোষাধ্যক্ষ',
    exec_member_role: 'কার্যনির্বাহী সদস্য',
    exec1_name: 'অধ্যাপক ডা. মো. মজিবুর রহমান', exec1_title: 'MBBS, DCH, FCPS (Neonatology), FRCP Edin. (CH)',
    exec1_aff1_title: 'পরিচালক', exec1_aff1_org: 'ইনস্টিটিউট অব চাইল্ড অ্যান্ড মাদার হেলথ (আইসিএমএইচ)',
    exec1_aff2_title: 'অধ্যাপক ও বিভাগীয় প্রধান (পেডিয়াট্রিক্স ও নিওনেটোলজি)', exec1_aff2_org: 'আইসিএমএইচ',
    exec1_aff3_title: 'মহাসচিব', exec1_aff3_org: 'বাংলাদেশ নিওনেটাল ফোরাম',
    exec1_aff4_title: 'কোষাধ্যক্ষ', exec1_aff4_org: 'বাংলাদেশ পেরিনেটাল সোসাইটি',
    exec1_aff5_title: 'সদস্য সচিব (পেডিয়াট্রিক্স বিভাগ)', exec1_aff5_org: 'বাংলাদেশ কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস (বিসিপিএস)',
    exec1_aff6_title: 'স্ট্যান্ডিং কমিটি সদস্য (পেডিয়াট্রিক্স চ্যাপ্টার)', exec1_aff6_org: 'এশিয়া-প্যাসিফিক হেলথ অ্যাসোসিয়েশন',
    exec1_aff7_title: 'কাউন্সিল সদস্য', exec1_aff7_org: 'এশিয়ান সোসাইটি ফর পেডিয়াট্রিক রিসার্চ (এএসপিআর)',
    exec1_aff8_title: 'প্রতিষ্ঠাতা ও সভাপতি', exec1_aff8_org: 'ডাঃ মুজিব নিউবর্ন ফাউন্ডেশন',
    exec1_aff9_title: 'সাবেক সাংস্কৃতিক সম্পাদক', exec1_aff9_org: 'বাংলাদেশ পেডিয়াট্রিক অ্যাসোসিয়েশন (বিপিএ)',
    exec1_aff10_title: 'প্যাট্রন ও সদ্য সাবেক চেয়ারপারসন', exec1_aff10_org: 'গ্লোবাল নিউবর্ন সোসাইটি',
    exec1_aff11_title: 'কো-অর্ডিনেটর', exec1_aff11_org: 'বাংলাদেশের প্রথম শরীয়াহভিত্তিক হিউম্যান মিল্ক স্টোরেজ সেন্টার',
    exec2_name: 'পূর্ণ নাম', exec2_title: 'মহাসচিব',
    exec2_aff1_title: 'পেশাগত পদবি', exec2_aff1_org: 'প্রতিষ্ঠানের নাম',
    exec3_name: 'পূর্ণ নাম', exec3_title: 'কোষাধ্যক্ষ',
    exec3_aff1_title: 'পেশাগত পদবি', exec3_aff1_org: 'প্রতিষ্ঠানের নাম',
    exec4_name: 'পূর্ণ নাম', exec4_title: 'কার্যনির্বাহী সদস্য',
    exec4_aff1_title: 'পেশাগত পদবি', exec4_aff1_org: 'প্রতিষ্ঠানের নাম',
    exec5_name: 'পূর্ণ নাম', exec5_title: 'কার্যনির্বাহী সদস্য',
    exec5_aff1_title: 'পেশাগত পদবি', exec5_aff1_org: 'প্রতিষ্ঠানের নাম',
    exec6_name: 'পূর্ণ নাম', exec6_title: 'কার্যনির্বাহী সদস্য',
    exec6_aff1_title: 'পেশাগত পদবি', exec6_aff1_org: 'প্রতিষ্ঠানের নাম',
    exec7_name: 'পূর্ণ নাম', exec7_title: 'কার্যনির্বাহী সদস্য',
    exec7_aff1_title: 'পেশাগত পদবি', exec7_aff1_org: 'প্রতিষ্ঠানের নাম',
    advisors_eyebrow: 'আমাদের পাশে',
    advisors_title: 'সম্মানিত উপদেষ্টামণ্ডলী',
    advisor1_name: 'পূর্ণ নাম', advisor1_role: 'সম্মানিত উপদেষ্টা',
    advisor2_name: 'পূর্ণ নাম', advisor2_role: 'সম্মানিত উপদেষ্টা',
    advisor3_name: 'পূর্ণ নাম', advisor3_role: 'সম্মানিত উপদেষ্টা',
    advisor4_name: 'পূর্ণ নাম', advisor4_role: 'সম্মানিত উপদেষ্টা',
    advisor5_name: 'পূর্ণ নাম', advisor5_role: 'সম্মানিত উপদেষ্টা',
    advisor6_name: 'পূর্ণ নাম', advisor6_role: 'সম্মানিত উপদেষ্টা',
    advisor7_name: 'পূর্ণ নাম', advisor7_role: 'সম্মানিত উপদেষ্টা',
    advisor8_name: 'পূর্ণ নাম', advisor8_role: 'সম্মানিত উপদেষ্টা',
    advisor9_name: 'পূর্ণ নাম', advisor9_role: 'সম্মানিত উপদেষ্টা',
    advisor10_name: 'পূর্ণ নাম', advisor10_role: 'সম্মানিত উপদেষ্টা',
    nav_stories: 'আমাদের গল্প',
    stories_eyebrow: 'প্রকৃত গল্প, প্রকৃত শিশু',
    stories_title: 'আমাদের গল্প',
    stories_lead: 'নিচের প্রতিটি ঘটনা একটি বাস্তব শিশুর, যা ঘটেছিল সেই ক্রম অনুসারে সাজানো। প্রতিটি গল্প আমাদের চাওয়ামতো শেষ হয় না — এদের কেউ কেউ আজ স্নেহময় পরিবারে আছে, আবার কাউকে কাউকে সবকিছু চেষ্টা করেও আমরা হারিয়েছি। আমরা সবটাই বলি, কারণ তাদের প্রত্যেকেই স্মরণীয় হয়ে থাকার যোগ্য।',
    story01_date: 'অক্টোবর ২০১৯', story01_name: 'অজ্ঞাতনামা নবজাতক', story01_outcome: 'দত্তক দেওয়া হয়েছে',
    story01_text: '২০১৯ সালের অক্টোবরে ঢাকার উপকণ্ঠে এক ধানক্ষেত থেকে একটি পরিত্যক্ত নবজাতক উদ্ধার করা হয়। শিশুটিকে চিকিৎসা দেওয়া হয় এবং সমাজসেবা অধিদপ্তরের মাধ্যমে দত্তক দেওয়া হয়।',
    story02_date: 'মার্চ ২০২১', story02_name: 'সামিন', story02_outcome: 'দত্তক দেওয়া হয়েছে',
    story02_text: '২০২১ সালের মার্চে ঢাকার শ্যামপুর থেকে শিশু সামিনকে উদ্ধার করা হয়। মাতুয়াইলের শিশু-মাতৃ স্বাস্থ্য ইনস্টিটিউটে এনআইসিইউ চিকিৎসার পর তাকে একটি নিরাপদ পরিবারে দত্তক দেওয়া হয়।',
    story03_date: '২০২১', story03_name: '"ডটার অব সজনী"', story03_outcome: 'দত্তক দেওয়া হয়েছে',
    story03_text: '"ডটার অব সজনী" নামে পরিচিত এই পরিত্যক্ত কন্যাশিশুটি ২০২১ সালে চিকিৎসা পেয়ে দত্তক দেওয়া হয়। তৎকালীন প্রধানমন্ত্রী জনাব তারেক রহমান তার চিকিৎসা ও আইনি প্রক্রিয়ায় ব্যক্তিগতভাবে সহায়তা করেন।',
    story04_date: 'মে ২০২১', story04_name: 'অজ্ঞাতনামা নবজাতক', story04_outcome: 'দত্তক দেওয়া হয়েছে',
    story04_text: '২০২১ সালের মে মাসে জুরাইনের একটি ময়লার স্তূপ থেকে শিয়াল-কুকুরে কামড়ানো অবস্থায় এক নবজাতককে উদ্ধার করা হয় এবং যাত্রাবাড়ীর ডেলটা হাসপাতাল থেকে চিকিৎসা দেওয়া হয়। শিশুটি সুস্থ হয়ে একটি দত্তক পরিবারে জায়গা পায়।',
    story05_date: 'মার্চ ২০২৩', story05_name: 'জান্নাত', story05_outcome: 'দত্তক দেওয়া হয়েছে',
    story05_text: '২০২৩ সালের মার্চে নারায়ণগঞ্জের রূপগঞ্জ থেকে মাথায় গুরুতর আঘাতপ্রাপ্ত অবস্থায় জান্নাতকে উদ্ধার করা হয়। ১০ দিন এনআইসিইউতে লাইফ সাপোর্টে থাকার পর সম্পূর্ণ সুস্থ হয়ে সে একটি স্নেহময় পরিবারে জায়গা পায়।',
    story06_date: 'ডিসেম্বর ২০২৪', story06_name: 'মুগ্ধ', story06_outcome: 'দত্তক দেওয়া হয়েছে',
    story06_text: '২০২৪ সালের ডিসেম্বরে পরিত্যক্ত শিশু মুগ্ধকে উদ্ধার করে বাংলাদেশ নবজাতক হাসপাতালে চিকিৎসা দেওয়া হয়। দীর্ঘ ৩ মাস এনআইসিইউতে লাইফ সাপোর্টে থেকে আরওপি, হাইপোথাইরয়েড ও ফুসফুসের জটিল রোগের সঙ্গে লড়াই করে ১১ মাসের চিকিৎসা শেষে সে পরিপূর্ণভাবে সুস্থ হয়ে একটি মমতাময় পরিবারে জায়গা পায়।',
    story07_date: 'জানুয়ারি ২০২৫', story07_name: 'নায়লা', story07_outcome: 'দত্তক দেওয়া হয়েছে',
    story07_text: '২০২৫ সালের জানুয়ারিতে সোনারগাঁয়ের একটি ময়লার ভাগাড় থেকে নায়লাকে উদ্ধার করা হয়। চিকিৎসার পর তাকে একটি নিরাপদ ও যত্নশীল পরিবারে দত্তক দেওয়া হয়।',
    story08_date: 'জুন ২০২৫', story08_name: 'পান্না ও কাদের (যমজ)', story08_outcome: 'মৃত্যুবরণ করেছে',
    story08_text: '২০২৫ সালের জুনে বাবা-মায়ের দ্বারা পরিত্যক্ত অত্যন্ত সংকটাপন্ন যমজ নবজাতক পান্না ও কাদেরের চিকিৎসা শুরু হয়। নিবিড় পরিচর্যা সত্ত্বেও দুর্ভাগ্যবশত দুজনই মৃত্যুবরণ করে; সম্পূর্ণ শরীয়াহ মোতাবেক তাদের জানাজা ও দাফন সম্পন্ন করা হয়।',
    story09_date: 'জুলাই ২০২৫', story09_name: 'ফারিশতা', story09_outcome: 'দত্তক দেওয়া হয়েছে',
    story09_text: 'জন্মের সময় ফারিশতার মা মারা যান। রুমি-আওলাদ দম্পতির চতুর্থ কন্যা সন্তান ফারিশতার সম্পূর্ণ দায়িত্ব নেয় ফাউন্ডেশন। প্রায় পাঁচ মাসের ধারাবাহিক চিকিৎসায় সুস্থ হয়ে ওঠার পর তাকে একটি মমতাময়ী পরিবারের কাছে হস্তান্তর করা হয়।',
    story10_date: 'আগস্ট ২০২৫', story10_name: 'ফালাক', story10_outcome: 'দত্তক দেওয়া হয়েছে',
    story10_text: '২০২৫ সালের আগস্টে কাঁচপুর নদীর পাড়ে এক নবজাতক কন্যাশিশুকে পরিত্যক্ত অবস্থায় পাওয়া যায়। ফালাক নাম দেওয়া এই শিশুটির দীর্ঘদিন লাইফ সাপোর্ট প্রয়োজন হয়, এরপর সে স্থিতিশীল হয়ে একটি মমতাময়ী পরিবারে জায়গা পায়।',
    story11_date: 'সেপ্টেম্বর ২০২৫', story11_name: 'আনাবিয়া', story11_outcome: 'দত্তক দেওয়া হয়েছে',
    story11_text: '২০২৫ সালের সেপ্টেম্বরে কুমিল্লার ইলিয়টগঞ্জ এলাকার একটি ডাস্টবিন থেকে এক নবজাতককে উদ্ধার করা হয়। গুরুতরভাবে আহত এই শিশুটির নাম রাখা হয় আনাবিয়া; পূর্ণ চিকিৎসা শেষে তাকে একটি মমতাময়ী পরিবারে দত্তক দেওয়া হয়।',
    story12_date: '২১ অক্টোবর ২০২৫', story12_name: 'মিনহা', story12_outcome: 'দত্তক দেওয়া হয়েছে',
    story12_text: '২১ অক্টোবর ২০২৫ গভীর রাতে নরসিংদীতে পরিত্যক্ত এক নবজাতক কন্যাশিশুকে উদ্ধার করে বাংলাদেশ নবজাতক হাসপাতালের এনআইসিইউতে ভর্তি করা হয়। অধ্যাপক ডাঃ মোঃ মজিবুর রহমানের তত্ত্বাবধানে প্রায় তিন মাসের চিকিৎসায় সুস্থ হয়ে ওঠা শিশুটির নাম রাখা হয় মিনহা; বর্তমানে তাকে একটি মমতাময়ী পরিবারে দত্তক দেওয়া হয়েছে।',
    story13_date: '৫ নভেম্বর ২০২৫', story13_name: 'অজ্ঞাতনামা কন্যাশিশু', story13_outcome: 'মৃত্যুবরণ করেছে',
    story13_text: '০৫ নভেম্বর ২০২৫ রাত ৩টা ৩০ মিনিটে এক দম্পতি একটি নবজাতক কন্যাশিশুকে বাংলাদেশ নবজাতক হাসপাতালে ভর্তি করে চলে যান এবং পরবর্তীতে আর যোগাযোগ করা যায়নি। ফাউন্ডেশন শিশুটির সম্পূর্ণ দায়িত্ব নেয়, কিন্তু দুঃখজনকভাবে চিকিৎসাধীন অবস্থায় সে মৃত্যুবরণ করে এবং শরীয়াহ অনুযায়ী দাফন করা হয়।',
    story14_date: '৭ নভেম্বর ২০২৫', story14_name: 'জোহরান', story14_outcome: 'দত্তক দেওয়া হয়েছে',
    story14_text: '৭ নভেম্বর ২০২৫ গভীর রাতে কালিয়াকৈরের একটি ব্রিজের পাশে ঝোপে ফেলে যাওয়া ২০ দিনের এক শীতার্ত, পোকামাকড়ে ক্ষতবিক্ষত নবজাতককে উদ্ধার করে এনআইসিইউতে ভর্তি করা হয়। তার নাম রাখা হয় জোহরান; এক রাতের কান্না বদলে যায় নিরাপত্তা ও নতুন জীবনের গল্পে, পরবর্তীতে তাকে একটি আদর্শ পরিবারে দত্তক দেওয়া হয়।',
    story15_date: '৯ নভেম্বর ২০২৫', story15_name: 'অজ্ঞাতনামা পুত্রশিশু', story15_outcome: 'মৃত্যুবরণ করেছে',
    story15_text: '৯ নভেম্বর ২০২৫ তারিখে রিতা ও ওয়াদুদের নামে ভর্তি হওয়া এক নবজাতক পুত্রসন্তানের মা মানসিকভাবে ভারসাম্যহীন ছিলেন এবং ধর্ষণের ফলে এই সন্তানের জন্ম হয়েছিল; জন্মের পর তিনি শিশুটিকে গ্রহণ করতে অস্বীকৃতি জানান। ফাউন্ডেশন তার দায়িত্ব নিয়ে বাংলাদেশ নবজাতক হাসপাতালে স্থানান্তর করে, কিন্তু দীর্ঘ দুই মাসের সর্বোচ্চ চিকিৎসার পরও দুর্ভাগ্যবশত সে মৃত্যুবরণ করে।',
    story16_date: '২০ নভেম্বর ২০২৫', story16_name: '"বেবী রাইয়ান"', story16_outcome: 'মৃত্যুবরণ করেছে',
    story16_text: '২০ নভেম্বর ২০২৫ সন্ধ্যায় রূপগঞ্জের কাঞ্চন ব্রিজ এলাকায় পরিত্যক্ত অবস্থায় এক নবজাতক পুত্রশিশুকে পাওয়া যায়, যার জটিল হাইড্রোসেফালাস ধরা পড়ে। ঝুঁকিপূর্ণ ভিপি শান্ট অপারেশনের পর সে ধীরে ধীরে সুস্থতার পথে এগোলেও ২৪ ডিসেম্বর ২০২৫ তারিখে ইন্তেকাল করে; তাকে "বেবী রাইয়ান" নামে সমাহিত করা হয়।',
    story17_date: 'মার্চ ২০২৬', story17_name: 'অজ্ঞাতনামা নবজাতক', story17_outcome: 'সুস্থতার পথে',
    story17_text: 'ঈদুল ফিতরের দিন অজ্ঞাতনামা এক ব্যক্তি আনুমানিক ২৫–৩০ দিন বয়সী এক অসুস্থ নবজাতককে বাংলাদেশ নবজাতক হাসপাতালের এনআইসিইউতে রেখে চলে যান এবং আর ফেরেননি — দেওয়া ফোন নম্বর ও ঠিকানায় কোনো সন্ধান মেলেনি। জ্বর, শ্বাসকষ্ট ও মারাত্মক নিউমোনিয়া নিয়ে ভর্তি হওয়া শিশুটি এখন ধীরে ধীরে সুস্থতার পথে।',
    story18_date: '২ মে ২০২৬', story18_name: 'অজ্ঞাতনামা কন্যাশিশু', story18_outcome: 'মৃত্যুবরণ করেছে',
    story18_text: '২ মে ২০২৬ তারিখে গুরুতর জন্মগত হৃদরোগে আক্রান্ত এক নবজাতক কন্যাশিশুকে তার স্বজনরা রেখে যান। বাংলাদেশ শিশু হাসপাতালে অত্যন্ত ঝুঁকিপূর্ণ হার্ট অপারেশনের পরও তার অবস্থা সংকটাপন্নই থেকে যায় এবং ২৩ মে ২০২৬ তারিখে কার্ডিয়াক আইসিইউতে সে মৃত্যুবরণ করে।',
    story19_date: 'জুন ২০২৬', story19_name: 'অজ্ঞাতনামা নবজাতক', story19_outcome: 'মৃত্যুবরণ করেছে',
    story19_text: '২০২৬ সালের জুনে মায়ের মৃত্যুর পর এক নবজাতক পিতার অবহেলা ও পরিত্যাগের শিকার হয়। মুমূর্ষু অবস্থায় এনআইসিইউতে ভর্তি হয়ে চার মাস অক্লান্ত সেবা পাওয়ার পরও আগস্ট মাসে সে মৃত্যুবরণ করে — ভালোবাসা পাওয়ার আগেই হারিয়ে যায় এক নিষ্পাপ প্রাণ।',
    story20_date: 'জুন ২০২৬', story20_name: 'অজ্ঞাতনামা নবজাতক', story20_outcome: 'দত্তক প্রক্রিয়াধীন',
    story20_text: '২০২৬ সালের জুনে যাত্রাবাড়ীর ডেলটা হাসপাতালে অত্যন্ত কম ওজনের এক নবজাতককে পরিত্যক্ত অবস্থায় পাওয়া যায়; তিন দিনেও কোনো স্বজন খোঁজ নিতে আসেননি। দীর্ঘ তিন মাসের অক্লান্ত এনআইসিইউ চিকিৎসায় শিশুটি এখন সুস্থ ও প্রাণচঞ্চল; তাকে একটি স্নেহময় পরিবারে তুলে দেওয়ার আইনি প্রক্রিয়া চলছে।',
    story21_date: 'আগস্ট ২০২৬', story21_name: 'তাইয়েবা', story21_outcome: 'সেবাধীন',
    story21_text: 'বরগুনার বামনা উপজেলায় অসহায় ও পরিত্যক্ত অবস্থায় উদ্ধার হওয়া শিশু তাইয়েবার প্রথম আশ্রয় হয় আমতলীর ছোটমনি নিবাসে। প্রধানমন্ত্রী তারেক রহমানের উদ্যোগে তাকে ডাঃ মুজিব নিউবর্ন ফাউন্ডেশনের তত্ত্বাবধানে বাংলাদেশ নবজাতক হাসপাতালে নেওয়া হয়, যেখানে সে এখন একটি নতুন জীবনের অপেক্ষায়।',
    story22_date: 'তারিখ উল্লেখ নেই', story22_name: '"বেবী অফ রূপা-হৃদয়"', story22_outcome: 'মৃত্যুবরণ করেছে',
    story22_text: 'বাবা-মা কর্তৃক ফেলে যাওয়া এই নবজাতক — "বেবী অফ রূপা-হৃদয়" নামে লিপিবদ্ধ — মৃত্যুবরণ করে এবং পূর্ণ আইনি ও শরীয়াহ ভিত্তিক নিয়ম মেনে তাকে দাফন করা হয়।',
    story23_date: 'তারিখ উল্লেখ নেই', story23_name: '"বেবী অফ তানজিলা"', story23_outcome: 'মৃত্যুবরণ করেছে',
    story23_text: 'বাবা-মা কর্তৃক ফেলে যাওয়া এই নবজাতক — "বেবী অফ তানজিলা" নামে লিপিবদ্ধ — মৃত্যুবরণ করে এবং পূর্ণ আইনি ও শরীয়াহ ভিত্তিক নিয়ম মেনে তাকে দাফন করা হয়।',
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
