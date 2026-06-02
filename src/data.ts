import { Testimonial, FAQItem, ProblemSolution } from './types';

export const ADMIN_FEATURES = [
  {
    title: "Resident Registry & Management",
    desc: "A digitized, searchable database of all residents with filterable demographic attributes (seniors, single parents, dynamic list) for efficient targeting.",
    badge: "System of Record"
  },
  {
    title: "Welfare & Ayuda Aid Monitoring",
    desc: "Track the distribution of social services, disaster aid, medical supplies, and educational support directly connected to resident profiles without double-listing.",
    badge: "100% Transparency"
  },
  {
    title: "Document Request Fulfillment",
    desc: "Process Barangay Clearances, Indigency, and Residency Certificates digitally in one centralized dashboard. Integrates physical queue-less signatures.",
    badge: "No More Long Lines"
  },
  {
    title: "Complaint & Incident Blotters",
    desc: "Log disputes, peaceful mediation outcomes (Lupon Tagapamayapa records), and incidents securely. Tracks resolution steps dynamically.",
    badge: "Civic Peace"
  },
  {
    title: "Emergency Response Hub",
    desc: "Broadcast instant SMS & App alerts for disaster preparedness (typhoons, fires) and coordinate critical rescue logistics using a shared tactical map.",
    badge: "Immediate Ready"
  },
  {
    title: "Real-Time Governance Reports",
    desc: "Auto-generate transparent analytics on budget allocations, assistance reach, resolved disputes, and document request counts for executive LGU audits.",
    badge: "Data-Driven"
  }
];

export const RESIDENT_FEATURES = [
  {
    title: "Online Document Request",
    desc: "Request administrative forms securely from home or work using an internet-enabled browser. Receive real-time SMS status tracking.",
    badge: "Fast & Remote"
  },
  {
    title: "Digital Complaint Submission",
    desc: "Report issues peacefully—from noise complaints to localized infrastructure damage—with support for uploading photo context securely to officials.",
    badge: "Voice of the Citizen"
  },
  {
    title: "Kalinga Welfare Application",
    desc: "Apply for ongoing welfare assistance programs, healthcare allowances, or senior financial relief directly through your verified digital profile.",
    badge: "Equal Access"
  },
  {
    title: "Barangay Bulletins",
    desc: "Get instant access to genuine announcements, job listings, localized vaccination clinics, and upcoming townhall agendas directly from verified sources.",
    badge: "No Fake News"
  },
  {
    title: "Appointment Scheduler",
    desc: "Book specific consultation slots online to meet face-to-face with barangay personnel or health workers, eliminating hours spent waiting in physical lobbies.",
    badge: "Smarter Schedules"
  },
  {
    title: "SOS Family Emergency Button",
    desc: "Instantly broadcast your verified location coordinates to the Barangay command center and emergency medical responders during medical or fire crises.",
    badge: "Life-Saving"
  }
];

export const PROBLEMS_SOLUTIONS: ProblemSolution[] = [
  {
    id: "prob_1",
    indicator: "01",
    problemTitle: "Tatay Cardo losing a day's wage just to line up",
    problemDesc: "Working parents or sari-sari store owners often have to take unpaid leaves, close down their little shops, or spend expensive tricycle fares traveling back and forth just to line up under hot tin roofs for simple clearances or papers.",
    solutionTitle: "Quick phone requests with friendly SMS notifications",
    solutionDesc: "Tatay Cardo applies securely from his phone during his work break. Staff confirm his records digitally and send an automated SMS alert when ready. He walks in, picks up his document, and goes back to his family in seconds.",
    metricLabel: "Time wasted waiting in lines",
    metricBefore: "Half Day Cost",
    metricAfter: "1-Minute Pick-up"
  },
  {
    id: "prob_2",
    indicator: "02",
    problemTitle: "Aling Cora wondering: 'Are we included in the relief aid?'",
    problemDesc: "During relief distributions or health programs, paper lists get wet or misplaced. Senior citizens like Aling Cora are left in deep anxiety, unsure if they are registered or why they were missed out during the distribution.",
    solutionTitle: "Fair and transparent helper lists that protect dignity",
    solutionDesc: "A complete neighborhood check ensures that every household, especially single-parent families and senior citizens, is recorded fairly. When assistance arrives, Aling Cora's family is found instantly—no stress, no double-listings, just real care.",
    metricLabel: "Aid distribution anxiety",
    metricBefore: "Anxious Waiting",
    metricAfter: "Peace of Mind"
  },
  {
    id: "prob_3",
    indicator: "03",
    problemTitle: "Nanay Nena missing crucial health announcements",
    problemDesc: "Free children's health programs or senior medical drives are announced on passing tricycles with noisy megaphones. Nanay Nena inside her home or in the kitchen often misses the schedule until the day has already passed.",
    solutionTitle: "Clear, direct updates sent straight to your pocket",
    solutionDesc: "Helpful circulars and community schedules are translated into plain, clean Taglish and sent straight as SMS alerts or mobile bulletins. Nanay Nena always knows, in advance, when and where to bring her grandchildren.",
    metricLabel: "Awareness of free health drives",
    metricBefore: "Missed schedules",
    metricAfter: "Always informed"
  },
  {
    id: "prob_4",
    indicator: "04",
    problemTitle: "Rescuers searching blindly for seniors in high water",
    problemDesc: "During heavy typhoons and flash floods, local volunteers try to look for vulnerable households by heart. Amidst heavy rain and darkness, it is difficult to spot where bedridden neighbors like Tatay Lito are.",
    solutionTitle: "A secure digital beacon to guide rescuers directly",
    solutionDesc: "An easy-to-use SOS alert notifies emergency captains of the exact purok and street of the resident, signaling if they have children or elderly members. Rescuers can steer their flatboats directly to those who need them first.",
    metricLabel: "Finding families in high water",
    metricBefore: "Risk of delays",
    metricAfter: "Guided help"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t_1",
    name: "Kap. Amado San Jose",
    role: "leader",
    title: "Punong Barangay (Barangay Captain)",
    location: "Brgy. Silangan, San Mateo, Rizal",
    quote: "With KaBarangay io, we transformed our administrative files from moldy cardboard folders into a fast digital dashboard. In our last relief distribution, the system saved us from long lists and disputes. We knew exactly which household had received food packs and who was left behind. It brings peace of mind.",
    quoteNative: "Sa tulong ng KaBarangay io, nagbago ang aming pamamahala mula sa mga lumang folder tungo sa mabilis na digital dashboard. Noong huling ayuda distribution, nailigtas kami ng system sa mahabang listahan at gulo. Alam namin kung sino ang nakatanggap at sino ang naiwan. Napakalaking kapayapaan ng isip.",
    quoteEn: "With KaBarangay io, we transformed our administrative files from moldy cardboard folders into a fast digital dashboard. In our last relief distribution, the system saved us from long lists and disputes. We knew exactly which household had received food packs and who was left behind. It brings peace of mind.",
    languageName: "Tagalog",
    languageFlag: "🇵🇭",
    avatarSeed: "silangan_captain",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "t_2",
    name: "Aling Corazon 'Cora' Mendoza",
    role: "resident",
    title: "Senior Resident & Sari-Sari Store Owner",
    location: "Brgy. Poblacion, Carcar City, Cebu",
    quote: "I am a senior citizen raising three grandchildren. I used to spend a whole afternoon and high tricycle fares going to the Barangay hall back and forth just for an Indigency certificate. Now, my niece does it using her smartphone. I only go once to pick it up. This is a huge blessing.",
    quoteNative: "Senior citizen na ko nga nagpadako ug tulo ka apo. Kaniadto molungtad ug tibuok hapon ug dako ug plete sa traysikol pabalik-balik sa barangay hall para lang sa Certificate of Indigency. Karon, akong pag-umangkon gamit ang smartphone na lang ang gahimo. Kas-a ra ko moadto para mokuha niini. Dako kaayo ni nga grasya.",
    quoteEn: "I am a senior citizen raising three grandchildren. I used to spend a whole afternoon and high tricycle fares going to the Barangay hall back and forth just for an Indigency certificate. Now, my niece does it using her smartphone. I only go once to pick it up. This is a huge blessing.",
    languageName: "Bisaya (Cebuano)",
    languageFlag: "🇵🇭",
    avatarSeed: "cora_grandmother",
    imageUrl: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "t_3",
    name: "Atty. Katrina Alcantara",
    role: "official",
    title: "Civic Welfare Coordinator & Consultant",
    location: "Brgy. Central, Vigan City, Ilocos Sur",
    quote: "Civic engagement in the Philippines requires heavy empathy with local realities. KaBarangay io bridges this successfully. It represents honest, transparent governance that respects a citizen's dignity. No posters of politicians, just clean and accessible services.",
    quoteNative: "Ti sibiko nga pannakipaset ditoy Pilipinas ket nangato ti panangipategna kadagiti lokal a kinapudno. Ti KaBarangay io ket balligi a mangisilpo kadagiti tattao. Maipakita na ti napasnek ken nalitnaw a panagturay nga mangrespeto ti dignidad ti umili. Awan sumasurot a ladawan dagiti politiko, nadalus ken nalaka a madanon a serbisyot laeng.",
    quoteEn: "Civic engagement in the Philippines requires heavy empathy with local realities. KaBarangay io bridges this successfully. It represents honest, transparent governance that respects a citizen's dignity. No posters of politicians, just clean and accessible services.",
    languageName: "Ilocano",
    languageFlag: "🇵🇭",
    avatarSeed: "katrina_official",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: "t_4",
    name: "Kuya Jomar Datu",
    role: "volunteer",
    title: "Barangay Disaster Response Lead",
    location: "Brgy. Sabang, Naga City, Camarines Sur",
    quote: "During typhoons, Marikina River water rises in minutes. Previously, we rode around in bancas trying to find seniors by memory. Today, we simply filter the KaBarangay census on our tablets to pinpoint elderly households in flood zone A. It saved lives this monsoon season.",
    quoteNative: "Pag may bagyo, grabe an takot mi sa baha. Kanuna, naga-ikot kami sa bangka para hanapon an mga may helang asin gurang gikan sa memorya mi. Ngonian, madali na sanang i-filter an census sa KaBarangay sa tablet para matuod an mga residenteng dapat unahon. Nakasalbar ini nin buhay kadtong nag-aging monsoon.",
    quoteEn: "During typhoons, Marikina River water rises in minutes. Previously, we rode around in bancas trying to find seniors by memory. Today, we simply filter the KaBarangay census on our tablets to pinpoint elderly households in flood zone A. It saved lives this monsoon season.",
    languageName: "Bicolano",
    languageFlag: "🇵🇭",
    avatarSeed: "jomar_volunteer",
    imageUrl: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq_1",
    question: "What is KaBarangay io?",
    answer: "KaBarangay io is a modern, responsive, full-scale digital governance and resident welfare system. It is designed to replace outdated manual systems at the local community level (barangay) with automated records, paperless certificate processing, efficient aid distribution logs, transparent complaint resolvers, and real-time emergency alerts.",
    category: "general"
  },
  {
    id: "faq_2",
    question: "Is the platform available for all barangays in the Philippines?",
    answer: "Yes! KaBarangay io is scalable and can be configured for any barangay, whether a small rural municipality or a dense metropolitan neighborhood of 100,000+ residents. It adapts easily to localized barangay regulatory needs.",
    category: "general"
  },
  {
    id: "faq_3",
    question: "How secure is the personal data of our residents?",
    answer: "We treat resident privacy with extreme care to abide by the Philippine Data Privacy Act of 2012 (RA 10173). All sensitive records (like names, phone numbers, indigency papers) are encrypted at rest and in transit. Standard multi-factor authentication is required for all administrative officials.",
    category: "security"
  },
  {
    id: "faq_4",
    question: "Can residents access the platform if they only have older mobile phones?",
    answer: "Absolutely. The resident portal is extremely lightweight, heavily optimized for low-bandwidth mobile connections, and compatible with older browser views. For residents without smartphones, the system features a fallback automated SMS request engine and printed QR vouchers.",
    category: "residents"
  },
  {
    id: "faq_5",
    question: "Can the system track welfare programs and social assistance budgets?",
    answer: "Yes, our 'Kalinga Assistance Module' tracks individual distributions securely to ensure budget transparency. It logs the date, program name, funding agency, and item value directly to verified resident IDs, creating clean audit charts that are downloadable.",
    category: "admins"
  },
  {
    id: "faq_6",
    question: "Is comprehensive training provided for our barangay staff?",
    answer: "Yes, every partner community receives complete onboarding and interactive training. We host practical simulations for barangay secretaries, disaster leads, and Lupon Tagapamayapa members. Our system is designed with large human-centric icons and direct Tagalog phrasing so anyone can master it in one afternoon.",
    category: "admins"
  }
];
