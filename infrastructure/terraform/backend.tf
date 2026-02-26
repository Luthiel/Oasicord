terraform {
  backend "s3" {
    bucket         = "fashion-assistant-tfstate"
    key            = "infrastructure/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "fashion-assistant-tflock"
    encrypt        = true
  }
}
