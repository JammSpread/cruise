#!/bin/bash
extensions=(
    "*.ts"
    "*.json"
    "*.md"
    "*.yaml"
    "*.yml"
)
$(node_modules/.bin/prettier --write --loglevel=warn $(
  git ls-files -oc --exclude node_modules "${extensions[@]}"
))
