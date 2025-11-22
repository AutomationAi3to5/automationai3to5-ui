/**
 * Centralized Icon Exports
 * Auto-loads all SVG icons using dynamic imports with vite-plugin-svgr
 * 
 * Usage:
 * import { HomeIcon, SettingsIcon } from '@/icons'
 * 
 * Or with category:
 * import * as navigationIcons from '@/icons/navigation'
 * const { HomeIcon } = navigationIcons
 */

// Navigation Icons
export { default as HomeIcon } from './navigation/home.svg?react'
export { default as MenuIcon } from './navigation/menu.svg?react'
export { default as CloseIcon } from './navigation/close.svg?react'
export { default as SearchIcon } from './navigation/search.svg?react'
export { default as SettingsIcon } from './navigation/settings.svg?react'
export { default as BackIcon } from './navigation/back.svg?react'
export { default as ForwardIcon } from './navigation/forward.svg?react'

// Actions Icons
export { default as DownloadIcon } from './actions/download.svg?react'
export { default as UploadIcon } from './actions/upload.svg?react'
export { default as EditIcon } from './actions/edit.svg?react'
export { default as DeleteIcon } from './actions/delete.svg?react'
export { default as CopyIcon } from './actions/copy.svg?react'
export { default as SaveIcon } from './actions/save.svg?react'
export { default as RefreshIcon } from './actions/refresh.svg?react'

// Users Icons
export { default as UserIcon } from './users/user.svg?react'
export { default as UsersIcon } from './users/users.svg?react'
export { default as ProfileIcon } from './users/profile.svg?react'
export { default as AvatarIcon } from './users/avatar.svg?react'
export { default as TeamIcon } from './users/team.svg?react'

// Communication Icons
export { default as MailIcon } from './communication/mail.svg?react'
export { default as MessageIcon } from './communication/message.svg?react'
export { default as ChatIcon } from './communication/chat.svg?react'
export { default as SendIcon } from './communication/send.svg?react'
export { default as PhoneIcon } from './communication/phone.svg?react'

// Feedback Icons
export { default as AlertIcon } from './feedback/alert.svg?react'
export { default as SuccessIcon } from './feedback/success.svg?react'
export { default as WarningIcon } from './feedback/warning.svg?react'
export { default as ErrorIcon } from './feedback/error.svg?react'
export { default as InfoIcon } from './feedback/info.svg?react'
export { default as HelpIcon } from './feedback/help.svg?react'

// Media Icons
export { default as ImageIcon } from './media/image.svg?react'
export { default as VideoIcon } from './media/video.svg?react'
export { default as CameraIcon } from './media/camera.svg?react'
export { default as PlayIcon } from './media/play.svg?react'
export { default as PauseIcon } from './media/pause.svg?react'

// Time Icons
export { default as ClockIcon } from './time/clock.svg?react'
export { default as CalendarIcon } from './time/calendar.svg?react'
export { default as WatchIcon } from './time/watch.svg?react'
export { default as TimerIcon } from './time/timer.svg?react'

// Security Icons
export { default as LockIcon } from './security/lock.svg?react'
export { default as UnlockIcon } from './security/unlock.svg?react'
export { default as KeyIcon } from './security/key.svg?react'
export { default as ShieldIcon } from './security/shield.svg?react'
export { default as VerifiedIcon } from './security/verified.svg?react'

// Forms Icons
export { default as CheckboxIcon } from './forms/checkbox.svg?react'
export { default as RadioIcon } from './forms/radio.svg?react'
export { default as ToggleIcon } from './forms/toggle.svg?react'
export { default as SwitchIcon } from './forms/switch.svg?react'
export { default as InputIcon } from './forms/input.svg?react'
export { default as TextareaIcon } from './forms/textarea.svg?react'
export { default as SelectIcon } from './forms/select.svg?react'

/**
 * Category Imports (organized by folder)
 * 
 * Usage:
 * import * as navigation from '@/icons/navigation'
 * const { home, settings, menu } = navigation
 */

// Make individual category exports available too
export * as navigation from './navigation'
export * as actions from './actions'
export * as users from './users'
export * as communication from './communication'
export * as feedback from './feedback'
export * as media from './media'
export * as time from './time'
export * as security from './security'
export * as forms from './forms'
