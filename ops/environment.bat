@echo off

SET NG2_MC=%~dp0..
SET OPS=%NG2_MC%\ops
SET APPLICATIONS=C:\dvl.home\projectbeheer\applications

SET GIT_HOME=%APPLICATIONS%\git
SET NODE_HOME=%APPLICATIONS%\nodejs
SET NPM_HOME=%APPDATA%\npm

SET PATH=%GIT_HOME%\bin;%GIT_HOME%\usr\bin;%NODE_HOME%;%NPM_HOME%;%OPS%\scripts;%PATH%
