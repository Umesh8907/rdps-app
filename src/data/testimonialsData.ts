export interface TestimonialItem {
  id: string;
  clientName: string;
  companyName?: string;
  projectCategory: string;
  location: string;
  feedback: string;
  isVerified?: boolean;
}

// In accordance with data integrity guidelines, RD Plumbing Solution displays genuine feedback.
// Verified client reviews can be populated below as project sign-offs are documented.
export const testimonialsData: TestimonialItem[] = [
  // Placeholder structure ready for verified reviews
];
