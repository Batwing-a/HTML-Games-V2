# ROMs folder

This folder holds the ROM index for the RetroArch launcher.

The launcher uses `roms/roms.json` to populate the ROM list. The actual ROM binaries are served from `webretro/roms/` because the embedded WebRetro port lives there.

Supported ROM extensions include:
- .nes
- .sfc / .smc
- .gba
- .gb / .gbc
- .nds
- .n64 / .z64
- .iso / .bin / .img
- .zip / .7z

To make ROMs visible in the launcher, add the file names to `roms.json`.

Example:
```json
[
  "SuperMarioWorld.sfc",
  "Contra.nes"
]
```

Then open `retroarch/index.html` in your browser and choose a game.
