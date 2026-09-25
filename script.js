function getPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("foo");
        }, 300);
    });
}

function usePromise() {
    let prom = getPromise();
    console.log(prom);
}