import * as vscode from "vscode"

export default class PortsTreeItem extends vscode.TreeItem {
	public readonly contextValue = "PortsTreeItem"
	constructor(public readonly port: number) {
		super(port.toString(), vscode.TreeItemCollapsibleState.None)
	}
}
