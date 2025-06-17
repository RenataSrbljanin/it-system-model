// Timestamp string format
type Timestamp = string;
// Duration string format  "0:00:27.271497"
type DurationString = string;

// ---- Unique Identifiers ----
type IDN = string;
type CPE_IDN = string;
type CredentialID = string;
type DataTypeID = string;
type NetworkSegmentID = number;

// ---- Global Container ----
interface InfrastructureModel {
  computers: { [idn: IDN]: Computer };
  created: Timestamp;
  credentials: { [credID: CredentialID]: Credential };
  data: { [key: string]: DataModel }; //
  duration: DurationString;
  firewall_rules: { [key: string]: FirewallRule };// 
  network_segments: { [segment: NetworkSegmentID]: IDN[] };
  total_employee_count: number;
  version: string;
}
// ---- Computer Entity ----
interface Computer {
  idn: IDN;
  data: DataTypeID[];
  installed_software: { [idn: IDN]: InstalledSoftware };
  installed_software_idns: IDN[];
  stored_credentials: CredentialID[];
  software_data_links: SoftwareDataLink;
  software_idn_mapping: { [key: string]: IDN };
  network_idn: NetworkSegmentID[];
  provides_hardware_quota: number;
  used_hardware_quota: number;
}
// ---- Data Storage ----
interface SoftwareDataLink {
  [softwareIDN: IDN]: DataTypeID[];
}

// ---- Credential Format ----
interface Credential {
  credential_id: CredentialID;
  role_type: 'admin' | 'svc' |'developer' |'finance' |'ceo' | string;
  softwareIDN: IDN;
  user: string;
}
// Defined types for reuse
type SoftwareIDN = string; // e.g., "cpe:/a:microsoft:outlook:2019(with_office)#uuid"
type NetworkIndex = number; // e.g., 0, 1
type PersonGroup = string; // e.g., "finance:internal"
type PersonIndex = number; // e.g., 2
type Service = string; // services array is currently empty, so assume string for now

interface DataModel {
  data_definition_idn: string;  // e.g., "FinancialData:internal#95fa263a-f63e-4757-bafc-95307c803673"
  data_type: string;            // e.g., "EmailsData, FinancialData"
  database_stored: boolean;     // true/false
  idn: string;  // = "key", e.g. "FinancialData:internal#95fa263a-f63e-4757-bafc-95307c803673"
  linked_software: SoftwareIDN[];
  network_idn: NetworkIndex[];
  person_groups: PersonGroup[];
  person_indexes: PersonIndex[];
  principal_software: SoftwareIDN; // e.g., Exchange Server ID
  protection_level: number;    // sensitivity or security level
  services: Service[];         // related service identifiers, assumed string
}

// ---- Software Entity ----
interface InstalledSoftware {
  idn: IDN;
  idn_variant: string;
  cpe_idn: CPE_IDN;
  computer_idn: IDN;
  compatible_data_types: DataTypeID[];
  accepts_credentials: CredentialID[];
  local_dependencies: IDN[];
  network_dependencies: IDN[];
  network_idn: NetworkSegmentID[];
  installed_combination: [CPE_IDN, 'L' | 'N'][];
  provides_services: string[];
  provides_network_services: string[];
  provides_user_services: string[];
  max_client_count: number;
  requires_hardware_quota: number;
  requires_hardware_quota_per_client: number;
  is_database: boolean | string;
  hardware_ids: string[];
  person_group_id: string | null; 
  /*
  "finance:banking",
  "ceo:financial",
  "developer:windows:senior"
  */
  person_index: number;
  network_clients: IDN[];
  network_servers: IDN[];
}

type FirewallObject = string; // e.g., "INTERNET", or "None:0:4>CUSTOM:/a:.net:Internet_banking_server#uuid"
// eg.
/*
 "ceo:ceo:0:0>cpe:/a:microsoft:outlook:2019(with_office)#fc857a31-d25c-4aaf-9d8d-6a75b9c8885d",
                "finance:banking:29:0>cpe:/a:microsoft:outlook:2019(with_office)#b1db39b4-425f-4512-92bc-862ed7df220a",
                "finance:banking:69:0>cpe:/a:microsoft:outlook:2019(with_office)#aa720424-0f14-4028-a8c1-3770dee6a400",
                "finance:banking:39:0>cpe:/a:microsoft:outlook:2019(with_office)#4fad318f-5c30-4e0b-8570-6f8bcbc875b0",
                "ceo:ceo:2:0>cpe:/a:microsoft:outlook:2019(with_office)#1ddbd854-5a6b-4d85-a2b0-68f0578ca762"
*/
// Firewall Rule interface
interface FirewallRule {
  allow: boolean;             // true = allow traffic, false = deny
  from_objects: FirewallObject[]; // source zones or entities
  idn: string;                // unique firewall rule identifier
  to_objects: FirewallObject[];   // destination zones or entities
}
