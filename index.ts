import { ChemicalServer } from "chemicaljs";
import express from "express";
import fs from "fs";
import { execSync } from "child_process";
import chalk from "chalk";
import path from "path";
import { Request, Response } from "express";
import pages from "./src/pages.json";
import themes from "./src/themes.json";
import cors from 'cors';
const chemical = new ChemicalServer();
import http from "http";
const __dirname = path.resolve();

if (!fs.existsSync("build")) {
	console.log("No build found. Building...");
	execSync("npm run build");
	console.log("Built!");
}

const port = process.env.PORT || 8080;

chemical.app.use(express.static("build"));

chemical.error((req: Request, res: Response) => {
	if (pages.includes(req.url)) {
		return res.sendFile(__dirname + "/build/index.html");
	} else {
		return res.status(404).sendFile(__dirname + "/build/index.html");
	}
});

chemical.listen(port, () => {
	const theme = chalk.hex(
		themes.filter((theme) => (theme.id = "default"))[0].theme.primary
	);
	console.log(`${chalk.bold(theme("Metallic"))}`);

	console.log(`- ${chalk.bold("Local:")} http://localhost:${port}`);

	if (process.env.REPL_SLUG && process.env.REPL_OWNER) {
		console.log(
			`- ${chalk.bold("Replit:")} https://${process.env.REPL_SLUG}.${
				process.env.REPL_OWNER
			}.repl.co`
		);
	}

	if (process.env.HOSTNAME && process.env.GITPOD_WORKSPACE_CLUSTER_HOST) {
		console.log(
			`- ${chalk.bold("Gitpod:")} https://${port}-${process.env.HOSTNAME}.${
				process.env.GITPOD_WORKSPACE_CLUSTER_HOST
			}`
		);
	}
});




const server = http.createServer((req, res) => {
res.header('Access-Control-Allow-Origin', '*');
  // Set the response header
  res.writeHead(200, {'Content-Type': 'application/json'});

  // Create a data object to send
  const data = {
    message: 'Hello, client!',
    timestamp: new Date()
  };

  // Send the data as a JSON string
  res.end(JSON.stringify(data));
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});



