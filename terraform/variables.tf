variable "subscription_id" {
  description = "The Azure subscription ID"
  type        = string
}
variable "project_prefix" {
  description = "Prefix for all resources"
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
