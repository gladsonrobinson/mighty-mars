#!/usr/bin/env bash

set -e
set -o pipefail
set -v

./ssg-build.sh
./inject-netlify-cms.js public
