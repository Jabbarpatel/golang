package types

type GetAllUsersResponse struct {
	ID       int    `json:"ID"`
	UserName string `json:"UserName"`
}

type CreateUserRequestElements struct {
	UserName    string `json:"UserName"`
	Password    string `json:"Password"`
	CreatedBy   string `json:"CreatedBy"`
	ContactInfo string `json:"ContactInfo"`
	RoleID      int    `json:"RoleID"`
}

type UpdateUserRequestElement struct {
	ID          string `json:"ID"`
	UserName    string `json:"UserName"`
	ContactInfo string `json:"ContactInfo"`
	RoleID      int    `json:"RoleID"`
}
