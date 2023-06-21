import { IActionsVariablesSize } from 'components/shared/actions/actionsVariables.interface'

export const actionsStyles = ({ size }: IActionsVariablesSize) => {
	return size === 'medium'
		? { width: '28px', height: '28px' }
		: { width: '21px', height: '21px' }
}
