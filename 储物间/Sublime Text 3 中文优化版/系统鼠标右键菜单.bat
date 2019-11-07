@echo Off
:START
CLS
echo *=========================================================================*
echo *         Sublime Text安装完成后没有右键打开方式，打开文件很不方便。      *
echo * 为了方便快捷打开文件，可以通过以下A选项添加右键菜单Sublime Text打开方式 *
echo *                                                                         *
echo *            注意: 该bat文件必须和sublime_text.exe在同级目录              *
echo *                            [A]添加右键菜单                              *
echo *                            [D]删除右键菜单                              *
echo *                            [Q]退出                                      *
echo *                                                                         *
echo *                           爱前端：www.webqianduan.cn                    *
echo *=========================================================================*
Set /P Choice=　　　　　　　请选择要进行的操作 (A/D/Q) ，然后按回车：
If /I "%Choice%"=="A" Goto :ADD
If /I "%Choice%"=="D" Goto :DEL
If /I "%Choice%"=="Q" Exit

START

:ADD
CLS
set str=%cd%
echo Windows Registry Editor Version 5.00> tmp.reg
echo [HKEY_CLASSES_ROOT\*\shell]>> tmp.reg
echo [HKEY_CLASSES_ROOT\*\shell\SublimeText]>> tmp.reg
echo @="用Sublime Text 3中文优化版打开">> tmp.reg
echo "Icon"="\"%str:\=\\%\\sublime_text.exe\",0">> tmp.reg
echo [HKEY_CLASSES_ROOT\*\shell\SublimeText\Command]>> tmp.reg
echo @="\"%str:\=\\%\\sublime_text.exe\" \"%%1^\"">> tmp.reg

echo *=========================================================================*
echo *                                                                         *
echo *   正在将生成的注册信息写入注册表，请点击“是”键钮！                      *
echo *                                                                         *
echo *=========================================================================*
tmp.reg
del tmp.reg
GOTO :START

:DEL
echo Windows Registry Editor Version 5.00> tmp.reg
echo [-HKEY_CLASSES_ROOT\*\shell\SublimeText]>> tmp.reg
echo [-HKEY_CLASSES_ROOT\Directory\shell\sublime]>> tmp.reg
echo [-HKEY_CLASSES_ROOT\Directory\Background\shell\sublime]>> tmp.reg
tmp.reg
del tmp.reg
GOTO :START