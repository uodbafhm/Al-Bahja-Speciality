
import { Translation, Service, Review } from './types';

export const CLINIC_INFO = {
  name: 'AL BAHJA SPECIALITY DENTAL CENTER',
  doctor: 'Dr. Alami',
  phone: '+96897120506',
  whatsapp: '+96897120506',
  instagram: 'https://www.instagram.com/albahjadental',
  maps: 'https://www.google.com/maps/place/AL+BAHJA+SPECIALITY+DENTAL+CENTER/@22.5890443,59.5040198,17z/data=!4m6!3m5!1s0x3e90a3822ae96579:0x12b6e0e9587d02d9!8m2!3d22.5890443!4d59.5040198!16s%2Fg%2F11srgp3rxn',
};

export const SERVICES: Service[] = [
  {
    id: "blanchiment",
    title: "تبييض الأسنان",
    description: "تبييض احترافي للحصول على ابتسامة مشرقة وطبيعية بأحدث التقنيات.",
    image: "https://images.pexels.com/photos/6529110/pexels-photo-6529110.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "fa-solid fa-wand-magic-sparkles"
  },
  {
    id: "implants",
    title: "زراعة الأسنان",
    description: "استعادة الأسنان المفقودة بشكل دائم وجمالي يضمن لك الراحة والثقة.",
    image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp",
    icon: "fa-solid fa-tooth"
  },
  {
    id: "orthodontie",
    title: "تقويم الأسنان",
    description: "تصحيح اصطفاف الأسنان للأطفال والكبار للحصول على مظهر متناسق وصحي.",
    image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "fa-solid fa-ruler-combined"
  },
  {
    id: "soins",
    title: "علاج التسوس",
    description: "علاج سريع وبدون ألم لحساسية وتسوس الأسنان مع الحفاظ على بنية السن.",
    image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg",
    icon: "fa-solid fa-shield-halved"
  },
  {
    id: "detartrage",
    title: "تنظيف الأسنان وإزالة الجير",
    description: "إزالة الجير والبلاك للحفاظ على صحة اللثة وانتعاش الفم.",
    image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp",
    icon: "fa-solid fa-soap"
  },
  {
    id: "extraction",
    title: "خلع الأسنان",
    description: "خلع آمن للأسنان المتضررة مع عناية خاصة لتخفيف الألم وتسريع الشفاء.",
    image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg",
    icon: "fa-solid fa-screwdriver-wrench"
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    user: 'ليا البلوشي',
    rating: 5,
    comment: 'صراحة شغلهم فنان وممتاز، جربت زراعة الأسنان عندهم والنتيجة واجد مرضية. العيادة نظيفة وراقية والدكتور العلمي تعامله فوق الممتاز.',
    avatar: 'https://i.pravatar.cc/150?u=lia_balushi',
    date: 'قبل أسبوعين'
  },
  {
    id: '2',
    user: 'منى الرئيسية',
    rating: 5,
    comment: 'أفضل عيادة في صور، تعاملهم واجد راقي ومريح خصوصاً للي يخاف من الكرسي. اهتمام بالتفاصيل وبدون ألم، الله يوفقكم.',
    avatar: 'https://i.pravatar.cc/150?u=mona_oman',
    date: 'قبل شهر'
  },
  {
    id: '3',
    user: 'احمد مصطفى',
    rating: 5,
    comment: 'ما شاء الله تبارك الرحمن، دقة في المواعيد وأجهزة متطورة. سويت تنظيف وتبييض والفرق كان واضح من أول جلسة. أنصح فيهم وبقوة.',
    avatar: 'https://i.pravatar.cc/150?u=aisha_oman',
    date: 'قبل ٣ أشهر'
  }
];

export const TRANSLATIONS: Record<'ar' | 'en', Translation> = {
  ar: {
    navHome: 'الرئيسية',
    navAbout: 'عن المركز',
    navContact: 'موعد',
    heroTitle: 'ابتسامتكم أمانتنا، وصحتكم غايتنا',
    heroSubtitle: 'نقدم لكم أفضل خدمات طب الأسنان بأحدث التقنيات العالمية تحت إشراف نخبة من الأطباء.',
    bookAppointment: 'احجز موعدك الآن',
    ourServices: 'خدماتنا المميزة',
    aboutMeTitle: 'عن الدكتور العلمي',
    aboutMeContent: 'رعاية أسنان احترافية بأحدث التقنيات. نحن نؤمن بأن الابتسامة الجميلة تبدأ بصحة فم ممتازة، ولذلك نسعى جاهدين لتقديم تجربة مريحة وفعالة لكل مريض.',
    clinicStatusOpen: 'مفتوح الآن',
    clinicStatusClosed: 'مغلق حالياً',
    reviewsTitle: 'ماذا يقول مرضانا؟',
    reviewsSubtitle: 'تقييمات حقيقية من زوارنا على جوجل',
    contactTitle: 'حجز موعد جديد',
    contactName: 'الاسم الكامل',
    contactEmail: 'البريد الإلكتروني',
    contactPhone: 'رقم الهاتف',
    contactDate: 'تاريخ الموعد',
    contactTime: 'وقت الموعد',
    contactService: 'الخدمة المطلوبة',
    contactMessage: 'رسالتك (اختياري)',
    contactSubmit: 'تأكيد الحجز',
    contactSuccess: 'شكراً لك! سنتصل بك قريباً لتأكيد الموعد.',
    locationTitle: 'موقعنا',
    workingHours: 'ساعات العمل',
    footerRights: 'جميع الحقوق محفوظة لمركز البهجة التخصصي لطب الأسنان',
    philosophyLabel: 'فلسفتنا',
    philosophyContent: 'رعاية تتمحور حول المريض مع عدم التسامح مع الألم.',
    educationLabel: 'التعليم والخبرة',
    educationContent: 'شهادات تخصصية من أفضل الجمعيات الطبية العالمية لطب الأسنان.',
    statsHappyPatients: 'مريض سعيد',
    statsSuccessImplants: 'زراعة ناجحة',
    statsClinics: 'عيادة تخصصية',
    statsAwardsWon: 'جوائز فوز',
    experienceYears: 'سنة خبرة',
    needHelpTitle: 'تحتاج مساعدة فورية؟',
    needHelpDesc: 'متخصصونا متاحون للاستشارات الطارئة والرعاية العاجلة في نفس اليوم.',
    confirmedTitle: 'تم التأكيد!',
    selectLanguage: 'اختر اللغة',
    activeNow: 'متوفر الحين',
    backToMenu: 'الرجوع للقائمة',
    satisfiedPatientsHero: 'المرضى الراضون',
    clinicExcellenceHero: 'تميز العيادة',
    verifiedByPatientsHero: 'موثوق من المرضى',
    requestServiceNow: 'اطلب الخدمة الآن',
    writeReview: 'اكتب تقييمك',
    privacyPolicy: 'سياسة الخصوصية',
    legalTerms: 'الشروط القانونية',
    premiumDentalCare: 'عناية متميزة بالأسنان',
    locationLabel: 'الموقع',
    callUsLabel: 'اتصل بنا'
  },
  en: {
    navHome: 'Home',
    navAbout: 'About',
    navContact: 'Appointment',
    heroTitle: 'Your Smile is Our Priority',
    heroSubtitle: 'Providing top-tier dental services with the latest global technologies under professional supervision.',
    bookAppointment: 'Book Your Appointment',
    ourServices: 'Our Premium Services',
    aboutMeTitle: 'About Dr. Alami',
    aboutMeContent: 'Professional dental care with the latest technology. We believe a beautiful smile begins with excellent oral health, and we strive to provide a comfortable and effective experience for every patient.',
    clinicStatusOpen: 'Open Now',
    clinicStatusClosed: 'Currently Closed',
    reviewsTitle: 'What Our Patients Say',
    reviewsSubtitle: 'Real reviews from our Google Maps profile',
    contactTitle: 'Book an Appointment',
    contactName: 'Full Name',
    contactEmail: 'Email Address',
    contactPhone: 'Phone Number',
    contactDate: 'Appointment Date',
    contactTime: 'Appointment Time',
    contactService: 'Required Service',
    contactMessage: 'Your Message (Optional)',
    contactSubmit: 'Confirm Booking',
    contactSuccess: 'Thank you! We will contact you soon to confirm.',
    locationTitle: 'Our Location',
    workingHours: 'Working Hours',
    footerRights: 'All rights reserved to Al Bahja Speciality Dental Center',
    philosophyLabel: 'Philosophy',
    philosophyContent: 'Patient-centric care with zero pain tolerance.',
    educationLabel: 'Education',
    educationContent: 'Specialized certifications from top medical dental associations.',
    statsHappyPatients: 'Happy Patients',
    statsSuccessImplants: 'Success Implants',
    statsClinics: 'Speciality Clinic',
    statsAwardsWon: 'Awards Won',
    experienceYears: 'Years Experience',
    needHelpTitle: 'Need Immediate Help?',
    needHelpDesc: 'Our clinical specialists are available for emergency consultations and same-day urgent care.',
    confirmedTitle: 'Confirmed!',
    selectLanguage: 'Select Language',
    activeNow: 'Active Now',
    backToMenu: 'Back to Menu',
    satisfiedPatientsHero: 'Satisfied Patients',
    clinicExcellenceHero: 'Clinic Excellence',
    verifiedByPatientsHero: 'Verified by Patients',
    requestServiceNow: 'Request Service',
    writeReview: 'Write Review',
    privacyPolicy: 'Privacy Policy',
    legalTerms: 'Legal Terms',
    premiumDentalCare: 'Premium Dental Care',
    locationLabel: 'Location',
    callUsLabel: 'Call Us'
  }
};
