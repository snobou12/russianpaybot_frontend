let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
export default function generateCode(length:number){
    let text="";
    for(let i = 0;i<length;i++){
        text+=chars.charAt(Math.floor(Math.random()*chars.length));
    }
    return text;
}

