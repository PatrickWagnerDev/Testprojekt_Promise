let promError = true;

function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (promError) {
                reject("hat nicht geklappt");
            } else {
                resolve("hat geklappt");
            }
        }, 300);
    });
}

function usePromise() {
    let prom = getPromise();
    console.log(prom);
}