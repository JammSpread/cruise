import * as vscode from "vscode"
import Util from "./util"

function register() {
	vscode.commands.registerCommand("cruise.tunnel", () => {
		vscode.window.showInputBox({
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
	})
}

export function activate(context: vscode.ExtensionContext) {
	register()
}
