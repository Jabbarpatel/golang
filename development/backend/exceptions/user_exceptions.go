package exceptions

import (
	"fmt"

	"backend/constants"
)

func UserAlreadyExists(UserName string) *Error {
	return NewError(
		constants.STATUS_CODES.CONFLICT,
		fmt.Sprintf("%s This user name is already taken", UserName),
	)
}

func UserNotFound() *Error {
	return NewError(constants.STATUS_CODES.CONFLICT, "User not found")
}
