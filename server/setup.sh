#!/bin/bash

echo Enter your postgres username
read username

psql -U $username -f createdb.sql
psql -U $username -d myapp -f setup.sql

echo Press any key to exit
read