export default function fecher(url : string, data = undefined){
    return fetch(`${window.location.origin}/api${url}`,{
        method:data? "POST": "GET",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    })
}