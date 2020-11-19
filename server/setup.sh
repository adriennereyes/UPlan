#!/bin/bash

psql -U postgres -f createdb.sql
psql -U postgres -d myapp -f setup.sql
echo Press any key to exit
read