// Simple generic

function echo(data: any) {
    return data;
}

console.log(echo("Diego"));
console.log(echo("Felipe"));
console.log(echo(27));

// Better Generic way

function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Diego"));
console.log(betterEcho<string>("37"));
console.log(betterEcho<number>(37));