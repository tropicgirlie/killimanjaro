#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

stage_dir="$(mktemp -d)"
trap 'rm -rf "$stage_dir"' EXIT

cp index.html 404.html "$stage_dir/"
mkdir "$stage_dir/images"
cp images/*.mp4 images/*.jpg images/*.webp "$stage_dir/images/"

wrangler pages deploy "$stage_dir" --project-name mounjarotokillimanjaro --branch main
