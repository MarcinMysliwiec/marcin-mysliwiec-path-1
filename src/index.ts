import {server} from "@/server";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

/**
 * Listening to the app and running it on the specified port.
 * @param {number} PORT - The port number on which the server will listen.
 * @returns {void}
 */
server.listen(PORT, async (): Promise<void> => {
  console.log(`Listening on port ${PORT}`);
});
