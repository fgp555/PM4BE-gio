import { LoginProps, RegisterProps } from "@/interfaces/IAuth";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const RegisterUser = async (userData: RegisterProps) => {
    try {
        const response = await fetch(`${apiURL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        // return response.json();
        if(response.ok){
            return response.json();
        }else {
            alert('Error al registrar el usuario')
            throw new Error('Error al registrar el usuario');
        }
    } catch (error: any) {
        throw new Error(error);
    }
};

export const LoginUser = async (userData: LoginProps) => {
    try {
        const response = await fetch(`${apiURL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
      
        if(response.ok){
            return response.json();
        }else {
            alert('Error al logear el usuario')
            throw new Error('Error al logear el usuario');
        }
        
    } catch (error: any) {
        throw new Error(error);
    }
    }

  
export const logoutUser = () => {
      localStorage.removeItem('userSession');
    };
  