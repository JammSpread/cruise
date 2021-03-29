import * as vscode from "vscode"

export default class PortsTreeItem extends vscode.TreeItem {
	constructor(port: number) {
		super(port.toString(), vscode.TreeItemCollapsibleState.None)
	}
}
