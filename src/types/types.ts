export interface Post {
    id: number
    title: string
    body: string
    userName?: string
}

export interface User {
    id: number
    name: string
    userName: string
    email: string
    address: {
        city: string
        geo: {
            lat: string
            lng: string
        }
        street: string
        suite: string
        zipcode: string
    }
    phone: string
    website: string
    company: {
        bs: string
        catchPhrase: string
        name: string
    }
}
