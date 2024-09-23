
interface ICardUsualyAsked {
  id: number | string;
  title: string;
  description: string;
  name: string;
  // state: boolean
}


export const dataCardUsualyAsked: ICardUsualyAsked[] = [
  {
    id: 1,
    title: "What Services does ProHealth offer?",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    name: "whatServicesDoesProHealthOffer",
    // state: usualyAsked.whatServicesDoesProHealthOffer
  },
  {
    id: 2,
    title: "how do I Schedule an appointment with ProHealth?",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    name: "howDoIScheduleAnAppointmentWithProHealth",
    // state: usualyAsked.howDoIScheduleAnAppointmentWithProHealth
  },
  {
    id: 3,
    title: "Do you accept insurance?",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    name: "doYouAcceptInsurance",
    // state: usualyAsked.doYouAcceptInsurance
  },
  {
    id: 4,
    title: "What should i bring to my appointment?",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    name: "whatShouldIBringToMyAppointment",
    // state: usualyAsked.whatShouldIBringToMyAppointment
  },
  {
    id: 5,
    title: "How do i request a prescription refill?",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesent voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.",
    name: "howDoIRequestAPrescriptionRefill",
    // state: usualyAsked.howDoIRequestAPrescriptionRefill
  },
];
