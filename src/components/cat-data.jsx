export const defaultCatData = {
  eventInfo: {
    date: "",
    address: "",
    longitude: "",
    latitude: "",
  },
  catStatus: {
    name: "Mjau doe",
    outsideOrInside: "Outside",
    overallStatus: "Healthy",
    specificStatus: "",
    hasOwner: "No",
    chipNumber: "",
    tattoo: "No",
  },
  catAppearance: {
    age: "Don't know",
    gender: "Don't know",
    fur: "Don't know",
    pictures: [],
    primaryColor: "",
    secondaryColor: "",
    tertiaryColor: "",
    pattern: "",
  },
  reporterInfo: {
    policeReported: "No",
    additionalInformation: "",
    privateInformation: "",
    publicInformation: "",
  },
};

export const ages = ["Don't know", "Kitten", "Adult"];
export const genders = ["Don't know", "Male", "Female"];
export const furs = [
  "Don't know",
  "Shorthair",
  "Longhair/Semilonghair",
  "No fur/Sphynx",
];
export const primaryColors = ["White", "Black", "Orange", "Grey"];
export const secondaryColors = ["White", "Black", "Orange", "Grey"];
export const tertiaryColors = ["White", "Black", "Orange", "Grey"];
export const patterns = [
  "Solid",
  "Spots",
  "Pointed",
  "Striped",
  "Striped spots",
];

export const outsideOrInside = [
  { label: "Inside", value: "Inside" },
  { label: "Outside", value: "Outside" },
];

export const overallStatuses = [
  "Healthy",
  "Not so healthy",
  "Need help asap",
  "Deceased",
];

export const specificStatus = [
  { label: "Appears healthy and taken care of", value: "healthy" },
  { label: "Doesn't seem well taken care of", value: "notWellCared" },
  { label: "In need of help asap", value: "needHelp" },
  { label: "Contact seeking", value: "contactSeeking" },
  { label: "Hungry", value: "hungry" },
  { label: "Alot of knots in the fur", value: "knots" },
  { label: "Limping", value: "limping" },
  { label: "Skinny", value: "skinny" },
  { label: "Healing wounds", value: "healingWounds" },
  { label: "Open wounds", value: "openWounds" },
  { label: "Seriously injured", value: "seriouslyInjured" },
];

export const policeReportedOptions = ["No", "Yes"];
