export interface IClient {
  id: string;
  name: string;
  sex: string;
  email: string;
  phoneNumber: string;
  address: string;
  village: string;
  occupation: string;
  place_of_work: string;
  marital_status: string;
  level_of_education: string;
  preferred_language: string;
  disability: string;
  createdAt: string;
}

export interface IGetClients {
  clients: IClient[];
}
