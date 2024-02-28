import vscode from 'vscode';

export function getVariable(name: string) {
  const all = vscode.workspace.getConfiguration();

  const allAsJSON = JSON.parse(JSON.stringify(all)); // the key line

  if (allAsJSON.hasOwnProperty('fleece')) {
    const fleeceSettings = allAsJSON.fleece;

    return fleeceSettings[name];
  }
  return false;
}
