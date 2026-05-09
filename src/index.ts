import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { prettyJSON } from 'hono/pretty-json'
import EventEmitter from 'node:events'
import { InputUserSendInvitation, MessageNotification } from './shared/types.js'

export const events = new EventEmitter()
const app = new Hono()

serve({
  fetch: app.fetch,
  port: 3000
})



console.log('http://localhost:3000');

app.get('/', (c) => c.text('Welcome to send notification'))

app.use(prettyJSON())


app.post('/notify', async (c) => {
  const body = await c.req.json() as MessageNotification
  events.emit('notify.business', body)
  return c.json({ ok: true })
})

app.post('/alert', async (c) => {
  const body = await c.req.json()
  events.emit('notify.allChannels', body)
  return c.json({ ok: true })
})


export default app