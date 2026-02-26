terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "vpc" {
  source      = "./modules/vpc"
  environment = var.environment
  project     = var.project_name
}

module "eks" {
  source       = "./modules/eks"
  environment  = var.environment
  project      = var.project_name
  vpc_id       = module.vpc.vpc_id
  subnet_ids   = module.vpc.private_subnet_ids
}

module "rds" {
  source       = "./modules/rds"
  environment  = var.environment
  project      = var.project_name
  vpc_id       = module.vpc.vpc_id
  subnet_ids   = module.vpc.private_subnet_ids
  db_password  = var.db_password
}

module "documentdb" {
  source       = "./modules/documentdb"
  environment  = var.environment
  project      = var.project_name
  vpc_id       = module.vpc.vpc_id
  subnet_ids   = module.vpc.private_subnet_ids
}

module "elasticache" {
  source       = "./modules/elasticache"
  environment  = var.environment
  project      = var.project_name
  vpc_id       = module.vpc.vpc_id
  subnet_ids   = module.vpc.private_subnet_ids
}

module "s3" {
  source      = "./modules/s3"
  environment = var.environment
  project     = var.project_name
}
