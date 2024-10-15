export const defaultCatData = {
  eventInfo: {
    // This info is for one specific event. In each cats profile you can see a map & a list of where and when this cat has been seen. This can not be changed since its about that specific event.

    date: "", //When the cat was seen or dissappeared
    address: "", //Where the cat was seen or dissappeared from
    longitude: "",
    latitude: "",
    text: "", //A comment from the person who made the post to a cats profile or when adding a new spotted cat.(Ex. Hanging with us at the park)
    additionalInformation: "",
    policeReported: "Nej", //If the users that posted the event, either seen or missing, can share if they have reported the cat missing or seen to the police.
    reporterInfo: {
      user: "", //If the user is logged in the username or userid will be stored here.
      phoneNr: "", //Contact information to the user who saw the cat or added a missing cat
      email: "",
      settingsPhoneNr: "Privat", //Settings on who can see your contact information, its either public, so any user who uses the app can see the information. If its private, then it is only visible for SVERAKs members and organisations
      settingsEmail: "Offentligt",
    },
  },
  catDetails: {
    name: "Mjau doe", //name is updated when a owner claims ownership of the cat and can then change to the cats name.
    hasOwner: "Vet ej", //When you see a cat, it schould always be don't know, since a owner has to claim ownership, or it can be an option as "other users has reported this cat has an owner in this area and is not missing"
    owner: "", //Connecting cat with a user that is the owner.
    hasChip: "Vet ej",
    chipNumber: "",
    hasTattoo: "Vet ej",
    tattooNumber: "",
    neutered: "Vet ej",
    profilePicture: "", //Users can select which picture is the best to use as a profile pic, based on the pictures in the cats profile that has been uploaded on the events.
    registeredJordbruksverket: "", // If the cat is registered at jordbruksverket with the chip or tattoo.
  },
  catStatus: {
    //Conditions of the cat, this can be updated, but the previous statuses schould also be stored as it would be displayed on the cats feed/timeline with date, for ex: 10 oct, by username123: overall status was changed from "seem healthy" to " in need of assistance".
    outsideOrInside: "Utomhus", // For seen/found cats, if they have been taken inside due to injury/being a kitten or other reasons.
    overallStatuses: "Verkar frisk", //General status if the cat looks healthy, taken cared of or the opposite.
    specificStatuses: "", // Specifications where you can highlight and inform in more detail and severity of the overall status.
  },

  catAppearance: {
    //this can be updated, but the previous info schould also be stored as it would be displayed on the cats feed/timeline with date, for ex: 10 oct, by username123: age was changed from "don't know" to "kitten". Also sometimes you might not have seen the cat so close etc, so other users have the option to change this.
    pictures: [],
    age: "Vet ej",
    gender: "Vet ej",
    fur: "Vet ej",
    pattern: "",
    colors: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
  },
};

//EVENT INFO
export const policeReported = ["Nej", "Ja"];
export const settingsPhoneNr = ["Privat", "Offentligt"];
export const settingsEmail = ["Privat", "Offentligt"];

//CAT DETAILS
export const hasOwner = [
  "Vet ej",
  "Jag är ägare",
  "Jag vet vem ägaren är och hen bor i området, katten är ej försvunnen",
];
export const hasChip = ["Vet ej", "Ja", "Nej"];
export const hasTattoo = ["Vet ej", "Ja", "Nej"];
export const neutered = ["Vet ej", "Ja", "Nej"];
export const registeredJordbruksverket = ["Vet ej", "Ja", "Nej"];

//CAT STATUS
export const outsideOrInside = [
  { label: "Inne", value: "Inne" },
  { label: "Ute", value: "Ute" },
];

export const overallStatuses = [
  "Frisk och omhändertagen",
  "Frisk men ej välvårdad/omhändertagen",
  "Ej i bra skick, sjuk eller skadad",
  "Jättedåligt skick, assistans behövs snarast",
  "Avliden",
];

export const specificStatuses = [
  { label: "Kontaktsökande", value: "Kontaktsökande" },
  { label: "Hungrig", value: "Hungrig" },
  { label: "Mycket knutor/tovor", value: "Mycket knutor/tovor" },
  { label: "Haltar", value: "Haltar" },
  { label: "Mager", value: "Mager" },
  { label: "Läkande sår", value: "Läkande sår" },
  { label: "Öppna sår", value: "Öppna sår" },
  { label: "Allvarligt skadad", value: "Allvarligt skadad" },
];

//CAT APPEARANCE
export const ages = ["Vet ej", "Kattunge", "Vuxen"];
export const genders = ["Vet ej", "Hane", "Hona"];
export const furs = [
  "Vet ej",
  "Korthårig",
  "Långhårig/Semilånghårig",
  "Ingen päls/Nakenkatt",
];
export const colors = [
  "Vit",
  "Svart",
  "Orange",
  "Grå",
  "Brun",
  "Övrig/Obestämbar",
];

export const patterns = [
  "Enfärgad",
  "Fläckig",
  "Pointed(ansikte, tassar, svans)",
  "Randig",
  "Randiga fläckar",
  "Övrig/Obestämbar",
];
