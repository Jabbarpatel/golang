package controllers

import (
	"backend/config"
	"backend/models"
)

func GetRoleById(ID int) *models.Roles {
	var Role models.Roles
	Result := config.DB.Table("roles").Where(&models.Roles{ID: ID}).First(&Role)
	if Result.RowsAffected == 0 {
		return nil
	}
	return &Role
}
