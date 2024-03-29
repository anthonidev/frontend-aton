
export interface IProduct {
    id: number,
    get_category: string;
    get_brand: string;
    title: string;
    price: string;
    compare_price: string;
    photo: string;
    slug: string;
    quantity: number;
}
export interface IProfile {
    id: number,
    enterprise: string;
    photo: string;
    city: string;
    address_line_1: string;
    address_line_2: string;
    district: string;
    zipcode: string;
    phone: string;
}
export interface IFormCheckout {
    full_name: string,
    address_line_1: string;
    address_line_2: string;
    city: string;
    district: string;
    zipcode: string;
    phone: string;
    coupon_code:string,
    shipping_id:number,
}
export interface IUser {
    id: number,
    email: string;
    first_name: string;
    last_name: string;
    get_full_name: string;
    get_short_name: string;
}

export interface IOrdenSumary {
    amount: number,
    isAuthenticated: boolean
}

export interface ICartItem {
    id: number,
    count: number,
    product: IProduct
}

export interface INavbarDashboard {
    name: string,
    to: string,
    HeartIcon(props: React.ComponentProps<'svg'>): JSX.Element
}

export interface FormFilter {
    brandsform: number[];
    categoriesform: number[];
    order: string;
    sort_by: string;
    price_range: string;
}