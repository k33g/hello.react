#!/bin/sh
# Copyright (c) 2014 Philippe Charrière aka @k33g_org
#
# All rights reserved. No warranty, explicit or implicit, provided.
#

pulldown require.js -o js/vendors

# === jQuery ======================
#   http://jquery.com/
# =================================
pulldown jquery -o js/vendors

# === react =========================
#   http://facebook.github.io/react
# ===================================
pulldown "http://cdnjs.cloudflare.com/ajax/libs/react/0.8.0/JSXTransformer.js" -o js/vendors
pulldown "http://cdnjs.cloudflare.com/ajax/libs/react/0.8.0/react.min.js" -o js/vendors

# https://github.com/seiffert/require-jsx
pulldown "https://raw2.github.com/seiffert/require-jsx/master/jsx.js" -o js/vendors

# === Skeleton ======================
#   http://www.getskeleton.com/
# ===================================

pulldown "https://raw2.github.com/dhg/Skeleton/master/stylesheets/base.css" -o stylesheets
pulldown "https://raw2.github.com/dhg/Skeleton/master/stylesheets/layout.css" -o stylesheets
pulldown "https://raw2.github.com/dhg/Skeleton/master/stylesheets/skeleton.css" -o stylesheets








