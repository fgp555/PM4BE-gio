const apiURl = process.env.NEXT_PUBLIC_API_URL;

export const createOrder = async (products: number[], token: string) => {
    try {

        const response = await fetch(`${apiURl}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify({ products })
        })

        const orders = await response.json()
        return orders
    } catch (error: any) {
        throw new Error(error)
    }
};

export const getOrders = async (token: string) => {
    try {
        const response = await fetch(`${apiURl}/users/orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
        });
        const orders = await response.json();
        return orders;

    } catch (error: any) {
        throw new Error(error)

    }
}