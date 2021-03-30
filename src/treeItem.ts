import * as localtunnel from "localtunnel"
import * as vscode from "vscode"
import PortsTreeDataProvider from "./treeDataProvider"

export default class PortsTreeItem extends vscode.TreeItem {
	public readonly contextValue = "PortsTreeItem"
	private _tunnel: localtunnel.Tunnel

	constructor(public readonly port: number) {
		super(port.toString(), vscode.TreeItemCollapsibleState.None)
	}

	async tunnel() {
		this._tunnel = await localtunnel(this.port)
		this.command = {
			title: "",
			command: "vscode.open",
			arguments: [vscode.Uri.parse(this._tunnel.url)],
		}
	}

	dispose() {
		PortsTreeDataProvider.provider.close(this)
		this._tunnel.close()
	}
}
