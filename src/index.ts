import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { prettyJSON } from 'hono/pretty-json'
import EventEmitter from 'node:events'
import { InputUserSendInvitation, MessageNotification } from './shared/types.js'
import { loggerMiddelware } from './shared/middlwareLogger.js'
import { logger } from 'hono/logger'
import { EmitterNotification } from './shared/events.js'

export const events = new EventEmitter()
const app = new Hono()

serve({
  fetch: app.fetch,
  port: 3000
})



console.log('http://localhost:3000');

app.get('/', (c) => c.text('Welcome to send notification'))

app.use(prettyJSON())
app.use(logger())

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


events.on('notify.business', (msg: MessageNotification) => {

  EmitterNotification.notificationBusiness(msg)
});

events.on('notify.allChannels', (msg: MessageNotification) => {

  EmitterNotification.alertAllChannels(msg)
})
export default app