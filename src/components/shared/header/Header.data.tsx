import {
  SETTINGS_PAGE,
  MESSAGES_PAGE,
  CREATION_PAGE,
  PROFILE_PAGE,
  HOME_PAGE
} from 'configs/index.config'
import { CirclePlus, Message, User, Bell, Home } from 'icons-hypefans-lib'
import generateId from 'utils/generateId/GenerateId'

interface IHeaderItem {
  Icon: React.ReactElement
  id: number | string
  to: string
}

export const headerItems: IHeaderItem[] = [
  {
    Icon: <Home size='large' />,
    id: generateId(),
    to: HOME_PAGE
  },
  {
    Icon: <Bell size='large'></Bell>,
    to: `/${SETTINGS_PAGE}`,
    id: generateId()
  },
  {
    Icon: <CirclePlus size='large'></CirclePlus>,
    to: `/${CREATION_PAGE}`,
    id: generateId()
  },
  {
    Icon: <Message size='large'></Message>,
    to: `/${MESSAGES_PAGE}`,
    id: generateId()
  },
  {
    Icon: <User size='large'></User>,
    to: `/${PROFILE_PAGE}`,
    id: generateId()
  }
]
