import { logger } from "../observer/logger.js"

export const loggerMiddelware = async (action: () => Promise<any>) => {
    const start = Date.now()

    try {
        const result = await action()
        logger.info(`✅ Éxito en ${Date.now() - start}ms`)
        return result
    } catch (error) {
        logger.error(`❌ Falló después de ${Date.now() - start}ms`)
        return error
    }
}