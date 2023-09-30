import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";


export const UserInfo = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signinWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(`observing`, currentUser, user);
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])

    const authInfo = {user, createUser, signInUser, loading, signinWithGoogle};
    return (
        <UserInfo.Provider value={authInfo}>
            {children}
        </UserInfo.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;