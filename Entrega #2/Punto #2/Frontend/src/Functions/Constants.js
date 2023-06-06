const { REACT_APP_NODE_ENV } = process.env



export const ROL_TYPES = [
  { name: 'Administrador', value: 'Administrador' },
  { name: 'Usuario', value: 'Usuario' },
]

// SERVICES
export const HOST = 
  REACT_APP_NODE_ENV === 'production' ? 
    process.env.REACT_APP_HOST_PROD :
    REACT_APP_NODE_ENV === 'qa' ? 
      process.env.REACT_APP_HOST_QA :
        process.env.REACT_APP_HOST_DEV
export const IMAGE_HOST = 
  REACT_APP_NODE_ENV === 'production' ? 
    process.env.REACT_APP_IMAGE_HOST_PROD :
    REACT_APP_NODE_ENV === 'qa' ? 
      process.env.REACT_APP_IMAGE_HOST_QA :
        process.env.REACT_APP_IMAGE_HOST_DEV


export const SENDAUDIO = 'procesar-audio'

// ALERTS
export const MANDATORY_MESSAGE =
  'Verifique que ha llenado todos los campos obligatorios.'
export const ERROR_MESSAGE =
  'Ingrese un archivo de audio.'
export const EMAIL_MESSAGE =
  'El formato del correo electrónico no es válido. Por favor verifique.'
export const NO_ITEM_MESSAGE =
  'No hay registros disponibles para esta selección.'
export const INVALID_STRING_MESSAGE =
  'Alguno de los campos ingresados supera la extensión permitida o se detectó un patrón inválido. Por favor revise los campos.'
export const ALERT_TIMEOUT = 6000


export const CONFIRM_DELETE_USER = "Se eliminara permanentemente el usuario"
export const CONFIRM_DELETE_CATEGORY = "Se eliminara permanentemente la categoría"

export const CONFIRM_DELETE_LIST = "Se liminará permanentemente la lista"

// ERRORS
export const NO_ITEMS_ERROR = 'No hay registros en el sistema.'
export const INVALID_LOGIN_ERROR = 'Error en el usuario o contraseña'
export const INACTIVE_LOGIN_ERROR = 'Error el usuario se encuentra inactivo.'
export const USED_EMAIL_ERROR = 'El correo electrónico ya se encuentra en uso.'
export const CATEGORY_TYPE_EXIST_ERROR = 'Esta categoría ya existe.'

export const NO_EMAIL_ERROR =
  'El correo electrónico no se encuentra registrado.'
export const USED_PAGE_ERROR =
  'La página ya existe.'

// OTHERS
export const DAY_IN_MS = 1000 * 60 * 60 * 24
export const DATE_OPTIONS = {
  weekday: 'short',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}
