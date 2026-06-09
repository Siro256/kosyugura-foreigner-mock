import { toSSG } from "hono/ssg"
import app from "./src/index"
import fs from "node:fs/promises"

toSSG(app, fs, {
	dir: "./dist"
})
