
export enum Market {
  SoCal = "SoCal",
  NorCal = "NorCal",
  All = "All"
}

export enum Role {
  AccountExecutive = "AccountExecutive",
  HeadOfConstruction = "HeadOfConstruction",
  Concierge = "Concierge"
}

export interface Person {
  name: string
  role: Role
  markets: Market[]
}

export interface Team {
  persons: Person[]
}

export const People: Person[] = [
  {
    name: "Adam Friedman",
    role: Role.AccountExecutive,
    markets: [Market.NorCal, Market.SoCal]
  },
  {
    name: "Ceci Clark",
    role: Role.HeadOfConstruction,
    markets: [Market.SoCal]
  },
  {
    name: "Courtney Lacy",
    role: Role.Concierge,
    markets: [Market.NorCal, Market.SoCal]
  },
  {
    name: "John Cromwell",
    role: Role.HeadOfConstruction,
    markets: [Market.NorCal]
  },
  {
    name: "Kirsten Pearson",
    role: Role.Concierge,
    markets: [Market.SoCal]
  },
  {
    name: "Michael Carter",
    role: Role.AccountExecutive,
    markets: [Market.NorCal]
  },
]