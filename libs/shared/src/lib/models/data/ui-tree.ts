import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { Observable, of as observableOf } from 'rxjs';
import { path } from 'ramda';

export abstract class DataNode<T> {
	constructor(public display: string, public data: T) {}
}

export class FlatDataNode<T> extends DataNode<T> {
	public expandable: boolean;
	public children: FlatDataNode<T>[];

	constructor(
		public display: string,
		public data: T,
		_expandable: boolean,
		public level: number
	) {
		super(display, data);
		this.expandable = _expandable;
	}
}

export class UITreeControl<T> extends FlatTreeControl<FlatDataNode<T>> {
	constructor() {
		super(
			(node: FlatDataNode<T>) => node.level,
			(node: FlatDataNode<T>) => node.expandable
		);
	}
}

export class UITreeFlattener<T> extends MatTreeFlattener<
	FlatDataNode<T>,
	FlatDataNode<T>
> {
	constructor() {
		super(
			(node: FlatDataNode<T>, level: number) =>
				new FlatDataNode<T>(
					node.display,
					node.data,
					node.children && node.children.length > 0,
					level
				),
			(node: FlatDataNode<T>) => node.level,
			(node: FlatDataNode<T>) => node.expandable,
			(node: FlatDataNode<T>): Observable<FlatDataNode<T>[]> =>
				observableOf(node.children)
		);
	}
}

export class UITreeDataSource<T> extends MatTreeFlatDataSource<
	FlatDataNode<T>,
	FlatDataNode<T>
> {
	hasChild = (_: number, _nodeData: FlatDataNode<T>) => {
		console.log('hasChild', _, _nodeData);
		return _nodeData.level ===0 || !!_nodeData.expandable;
	};

	isEmpty = (_: number, _nodeData: FlatDataNode<T>) => {
		return _nodeData.level > 0 && !!_nodeData.expandable === false && _nodeData.display === 'empty';
	};

	constructor(_treeControl) {
		super(_treeControl, new UITreeFlattener());
	}
}

// Build tree Nodes from a source Object

export function buildDataNodeTree<T, N extends FlatDataNode<T>, S>(
	treeNode: { new (): N },
	mapDataFn = (key: string, level: number, value: S): T => value as any,
	mapDepth: number = Infinity
) {
	const mapTo = (source: S, level: number) =>
		Object.keys(source).reduce<Array<N>>(
			(accumulator, key) => {
				const value: S = source[key];
				const node = new treeNode();
				node.display = key;

				if (value != null) {
					if (typeof value === 'object' && level < mapDepth) {
						node.data = mapDataFn(key, level, value);
						node.children = mapTo(value, level + 1);
					} else {
						node.data = mapDataFn(key, level, value);
					}
				}

				node.level = level;
				node.expandable = path(['children', 'length'], node) > 0;

				return accumulator.concat(node);
			},
			[]
		);

	return mapTo;
}
