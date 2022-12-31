import auth from "../utils/firebase-config";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import toast from "react-hot-toast";


export const login = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        toast('Login Successful',
        {
            icon: '👻',
            style: {
            background: '#333',
            color: '#fff',
            },
        }
        );
        return user;
    } catch (error) {
        toast(error.message,
        {
            icon: '❌',
            style: {
            background: '#333',
            color: '#fff',
            },
        }
        );
        console.log(error);
    }

}

export const register = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        toast('Registration Successful',
        {
            icon: '👻',
            style: {
            background: '#333',
            color: '#fff',
            },
        }
        );
        return user;
    } catch (error) {
        toast(error.message,
            {
                icon: '❌',
                style: {
                background: '#333',
                color: '#fff',
                },
            }
            );
        console.log(error);
    }

}

export const signOutFromFirebase = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error);
    }

}

