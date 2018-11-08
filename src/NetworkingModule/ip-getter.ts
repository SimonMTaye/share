var os = require("os");
var ifaces = os.networkInterfaces();

function GetIP() {
  Object.keys(ifaces).forEach(function(ifname) {
    var alias = 0;

    ifaces[ifname].forEach(function(iface: any) {
      if ("IPv4" !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      return {interface: ifname, address: iface.address}
     /*  if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        console.log(ifname + ":" + alias, iface.address);
        return {interface: ifname, address: iface.address}

      } else {
        // this interface has only one ipv4 adress
        
      }
      ++alias; */
    });
  });
}

export {GetIP}
