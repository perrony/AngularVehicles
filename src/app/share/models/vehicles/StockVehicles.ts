export interface IStockVehicles {
    id: Number;
    people_id: Number;
    vehicle_colors_id: Number;
    user_id: Number;
    board: String;
    renavam: String;
    date_entry: Date;
    record_type: Number;
    reference_date: Number;
    reference_value: Number;
    vehicle_type: Number;
    brand_code: Number;
    brand: String;
    model_code: Number;
    model: String;
    model_year: String;
    model_year_code: String;
    fipe_code: String;
    sale_status: Boolean
}