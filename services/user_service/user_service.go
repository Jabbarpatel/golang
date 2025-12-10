package user_service

import (
	"backend/controllers"
	"backend/exceptions"
	"backend/utils"
)

func CreateUser(UserName string, Password string, CreatedBy string, ContactInfo string, RoleID int) error {
	User := controllers.GetUserByName(UserName)
	if User != nil {
		return exceptions.UserAlreadyExists(UserName)
	}

	ValidRole := controllers.GetRoleById(RoleID)
	if ValidRole == nil {
		return exceptions.InvalidRole()
	}

	HashedPassword := utils.GenerateHashString(Password)
	controllers.CreateUser(UserName, HashedPassword, CreatedBy, ContactInfo, ValidRole.Role)
	return nil
}

func DeactivateUser(ID int) error {
	User := controllers.GetUserByID(ID)
	if User == nil {
		return exceptions.UserNotFound()
	}
	controllers.DeactivateUser(ID)
	return nil
}

func ReactivateUser(ID int) error {
	User := controllers.GetUserByID(ID)
	if User == nil {
		return exceptions.UserNotFound()
	}
	controllers.ReactivateUser(ID)
	return nil
}
