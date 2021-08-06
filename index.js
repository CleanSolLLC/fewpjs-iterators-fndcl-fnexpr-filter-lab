function findMatching(drivers, name) {
 let driver = drivers.filter(n => {
    return n.toLowerCase() === name.toLowerCase();
 });
return driver;
}


function fuzzyMatch(drivers, name) {
 let driver = drivers.filter(n => {
    return n.startsWith(name);
 });
return driver;
}

function matchName(drivers, name) {
 let driver = drivers.filter(n => {
    return n["name"] === name;
 });
return driver;
}

