import app from "./app";

const port = process.env.PORT;
app.listen(port);
app.keepAliveTimeout = 61 * 1000;
