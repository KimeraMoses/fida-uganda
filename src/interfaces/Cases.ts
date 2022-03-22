export interface IGetCases {
  cases: ICase[];
}

export interface ICase {
  createdAt: string;
  _id: string;
  nationality: string;
  district: string;
  file_opened: string;
  gender: string;
  date_opened: string;
  first_name: string;
  surname: string;
  age: number;
  num_beneficiaries: number;
  occupation: string;
  case_nature: string;
  action_taken: string;
  next_visit: string;
  legal_officer: string;
  referred_to: string;
  reason_for_referral: string;
  follow_up_feedback: string;
  file_closing_date: string;
  mobile_contact: string;
  disability: string;
  respondent_f_name: string;
  respondent_s_name: string;
  respondent_contact: string;
  contact: string;
  submittedBy: string;
}
