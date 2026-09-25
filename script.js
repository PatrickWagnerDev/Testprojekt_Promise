// Promise
    // Ein Promise repräsentiert ob etwas abgeschlossen wurde oder ein Fehlschlag ist
    // In diesem Beispiel, wenn es einen Error gibt (true) dann soll er eine fehlermeldung ausgeben
        let promError = false;

        function getPromise() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (promError) {
                        reject("hat nicht geklappt");
                    } else {
                        resolve("hat geklappt");
                    }
                }, 2000);
            });
        }

        // async sagt, dass in der Funktion ein await ist und das auch dieses gewartet werden soll
        // bis dieses ausgefüht ist
        async function usePromise() {
            console.log("prom");
            let prom = await getPromise();
            console.log("prom2");
            console.log(prom);
        }