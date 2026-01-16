export function validMailName(mail :string) : boolean {
     for(let i =0; i<mail.length  ;i++){
        if (mail[i]=='@')
            return true;


    }
    return false;
}