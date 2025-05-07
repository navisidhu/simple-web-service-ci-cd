module "naming" {
  source  = "Azure/naming/azurerm"
  prefix = [ var.project_prefix ]
  suffix = [ "test" ]
}
resource "azurerm_resource_group" "rg" {
  name     = module.naming.resource_group.name
  location = var.location
}

resource "azurerm_service_plan" "sp" {
  name                = module.naming.app_service_plan.name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku_name = "F1"
  os_type = "Linux"
}

resource "azurerm_app_service" "as" {
  name                = module.naming.app_service.name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  app_service_plan_id = azurerm_service_plan.sp.id
}

resource "azurerm_storage_account" "sa" {
  name                     = module.naming.storage_account.name
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier            = "Standard"
  account_replication_type = "LRS"
}
