package controllers

import (
	"backend/config"
	"backend/models"
	"backend/types"
)

func GetAllUsers() []types.GetAllUsersResponse {
	var users []types.GetAllUsersResponse
	config.DB.Table("users").Select("id", "user_name").Find(&users)
	return users
}

func GetUserById(id int) types.GetAllUsersResponse {
	var user types.GetAllUsersResponse
	config.DB.Table("users").Select("id", "user_name").Where(&models.Users{ID: id}).Find(&user)
	return user
}
