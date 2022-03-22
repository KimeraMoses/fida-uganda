export interface ITravelOrderGetAll {
  travelOrders: ITravelOrder[];
}

export interface ITravelOrderGetOne {
  travelOrder: ITravelOrder;
}

export interface ITravelOrderStat {
  all_TravelOrders: number;
  my_TravelOrders: number;
}

export interface ITravelOrderCreate {
  journey_start_time: string;
  journey_end_time: string;
  purpose: string;
  date_requested: string;
  destination: string;
  project: string;
  project_activity: string;
  pickup_location: string;
  approved_by?: string;
  designation?: string;
  status?: string;
  allocated_vehicle?: string;
  date_of_travel?: string;
  time_of_travel?: string;
  assignedDriver?: string;
  millage_record?: {
    from: string;
    to: string;
    start_millage: string;
    start_time: string;
    "end-time": string;
    end_millage: string;
  };
}

export interface ITravelOrder {
  createdAt: string;
  journey_start_time: string;
  journey_end_time: string;
  purpose: string;
  date_requested: string;
  destination: string;
  project: string;
  project_activity: string;
  pickup_location: string;
  approved_by: string;
  designation: string;
  allocated_vehicle: string;
  date_of_travel: string;
  time_of_travel: string;
  millage_record: {
    from: string;
    to: string;
    start_millage: string;
    start_time: string;
    "end-time": string;
    end_millage: string;
  };
  createdBy: {
    first_name: string;
    last_name: string;
    image: string;
    id: string;
  };
  id: string;
}
