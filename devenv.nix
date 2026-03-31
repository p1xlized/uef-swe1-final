{ pkgs, lib, ... }:

{
  languages.javascript = {
    enable = true;
    npm = {
      enable = true;
      install.enable = true;
    };
  };
  services.mysql.enable = true;
    # The default is MariaDB. To use MySQL instead:
    # services.mysql.package = pkgs.mysql80;
    services.mysql.initialDatabases = [{ name = "test_database"; }];
    services.mysql.ensureUsers = [
      {
        name = "test_database";
        password = "test_database";
        ensurePermissions = { "test_database.*" = "ALL PRIVILEGES"; };
      }
    ];
}
