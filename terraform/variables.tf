variable "app_service_name" {
  description = "The name of the Azure App Service"
  type        = string
}

variable "resource_group_name" {
  description = "The name of the Azure Resource Group"
  type        = string
}

variable "location" {
  description = "The Azure region where resources will be created"
  type        = string
  default     = "East US"
}

variable "sku" {
  description = "The SKU for the App Service Plan"
  type        = string
  default     = "F1"  # Free tier
}