{
  pkgs ? import <nixpkgs> { },
}:
pkgs.mkShellNoCC {
  packages = [
    pkgs.hugo
    pkgs.pnpm
    pkgs.nodejs
  ];
}
