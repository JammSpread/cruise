import * as vscode from "vscode"
import PortsTreeDataProvider from "./treeDataProvider"
import Util from "./util"

function register() {
	vscode.commands.registerCommand("cruise.tunnel", async () => {
		const port = await vscode.window.showInputBox({
			ignoreFocusOut: true,
			placeHolder: "Port",
			prompt: "Expose a Port",
			validateInput: input => {
				// Hint to the user that the input is invalid if it is not a number.
				return !Util.isNumber(input)
					? "Specified port must be a number."
					: undefined
			},
		})
		port && PortsTreeDataProvider.provider.add(parseInt(port))
	})
}

export function activate(context: vscode.ExtensionContext) {
	register()
}
