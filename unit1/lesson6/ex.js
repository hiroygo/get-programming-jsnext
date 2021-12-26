function maskMailUser(addr) {
    const atmarkIndex = addr.indexOf("@");
    if (atmarkIndex === 0 || atmarkIndex === -1) {
        throw "invalid address format";
    }
    return "*".repeat(atmarkIndex) + addr.substr(atmarkIndex);
}

/*
*@example.com
**@example.com
***@example.com
invalid address format
invalid address format
*/
console.log(maskMailUser("f@example.com"));
console.log(maskMailUser("fo@example.com"));
console.log(maskMailUser("foo@example.com"));

try {
    console.log(maskMailUser("@example.com"));
} catch (e) {
    console.error(e);
}
try {
    console.log(maskMailUser("example.com"));
} catch (e) {
    console.error(e);
}
