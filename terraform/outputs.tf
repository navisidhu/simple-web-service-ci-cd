output "app_service_url" {
  value = azurerm_app_service.as.default_site_hostname
}

output "app_service_name" {
  value = azurerm_app_service.as.name
}
