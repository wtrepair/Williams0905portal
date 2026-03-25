alias p := purge
alias u := unpack
alias o := optimize

@default:
    just --list

purge:
    echo "🗑️  Purging top‑level directories (excluding justfile)…"
    fd --type d --max-depth 1 --exclude vercel.json --exclude justfile . -x rm -rf
    echo "✅ Purge complete!"

unpack zipfile:
    @just purge

    # Get the base name of the zip (without .zip)
    zip_name=$(basename "{{zipfile}}" .zip)

    echo "→ Unzipping {{zipfile}} …"
    -unzip "{{zipfile}}"

    echo "→ Moving extracted files to $(pwd) …"
    # Use wildcard to match the actual simply-static directory that gets created
    # mv bitnami/wordpress/wp-content/uploads/simply-static/temp-files/simply-static-*/* .

    # echo "→ Cleaning up nested Bitnami tree …"
    # rm -rf bitnami

    @just optimize

    echo "✓ Done!"

optimize:
    echo "→ Optimizing PNGs with oxipng …"
    oxipng -r .

    echo "→ Optimizing JPEGs with jpegoptim …"
    fd -e jpg -e jpeg -x jpegoptim --strip-all --max=90 '{}'

    echo "✓ Image optimization complete!"
