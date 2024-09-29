//
import { IconsAll } from "../../../../assets/icons";
import { Doctor, doctors } from "../../find-doctor/type";

export interface CardOurMedicalDepartments {
  id: number | string;
  title: string;
  icon: string;
  description: string;
  avaliableDoctor: Doctor[];
}

export const dataCardOurMedicalDepartments: CardOurMedicalDepartments[] = [
  {
    id: 1,
    title: "Emergency Department",
    icon: IconsAll.bell,
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    avaliableDoctor: [doctors[0], doctors[1]],
  },
  {
    id: 2,
    title: "Cardiology Department",
    icon: IconsAll.bell,
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    avaliableDoctor: [doctors[4], doctors[5]],
  },
  {
    id: 3,
    title: "Pediatric Department",
    icon: IconsAll.bell,
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    avaliableDoctor: [doctors[3], doctors[4]],
  },
  {
    id: 4,
    title: "Obstetrics and Gynecology",
    icon: IconsAll.bell,
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    avaliableDoctor: [doctors[11], doctors[2]],
  },
  {
    id: 5,
    title: "Psychiatry Deparment",
    icon: IconsAll.bell,
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    avaliableDoctor: [doctors[8], doctors[10]],
  },
  {
    id: 6,
    title: "Neurology Deparment",
    icon: IconsAll.bell,
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    avaliableDoctor: [doctors[13], doctors[14]],
  },
  {
    id: 7,
    title: "Occupational Therapy Deparment ",
    icon: IconsAll.bell,
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    avaliableDoctor: [doctors[18], doctors[19]],
  },
  {
    id: 8,
    title: "Physical Therapy Deparment",
    icon: IconsAll.bell,
    description:
      "This department provides immediate medical care to patients with acute illnesses or injuries that require immediate attention.",
    avaliableDoctor: [doctors[15], doctors[16]],
  },
];
