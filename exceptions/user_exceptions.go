package exceptions

import "fmt"

func UserAlreadyExists(UserName string) string {
	return fmt.Sprintf("%s This user name is already taken", UserName)
}

func UserNotFound() string {
	return "User not found"
}
