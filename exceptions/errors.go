package exceptions

type Error struct {
	Code    int
	Message string
}

func (e *Error) Error() string {
	return e.Message
}

func NewError(Code int, Message string) *Error {
	return &Error{
		Code:    Code,
		Message: Message,
	}
}
