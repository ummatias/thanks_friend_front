
const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
};

export const get = async (url: string, token?: any) => {

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            ...headers,
            'Authorization': `Bearer ${token}`
        }
    });
    return response.json();
    }
export const post = async (url: string, body: any, token?: any) => {

    console.log("headers", headers);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            ...headers,
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body),
    });
    return response.json();
}

export const put = async (url: string, body: any) => {
    const response = await fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
    });
    return response.json();
}

export const del = async (url: string) => {
    const response = await fetch(url, {
        method: "DELETE",
        headers: headers,
    });
    return response.json();
}



