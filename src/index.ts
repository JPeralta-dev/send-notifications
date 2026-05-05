import { PublisherNotifycation } from "./observer/publisherNotification.js";
import { ObserverNotification } from "./observer/concrete/observerNotification.js";
import { MessageNotification } from "./shared/types.js";
import { logger } from "./observer/logger.js";

// 1. Crear el subject (publisher)
const publisher = new PublisherNotifycation();

// 2. Crear UN solo observer (él delega al strategy correcto por tipo)
const observer = new ObserverNotification();

// 3. Suscribirse — UN solo observer
publisher.addObserver(observer);

logger.info("=== Iniciando prueba de notificaciones ===");

// --- NOTIFICACIONES INDIVIDUALES ---

// Push
const pushMsg: MessageNotification = {
  from: "system@myapp.com",
  to: "device-token-abc123",
  body: "Tienes una nueva actualización",
  type: "push",
};

logger.info("→ Enviando PUSH...");
publisher.notificationBusiness(pushMsg);

// SMS
const smsMsg: MessageNotification = {
  from: "+1234567890",
  to: "+5491112345678",
  body: "Tu código de verificación es 4821",
  type: "sms",
};

logger.info("→ Enviando SMS...");
publisher.notificationBusiness(smsMsg);

// Email
const emailMsg: MessageNotification = {
  from: "noreply@myapp.com",
  to: "usuario@email.com",
  body: "Bienvenido a la plataforma!",
  type: "email",
  meta: { subject: "Bienvenido a MyApp" },
};

logger.info("→ Enviando EMAIL...");
publisher.notificationBusiness(emailMsg);

// --- ALERTA: enviar a TODOS los canales ---

setTimeout(() => {
  logger.info("");
  logger.info("=== Probando ALERTA (todos los canales) ===");

  publisher.alertAllChannels({
    from: "alert@myapp.com",
    to: "admin@myapp.com",
    body: "🚨 SERVIDOR CAÍDO — Acción inmediata requerida",
  });

  // Dar tiempo a los setTimeout de SMS y Email
  setTimeout(() => {
    logger.info("=== Prueba finalizada ===");
  }, 3000);
}, 1000);
