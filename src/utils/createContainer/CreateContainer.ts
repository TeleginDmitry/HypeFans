interface ICreateContainer {
	id: string
	mountNode?: HTMLElement
}

const createContainer = ({
	id,
	mountNode = document.body,
}: ICreateContainer) => {
	if (document.getElementById(id)) return

	const portalContainer = document.createElement('div')

	portalContainer.setAttribute('id', id)
	mountNode.appendChild(portalContainer)
}


export default createContainer
