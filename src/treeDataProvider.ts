import * as vscode from "vscode"
import PortsTreeItem from "./treeItem"

export default class PortsTreeDataProvider
	implements vscode.TreeDataProvider<PortsTreeItem> {
	getTreeItem(
		element: PortsTreeItem,
	): vscode.TreeItem | Thenable<vscode.TreeItem> {
		return element
	}
	getChildren(): PortsTreeItem[] {
		return
	}
}
