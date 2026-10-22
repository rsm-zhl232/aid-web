#!/bin/sh
# Point every absolute URL on the site at a new address.
#
#   sh tools/set-domain.sh https://www.example.com/
#
# canonical, og:url, og:image, hreflang, the structured data, sitemap.xml and
# robots.txt all carry the full site address. If they are not updated when the
# site moves to its own domain, search engines keep crediting the old address.
# Afterwards: check `git diff`, commit, then resubmit sitemap.xml to Baidu
# Search Resource Platform and Google Search Console.
set -e
NEW="$1"
OLD="https://rsm-zhl232.github.io/aid-web/"
case "$NEW" in
  http*://*/) ;;
  *) echo "usage: sh tools/set-domain.sh https://www.example.com/   (with the trailing slash)"; exit 1 ;;
esac
cd "$(dirname "$0")/.."
CUR=$(sed -n 's|.*<link rel="canonical" href="\([^"]*\)".*|\1|p' index.html | head -1)
[ -n "$CUR" ] && OLD="$CUR"
for f in *.html sitemap.xml robots.txt; do
  sed -i.bak "s|$OLD|$NEW|g" "$f" && rm -f "$f.bak"
done
echo "Replaced $OLD -> $NEW"
