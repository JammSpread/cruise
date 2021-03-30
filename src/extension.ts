import * as vscode from "vscode"
import PortsTreeDataProvider from "./treeDataProvider"
import PortsTreeItem from "./treeItem"
import Util from "./util"

function register() {
	vscode.commands.registerCommand("cruise.tunnel", async () => {
		const port = await vscode.window.showInputBox({
			ignoreFocusOut: true,
			placeHolder: "Port",
			prompt: "Expose a Port",
			validateInput: input => {
				// Hint to the user that the input is invalid if it is not a number.
				if (!Util.isNumber(input)) {
					return "Specified port must be a number."
				}
				// Ensure that the port is above 0.
				if (+input <= 0) {
					return "The port must be above 0."
				}
			},
		})
		port && (await PortsTreeDataProvider.provider.add(+port))
	})

	vscode.commands.registerCommand(
		"cruise.close",
		(portsTreeItem: PortsTreeItem) => portsTreeItem.dispose(),
	)
}

export function activate(context: vscode.ExtensionContext) {
	register()
}
