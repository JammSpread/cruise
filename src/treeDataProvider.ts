import * as vscode from "vscode"
import PortsTreeItem from "./treeItem"

export default class PortsTreeDataProvider
	implements vscode.TreeDataProvider<PortsTreeItem> {
	private readonly children = new Set<PortsTreeItem>()
	public static readonly provider = new PortsTreeDataProvider()

	public static refresh() {
		vscode.window.registerTreeDataProvider("cruise.ports", this.provider)
	}

	async add(port: number) {
		const portsTreeItem = new PortsTreeItem(port)
		await portsTreeItem.tunnel()
		this.children.add(portsTreeItem)
		PortsTreeDataProvider.refresh()
	}

	close(portTreeItem: PortsTreeItem) {
		this.children.delete(portTreeItem)
		PortsTreeDataProvider.refresh()
	}

	getTreeItem(
		element: PortsTreeItem,
	): vscode.TreeItem | Thenable<vscode.TreeItem> {
		return element
	}

	getChildren(): PortsTreeItem[] {
		return Array.from(this.children)
	}
}
