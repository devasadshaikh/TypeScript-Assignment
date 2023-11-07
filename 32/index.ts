const current_users:string[]=["Asad","Ali","Haseeb","Ghufran"];
const new_users:string[]=["Sami","Ayan","ali","asad"];

function checkUserNames(current_users:string[],new_users:string[]){
    const lowerCaseCurrentUser = current_users.map(i => i.toLocaleLowerCase());

    for(const newUser of new_users){
        const lowerCaseNewUser = newUser.toLowerCase();
        if(lowerCaseCurrentUser.includes(lowerCaseNewUser)){
            console.log(`UserName ${lowerCaseNewUser} is already taken choose another Name`);
            
        }else{
            console.log(`UserName ${newUser} is Available`);
            
        }

    }
}
checkUserNames(current_users,new_users);