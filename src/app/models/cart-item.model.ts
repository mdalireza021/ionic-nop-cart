export interface Cart {
  Data:      Data;
  Message:   null;
  ErrorList: any[];
}

export interface Data {
  Cart:                       Cart;
  OrderTotals:                OrderTotals;
  SelectedCheckoutAttributes: string;
  EstimateShipping:           EstimateShipping;
  AnonymousPermissed:         boolean;
}

export interface Cart {
  OnePageCheckoutEnabled:            boolean;
  ShowSku:                           boolean;
  ShowProductImages:                 boolean;
  IsEditable:                        boolean;
  Items:                             Item[];
  CheckoutAttributes:                CheckoutAttribute[];
  Warnings:                          any[];
  MinOrderSubtotalWarning:           null;
  DisplayTaxShippingInfo:            boolean;
  TermsOfServiceOnShoppingCartPage:  boolean;
  TermsOfServiceOnOrderConfirmPage:  boolean;
  TermsOfServicePopup:               boolean;
  DiscountBox:                       DiscountBox;
  GiftCardBox:                       GiftCardBox;
  OrderReviewData:                   OrderReviewData;
  ButtonPaymentMethodViewComponents: any[];
  HideCheckoutButton:                boolean;
  ShowVendorName:                    boolean;
  CustomProperties:                  Custom;
}

export interface CheckoutAttribute {
  Name:                  string;
  DefaultValue:          null;
  TextPrompt:            null;
  IsRequired:            boolean;
  SelectedDay:           null;
  SelectedMonth:         null;
  SelectedYear:          null;
  AllowedFileExtensions: any[];
  AttributeControlType:  number;
  Values:                Value[];
  Id:                    number;
  CustomProperties:      Custom;
}

export interface Custom {
}

export interface Value {
  Name:             string;
  ColorSquaresRgb:  null;
  PriceAdjustment:  null | string;
  IsPreSelected:    boolean;
  Id:               number;
  CustomProperties: Custom;
}

export interface DiscountBox {
  AppliedDiscountsWithCodes: any[];
  Display:                   boolean;
  Messages:                  any[];
  IsApplied:                 boolean;
  CustomProperties:          Custom;
}

export interface GiftCardBox {
  Display:          boolean;
  Message:          null;
  IsApplied:        boolean;
  CustomProperties: Custom;
}

export interface Item {
  Sku:                  string;
  VendorName:           string;
  Picture:              Picture;
  ProductId:            number;
  ProductName:          string;
  ProductSeName:        string;
  UnitPrice:            string;
  UnitPriceValue:       number;
  SubTotal:             string;
  SubTotalValue:        number;
  Discount:             null;
  DiscountValue:        number;
  MaximumDiscountedQty: null;
  Quantity:             number;
  AllowedQuantities:    any[];
  AttributeInfo:        string;
  RecurringInfo:        null;
  RentalInfo:           null;
  AllowItemEditing:     boolean;
  DisableRemoval:       boolean;
  Warnings:             any[];
  Id:                   number;
  CustomProperties:     Custom;
}

export interface Picture {
  ImageUrl:         string;
  ThumbImageUrl:    null;
  FullSizeImageUrl: null;
  Title:            string;
  AlternateText:    string;
  CustomProperties: Custom;
}

export interface OrderReviewData {
  Display:               boolean;
  BillingAddress:        Address;
  IsShippable:           boolean;
  ShippingAddress:       Address;
  SelectedPickupInStore: boolean;
  PickupAddress:         Address;
  ShippingMethod:        null;
  PaymentMethod:         null;
  CustomValues:          Custom;
  CustomProperties:      Custom;
}

export interface Address {
  FirstName:                        null;
  LastName:                         null;
  Email:                            null;
  CompanyEnabled:                   boolean;
  CompanyRequired:                  boolean;
  Company:                          null;
  CountryEnabled:                   boolean;
  CountryId:                        null;
  CountryName:                      null;
  StateProvinceEnabled:             boolean;
  StateProvinceId:                  null;
  StateProvinceName:                null;
  CountyEnabled:                    boolean;
  CountyRequired:                   boolean;
  County:                           null;
  CityEnabled:                      boolean;
  CityRequired:                     boolean;
  City:                             null;
  StreetAddressEnabled:             boolean;
  StreetAddressRequired:            boolean;
  Address1:                         null;
  StreetAddress2Enabled:            boolean;
  StreetAddress2Required:           boolean;
  Address2:                         null;
  ZipPostalCodeEnabled:             boolean;
  ZipPostalCodeRequired:            boolean;
  ZipPostalCode:                    null;
  PhoneEnabled:                     boolean;
  PhoneRequired:                    boolean;
  PhoneNumber:                      null;
  FaxEnabled:                       boolean;
  FaxRequired:                      boolean;
  FaxNumber:                        null;
  AvailableCountries:               any[];
  AvailableStates:                  any[];
  FormattedCustomAddressAttributes: null;
  CustomAddressAttributes:          any[];
  Id:                               number;
  CustomProperties:                 Custom;
}

export interface EstimateShipping {
  RequestDelay:       number;
  Enabled:            boolean;
  CountryId:          null;
  StateProvinceId:    null;
  ZipPostalCode:      null;
  UseCity:            boolean;
  City:               null;
  AvailableCountries: Available[];
  AvailableStates:    Available[];
  CustomProperties:   Custom;
}

export interface Available {
  Disabled: boolean;
  Group:    null;
  Selected: boolean;
  Text:     string;
  Value:    string;
}

export interface OrderTotals {
  IsEditable:                 boolean;
  SubTotal:                   string;
  SubTotalDiscount:           null;
  Shipping:                   string;
  RequiresShipping:           boolean;
  SelectedShippingMethod:     null;
  HideShippingTotal:          boolean;
  PaymentMethodAdditionalFee: null;
  Tax:                        string;
  TaxRates:                   TaxRate[];
  DisplayTax:                 boolean;
  DisplayTaxRates:            boolean;
  GiftCards:                  any[];
  OrderTotalDiscount:         null;
  RedeemedRewardPoints:       number;
  RedeemedRewardPointsAmount: null;
  WillEarnRewardPoints:       number;
  OrderTotal:                 string;
  CustomProperties:           Custom;
}

export interface TaxRate {
  Rate:             string;
  Value:            string;
  CustomProperties: Custom;
}
