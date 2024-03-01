import * as vscode from 'vscode';
import logger from 'pino';

export function getVariable(name: string) {
  const log = logger();

  const all = vscode.workspace.getConfiguration();

  const allAsJSON = JSON.parse(JSON.stringify(all)); // the key line

  if (allAsJSON.hasOwnProperty('fleece')) {
    const fleeceSettings = allAsJSON.fleece;
    log.info(fleeceSettings, 'fleeceSettings');

    return fleeceSettings[name];
  }
  return false;
}
