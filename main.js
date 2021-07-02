import { createServer } from 'vite'
 
const viteServer = await createServer()
await viteServer.close()

// After this call, the process should end