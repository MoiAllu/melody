import fecher from "./fecher";
const auth=(mode:"signin"|"signup",body:{email:string; password:string})=>{
    return fecher(`/${mode}`,body)
}
export default auth;