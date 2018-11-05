const os = require('os');
for (let interfaces in os.networkInterfaces()){
    console.log(typeof interfaces + interfaces)
}
