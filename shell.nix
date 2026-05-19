{
  pkgs ? import <nixpkgs> { },
}:
let
  # Fetch the cutting-edge unstable channel tracking branch
  unstable = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-unstable.tar.gz") { };
in
pkgs.mkShellNoCC {
  packages = [
    unstable.hugo # Uses latest unstable Hugo release
    pkgs.pnpm
    pkgs.nodejs
  ];
}
