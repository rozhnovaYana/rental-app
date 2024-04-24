export const rentalTypes = [
  "Apartment",
  "Condo",
  "House",
  "Cabin or Cottage",
  "Room",
  "Studio",
  "Other",
] as const;

export const amentities = [
  {
    id: "amenity_wifi",
    label: "Wifi",
  },
  {
    id: "amenity_kitchen",
    label: "Full kitchen",
  },
  {
    id: "amenity_washer_dryer",
    label: "Washer & Dryer",
  },
  {
    id: "amenity_free_parking",
    label: "Free Parking",
  },
  {
    id: "amenity_pool",
    label: "Swimming Pool",
  },
  {
    id: "amenity_hot_tub",
    label: "Hot Tub",
  },
  {
    id: "amenity_24_7_security",
    label: "24/7 Security",
  },
  {
    id: "amenity_wheelchair_accessible",
    label: "Wheelchair Accessible",
  },
  {
    id: "amenity_elevator_access",
    label: "Elevator Access",
  },
  {
    id: "amenity_dishwasher",
    label: "Dishwasher",
  },
  {
    id: "amenity_gym_fitness_center",
    label: "Gym/Fitness Center",
  },
  {
    id: "amenity_air_conditioning",
    label: "Air Conditioning",
  },
  {
    id: "amenity_balcony_patio",
    label: "Balcony/Patio",
  },
  {
    id: "amenity_smart_tv",
    label: "Smart TV",
  },
  {
    id: "amenity_coffee_maker",
    label: "Coffee Maker",
  },
] as const;

export const amentitiesList = amentities.map((i) => i.label);

export const rentalProperties = ["beds", "baths", "square_feet"] as const;

export const locationFields = ["street", "city", "state", "zipcode"] as const;

export const ratesFields = ["weekly", "monthly", "nightly"] as const;

export const sellerInfoFields = ["name", "email", "phone"] as const;
