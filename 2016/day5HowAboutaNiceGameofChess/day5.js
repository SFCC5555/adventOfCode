const crypto = require("crypto")

let id = 'wtnhxymk';
let counter = 0;
let password = {};


while (Object.keys(password).length<8) {

    let hash = crypto.createHash("md5").update(id + counter).digest("hex");

    if (/^0{5}/.test(hash)) {

        if (parseInt(hash[5])<8) {
            if (!(hash[5] in password)) {
                password[hash[5]] = hash[6]
                console.log(Object.values(password).join(''));
            }
        }


    }
    counter++
}

console.log(Object.values(password).join(''));

