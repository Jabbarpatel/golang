package exceptions

import "backend/constants"

func InvalidCredentials() *Error {
	return NewError(constants.STATUS_CODES.CONFLICT, "Invalid user name or password")
}

func InvalidRole() *Error {
	return NewError(constants.STATUS_CODES.CONFLICT, "Invalid Role")
}
