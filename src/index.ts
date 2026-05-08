import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { prettyJSON } from 'hono/pretty-json'
import EventEmitter from 'node:events'

const event = new EventEmitter()
const app = new Hono()

serve({
  fetch: app.fetch,
  port: 3000
})



console.log('http://localhost:3000');

app.get('/', (c) => c.text('Welcome to send notification'))

app.use(prettyJSON())

app.post('/notify', async (c) => {

  const body = await c.req.json()

  console.log(body);


  return c.json({})
})



export default app