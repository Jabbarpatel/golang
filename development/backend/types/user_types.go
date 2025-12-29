package types

type GetUsersResponse struct {
	ID          int    `json:"ID"`
	UserName    string `json:"UserName"`
	CreatedBy   string `json:"CreatedBy"`
	CreatedAt   string `json:"CreatedAt"`
	ContactInfo string `json:"ContactInfo"`
	IsActive    bool   `json:"IsActive"`
	Role        string `json:"Role"`
}

type CreateUserRequestElements struct {
	UserName    string `json:"UserName"`
	Password    string `json:"Password"`
	CreatedBy   string `json:"CreatedBy"`
	ContactInfo string `json:"ContactInfo"`
	RoleID      int    `json:"RoleID"`
}

type UpdateUserRequestElement struct {
	ID          int    `json:"ID"`
	UserName    string `json:"UserName"`
	ContactInfo string `json:"ContactInfo"`
	Role        string `json:"Role"`
	Active      int    `json:"Active"`
}
