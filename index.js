const compareImages = require("resemblejs/compareImages");
const fs = require("mz/fs");

async function getDiff() {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255
            },
            errorType: "movement",
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true
        },
        scaleToSameSize: true,
        ignore: "antialiasing"
    };

    // Comparacion primera prueba
    const data1 = await compareImages(
        await fs.readFile("./screenshots/simple_spec.js/CapturaInicial (1).png"),
        await fs.readFile("./screenshots/simple_spec.js/CapturaPrueba01 (1).png"),
        options
    );

    await fs.writeFile("./Diferencia Prueba 1.png", data1.getBuffer());

    // Comparacion primera prueba
    const data2 = await compareImages(
        await fs.readFile("./screenshots/simple_spec.js/CapturaPrueba01 (1).png"),
        await fs.readFile("./screenshots/simple_spec.js/CapturaPrueba02 (1).png"),
        options
    );

    await fs.writeFile("./Diferencia Prueba 2.png", data2.getBuffer());

    // Comparacion primera prueba
    const data3 = await compareImages(
        await fs.readFile("./screenshots/simple_spec.js/CapturaPrueba02 (1).png"),
        await fs.readFile("./screenshots/simple_spec.js/CapturaPrueba03 (1).png"),
        options
    );

    await fs.writeFile("./Diferencia Prueba 3.png", data3.getBuffer());
}

getDiff();