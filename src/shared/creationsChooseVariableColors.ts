interface ICreationChooseStyles {
  inActiveButton: {
    backgroundColor: string
    color: string
  }
  activeButton: {
    backgroundColor: string
    color: string
  }
  wrapperBackground: string
}

export const creationGrayColor: ICreationChooseStyles = {
  inActiveButton: { backgroundColor: 'transparent', color: '#000000' },
  activeButton: { backgroundColor: '#636366', color: '#FFFFFF' },
  wrapperBackground: '#7676803D'
}

export const creationDefaultColor: ICreationChooseStyles = {
  inActiveButton: { backgroundColor: 'transparent', color: '#000000' },
  activeButton: { backgroundColor: '#FFFFFF', color: '#000000' },
  wrapperBackground: '#f8f1f0'
}

export function returnStylesByСondition(
  condition: boolean,
  colors: ICreationChooseStyles
) {
  return condition
    ? {
        backgroundColor: colors.activeButton.backgroundColor,
        color: colors.activeButton.color
      }
    : {
        backgroundColor: colors.inActiveButton.backgroundColor,
        color: colors.inActiveButton.color
      }
}
