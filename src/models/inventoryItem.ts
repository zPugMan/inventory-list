export interface InventoryItem {
    catalogObjectId:string;
    itemId:string;              //item's variation id value (item_variation_data.item_id)
    itemName:string;            //item name (item_data.name + item_variation_data.name)
    itemSku:string;             //item sku (item_variation_data.sku)
    quantity:number;            //current inventory count
    alertQuantity:number;       //alert threshold (item_variation_data.location_overrides.inventory_alert_threshold)
    isDone:boolean;             //item is shopped
}