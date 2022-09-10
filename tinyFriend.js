function tinyFriend(name){
    var tinyFriendName = name[0];
    for(let i = 0; i<name.length; i++){
        var friendsName = name[i];
        
        if(friendsName.length<tinyFriendName.length && name[i] != " "){
            tinyFriendName = friendsName;
        }
    }
    return tinyFriendName;
}
var bsdkName = ["sifat", "Sakib", "tusar", "Antara", "bsdk", " "];
var picchi = tinyFriend(bsdkName);
console.log(picchi);