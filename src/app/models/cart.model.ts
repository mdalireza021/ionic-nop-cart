export interface Cart {
    Sku: string;
    VendorName: string;
    Picture: Picture;
    ProductId: number;
    ProductName: string;
    ProductSeName: string;
    UnitPrice: string;
    UnitPriceValue: number;
    SubTotal: string;
    SubTotalValue: number;
    Discount: null;
    DiscountValue: number;
    MaximumDiscountedQty: null;
    Quantity: number;
    AllowedQuantities: any[];
    AttributeInfo: string;
    RecurringInfo: null;
    RentalInfo: null;
    AllowItemEditing: boolean;
    DisableRemoval: boolean;
    Warnings: any[];
    Id: number;
    CustomProperties: CustomProperties;
}

export interface CustomProperties {
}

export interface Picture {
    ImageUrl: string;
    ThumbImageUrl: null;
    FullSizeImageUrl: null;
    Title: string;
    AlternateText: string;
    CustomProperties: CustomProperties;
}