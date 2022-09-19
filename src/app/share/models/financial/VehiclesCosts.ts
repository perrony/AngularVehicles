export interface IVehiclesCosts {
    id: Number;
    people_id: Number;
    history_operations_id: Number;
    payment_method_id: Number;
    stock_vehicles_id: Number;
    institutions_id: Number;
    user_id: Number;
    document: String;
    data_operation: Date;
    operation_value: Number;
    split: Boolean;
    portion: Number;
    installments: Number;
    payment_date: Date;
    amount_paid: Number;
}