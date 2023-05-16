export interface Product {
    id: number;
    name: string;
    shortDescription: string;
    fullDescription: string;
    seName: string;
    sku: string;
    productType: number;
    markAsNew: boolean;
    productPrice: ProductPrice;
    pictureModels: PictureModel[];
    productSpecificationModel: ProductSpecificationModel;
    reviewOverviewModel: ReviewOverviewModel;
    customProperties: any;
  }
  
  export interface ProductPrice {
    oldPrice: string | null;
    oldPriceValue: number | null;
    price: string;
    priceValue: number;
    basePricePAngV: string | null;
    basePricePAngVValue: number | null;
    disableBuyButton: boolean;
    disableWishlistButton: boolean;
    disableAddToCompareListButton: boolean;
    availableForPreOrder: boolean;
    preOrderAvailabilityStartDateTimeUtc: string | null;
    isRental: boolean;
    forceRedirectionAfterAddingToCart: boolean;
    displayTaxShippingInfo: boolean;
    customProperties: any;
  }
  
  export interface PictureModel {
    imageUrl: string;
    thumbImageUrl: string | null;
    fullSizeImageUrl: string;
    title: string;
    alternateText: string;
    customProperties: any;
  }
  
  export interface ProductSpecificationModel {
    groups: any[];
    customProperties: any;
  }
  
  export interface ReviewOverviewModel {
    productId: number;
    ratingSum: number;
    totalReviews: number;
    allowCustomerReviews: boolean;
    canAddNewReview: boolean;
  }