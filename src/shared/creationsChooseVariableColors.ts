interface ICreationChooseStyles {
	wrapperBackground: string
	activeButton: {
		color: string
		backgroundColor: string
	}
	inActiveButton: {
		color: string
		backgroundColor: string
	}
}

export const creationGrayColor: ICreationChooseStyles = {
	wrapperBackground: '#7676803D',
	activeButton: { color: '#FFFFFF', backgroundColor: '#636366' },
	inActiveButton: { color: '#000000', backgroundColor: 'transparent' },
}

export const creationDefaultColor: ICreationChooseStyles = {
	wrapperBackground: '#f8f1f0',
	activeButton: { color: '#000000', backgroundColor: '#FFFFFF' },
	inActiveButton: { color: '#000000', backgroundColor: 'transparent' },
}

export function returnStylesByСondition(
	condition: boolean,
	colors: ICreationChooseStyles
) {
	return condition
		? {
				color: colors.activeButton.color,
				backgroundColor: colors.activeButton.backgroundColor,
		  }
		: {
				color: colors.inActiveButton.color,
				backgroundColor: colors.inActiveButton.backgroundColor,
		  }
}
