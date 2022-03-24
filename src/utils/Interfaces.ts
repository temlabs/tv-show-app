export interface episodeProps {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  rating?: { average?: number | null };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string;
  _links: { self: { href: string } };
}

export interface showProps {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: null | string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: Network | null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}
export interface Links {
  self: Nextepisode;
  previousepisode?: Nextepisode;
  nextepisode?: Nextepisode;
}
export interface Nextepisode {
  href: string;
}
export interface Externals {
  tvrage: number;
  thetvdb: number | null;
  imdb: null | string;
}
export interface Image {
  medium: string;
  original: string;
}
export enum Language {
  English = "English",
  Japanese = "Japanese",
}
export interface Network {
  id: number;
  name: string;
  country: Country | null;
  officialSite?: null | string;
}
export interface Country {
  name: string;
  code: string;
  timezone: string;
}
export enum Code {
  CA = "CA",
  Fr = "FR",
  GB = "GB",
  Jp = "JP",
  Us = "US",
}
export enum Name {
  Canada = "Canada",
  France = "France",
  Japan = "Japan",
  UnitedKingdom = "United Kingdom",
  UnitedStates = "United States",
}
export enum Timezone {
  AmericaHalifax = "America/Halifax",
  AmericaNewYork = "America/New_York",
  AsiaTokyo = "Asia/Tokyo",
  EuropeLondon = "Europe/London",
  EuropeParis = "Europe/Paris",
}
export interface Rating {
  average: number | null;
}
export interface Schedule {
  time: string;
  days: string[];
}
export enum Day {
  Friday = "Friday",
  Monday = "Monday",
  Saturday = "Saturday",
  Sunday = "Sunday",
  Thursday = "Thursday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
}
export enum Status {
  Ended = "Ended",
  Running = "Running",
  ToBeDetermined = "To Be Determined",
}
export enum Type {
  Animation = "Animation",
  Documentary = "Documentary",
  News = "News",
  PanelShow = "Panel Show",
  Reality = "Reality",
  Scripted = "Scripted",
  Sports = "Sports",
  TalkShow = "Talk Show",
  Variety = "Variety",
}
