import react,  {createContext, useEffect, useState} from 'react'
import getData  from './utils/getData';
import goData from './utils/goData';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [token, setToken] = useState(null)
    const mtoken = Cookies.get('token');

    const [user, setUser] = useState(null);

    useEffect(() =>{
        const resolveUser = async ()=>{
            if(mtoken){
                if(!token){
        const output = await goData({endpoint: "/me"});
        if(output != 404){
            console.log("ouput:");
            console.log(output.data.user);
            setUser(output.data.user);
            authenticate(mtoken, output.data.user);
            setToken(mtoken)
        }
        else {
                goGuest();
        }
                }
            }

        }
        resolveUser();

    },[])

    const authenticate =(token, userData) =>{
                setIsAuthenticated(true);
                setToken(token);
                setUser(userData);
    }
    const goGuest =( ) =>{
        setIsAuthenticated(false);
        setToken(null);
        setUser(null);
}
    const getUser = async () => {
        const output = await goData("/me");
        if(output != 404){
            console.log("ouput:")
            console.log(output)
            setUser(output);
        }
        else {
                goGuest();
        }
       

    }
 

    return (
        <AuthContext.Provider value={{isAuthenticated, authenticate, goGuest, getUser, user}}>
            {children}
        </AuthContext.Provider>
    );
}