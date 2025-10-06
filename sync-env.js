import { execSync } from "child_process";

const envChoice = process.env.DIDACTA_ENV === "production"
    ? "production"
    : "development";

try {
    if (envChoice === "production") {
        console.log("Descargando .env desde S3...");
        execSync(`aws s3 cp s3://didacta/self/.env .env`, {
            stdio: "inherit",
        });
        console.log("Archivo .env (producción) sincronizado.");
    } else {
        console.log("Descargando .env.development desde S3...");
        execSync(
            `aws s3 cp s3://didacta/self/.env.development .env.development`,
            { stdio: "inherit" }
        );

        console.log("Descargando también .env de producción desde S3...");
        execSync(`aws s3 cp s3://didacta/self/.env .env`, {
            stdio: "inherit",
        });

        console.log("Archivos .env y .env.development sincronizados (desarrollo).");
    }
} catch (err) {
    console.error("Error descargando archivos .env:", err.message);
    process.exit(1);
}
