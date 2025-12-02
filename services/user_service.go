package services

import (
	"backend/controllers"
	"backend/exceptions"
	"backend/types"
)

func GetUserById(id int) (types.GetAllUsersResponse, string) {
	user := controllers.GetUserById(id)
	if user.ID == 0 {
		return types.GetAllUsersResponse{}, exceptions.UserNotFound
	}
	return user, ""
}
