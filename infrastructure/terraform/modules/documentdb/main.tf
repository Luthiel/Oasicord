variable "environment" { type = string }
variable "project" { type = string }
variable "vpc_id" { type = string }
variable "subnet_ids" { type = list(string) }

resource "aws_docdb_subnet_group" "main" {
  name       = "${var.project}-${var.environment}-docdb-subnet"
  subnet_ids = var.subnet_ids
}

resource "aws_docdb_cluster" "main" {
  cluster_identifier      = "${var.project}-${var.environment}-docdb"
  engine                  = "docdb"
  master_username         = "docdbadmin"
  master_password         = "changeme123"
  db_subnet_group_name    = aws_docdb_subnet_group.main.name
  vpc_security_group_ids  = [aws_security_group.docdb.id]
  skip_final_snapshot     = true
}

resource "aws_docdb_cluster_instance" "main" {
  count              = 1
  identifier         = "${var.project}-${var.environment}-docdb-${count.index}"
  cluster_identifier = aws_docdb_cluster.main.id
  instance_class     = "db.r5.large"
}

resource "aws_security_group" "docdb" {
  name_prefix = "${var.project}-${var.environment}-docdb-"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = 27017
    to_port     = 27017
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/16"]
  }
}

output "endpoint" {
  value = aws_docdb_cluster.main.endpoint
}
