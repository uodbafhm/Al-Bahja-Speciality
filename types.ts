
export type Language = 'ar' | 'en';

export interface Translation {
  navHome: string;
  navAbout: string;
  navContact: string;
  heroTitle: string;
  heroSubtitle: string;
  bookAppointment: string;
  ourServices: string;
  aboutMeTitle: string;
  aboutMeContent: string;
  clinicStatusOpen: string;
  clinicStatusClosed: string;
  reviewsTitle: string;
  reviewsSubtitle: string;
  contactTitle: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  contactDate: string;
  contactTime: string;
  contactService: string;
  contactMessage: string;
  contactSubmit: string;
  contactSuccess: string;
  locationTitle: string;
  workingHours: string;
  footerRights: string;
  // New keys for full localization
  philosophyLabel: string;
  philosophyContent: string;
  educationLabel: string;
  educationContent: string;
  statsHappyPatients: string;
  statsSuccessImplants: string;
  statsClinics: string;
  statsAwardsWon: string;
  experienceYears: string;
  needHelpTitle: string;
  needHelpDesc: string;
  confirmedTitle: string;
  selectLanguage: string;
  activeNow: string;
  backToMenu: string;
  satisfiedPatientsHero: string;
  clinicExcellenceHero: string;
  verifiedByPatientsHero: string;
  requestServiceNow: string;
  writeReview: string;
  privacyPolicy: string;
  legalTerms: string;
  premiumDentalCare: string;
  locationLabel: string;
  callUsLabel: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
}
