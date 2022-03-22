export interface IRequisition {
  createdAt: string;
  updateAt: string;
  project_name: string;
  type: string;
  budget_year: string;
  unit_price: string;
  subject_of_procurement: string;
  date_required: string;
  delivery_location: string;
  full_name: string;
}

export interface IRequisitionCreate {
  project_name: string;
  type: string;
  budget_year: string;
  unit_price: string;
  subject_of_procurement: string;
  date_required: string;
  delivery_location: string;
}

export interface IRequisitionGetAll {
  requisitions: IRequisition[];
}

export interface IRequisitionGetOne {
  requisition: IRequisition;
}
