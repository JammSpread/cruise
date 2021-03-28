import * as vscode from "vscode"
import * as v8 from "v8"

v8.serialize(v8.deserialize(x))

export function activate(context: vscode.ExtensionContext) {}
