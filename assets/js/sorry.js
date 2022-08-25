let vacaciones = prompt("Queres irte de vacaciones?").toLowerCase();

if (vacaciones === "si") {
    let presupuesto = Number(prompt("Cual es tu presupuesto?"));
    if (presupuesto >= 500000) {
        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                console.log("podes ir a Fiji");
            } else if (i === 1) {
                console.log("podes ir a Hawaii");
            } else {
                console.log("podes ir a Japon");
            }

        }
    } else if (presupuesto >= 300000) {
        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                console.log("podes ir a Alemania");
            } else if (i === 1) {
                console.log("podes ir a Inglaterra");
            } else {
                console.log("podes ir a Egipto");
            }

        }
    } else if (presupuesto >= 100000) {
        for (let i = 0; i < 3; i++) {
            if (i === 0) {
                console.log("podes ir a Brasil");
            } else if (i === 1) {
                console.log("podes ir a Uruguay");
            } else {
                console.log("podes ir a Chile");
            }

        }
    } else {
        console.log("Suerte yendo a la esquina.")
    }

} else {
    console.log("ok");
}