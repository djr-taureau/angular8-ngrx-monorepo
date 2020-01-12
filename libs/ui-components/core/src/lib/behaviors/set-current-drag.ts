export function setCurrentDrag(draggedGoal, event, icon) {
	event.dataTransfer.setDragImage(icon, 17.5, 17.5);
	event.dataTransfer.setData('marker', draggedGoal);
}
