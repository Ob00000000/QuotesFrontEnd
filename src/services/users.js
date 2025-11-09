import { BASE_URL } from './config'
import axios from 'axios'

export async function findUserByCredentials(cred) {
    // cred object {email, password}
    const url = BASE_URL + "/user/signin"
    const response = await axios.post(url, cred)
    if(response.status === 200) {
        const resp = response.data
        if(resp.status === 'success')
            return resp.data
        throw new Error(resp.error)
    }
    throw new Error(`Error Status: ${response.status}`)
}


export async function registerUser(user) {
    // user object {name, email, password, confirmPassword, mobile}
    const url = BASE_URL + "/user/signup"
    const response = await axios.post(url, user)
    if(response.status === 200) {
        const resp = response.data
        if(resp.status === 'success')
            return resp.data
        throw new Error("Error: " + resp.error)
    }
    return new Error(`Error Status: ${response.status}`)
}

export async function updateUserProfile(profile) {
    // cred object {name, mobile}
    const url = BASE_URL + "/user/editprofile"
    // get token from session storage and pass as bearer authentication
    const token = sessionStorage.getItem("token")
    const response = await axios.patch(url, profile, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    if(response.status === 200) {
        const resp = response.data
        if(resp.status === 'success')
            return resp.data
        throw new Error("Error: " + resp.error)
    }
    return new Error(`Error Status: ${response.status}`)
}


export async function getAllQuotes() {
    const url = BASE_URL + "/user/quotes"
    const token = sessionStorage.getItem("token")
    const response = await axios.get(url, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
     if(response.status === 200) {
        const resp = response.data
        if(resp.status === 'success')
            return resp.data
        throw new Error("Error: " + resp.error)
    }
    return new Error(`Error Status: ${response.status}`)
}
export async function getAllQuotesbyId(user) {
    const url = BASE_URL + "/user/getById"
    const token = sessionStorage.getItem("token")
    const response = await axios.get(url, user.id ,  {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
     if(response.status === 200) {
        const resp = response.data
        if(resp.status === 'success')
            return resp.data
        throw new Error("Error: " + resp.error)
    }
    return new Error(`Error Status: ${response.status}`)
}

export async function getfav(user) {
    const url = BASE_URL + "/user/fav"
    const token = sessionStorage.getItem("token")
    const response = await axios.get(url, user.id, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
     if(response.status === 200) {
        const resp = response.data
        if(resp.status === 'success')
            return resp.data
        throw new Error("Error: " + resp.error)
    }
    return new Error(`Error Status: ${response.status}`)
}