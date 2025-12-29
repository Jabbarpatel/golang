package user_service

import (
	"math"

	"backend/controllers"
	"backend/exceptions"
	"backend/types"
	"backend/utils"
)

func GetUsersByPage(Page int, PageSize int) ([]types.GetUsersResponse, int) {
	Offset := (Page - 1) * PageSize
	Users := controllers.GetUsersByPage(Offset, PageSize)
	TotalUsers := controllers.GetUsersCount()
	TotalPages := int(math.Ceil(float64(TotalUsers) / float64(PageSize)))
	return Users, TotalPages
}

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

func UpdateUser(ID int, UserName string, ContactInfo string, Role string, Active int) error {
	User := controllers.GetUserByID(ID)
	if User == nil {
		return exceptions.UserNotFound()
	}
	controllers.UpdateUser(ID, UserName, ContactInfo, Role, Active)
	return nil
}
