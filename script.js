// Promise
    // Ein Promise repräsentiert ob etwas abgeschlossen wurde oder ein Fehlschlag ist
    // In diesem Beispiel, wenn es einen Error gibt (true) dann soll er eine fehlermeldung ausgeben
        let promError = true;

        function getPromise() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("1");
                    if (promError) {
                        reject("hat nicht geklappt");
                    } else {
                        resolve("hat geklappt");
                    }
                }, 300);
            });
        }

        function getPromise2() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("2");
                    if (!promError) {
                        reject("hat nicht geklappt");
                    } else {
                        resolve("hat geklappt");
                    }
                }, 300);
            });
        }

        function getPromise3() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("3");
                    if (promError) {
                        reject("hat nicht geklappt");
                    } else {
                        resolve("hat geklappt");
                    }
                }, 300);
            });
        }

        // Async & await
            // async sagt, dass in der Funktion ein await ist und das auch dieses gewartet werden soll
            // bis dieses ausgefüht ist
        // Try & Catch
            // Damit wird abgefangen ob etwas geklappt hat und wenn nicht wird etwas anderes ausgeführt
                async function usePromise() {
                    try {
                        await getPromise();
                        await getPromise2();
                        await getPromise3();
                        console.log("juhu");
                        
                    } catch (error) {
                        console.error(error);
                    }
                    console.log("Ende");
                }