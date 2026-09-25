// Promise
    // Ein Promise repräsentiert ob etwas abgeschlossen wurde oder ein Fehlschlag ist
    // In diesem Beispiel, wenn es einen Error gibt (true) dann soll er eine fehlermeldung ausgeben
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