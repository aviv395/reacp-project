import { create } from 'zustand'
import { User } from './Types'

const initialUsersList: User[] = [
    {
        username: "abc",
        password: "123"
    }, 
    {
        username: "lll",
        password: "111"
    }
]

type UserLogin = {
    userList: User[]
    loggedInUser: User | null
    addUser: (user: User) => void
    logOut: (user: User) => void
}

export const useUserLogin = create<UserLogin>() ((set) => ({
    userList: initialUsersList,
    loggedInUser: null,
    addUser: (user) => set((state) => ({
        userList: [...state.userList, user]
    })),
    logOut: (user) => set(() => ({
        loggedInUser: null
    }))  
}))
