export type IDN = string;
export type GroupID = string;
export type ServiceID = string;
export type DataType = string;

// export type DataIDN =
//   | "FinancialData:internal"
//   | "FinancialData:banking"
//   | "Emails"
//   | "SourceCode:internet_banking";

// export type PersonGroup =
//   | "ceo:ceo"
//   | "ceo:financial"
//   | "finance:internal"
//   | "finance:banking"
//   | "developer:windows:senior"
//   | "developer:windows:junior"
//   | "admin";

// export type EmployeeGroup =
//   | "admin"
//   | "ceo"
//   | "developer:windows"
//   | "finance";

export enum DataPersonMode {
  PerPerson = "DataPersonMode.PerPerson",
  PerGroup = "DataPersonMode.PerGroup",
  PerOrganization = "DataPersonMode.PerOrganization",
}

export enum DataServiceMode {
  PerService = "DataServiceMode.PerService",
  PerOrganization = "DataServiceMode.PerOrganization",
}

export enum DataSoftwareMode {
  PerDatabase = "DataSoftwareMode.PerDatabase",
  PerServer = "DataSoftwareMode.PerServer",
  PerOrganization = "DataSoftwareMode.PerOrganization",
}

export enum NetworkPolicyType {
  RequireDistinctNetworksForSets = "RequireDistinctNetworksForSets",
  RequireSameNetworksForSets = "RequireSameNetworksForSets",
  LimitAllowedProtectionLevelRange = "LimitAllowedProtectionLevelRange"
}
