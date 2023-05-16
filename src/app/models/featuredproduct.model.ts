export interface FeaturedProduct {
  ErrorList: any;
  Message: any;
  Data: FeaturedProduct[];
  Name:                      string;
  ShortDescription:          string;
  FullDescription:           string;
  SeName:                    string;
  Sku:                       string;
  ProductType:               number;
  MarkAsNew:                 boolean;
  ProductPrice:              ProductPrice;
  PictureModels:             PictureModel[];
  ProductSpecificationModel: ProductSpecificationModel;
  ReviewOverviewModel:       ReviewOverviewModel;
  Id:                        number;
  CustomProperties:          CustomProperties;
}

export interface CustomProperties {
}

export interface PictureModel {
  ImageUrl:         string;
  ThumbImageUrl:    null;
  FullSizeImageUrl: string;
  Title:            string;
  AlternateText:    string;
  CustomProperties: CustomProperties;
}

export interface ProductPrice {
  OldPrice:                             null;
  OldPriceValue:                        null;
  Price:                                string;
  PriceValue:                           number;
  BasePricePAngV:                       null;
  BasePricePAngVValue:                  number;
  DisableBuyButton:                     boolean;
  DisableWishlistButton:                boolean;
  DisableAddToCompareListButton:        boolean;
  AvailableForPreOrder:                 boolean;
  PreOrderAvailabilityStartDateTimeUtc: null;
  IsRental:                             boolean;
  ForceRedirectionAfterAddingToCart:    boolean;
  DisplayTaxShippingInfo:               boolean;
  CustomProperties:                     CustomProperties;
}

export interface ProductSpecificationModel {
  Groups:           any[];
  CustomProperties: CustomProperties;
}

export interface ReviewOverviewModel {
  ProductId:            number;
  RatingSum:            number;
  TotalReviews:         number;
  AllowCustomerReviews: boolean;
  CanAddNewReview:      boolean;
  CustomProperties:     CustomProperties;
}