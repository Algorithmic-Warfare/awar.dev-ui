import { ComponentType } from 'react'

import LogoPage from './LogoPage'
import WordmarkPage from './WordmarkPage'
import LogoLockupPage from './LogoLockupPage'
import FigletTextPage from './FigletTextPage'
import StackPage from './StackPage'
import InlinePage from './InlinePage'
import GridPage from './GridPage'
import TextPage from './TextPage'
import ButtonPage from './ButtonPage'
import InputPage from './InputPage'
import BadgePage from './BadgePage'
import DividerPage from './DividerPage'
import KbdPage from './KbdPage'
import CardPage from './CardPage'
import FramePage from './FramePage'
import AlertPage from './AlertPage'
import TablePage from './TablePage'
import ActionBarPage from './ActionBarPage'
import ListPage from './ListPage'
import ModalPage from './ModalPage'
import DropdownPage from './DropdownPage'
import TooltipPage from './TooltipPage'
import PopoverPage from './PopoverPage'
import TreeViewPage from './TreeViewPage'

export const pages: Record<string, ComponentType> = {
  'logo': LogoPage,
  'wordmark': WordmarkPage,
  'logo-lockup': LogoLockupPage,
  'figlet-text': FigletTextPage,
  'stack': StackPage,
  'inline': InlinePage,
  'grid': GridPage,
  'text': TextPage,
  'button': ButtonPage,
  'input': InputPage,
  'badge': BadgePage,
  'divider': DividerPage,
  'kbd': KbdPage,
  'card': CardPage,
  'frame': FramePage,
  'alert': AlertPage,
  'table': TablePage,
  'action-bar': ActionBarPage,
  'list': ListPage,
  'modal': ModalPage,
  'dropdown': DropdownPage,
  'tooltip': TooltipPage,
  'popover': PopoverPage,
  'tree-view': TreeViewPage,
}
