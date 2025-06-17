// ---- Unique Identifiers ----
type IDN = string;
type CPE_IDN = string;
type CredentialID = string;
type DataTypeID = string;
type NetworkSegmentID = number;

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
  person_index: number;
  network_clients: IDN[];
  network_servers: IDN[];
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

// ---- Global Container ----
interface InfrastructureModel {
  network_segments: { [segment: NetworkSegmentID]: IDN[] };
  computers: { [idn: IDN]: Computer };
  credentials: { [credID: CredentialID]: Credential };
}
