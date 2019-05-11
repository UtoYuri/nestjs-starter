import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, prettyPrint } = format;
const logger = createLogger({
  transports: [new transports.Console()],
  format: combine(label({ label: 'Request' }), timestamp(), prettyPrint()),
});

export function LoggerMiddleware(req: Request, res: Response, next: any) {
  logger.info(`Request ${req.url}, UA ${req.headers['user-agent']}`);
  next();
}
