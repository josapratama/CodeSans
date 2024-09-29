import { IconsAll } from "../../../../assets/icons";

interface TreatMent {
  id: number | string;
  title: string;
  description: string;
  icon: string;
}

export const dataTreatMent: TreatMent[] = [
  {
    id: 1,
    title: "Vaccinations Department",
    description:
      "The Pediatric Department provides vaccinations to help protect children from a range of illnesses and diseases, including measles.",
    icon: IconsAll.vaccinations,
  },
  {
    id: 2,
    title: "Management of acute ilnesses",
    description:
      "The Pediatric Department provides treatment for common childhood illnesses, such as ear infections, strep throat, and viral infections.",
    icon: IconsAll.management,
  },
  {
    id: 3,
    title: "Treatment of chronic conditions",
    description:
      "The Pediatric Department provides ongoing care and treatment for children with chronic conditions such as asthma, diabetes, and allergies.",
    icon: IconsAll.treatment,
  },
  {
    id: 4,
    title: "Developmental Screenings",
    description:
      "The Pediatric Department provides regular developmental screenings to identify any delays or concerns and provide early intervention services.",
    icon: IconsAll.developmental,
  },
];
