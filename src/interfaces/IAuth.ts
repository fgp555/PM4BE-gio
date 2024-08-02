export interface LoginProps {
    email: string;
    password: string;
}

export interface LoginErrorProps {
    email?: string;
    password?: string;
}   

export interface RegisterProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string; // Added confirmPassword
    address: string;
    phone: string;
}

export type RegisterErrorProps = Partial<RegisterProps>;

export interface userSessionProps {
    login?: boolean;
    token: string;
    user: {
        email: string;
        name: string;
        id: number;
        address: string;
        phone: string;
        role: string;
        orders: [];
    }
}
