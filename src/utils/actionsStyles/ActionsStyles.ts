import { IActionsVariablesSize } from 'components/shared/actions/actionsVariables.interface'

export const actionsStyles = ({ size }: IActionsVariablesSize) => {
  return size === 'medium'
    ? { height: '28px', width: '28px' }
    : { height: '21px', width: '21px' }
}
