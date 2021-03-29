import * as vscode from "vscode"
import PortsTreeItem from "./treeItem"

export default class PortsTreeDataProvider
	implements vscode.TreeDataProvider<PortsTreeItem> {
	private readonly children = new Set<PortsTreeItem>()
	public static provider = new PortsTreeDataProvider()
	public static refresh() {
		vscode.window.registerTreeDataProvider("cruise.ports", this.provider)
	}
	add(port: number) {
		this.children.add(new PortsTreeItem(port))
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
