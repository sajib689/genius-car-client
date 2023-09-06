import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const signWithForm = ( email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
        
    }
    const signInWithForm = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])
    const authInfo ={
        signWithForm,
        signInWithForm,
        logOut,
        loading,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;