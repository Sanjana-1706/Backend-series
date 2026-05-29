import express from "express";

const app = express();

app.on("error", () => {
    console.log("ERROR", error);
    throw error
})

export { app };
