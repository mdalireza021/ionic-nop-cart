export interface AddToCart {
    Data: Data;
    Message: null;
    ErrorList: string[];
}

export interface Data {
    TotalShoppingCartProducts: number;
    TotalWishListProducts: number;
    RedirectToDetailsPage: boolean;
    RedirectToWishListPage: boolean;
    RedirectToShoppingCartPage: boolean;
}