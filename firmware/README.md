# Firmware

Here you will find the compiled *.uf2 files that you can use the flash the keyboard.

QMK GitHub pull request: https://github.com/qmk/qmk_firmware/pull/22259

## Commands

qmk painter-convert-graphics -f pal256 -i animated.gif -o ./
qmk compile -kb dcpedit/midevil -km default
