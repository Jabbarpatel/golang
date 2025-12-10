package constants

var STATUS = struct {
	SUCCESS string
	ERROR   string
}{
	SUCCESS: "success",
	ERROR:   "error",
}

var ROLES = struct {
	ADMIN     string
	USER      string
	DEVELOPER string
}{
	ADMIN:     "admin",
	USER:      "user",
	DEVELOPER: "developer",
}

var STATUS_CODES = struct {
	OK                   int
	CREATED              int
	BAD_REQUEST          int
	UNAUTHORIZED         int
	FORBIDDEN            int
	NOT_FOUND            int
	CONFLICT             int
	UNPROCESSABLE_ENTITY int
	INTERNAL_SERVER      int
}{
	OK:                   200,
	CREATED:              201,
	BAD_REQUEST:          400,
	UNAUTHORIZED:         401,
	FORBIDDEN:            403,
	NOT_FOUND:            404,
	CONFLICT:             409,
	UNPROCESSABLE_ENTITY: 422,
	INTERNAL_SERVER:      500,
}
